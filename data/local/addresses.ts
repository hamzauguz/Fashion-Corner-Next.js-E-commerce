const meta = {
  _createdAt: "2026-01-01T00:00:00Z",
  _updatedAt: "2026-01-01T00:00:00Z",
  _rev: "local",
};

export const addresses = [
  {
    _id: "address-home",
    _type: "address" as const,
    ...meta,
    name: "Home",
    email: "demo@fashioncorner.test",
    address: "14 Mercer Street",
    city: "New York",
    state: "NY",
    zip: "10013",
    default: true,
    createdAt: "2026-01-01T00:00:00Z",
  },
  {
    _id: "address-office",
    _type: "address" as const,
    ...meta,
    name: "Office",
    email: "demo@fashioncorner.test",
    address: "220 Market Street",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    default: false,
    createdAt: "2026-01-02T00:00:00Z",
  },
];
