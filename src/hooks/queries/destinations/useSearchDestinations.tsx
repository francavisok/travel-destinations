import { searchDestinations } from "@/fake-api/fake-api";
import { skipToken, useQuery } from "@tanstack/react-query";
import { destinationsKeys } from "./destination-key-factory";

export const useSearchDestinations = ({
  query,
}: {
  query: string;
}) => {
  return useQuery({
    queryKey: destinationsKeys.search(query),
    queryFn: !!query ? () => searchDestinations(query) : skipToken,
  });
};
