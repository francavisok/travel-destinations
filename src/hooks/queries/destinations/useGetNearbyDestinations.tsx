import { getNearbyDestinations } from "@/fake-api/fake-api"
import { skipToken, useQuery } from "@tanstack/react-query"
import { destinationsKeys } from "./destination-key-factory"

export const useGetNearbyDestinations = ({ destinationId }: { destinationId: string | undefined }) => {
  return useQuery({
    queryKey: destinationsKeys.nearby(Number(destinationId)),
    queryFn:  !!destinationId  ? () => getNearbyDestinations(Number(destinationId)) : skipToken,
  })
}
