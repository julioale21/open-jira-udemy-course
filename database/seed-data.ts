interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: String;
  status: String;
  createdAt: Number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pending: lorem Exercitation eu irure non aute qui ut.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "Pending: Nulla eu dolor eu elit commodo nisi.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "In Progress: Est commodo proident labore ea consectetur sint duis proident.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Finished: Laboris excepteur laborum reprehenderit magna cupidatat labore dolor.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
