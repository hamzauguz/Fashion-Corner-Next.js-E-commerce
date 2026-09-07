import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";

const publishableKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  process.env.CLERK_PUBLISHABLE_KEY ||
  "";
const secretKey = process.env.CLERK_SECRET_KEY || "";

const hasClerk = Boolean(publishableKey && secretKey);

/**
 * Pass keys explicitly so Vercel can use CLERK_PUBLISHABLE_KEY
 * without NEXT_PUBLIC_ (Clerk defaults only read NEXT_PUBLIC_).
 */
const withClerk = hasClerk
  ? clerkMiddleware({
      publishableKey,
      secretKey,
    })
  : null;

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent
) {
  if (!withClerk) {
    return NextResponse.next();
  }

  try {
    return await withClerk(request, event);
  } catch (error) {
    console.error("Clerk middleware failed, continuing without auth gate:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
