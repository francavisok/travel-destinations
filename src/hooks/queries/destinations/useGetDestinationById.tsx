import { getDestinationById } from "@/fake-api/fake-api"
import { skipToken, useQuery } from "@tanstack/react-query"
import { destinationsKeys } from "./destination-key-factory"

export const useGetDestinationById = ({ destinationId }: { destinationId: string | undefined }) => {
  return useQuery({
    queryKey: destinationsKeys.detail(Number(destinationId)),
    queryFn: !!destinationId ? () => getDestinationById(Number(destinationId)) : skipToken,
  })
}
