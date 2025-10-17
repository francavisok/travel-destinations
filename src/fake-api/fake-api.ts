import { TDestination } from "@/types/destination";
import data from "./data/destinations.json";

const LAT_LNG_EXISTS = (d: any): d is TDestination =>
  typeof d.latitude === "number" && typeof d.longitude === "number";

function haversineDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const SIMULATED_DELAY = 500;

export const searchDestinations = async (
  query: string,
): Promise<TDestination[]> => {
  console.log("searchDestinations called with:", query);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (query.toLowerCase() === "fail") return reject(new Error("Ups! Something went wrong"));
      const results = data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase()),
      );

      if (results.length === 0)
        return reject(new Error("Destination not found"));

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

export const getNearbyDestinations = async (
  destinationId: number,
): Promise<TDestination[]> => {
  console.log("getNearbyDestinations called with:", destinationId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const all = data as TDestination[];
      const origin = all.find((d) => d.id === destinationId);
      if (!origin) return reject(new Error("Destination not found"));

      if (LAT_LNG_EXISTS(origin)) {
        const others = all
          .filter((d) => d.id !== origin.id && LAT_LNG_EXISTS(d))
          .map((d) => ({
            d,
            dist: haversineDistanceKm(
              origin.latitude,
              origin.longitude,
              d.latitude,
              d.longitude,
            ),
          }))
          .sort((a, b) => a.dist - b.dist)
          .slice(0, 5)
          .map((x) => x.d);

        resolve(others);
      }
    }, SIMULATED_DELAY);
  });
};
