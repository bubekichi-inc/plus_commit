import type { Metadata } from "next";
import { headers } from 'next/headers';
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";

const inter = Inter({ 
    subsets: ["latin"], 
    variable: "--font-inter",
    display: "swap",
    fallback: ['system-ui', 'arial'],
});

const baseMetadata: Metadata = {
    title: "株式会社PlusCommit（プラスコミット）| Web・DXコンサルティング",
    description: "株式会社PlusCommit(プラスコミット)は、コーディング代行、DXコンサルティング、Web制作・開発を通じて、企業のデジタル変革を支援します。最新のテクノロジーと確かな技術力で、ビジネス課題を解決します。",
    robots: {
        index: false,
        follow: false,
    },
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

export async function generateMetadata(): Promise<Metadata> {
    const h = await headers()
    const forwardedHost = h.get('x-forwarded-host') || h.get('host') || ''
    const headerProto = h.get('x-forwarded-proto') || h.get('x-forwarded-protocol') || ''

    const host = forwardedHost || 'localhost:3000'
    const proto = headerProto || (host.includes('localhost') ? 'http' : 'https')
    const base = host.startsWith('http') ? host : `${proto}://${host}`

    return {
        ...baseMetadata,
        metadataBase: new URL(base),
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={`${inter.variable} font-noto-sans-jp bg-white text-zinc-900 antialiased`}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
