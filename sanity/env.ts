export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-20";

/** Soft defaults so the app boots without Sanity credentials (local MVP). */
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "local";
