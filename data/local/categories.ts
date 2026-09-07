const meta = {
  _createdAt: "2026-01-01T00:00:00Z",
  _updatedAt: "2026-01-01T00:00:00Z",
  _rev: "local",
};

export const categories = [
  {
    _id: "category-women",
    _type: "category" as const,
    ...meta,
    title: "Women",
    slug: { _type: "slug" as const, current: "women" },
    description: "Dresses, tops, and essentials for women",
    range: 29,
    featured: true,
    image: {
      _type: "image" as const,
      url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    _id: "category-men",
    _type: "category" as const,
    ...meta,
    title: "Men",
    slug: { _type: "slug" as const, current: "men" },
    description: "Casual and smart styles for men",
    range: 35,
    featured: true,
    image: {
      _type: "image" as const,
      url: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    _id: "category-shoes",
    _type: "category" as const,
    ...meta,
    title: "Shoes",
    slug: { _type: "slug" as const, current: "shoes" },
    description: "Sneakers, boots, and everyday footwear",
    range: 49,
    featured: true,
    image: {
      _type: "image" as const,
      url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    _id: "category-accessories",
    _type: "category" as const,
    ...meta,
    title: "Accessories",
    slug: { _type: "slug" as const, current: "accessories" },
    description: "Bags, hats, and finishing touches",
    range: 19,
    featured: false,
    image: {
      _type: "image" as const,
      url: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    },
  },
];
