import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Mapfilterltems } from "./components/MapFilterltems";


export default function Home() {
  return (
    <div className=" container mx-auto px-5 lg:px-10">
      <Mapfilterltems/>
    </div>
  );
}
