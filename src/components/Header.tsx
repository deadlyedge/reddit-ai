"use client"

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { ChevronLeftIcon, MenuIcon } from "lucide-react"
import Image from "next/image"

import ReddishLogo from "@/images/Reddish Full.png"
import ReddishLogoOnly from "@/images/Reddish Logo Only.png"

import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
// import CreatePost from "../post/CreatePost";

export const Header = () => {
	const { toggleSidebar, open, isMobile } = useSidebar()

	return (
		<header className="flex items-center justify-between p-4 border-b border-gray-200">
			{/* Left Side */}
			<div className="h-10 flex items-center">
				{open && !isMobile ? (
					<ChevronLeftIcon className="w-6 h-6" onClick={toggleSidebar} />
				) : (
					<div className="flex items-center gap-2">
						<MenuIcon className="w-6 h-6" onClick={toggleSidebar} />
						<Image
							src={ReddishLogo}
							alt="logo"
							width={150}
							height={150}
							className="hidden md:block"
						/>
						<Image
							src={ReddishLogoOnly}
							alt="logo"
							width={40}
							height={40}
							className="block md:hidden"
						/>
					</div>
				)}
			</div>

			{/* Right Side */}
			<div className="flex items-center gap-2">
				{/* <CreatePost /> */}

				<SignedIn>
					<UserButton />
				</SignedIn>

				<SignedOut>
					<Button asChild variant="outline">
						<SignInButton mode="modal" />
					</Button>
				</SignedOut>
			</div>
		</header>
	)
}
