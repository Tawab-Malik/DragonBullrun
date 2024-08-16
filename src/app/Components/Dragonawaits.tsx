import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Dragonawaits() {
  return (
    <section className="relative bg-sec2-image bg-cover bg-center h-full">

      <div className="relative max-w-6xl mx-5 xl:mx-auto flex xl:flex-row flex-col  justify-between py-8 md:pt-64 md:pb-40 z-10">
        {/* left */}
        <div className="w-full flex justify-center">
          <Image
            src="/assets/2sec/dragon.png"
            className="w-[330px] h-[300px] brightness-100 md:w-[530px] md:h-[430px]"
            alt="img"
            height={500}
            width={500}
          />
        </div>
        {/* right */}
        <div className=" space-y-5 md:space-y-10 w-full">
          <h2 className=" text-3xl md:text-5xl xl:text-[70px] font-dragonslapper font-normal text-text-orange">
            the Dragon Awaits
          </h2>
          <h3 className="text-base md:text-2xl  font-inter font-medium text-text-white2">
            Embark on an Epic Journey with Dragon Bull Run, the Ultimate
            Free-to-Play Adventure on the Ethereum Blockchain! Explore, Earn,
            and Experience Thrills at Every Turn!
          </h3>
          <div className="flex gap-7">
            <Button as={Link} color="warning" href="#" className=" hover:scale-110 uppercase !py-5 !px-14 text-base font-normal text-text-white2 bg-transparent border-border-color border rounded  ">
              Login
            </Button>
            <Button as={Link} href="/#buynow" className=" hover:scale-110 uppercase !py-5 !px-8 bg-text-orange rounded text-white text-base font-normal">
              Buy Tokens
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
