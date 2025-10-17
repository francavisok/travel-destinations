import {
  DestinationDetails,
  DestinationSearch,
  LoadingDots,
} from "@/components/custom";
import { useGetDestinationById } from "@/hooks/queries/destinations/useGetDestinationById";
import { TDestination } from "@/types/destination";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const HomePage = () => {
  const { id } = useParams<{ id: string }>();

  const destination = useGetDestinationById({ destinationId: id });

  const [selected, setSelected] = useState<TDestination | null>(null);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (destination.data) {
      setSelected(destination.data);
      setQuery(destination.data.name);
    }
  }, [destination.data]);

  useEffect(() => {
    if (!selected) return;
    navigate(`/destination/${selected.id}`);
  }, [selected]);

  if (destination.isError) {
    navigate("/not-found");
  }

  return (
    <div>
      {destination.isLoading && !selected && <LoadingDots />}

      <DestinationSearch
        onSelect={(dest) => setSelected(dest)}
        query={query}
        setQuery={setQuery}
      />

      {selected && <DestinationDetails destination={selected} />}
    </div>
  );
};
