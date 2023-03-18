import Head from "next/head";
import HomeCompIndex from "@/components/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oscar Guerrero</title>
        <meta name="description" content="Oscar Guerrero" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeCompIndex />
      </main>
    </>
  );
}
