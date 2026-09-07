import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY;

const stripe = stripeSecret
  ? new Stripe(stripeSecret, {
      apiVersion: "2025-03-31.basil",
    })
  : (null as unknown as Stripe);

export default stripe;
