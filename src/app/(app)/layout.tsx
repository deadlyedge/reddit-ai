import type { Metadata } from "next"
import { Noto_Serif } from "next/font/google"

import { ClerkProvider } from "@clerk/nextjs"

import { AppSidebar } from "@/components/AppSidebar"
import { Header } from "@/components/Header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import "../globals.css"

const notoSerif = Noto_Serif({
	subsets: ["latin"],
	variable: "--font-noto-serif",
	weight: ["200", "500", "800"],
})

export const metadata: Metadata = {
	title: "Reddit Clone",
	description:
		"Community for sharing and discussing your interests and assisted by AI",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${notoSerif.className} antialiased`}>
					<SidebarProvider>
						<AppSidebar />

						<SidebarInset>
							<Header />

							<div className="flex flex-col">{children}</div>
						</SidebarInset>
					</SidebarProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
