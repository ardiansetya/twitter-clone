import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import SideNav from "~/components/SideNav";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={GeistSans.className}>
      <ClerkProvider>
        <Head>
          <title>Twitter Clone</title>
          <meta name="description" content="Twitter Clone by Michelle" />
        </Head>
        <div className="container mx-auto flex">
          <SideNav/>
          <div className="min-h-screen flex-grow border-x">
            <Component {...pageProps} />
          </div>
        </div>
      </ClerkProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
