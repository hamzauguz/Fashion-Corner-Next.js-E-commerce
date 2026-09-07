const meta = {
  _createdAt: "2026-01-01T00:00:00Z",
  _updatedAt: "2026-01-01T00:00:00Z",
  _rev: "local",
};

function cover(title: string, variant: string) {
  const params = new URLSearchParams({ title, variant, label: variant });
  return {
    _type: "image" as const,
    url: `/api/product-image?${params.toString()}`,
  };
}

export const categories = [
  {
    _id: "category-women",
    _type: "category" as const,
    ...meta,
    title: "Women",
    slug: { _type: "slug" as const, current: "women" },
    description: "Dresses, tops, and essentials for women",
    range: 28,
    featured: true,
    image: cover("Women", "category"),
  },
  {
    _id: "category-men",
    _type: "category" as const,
    ...meta,
    title: "Men",
    slug: { _type: "slug" as const, current: "men" },
    description: "Casual and smart styles for men",
    range: 32,
    featured: true,
    image: cover("Men", "category"),
  },
  {
    _id: "category-shoes",
    _type: "category" as const,
    ...meta,
    title: "Shoes",
    slug: { _type: "slug" as const, current: "shoes" },
    description: "Sneakers, boots, and everyday footwear",
    range: 55,
    featured: true,
    image: cover("Shoes", "shoes"),
  },
  {
    _id: "category-accessories",
    _type: "category" as const,
    ...meta,
    title: "Accessories",
    slug: { _type: "slug" as const, current: "accessories" },
    description: "Bags, hats, and finishing touches",
    range: 28,
    featured: false,
    image: cover("Accessories", "accessories"),
  },
];
