import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
    title: "株式会社PLUS-COMMIT（プラスコミット）| コーディング代行・DXコンサルティング",
    description: "株式会社PLUS-COMMITは、コーディング代行、DXコンサルティング、Web制作・開発を通じて、企業のデジタル変革を支援します。最新のテクノロジーと確かな技術力で、ビジネス課題を解決します。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={`${inter.variable} ${notoSansJP.variable} font-sans bg-white text-zinc-900 antialiased`}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
