import { useValidDirectListings, useContract } from "@thirdweb-dev/react";

export const RevestureMarketplace = ({ address }: { address: string }) => {
  const { contract } = useContract(address, "marketplace-v3");
  console.log({ contract });

  const { data: marketplaceData, isLoading, error } = useValidDirectListings(contract);
  console.log(marketplaceData);
  return (
    <div className="flex justify-stretch w-5xl text-center">
      {isLoading  && <div className="text-white text-center">Loading...</div>}
      {error ? <div className="text-white text-center">Error: {error.message}</div> : null}

      {marketplaceData && (
          <div className="grid grid-cols-3 gap-4">
          {marketplaceData.length > 0 ? marketplaceData?.map((listing) => (
            <div key={listing.id} className="text-white">
              <h3>{listing.asset.name}</h3>
              <img src={listing.asset.image} alt={listing.asset.name} />
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