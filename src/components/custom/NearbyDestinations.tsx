import { LoadingDots } from "@/components/custom";
import { useGetNearbyDestinations } from "@/hooks/queries/destinations/useGetNearbyDestinations";
import { TDestination } from "@/types/destination";
import React from "react";
import { useNavigate } from "react-router";
import { Badge } from "../ui/badge";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="my-3 flex flex-row gap-2 flex-wrap">{children}</div>;
};

type NearbyDestinationsProps = {
  destination: TDestination;
};

export const NearbyDestinations: React.FC<NearbyDestinationsProps> = ({ destination }) => {
  const navigate = useNavigate();
  const nearbyDestinations = useGetNearbyDestinations({
    destinationId: destination.id.toString(),
  });

  const handleDestinationPress = (destination: TDestination) => {
    navigate(`/destination/${destination.id}`);
  };

  if (nearbyDestinations.isLoading) {
    return (
      <Layout>
        <LoadingDots />
      </Layout>
    );
  }

  if (nearbyDestinations.isError || !nearbyDestinations.data) {
    
    return (
      <Layout>
        <p className="text-start p-2 text-sm text-red-600">Ups! Something went wrong</p>
      </Layout>
    );
  }

  return (
    <>
      <h3 className="text-start my-3">Nearby Locations</h3>
      <Layout>
        {nearbyDestinations.data.map((destination) => (
          <Badge
            key={destination.id}
            className="cursor-pointer bg-fuchsia-800"
            onClick={() => handleDestinationPress(destination)}
          >
            {destination.name}
          </Badge>
        ))}
      </Layout>
    </>
  );
};
