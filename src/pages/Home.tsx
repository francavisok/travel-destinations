import { Badge } from "@/components/ui/badge";
import { useGetDestinationById } from "@/hooks/queries/destinations/useGetDestinationById";
import { useSearchDestinations } from "@/hooks/queries/destinations/useSearchDestinations";
import { useParams } from "react-router";

export const HomePage = () => {
  const { id } = useParams<{ id: string }>();
  const destination = useGetDestinationById({ destinationId: id });
  const destinations = useSearchDestinations({ text: "fail" });

  if (destination.isLoading) return <p>Loading...</p>;

  if (destination.isError || !destination.data)
    return <p>Error: {destination?.error?.message}</p>;

  return (
    <div>
      <h1>Destinations</h1>
      {destinations.isLoading && <p>Loading...</p>}
      {destinations.isError && <p>Error: {destinations.error.message}</p>}
      <ul>
        {destinations.data?.map((d) => (
          <li key={d.id}>
            <Badge>{d.name}</Badge>
          </li>
        ))}
      </ul>
      <h1>{destination.data.name}</h1>
      <p>{destination.data.description}</p>
      <p>Country: {destination.data.country}</p>
      <p>Climate: {destination.data.climate}</p>
      <p>Currency: {destination.data.currency}</p>
      <p>Latitude: {destination.data.latitude}</p>
      <p>Longitude: {destination.data.longitude}</p>
    </div>
  );
};
