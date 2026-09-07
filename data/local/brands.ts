const meta = {
  _createdAt: "2026-01-01T00:00:00Z",
  _updatedAt: "2026-01-01T00:00:00Z",
  _rev: "local",
};

export const brands = [
  {
    _id: "brand-aura",
    _type: "brand" as const,
    ...meta,
    title: "Aura",
    slug: { _type: "slug" as const, current: "aura" },
    description: "Minimal everyday fashion",
    image: {
      _type: "image" as const,
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    _id: "brand-nordic-thread",
    _type: "brand" as const,
    ...meta,
    title: "Nordic Thread",
    slug: { _type: "slug" as const, current: "nordic-thread" },
    description: "Clean Scandinavian-inspired clothing",
    image: {
      _type: "image" as const,
      url: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    _id: "brand-lumen",
    _type: "brand" as const,
    ...meta,
    title: "Lumen",
    slug: { _type: "slug" as const, current: "lumen" },
    description: "Streetwear with soft luxury details",
    image: {
      _type: "image" as const,
      url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
    },
  },
];
