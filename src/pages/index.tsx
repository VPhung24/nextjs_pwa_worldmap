import { Inter } from "next/font/google";
import WorldMap from "@/components/WorldMap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center bg-snowball">
      <WorldMap />
    </main>
  );
}
