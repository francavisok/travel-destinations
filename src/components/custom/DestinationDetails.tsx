import { NearbyDestinations } from "@/components/custom";
import { TDestination } from "@/types/destination";

type DestinationDetailsProps = {
  destination: TDestination | null;
};

const getDetinationDetails = (destination: TDestination) => {
  return [
    { title: "Country:", description: destination.country },
    { title: "Climate:", description: destination.climate },
    { title: "Currency:", description: destination.currency },
  ];
};

export const DestinationDetails: React.FC<DestinationDetailsProps> = ({ destination }) => {
  if (!destination) return null;

  return (
    <div className="bg-neutral-50 rounded-md px-10 py-9 max-w-3xl mt-3 min-w-xs">
      <div className="text-start mb-3">
        <h1 className="font-bold text-lg">{destination.name}</h1>
        <p>{destination.description}</p>
      </div>

      {getDetinationDetails(destination).map((item) => (
        <div key={item.title} className="flex flex-row flex-wrap">
          <h3 className="font-bold mr-2">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}

      <NearbyDestinations destination={destination} />
    </div>
  );
};
