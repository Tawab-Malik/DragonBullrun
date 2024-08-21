import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Dragonawaits() {
  return (
    <section className="relative bg-sec2-image bg-cover bg-center h-full">

      <div className="relative max-w-6xl mx-5 xl:mx-auto flex xl:flex-row flex-col  justify-between py-8 pt-20 xl:pt-64 md:pb-40 z-10">
        {/* left */}
        <div className="w-full flex justify-center">
          <Image
            src="/assets/2sec/dragon.png"
            className="w-[330px] h-[300px] brightness-100 md:w-[530px] md:h-[430px]"
            alt="img"
            height={430}
            width={530}
          />
        </div>
        {/* right */}
        <div className=" space-y-5 md:space-y-10 w-full">
          <h2 className=" text-3xl md:text-5xl xl:text-[70px] w-full xl:w-96 text-center leading-normal xl:text-start font-dragonslapper font-normal text-tree-poppy">
            the Dragon Awaits
          </h2>
          <h3 className="text-base md:text-2xl text-center xl:text-start font-inter font-medium text-white">
            Embark on an Epic Journey with Dragon Bull Run, the Ultimate
            Free-to-Play Adventure on the Ethereum Blockchain! Explore, Earn,
            and Experience Thrills at Every Turn!
          </h3>
          <div className="flex gap-7 justify-center xl:justify-start">
            <Button as={Link} color="warning" href="#" className="hover:text-tree-poppy hover:!opacity-100 hover:border-tree-poppy duration-300 font-dragonslapper uppercase !py-5 !px-14 text-base font-normal text-white bg-transparent border-white border rounded  ">
              Login
            </Button>
            <Button as={Link} href="/#buynow" className="  font-dragonslapper uppercase !py-5 !px-8 bg-tree-poppy rounded text-black text-base font-normal">
              Buy Tokens
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
