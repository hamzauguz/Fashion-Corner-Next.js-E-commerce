import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvLocal() {
  const path = resolve(process.cwd(), ".env.local");
  const raw = readFileSync(path, "utf8");
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-20";

if (!projectId || !dataset || !token) {
  console.error("Missing Sanity env vars (project id, dataset, or SANITY_API_TOKEN).");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const categories = [
  {
    _id: "category-women",
    title: "Women",
    slug: "women",
    description: "Dresses, tops, and essentials for women",
    range: 29,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "category-men",
    title: "Men",
    slug: "men",
    description: "Casual and smart styles for men",
    range: 35,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "category-shoes",
    title: "Shoes",
    slug: "shoes",
    description: "Sneakers, boots, and everyday footwear",
    range: 49,
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "category-accessories",
    title: "Accessories",
    slug: "accessories",
    description: "Bags, hats, and finishing touches",
    range: 19,
    featured: false,
    imageUrl:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
  },
];

const brands = [
  {
    _id: "brand-aura",
    title: "Aura",
    slug: "aura",
    description: "Minimal everyday fashion",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "brand-nordic-thread",
    title: "Nordic Thread",
    slug: "nordic-thread",
    description: "Clean Scandinavian-inspired clothing",
    imageUrl:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "brand-lumen",
    title: "Lumen",
    slug: "lumen",
    description: "Streetwear with soft luxury details",
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
  },
];

const products = [
  {
    _id: "product-linen-blend-shirt",
    name: "Linen Blend Shirt",
    slug: "linen-blend-shirt",
    description: "Breathable linen-cotton shirt for warm days.",
    price: 68,
    discount: 10,
    stock: 42,
    status: "new",
    variant: "tops",
    isFeatured: true,
    categoryIds: ["category-men", "category-women"],
    brandId: "brand-aura",
    imageUrls: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    _id: "product-wide-leg-trousers",
    name: "Wide Leg Trousers",
    slug: "wide-leg-trousers",
    description: "Relaxed tailored trousers with a fluid drape.",
    price: 89,
    discount: 15,
    stock: 30,
    status: "hot",
    variant: "bottoms",
    isFeatured: true,
    categoryIds: ["category-women"],
    brandId: "brand-nordic-thread",
    imageUrls: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    _id: "product-silk-midi-dress",
    name: "Silk Midi Dress",
    slug: "silk-midi-dress",
    description: "Soft midi dress with a flattering waistline.",
    price: 120,
    discount: 20,
    stock: 18,
    status: "sale",
    variant: "dresses",
    isFeatured: true,
    categoryIds: ["category-women"],
    brandId: "brand-lumen",
    imageUrls: [
      "https://images.unsplash.com/photo-1515372039744-b8f0229ef700?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    _id: "product-wool-overcoat",
    name: "Wool Overcoat",
    slug: "wool-overcoat",
    description: "Structured wool coat for cooler evenings.",
    price: 189,
    discount: 0,
    stock: 12,
    status: "new",
    variant: "outerwear",
    isFeatured: true,
    categoryIds: ["category-men", "category-women"],
    brandId: "brand-nordic-thread",
    imageUrls: [
      "https://images.unsplash.com/photo-1548126032-079a0fb00992?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    _id: "product-leather-sneakers",
    name: "Leather Sneakers",
    slug: "leather-sneakers",
    description: "Clean low-top sneakers in soft leather.",
    price: 110,
    discount: 5,
    stock: 55,
    status: "hot",
    variant: "shoes",
    isFeatured: true,
    categoryIds: ["category-shoes", "category-men", "category-women"],
    brandId: "brand-aura",
    imageUrls: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    _id: "product-canvas-tote",
    name: "Canvas Tote Bag",
    slug: "canvas-tote-bag",
    description: "Everyday tote with enough room for essentials.",
    price: 45,
    discount: 0,
    stock: 70,
    status: "new",
    variant: "accessories",
    isFeatured: false,
    categoryIds: ["category-accessories", "category-women"],
    brandId: "brand-lumen",
    imageUrls: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    _id: "product-denim-jacket",
    name: "Classic Denim Jacket",
    slug: "classic-denim-jacket",
    description: "Washed denim jacket with a timeless fit.",
    price: 95,
    discount: 12,
    stock: 28,
    status: "sale",
    variant: "outerwear",
    isFeatured: true,
    categoryIds: ["category-men", "category-women"],
    brandId: "brand-aura",
    imageUrls: [
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    _id: "product-ribbed-knit-top",
    name: "Ribbed Knit Top",
    slug: "ribbed-knit-top",
    description: "Soft stretch knit for layering or solo wear.",
    price: 39,
    discount: 0,
    stock: 60,
    status: "new",
    variant: "tops",
    isFeatured: false,
    categoryIds: ["category-women"],
    brandId: "brand-lumen",
    imageUrls: [
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80";

async function uploadImage(url, filename) {
  let res = await fetch(url);
  if (!res.ok) {
    console.warn(`Image failed (${res.status}), using fallback: ${url}`);
    res = await fetch(FALLBACK_IMAGE);
  }
  if (!res.ok) throw new Error(`Failed to fetch image: ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  return client.assets.upload("image", buffer, { filename });
}

async function seed() {
  console.log("Seeding fashion data to Sanity...");

  for (const category of categories) {
    const asset = await uploadImage(category.imageUrl, `${category.slug}.jpg`);
    await client.createOrReplace({
      _id: category._id,
      _type: "category",
      title: category.title,
      slug: { _type: "slug", current: category.slug },
      description: category.description,
      range: category.range,
      featured: category.featured,
      image: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
      },
    });
    console.log(`✓ Category: ${category.title}`);
  }

  for (const brand of brands) {
    const asset = await uploadImage(brand.imageUrl, `${brand.slug}.jpg`);
    await client.createOrReplace({
      _id: brand._id,
      _type: "brand",
      title: brand.title,
      slug: { _type: "slug", current: brand.slug },
      description: brand.description,
      image: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
      },
    });
    console.log(`✓ Brand: ${brand.title}`);
  }

  for (const product of products) {
    const images = [];
    for (let i = 0; i < product.imageUrls.length; i++) {
      const asset = await uploadImage(
        product.imageUrls[i],
        `${product.slug}-${i + 1}.jpg`
      );
      images.push({
        _type: "image",
        _key: `${product.slug}-img-${i + 1}`,
        asset: { _type: "reference", _ref: asset._id },
      });
    }

    await client.createOrReplace({
      _id: product._id,
      _type: "product",
      name: product.name,
      slug: { _type: "slug", current: product.slug },
      description: product.description,
      price: product.price,
      discount: product.discount,
      stock: product.stock,
      status: product.status,
      variant: product.variant,
      isFeatured: product.isFeatured,
      images,
      categories: product.categoryIds.map((id, index) => ({
        _type: "reference",
        _key: `${product.slug}-cat-${index + 1}`,
        _ref: id,
      })),
      brand: { _type: "reference", _ref: product.brandId },
    });
    console.log(`✓ Product: ${product.name}`);
  }

  console.log("\nDone. 4 categories, 3 brands, 8 products published.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
