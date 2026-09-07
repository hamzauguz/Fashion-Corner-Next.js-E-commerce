const meta = {
  _createdAt: "2026-01-01T00:00:00Z",
  _updatedAt: "2026-01-01T00:00:00Z",
  _rev: "local",
};

type LocalImage = { _type: "image"; _key: string; url: string };

function img(url: string, key: string): LocalImage {
  return { _type: "image", _key: key, url };
}

export const products = [
  {
    _id: "product-linen-blend-shirt",
    _type: "product" as const,
    ...meta,
    name: "Linen Blend Shirt",
    slug: { _type: "slug" as const, current: "linen-blend-shirt" },
    description: "Breathable linen-cotton shirt for warm days.",
    price: 68,
    discount: 10,
    stock: 42,
    status: "new" as const,
    variant: "tops",
    isFeatured: true,
    categoryIds: ["category-men", "category-women"],
    brandId: "brand-aura",
    images: [
      img(
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
        "img-1"
      ),
      img(
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
        "img-2"
      ),
    ],
  },
  {
    _id: "product-wide-leg-trousers",
    _type: "product" as const,
    ...meta,
    name: "Wide Leg Trousers",
    slug: { _type: "slug" as const, current: "wide-leg-trousers" },
    description: "Relaxed tailored trousers with a fluid drape.",
    price: 89,
    discount: 15,
    stock: 30,
    status: "hot" as const,
    variant: "bottoms",
    isFeatured: true,
    categoryIds: ["category-women"],
    brandId: "brand-nordic-thread",
    images: [
      img(
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
        "img-1"
      ),
    ],
  },
  {
    _id: "product-silk-midi-dress",
    _type: "product" as const,
    ...meta,
    name: "Silk Midi Dress",
    slug: { _type: "slug" as const, current: "silk-midi-dress" },
    description: "Soft midi dress with a flattering waistline.",
    price: 120,
    discount: 20,
    stock: 18,
    status: "sale" as const,
    variant: "dresses",
    isFeatured: true,
    categoryIds: ["category-women"],
    brandId: "brand-lumen",
    images: [
      img(
        "https://images.unsplash.com/photo-1515372039744-b8f0229ef700?auto=format&fit=crop&w=800&q=80",
        "img-1"
      ),
    ],
  },
  {
    _id: "product-wool-overcoat",
    _type: "product" as const,
    ...meta,
    name: "Wool Overcoat",
    slug: { _type: "slug" as const, current: "wool-overcoat" },
    description: "Structured wool coat for cooler evenings.",
    price: 189,
    discount: 0,
    stock: 12,
    status: "new" as const,
    variant: "outerwear",
    isFeatured: true,
    categoryIds: ["category-men", "category-women"],
    brandId: "brand-nordic-thread",
    images: [
      img(
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80",
        "img-1"
      ),
    ],
  },
  {
    _id: "product-leather-sneakers",
    _type: "product" as const,
    ...meta,
    name: "Leather Sneakers",
    slug: { _type: "slug" as const, current: "leather-sneakers" },
    description: "Clean low-top sneakers in soft leather.",
    price: 110,
    discount: 5,
    stock: 55,
    status: "hot" as const,
    variant: "shoes",
    isFeatured: true,
    categoryIds: ["category-shoes", "category-men", "category-women"],
    brandId: "brand-aura",
    images: [
      img(
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80",
        "img-1"
      ),
    ],
  },
  {
    _id: "product-canvas-tote",
    _type: "product" as const,
    ...meta,
    name: "Canvas Tote Bag",
    slug: { _type: "slug" as const, current: "canvas-tote-bag" },
    description: "Everyday tote with enough room for essentials.",
    price: 45,
    discount: 0,
    stock: 70,
    status: "new" as const,
    variant: "accessories",
    isFeatured: false,
    categoryIds: ["category-accessories", "category-women"],
    brandId: "brand-lumen",
    images: [
      img(
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
        "img-1"
      ),
    ],
  },
  {
    _id: "product-denim-jacket",
    _type: "product" as const,
    ...meta,
    name: "Classic Denim Jacket",
    slug: { _type: "slug" as const, current: "classic-denim-jacket" },
    description: "Washed denim jacket with a timeless fit.",
    price: 95,
    discount: 12,
    stock: 28,
    status: "sale" as const,
    variant: "outerwear",
    isFeatured: true,
    categoryIds: ["category-men", "category-women"],
    brandId: "brand-aura",
    images: [
      img(
        "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
        "img-1"
      ),
    ],
  },
  {
    _id: "product-ribbed-knit-top",
    _type: "product" as const,
    ...meta,
    name: "Ribbed Knit Top",
    slug: { _type: "slug" as const, current: "ribbed-knit-top" },
    description: "Soft stretch knit for layering or solo wear.",
    price: 39,
    discount: 0,
    stock: 60,
    status: "new" as const,
    variant: "tops",
    isFeatured: false,
    categoryIds: ["category-women"],
    brandId: "brand-lumen",
    images: [
      img(
        "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=800&q=80",
        "img-1"
      ),
    ],
  },
];
