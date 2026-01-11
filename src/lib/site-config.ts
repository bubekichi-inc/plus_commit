/**
 * サイト設定
 * 環境変数から各種URLを取得し、一元管理する
 */

export const siteConfig = {
    // メインサイトURL
    mainUrl: process.env.NEXT_PUBLIC_MAIN_URL || '/',
    
    // 採用サイトURL
    recruitUrl: process.env.NEXT_PUBLIC_RECRUIT_URL || '/recruit/',
    
    // サイト名
    siteName: 'プラスコミット',
    
    // 会社名
    companyName: '株式会社プラスコミット',
}

/**
 * 採用サイトのURLを取得
 * @param path - パス（例: '#jobs', '/entry'）
 * @returns 完全なURL
 */
export function getRecruitUrl(path: string = ''): string {
    const baseUrl = siteConfig.recruitUrl
    
    // 相対パスの場合はそのまま結合
    if (baseUrl.startsWith('/')) {
        return `${baseUrl}${path}`
    }
    
    // 絶対URLの場合
    // baseUrlの末尾スラッシュを除去してからパスを結合
    const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
    return `${cleanBaseUrl}${path}`
}




