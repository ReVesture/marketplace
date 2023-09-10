import { useActiveListings, useListings, useContract } from "@thirdweb-dev/react";

export const RevestureMarketplace = ({ address }: { address: string }) => {
  const { contract } = useContract(address, "marketplace");
  const { data: marketplaceData, isLoading, error } = useListings(contract);
  console.log(marketplaceData);
  return (
    <div className="flex justify-stretch w-5xl text-center">
      {isLoading  && <div className="text-white text-center">Loading...</div>}
      {error ? <div className="text-white text-center">Error: {error.message}</div> : null}
      {!isLoading && !error && marketplaceData ? marketplaceData?.map((listing) => (
        <div key={listing.id} className="text-white">
          <h2>{listing.id}</h2>
          <h3>{listing.asset.name}</h3>
          <p>{listing.asset.description}</p>
        </div>
      )) : (
        <div className="text-white text-center">No listings found</div>
      )}
    </div>
  );
}