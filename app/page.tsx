import { PrismaClient } from "@prisma/client/extension";
import BBSCardList from "./components/BBSCardList";
import { BBSData } from "./types/types";

async function getBBSAllData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const bbsAllData: BBSData[] = await response.json();

  return bbsAllData;
}



export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
