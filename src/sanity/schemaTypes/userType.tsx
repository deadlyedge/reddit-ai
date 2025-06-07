import { UserIcon } from "lucide-react"
import Image from "next/image"
import { defineField, defineType } from "sanity"

export const userType = defineType({
	name: "user",
	title: "User",
	icon: UserIcon,
	type: "document",
	fields: [
		defineField({
			name: "username",
			title: "Username",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
			validation: (rule) =>
				rule.required().email().error("Invalid email address"),
		}),
		defineField({
			name: "imageUrl",
			title: "Image URL",
			type: "url",
		}),
		defineField({
			name: "joinedAt",
			title: "Joined At",
			description: "The date and time the user joined the platform",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "isReported",
			title: "Is Reported",
			type: "boolean",
			initialValue: false,
		}),
	],
	preview: {
		select: {
			title: "username",
			subtitle: "email",
			media: "imageUrl",
		},
		prepare({ title, subtitle, media }) {
			return {
				title,
				subtitle,
				media: media ? (
					<Image src={media} alt={title} width={40} height={40} />
				) : (
					<UserIcon />
				),
			}
		},
	},
})
