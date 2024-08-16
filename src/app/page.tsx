import Image from "next/image";
import {NextUIProvider} from "@nextui-org/react";
import Dragonawaits from "./Components/Dragonawaits";
import Benefits from "./Components/Benefits";
import Roadmap from "./Components/Roadmap";
import Tokenomics from "./Components/Tokenomics";
import MeetourTeam from "./Components/Meetourteam";
import Faqs from "./Components/Faqs";
import Herosection from "./Components/Levelup";
import Thedragonrealm from "./Components/Thedragons";

export default function Home() {
  return (
    <NextUIProvider>
       <Herosection/>
       <Dragonawaits/>
       <Benefits/>
       <Roadmap/>
       <Tokenomics/>
       <Thedragonrealm/>
       <MeetourTeam/>
       <Faqs/>
      
    </NextUIProvider>
  );
}
