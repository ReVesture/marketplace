import { useActiveListings, useContract } from "@thirdweb-dev/react";

export const RevestureMarketplace = ({ address }: { address: string }) => {
  const { contract } = useContract(address, "marketplace");
  const { data: marketplaceData, isLoading, error } = useActiveListings(contract);

  return (
    <div className="grid grid-cols-3">
      {isLoading && <div>Loading...</div>}
      {error ? <div>Error: {error.message}</div> : null}
      {marketplaceData?.map((listing) => (
          <div key={listing.id}>
            <h2>{listing.id}</h2>
            <h3>{listing.asset.name}</h3>
          <p>{listing.asset.description}</p>
          </div>
        ))}
    </div>
  );
}