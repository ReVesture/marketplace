import { useValidDirectListings, useContract } from "@thirdweb-dev/react";
import Image from "next/image";

export const RevestureMarketplace = ({ address }: { address: string }) => {
  const { contract } = useContract(address, "marketplace-v3");

  const { data: marketplaceData, isLoading, error } = useValidDirectListings(contract);
  console.log({ error });
  console.log(marketplaceData);

  return (
    <div className="flex justify-stretch w-5xl text-center">
      {isLoading  && <div className="text-white text-center">Loading...</div>}

      {marketplaceData && (
          <div className="grid grid-cols-3 gap-4">
          {marketplaceData.length > 0 ? marketplaceData?.map((listing) => (
            <div key={listing.id} className="text-white flex flex-col items-center">
              <h3>{listing.asset.name}</h3>
              {listing.asset.image && listing.asset.name && <Image src={listing.asset.image} width={400} height={400} alt={listing.asset.name} />}
              <p>{listing.asset.description}</p>
            </div>
          )) : (
            <div className="text-white text-center">No listings found</div>
          )}
        </div>
      )}
    </div>
  );
}