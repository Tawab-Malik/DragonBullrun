import Image from "next/image";
import {NextUIProvider} from "@nextui-org/react";
import Levelup from "./Components/Levelup";

import Dragonawaits from "./Components/Dragonawaits";
import Benefits from "./Components/Benefits";
import Roadmap from "./Components/Roadmap";
export default function Home() {
  return (
    <NextUIProvider>
       <Levelup/>
       <Dragonawaits/>
       <Benefits/>
       <Roadmap/>
    </NextUIProvider>
  );
}
