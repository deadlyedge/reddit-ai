/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type Vote = {
  _id: string;
  _type: "vote";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  user?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "user";
  };
  voteType?: "upvote" | "downvote";
  post?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "post";
  };
  comment?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "comment";
  };
  createdAt?: string;
};

export type Comment = {
  _id: string;
  _type: "comment";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  content?: string;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "user";
  };
  post?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "post";
  };
  parentComment?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "comment";
  };
  isReported?: boolean;
  createdAt?: string;
  isDeleted?: boolean;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  originalTitle?: string;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "user";
  };
  subreddit?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "subreddit";
  };
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  isReported?: boolean;
  publishedAt?: string;
  isDeleted?: boolean;
};

export type Subreddit = {
  _id: string;
  _type: "subreddit";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  moderator?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "user";
  };
  createdAt?: string;
};

export type User = {
  _id: string;
  _type: "user";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  username?: string;
  email?: string;
  imageUrl?: string;
  joinedAt?: string;
  isReported?: boolean;
};

export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type AllSanitySchemaTypes = Vote | Comment | Post | Subreddit | User | SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | Slug | SanityAssetSourceData;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/subreddit/createSubreddit.ts
// Variable: checkExistingQuery
// Query: *[_type == "subreddit" && title == $name][0] {          _id        }
export type CheckExistingQueryResult = {
  _id: string;
} | null;
// Variable: checkSlugQuery
// Query: *[_type == "subreddit" && slug.current == $slug][0] {            _id          }
export type CheckSlugQueryResult = {
  _id: string;
} | null;

// Source: ./src/sanity/lib/subreddit/getPostsForSubreddit.ts
// Variable: getPostsForSubredditQuery
// Query: *[_type == "post" && subreddit._ref == $id] {        ...,        "slug": slug.current,        "author": author->,        "subreddit": subreddit->,        "category": category->,        "upvotes": count(*[_type == "vote" && post._ref == ^._id && voteType == "upvote"]),        "downvotes": count(*[_type == "vote" && post._ref == ^._id && voteType == "downvote"]),        "netScore": count(*[_type == "vote" && post._ref == ^._id && voteType == "upvote"]) - count(*[_type == "vote" && post._ref == ^._id && voteType == "downvote"]),        "commentCount": count(*[_type == "comment" && post._ref == ^._id])      } | order(publishedAt desc)
export type GetPostsForSubredditQueryResult = Array<{
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  originalTitle?: string;
  author: {
    _id: string;
    _type: "user";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    username?: string;
    email?: string;
    imageUrl?: string;
    joinedAt?: string;
    isReported?: boolean;
  } | null;
  subreddit: {
    _id: string;
    _type: "subreddit";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    description?: string;
    slug?: Slug;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
    moderator?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "user";
    };
    createdAt?: string;
  } | null;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  isReported?: boolean;
  publishedAt?: string;
  isDeleted?: boolean;
  slug: null;
  category: null;
  upvotes: number;
  downvotes: number;
  netScore: number;
  commentCount: number;
}>;

// Source: ./src/sanity/lib/subreddit/getSubredditBySlug.ts
// Variable: getSubredditBySlugQuery
// Query: *[_type == "subreddit" && slug.current == $slug][0] {      ...,      "slug": slug.current,      "moderator": moderator->,    }
export type GetSubredditBySlugQueryResult = {
  _id: string;
  _type: "subreddit";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  slug: string | null;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  moderator: {
    _id: string;
    _type: "user";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    username?: string;
    email?: string;
    imageUrl?: string;
    joinedAt?: string;
    isReported?: boolean;
  } | null;
  createdAt?: string;
} | null;

// Source: ./src/sanity/lib/subreddit/getSubreddits.ts
// Variable: getSubredditsQuery
// Query: *[_type == "subreddit"] {        ...,        "slug": slug.current,        "moderator": moderator->,      } | order(createdAt desc)
export type GetSubredditsQueryResult = Array<{
  _id: string;
  _type: "subreddit";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  slug: string | null;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  moderator: {
    _id: string;
    _type: "user";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    username?: string;
    email?: string;
    imageUrl?: string;
    joinedAt?: string;
    isReported?: boolean;
  } | null;
  createdAt?: string;
}>;

// Source: ./src/sanity/lib/subreddit/searchSubreddits.ts
// Variable: searchSubredditsQuery
// Query: *[_type == "subreddit" && title match $searchTerm + "*"] {    _id,    title,    "slug": slug.current,    description,    image,    "moderator": moderator->,    createdAt  } | order(createdAt desc)
export type SearchSubredditsQueryResult = Array<{
  _id: string;
  title: string | null;
  slug: string | null;
  description: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  moderator: {
    _id: string;
    _type: "user";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    username?: string;
    email?: string;
    imageUrl?: string;
    joinedAt?: string;
    isReported?: boolean;
  } | null;
  createdAt: string | null;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n        *[_type == \"subreddit\" && title == $name][0] {\n          _id\n        }\n      ": CheckExistingQueryResult;
    "\n          *[_type == \"subreddit\" && slug.current == $slug][0] {\n            _id\n          }\n        ": CheckSlugQueryResult;
    "\n      *[_type == \"post\" && subreddit._ref == $id] {\n        ...,\n        \"slug\": slug.current,\n        \"author\": author->,\n        \"subreddit\": subreddit->,\n        \"category\": category->,\n        \"upvotes\": count(*[_type == \"vote\" && post._ref == ^._id && voteType == \"upvote\"]),\n        \"downvotes\": count(*[_type == \"vote\" && post._ref == ^._id && voteType == \"downvote\"]),\n        \"netScore\": count(*[_type == \"vote\" && post._ref == ^._id && voteType == \"upvote\"]) - count(*[_type == \"vote\" && post._ref == ^._id && voteType == \"downvote\"]),\n        \"commentCount\": count(*[_type == \"comment\" && post._ref == ^._id])\n      } | order(publishedAt desc) \n    ": GetPostsForSubredditQueryResult;
    "*[_type == \"subreddit\" && slug.current == $slug][0] {\n      ...,\n      \"slug\": slug.current,\n      \"moderator\": moderator->,\n    }": GetSubredditBySlugQueryResult;
    "*[_type == \"subreddit\"] {\n        ...,\n        \"slug\": slug.current,\n        \"moderator\": moderator->,\n      } | order(createdAt desc)": GetSubredditsQueryResult;
    "*[_type == \"subreddit\" && title match $searchTerm + \"*\"] {\n    _id,\n    title,\n    \"slug\": slug.current,\n    description,\n    image,\n    \"moderator\": moderator->,\n    createdAt\n  } | order(createdAt desc)": SearchSubredditsQueryResult;
  }
}
