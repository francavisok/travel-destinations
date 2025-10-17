// components/custom/DestinationSearch.tsx
import { ComboBox } from "@/components/custom";
import { useSearchDestinations } from "@/hooks/queries/destinations/useSearchDestinations";
import { TDestination } from "@/types/destination";
import { useDebounce } from "@uidotdev/usehooks";

type DestinationSearchProps = {
  onSelect: (destination: TDestination) => void;
  query: string;
  setQuery: (q: string) => void;
};

export const DestinationSearch: React.FC<DestinationSearchProps> = ({
  onSelect,
  query,
  setQuery,
}) => {
  const debouncedQuery = useDebounce(query, 500);
  const destinations = useSearchDestinations({ query: debouncedQuery });

  return (
    <div className="bg-neutral-200 rounded-md px-10 py-9 max-w-3xl min-w-xs relative">
      <ComboBox<TDestination>
        label="Location"
        query={query}
        onChange={setQuery}
        onSelect={onSelect}
        options={destinations.data ?? []}
        loading={destinations.isLoading}
        error={destinations.isError ? destinations.error.message : undefined}
        getOptionKey={(d) => d.id}
        getOptionLabel={(d) => d.name}
        renderOption={(d) => <span>{d.name}</span>}
        placeholder="Search destinations..."
      />
    </div>
  );
};
