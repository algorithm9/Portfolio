import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'AI 项目作品集',
    description: '一个由 Next.js 和 Tailwind CSS 构建的 AI 作品集',
};

export default function RootLayout({ children }) {
    return (
        <html lang="zh-CN">
        <body className={`${inter.className} bg-gray-900`}>{children}</body>
        </html>
    );
}