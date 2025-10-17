export const destinationsKeys = {
  all: ["destinations"] as const,
  search: (query: string) => [...destinationsKeys.all, "search", query] as const,
  detail: (id: number) => [...destinationsKeys.all, "detail", id] as const,
  nearby: (id: number) => [...destinationsKeys.all, "detail", "nearby", id] as const,
};
