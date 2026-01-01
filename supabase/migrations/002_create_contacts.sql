-- お問い合わせテーブルの作成
CREATE TABLE IF NOT EXISTS contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service TEXT NOT NULL,
    budget TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- インデックスの作成
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);

-- RLS (Row Level Security) を有効化
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- INSERTポリシー（誰でもお問い合わせを送信可能）
CREATE POLICY "Anyone can insert contacts" ON contacts
    FOR INSERT
    WITH CHECK (true);

-- SELECTポリシー（認証されたユーザーのみ閲覧可能 - 管理者用）
CREATE POLICY "Authenticated users can view contacts" ON contacts
    FOR SELECT
    USING (auth.role() = 'authenticated');

-- UPDATEポリシー（認証されたユーザーのみ更新可能 - 管理者用）
CREATE POLICY "Authenticated users can update contacts" ON contacts
    FOR UPDATE
    USING (auth.role() = 'authenticated');

-- updated_atを自動更新するトリガー
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contacts_updated_at
    BEFORE UPDATE ON contacts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

