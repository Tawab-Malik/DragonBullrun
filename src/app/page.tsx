import Image from "next/image";
import {NextUIProvider} from "@nextui-org/react";
import Levelup from "./Components/Levelup";

import Dragonawaits from "./Components/Dragonawaits";
import Benefits from "./Components/Benefits";
import Roadmap from "./Components/Roadmap";
import Tokenomics from "./Components/Tokenomics";
import Dragons from "./Components/Thedragons";
import MeetourTeam from "./Components/Meetourteam";
import Faqs from "./Components/Faqs";

export default function Home() {
  return (
    <NextUIProvider>
       <Levelup/>
       <Dragonawaits/>
       <Benefits/>
       <Roadmap/>
       <Tokenomics/>
       <Dragons/>
       <MeetourTeam/>
       <Faqs/>
      
    </NextUIProvider>
  );
}
