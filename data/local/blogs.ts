const meta = {
  _createdAt: "2026-01-01T00:00:00Z",
  _updatedAt: "2026-01-01T00:00:00Z",
  _rev: "local",
};

function cover(title: string) {
  const params = new URLSearchParams({
    title,
    variant: "blog",
    label: "journal",
  });
  return {
    _type: "image" as const,
    url: `/api/product-image?${params.toString()}`,
  };
}

function block(text: string, key: string) {
  return {
    _type: "block" as const,
    _key: key,
    style: "normal" as const,
    markDefs: [],
    children: [
      {
        _type: "span" as const,
        _key: `${key}-span`,
        text,
        marks: [] as string[],
      },
    ],
  };
}

export const blogCategories = [
  {
    _id: "blogcat-style",
    _type: "blogcategory" as const,
    ...meta,
    title: "Style Tips",
    slug: { _type: "slug" as const, current: "style-tips" },
    description: "Everyday fashion advice",
  },
  {
    _id: "blogcat-trends",
    _type: "blogcategory" as const,
    ...meta,
    title: "Trends",
    slug: { _type: "slug" as const, current: "trends" },
    description: "Seasonal trend notes",
  },
];

export const blogs = [
  {
    _id: "blog-capsule-wardrobe",
    _type: "blog" as const,
    ...meta,
    title: "Build a Capsule Wardrobe in One Weekend",
    slug: { _type: "slug" as const, current: "capsule-wardrobe" },
    publishedAt: "2026-02-10T10:00:00Z",
    isLatest: true,
    mainImage: cover("Capsule Wardrobe"),
    author: {
      name: "Maya Chen",
      image: cover("Maya Chen"),
    },
    blogcategories: [{ title: "Style Tips" }],
    body: [
      block(
        "A capsule wardrobe keeps mornings simple: fewer pieces, better fits, and outfits that always work together.",
        "b1"
      ),
      block(
        "Start with neutrals, add two statement items, and edit anything you have not worn in the last season.",
        "b2"
      ),
    ],
  },
  {
    _id: "blog-layering-guide",
    _type: "blog" as const,
    ...meta,
    title: "Layering Guide for Transitional Weather",
    slug: { _type: "slug" as const, current: "layering-guide" },
    publishedAt: "2026-02-18T10:00:00Z",
    isLatest: true,
    mainImage: cover("Layering Guide"),
    author: {
      name: "Jordan Hale",
      image: cover("Jordan Hale"),
    },
    blogcategories: [{ title: "Trends" }],
    body: [
      block(
        "Light knits under structured outerwear keep you warm without bulk.",
        "b1"
      ),
      block(
        "Pair a ribbed top with a denim jacket, then finish with clean sneakers for an easy city look.",
        "b2"
      ),
    ],
  },
  {
    _id: "blog-shoe-care",
    _type: "blog" as const,
    ...meta,
    title: "How to Care for Leather Sneakers",
    slug: { _type: "slug" as const, current: "shoe-care" },
    publishedAt: "2026-03-01T10:00:00Z",
    isLatest: true,
    mainImage: cover("Shoe Care"),
    author: {
      name: "Maya Chen",
      image: cover("Maya Chen"),
    },
    blogcategories: [{ title: "Style Tips" }],
    body: [
      block(
        "Wipe after wear, condition monthly, and rotate pairs so the leather keeps its shape.",
        "b1"
      ),
    ],
  },
];
