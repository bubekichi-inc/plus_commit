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
    title: "株式会社PlusCommit（プラスコミット）| Web・DXコンサルティング",
    description: "株式会社PlusCommit(プラスコミット)は、コーディング代行、DXコンサルティング、Web制作・開発を通じて、企業のデジタル変革を支援します。最新のテクノロジーと確かな技術力で、ビジネス課題を解決します。",
    openGraph: {
        title: "株式会社PlusCommit（プラスコミット）| Web・DXコンサルティング",
        description: "株式会社PlusCommit(プラスコミット)は、コーディング代行、DXコンサルティング、Web制作・開発を通じて、企業のデジタル変革を支援します。最新のテクノロジーと確かな技術力で、ビジネス課題を解決します。",
        url: "https://plus-commit.com",
        siteName: "株式会社PlusCommit",
        images: [
            {
                url: "/general/ogp.png",
                width: 1200,
                height: 630,
                alt: "株式会社PlusCommit",
            },
        ],
        locale: "ja_JP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "株式会社PlusCommit（プラスコミット）| Web・DXコンサルティング",
        description: "株式会社PlusCommit(プラスコミット)は、コーディング代行、DXコンサルティング、Web制作・開発を通じて、企業のデジタル変革を支援します。最新のテクノロジーと確かな技術力で、ビジネス課題を解決します。",
        images: ["/general/ogp.png"],
    },
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
