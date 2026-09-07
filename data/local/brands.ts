const meta = {
  _createdAt: "2026-01-01T00:00:00Z",
  _updatedAt: "2026-01-01T00:00:00Z",
  _rev: "local",
};

function cover(title: string) {
  const params = new URLSearchParams({
    title,
    variant: "brand",
    label: "brand",
  });
  return {
    _type: "image" as const,
    url: `/api/product-image?${params.toString()}`,
  };
}

export const brands = [
  {
    _id: "brand-aura",
    _type: "brand" as const,
    ...meta,
    title: "Aura",
    slug: { _type: "slug" as const, current: "aura" },
    description: "Minimal everyday fashion",
    image: cover("Aura"),
  },
  {
    _id: "brand-nordic-thread",
    _type: "brand" as const,
    ...meta,
    title: "Nordic Thread",
    slug: { _type: "slug" as const, current: "nordic-thread" },
    description: "Clean Scandinavian-inspired clothing",
    image: cover("Nordic Thread"),
  },
  {
    _id: "brand-lumen",
    _type: "brand" as const,
    ...meta,
    title: "Lumen",
    slug: { _type: "slug" as const, current: "lumen" },
    description: "Streetwear with soft luxury details",
    image: cover("Lumen"),
  },
];
