import type { SchemaTypeDefinition } from "sanity"
import { userType } from "./userType"
import { voteType } from "./voteType"
import { subredditType } from "./subredditType"
import { commentType } from "./commentType"
import { postType } from "./postType"

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [userType, postType, commentType, voteType, subredditType],
}
