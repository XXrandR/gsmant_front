import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/context/SessionContext";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "GSMANT",
	description: "Plataforma central para gestión de flota, neumáticos y mantenimiento",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100 text-slate-800 h-screen overflow-hidden`}
			>
				<SessionProvider>
					{children}
				</SessionProvider>
			</body>
		</html>
	);
}
