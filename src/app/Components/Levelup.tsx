"use client"
import { Button, Link } from "@nextui-org/react"
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Herosection() {
    return (
        <>
            <section className=" bg-black relative" id="buynow">

                <video src="/assets/dragoneye.mov"
                    autoPlay loop muted
                    className="  w-full  absolute object-cover min-w-full h-full">
                </video>

                {/* main div */}
                <div className=" max-w-7xl 2xl:max-w-8xl mx-5 xl:mx-auto relative py-28 xl:py-28  xl:flex space-y-20 xl:space-y-0">
                    {/* left */}
                    <div className=" w-full  p-0 xl:p-20  2xl:p-0 flex flex-col items-start md:items-center xl:items-start 2xl:pt-12 ">
                        <h1 className=" text-4xl md:text-5xl  xl:text-[70px] 2xl:pr-40 font-dragonslapper text-tree-poppy xl:text-start text-start md:text-center ">Level Up Your Earnings
                            with Dragon Bull Run</h1>
                        <p className=" text-white text-base md:text-2xl font-inter mt-12 font-medium xl:text-start text-start md:text-center ">Dragon Bull Run is a free run to earn game on the
                             Ethereum blockchain, where adventure awaits at every turn!</p>
                        <Button href="/#buynow" className="  !mt-9 !py-5 !px-8 bg-text-orange uppercase rounded  text-black font-dragonslapper text-lg font-normal">
                            Buy Tokens
                        </Button>
                        <ul className=" flex gap-x-6 mt-9">
                            <li><Link href="/"><FaDiscord className=" hover:text-white duration-500  w-11 h-8 text-tree-poppy" /></Link></li>
                            <li><Link href="/"><FaXTwitter className=" hover:text-white duration-500  w-11 h-8 text-tree-poppy" /></Link></li>
                            <li><Link href="/"><FaTelegramPlane className=" hover:text-white duration-500  w-11 h-8 text-tree-poppy" /></Link></li>
                            <li><Link href="/"><FaMedium className=" hover:text-white duration-500  w-11 h-8 text-tree-poppy" /></Link></li>

                        </ul>
                    </div>
                    {/* right */}
                    <div className=" w-full flex justify-center " >
                        {/* cart div */}
                        <div
                            className="box border border-text-orange rounded-2xl p-5 xl:p-10 space-y-3 w-full md:w-[410px] h-auto   bg-[#020202B3]  ">
                            <div>
                                <h3 className=" text-sm font-inter text-white font-semibold text-center">Current Stage</h3>
                                <h2 className="  text-3xl font-inter text-tree-poppy font-bold text-center">Stage 1 of 8</h2>
                            </div>

                            <div className="space-y-1 border rounded-[14px] border-text-orange p-3 ">
                                <h3 className=" font-inter text-xs font-semibold text-white">Raised (USD)</h3>
                                <h2 className=" font-semibold text-3xl text-tree-poppy font-inter">$1,234,567.89</h2>
                            </div>
                            <div className="space-y-1 border rounded-[14px] border-text-orange p-3 ">
                                <h3 className=" font-inter text-xs font-semibold text-white">Token Sold</h3>
                                <h2 className=" font-semibold text-3xl text-tree-poppy font-inter">$1,234,567</h2>
                            </div>
                            <div className="space-y-1 border rounded-[14px] border-text-orange p-3 ">
                                <h3 className=" font-inter  text-xs font-semibold text-white">Remaining</h3>
                                <h2 className=" font-semibold text-3xl text-tree-poppy font-inter">$1,234,567.89</h2>
                                <h3 className=" font-inter  text-xs font-semibold text-white">Next Stage 0.000124 USD</h3>
                            </div>
                            {/* Progress bar */}
                            <div className=" space-y-1">
                                <div className=" overflow-hidden w-full h-[30px] border rounded-2xl bg-silver-color border-text-orange ">
                                    <div className=" animate-slide  h-[30px] rounded-2xl bg-text-orange w-[80%]"></div>
                                </div>
                                <div className=" flex justify-between items-center">
                                    <h3 className=" font-inter  text-xs  font-semibold text-white">0.000123 USD = 1$DBRX</h3>
                                    <h3 className=" font-inter  text-xs  font-semibold text-white">23.5% Sold</h3>

                                </div>
                            </div>
                            <div className=" flex justify-center gap-5 p-3">
                                <Image src="/assets/coins/btc.png" alt="img" className=" h-6 w-6" height={50} width={50}></Image>
                                <Image src="/assets/coins/eth.png" alt="img" className=" h-6 w-6" height={50} width={50}></Image>
                                <Image src="/assets/coins/bnb.png" alt="img" className=" h-6 w-6" height={50} width={50}></Image>
                                <Image src="/assets/coins/usdt.png" alt="img" className=" h-6 w-6" height={50} width={50}></Image>
                                <Image src="/assets/coins/usdc.png" alt="img" className=" h-6 w-6" height={50} width={50}></Image>
                                <Image src="/assets/coins/13.webp" alt="img" className=" h-6 w-6" height={50} width={50}></Image>
                            </div>
                            <Button className=" py-5 bg-text-orange rounded font-dragonslapper text-2xl font-normal w-full  ">Buy $DBRZ</Button>
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}