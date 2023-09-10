import { ThirdwebProvider } from "@thirdweb-dev/react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { env } from "~/env.mjs";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const activeChain = "mumbai";
  const clientId = env.NEXT_PUBLIC_THIRDWEB_API_KEY;

  return (
    <SessionProvider session={session}>
      <ThirdwebProvider activeChain={activeChain} clientId={clientId}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </SessionProvider>
  );
};

export default MyApp;
