export const destinationsKeys = {
  all: ["destinations"] as const,
  detail: (id: number) => [...destinationsKeys.all, "detail", id] as const,
};
