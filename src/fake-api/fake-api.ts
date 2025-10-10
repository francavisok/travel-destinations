import { TDestination } from "@/types/destination";
import data from "./data/destinations.json";

export const searchDestinations = async (
  query: string,
): Promise<TDestination[]> => {
  console.log("searchDestinations called with:", query);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (query.toLowerCase() === "fail") return reject(new Error("API Error"));
      const results = data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase()),
      );
      resolve(results);
    }, 500);
  });
};

export const getDestinationById = async (id: number): Promise<TDestination> => {
  console.log("getDestinationById called with:", id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dest = data.find((d) => d.id === id);
      if (!dest) return reject(new Error("Destination not found"));
      resolve(dest);
    }, 500);
  });
};
