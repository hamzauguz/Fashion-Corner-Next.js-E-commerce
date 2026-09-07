import { NextResponse } from "next/server";

/**
 * Local MVP: Stripe webhook acknowledges events without writing to Sanity.
 */
export async function POST() {
  console.log("Stripe webhook received (local MVP — order persistence skipped)");
  return NextResponse.json({ received: true });
}
