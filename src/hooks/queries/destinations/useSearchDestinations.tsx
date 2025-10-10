import { searchDestinations } from "@/fake-api/fake-api";
import { skipToken, useQuery } from "@tanstack/react-query";
import { destinationsKeys } from "./destination-key-factory";

export const useSearchDestinations = ({
  text,
}: {
  text: string | undefined;
}) => {
  return useQuery({
    queryKey: destinationsKeys.all,
    queryFn: !!text ? () => searchDestinations(text) : skipToken,
  });
};
