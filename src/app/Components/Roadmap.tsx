"use client"
import Image from "next/image";

import { motion, Variants } from "framer-motion";
const cardVariants: Variants = {
    offscreen: {
        x: -50,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,

        transition: {


            duration: 1.0
        }
    }
};
const cardVariants3: Variants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,

        transition: {


            duration: 1.0
        }
    }
};
const cardVariants2: Variants = {
    offscreen: {
        x: 50,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,

        transition: {


            duration: 1.0
        }
    }
};


export default function Roadmap() {
    return (
        <>
            <section className="relative bg-roadmap-bg bg-center bg-cover pb-24 pt-20 overflow-hidden" id="roadmap">
                <div className="max-w-6xl mx-5 xl:mx-auto space-y-5">
                    <h2 className=" text-3xl md:text-5xl xl:text-[70px] text-tree-poppy font-dragonslapper text-start md:text-center">
                        Road Map
                    </h2>
                    <p className="text-start md:text-center text-xl md:text-2xl xl:text-2xl text-white font-medium">
                        Please be aware that the 7 stages of the roadmap operate
                        independently from the phases of the presale and are susceptible
                        to modifications.
                    </p>
                </div>
                {/* Cards */}
                <div className=" overflow-hidden  max-w-7xl  2xl:max-w-8xl mx-5 xl:mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-y-40 md:gap-y-32 md:gap-x-5 xl:gap-y-16 place-items-center 2xl:gap-y-7 pt-28" >
                    {/* 1st card  */}

                    <motion.div
                        variants={cardVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        className=" flex bg-nav-black  justify-end  rounded-3xl relative w-full py-3 h-full  ">
                        <Image src="/assets/roadmap/egg1.svg" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-3 xl:h-[330px] "
                        />
                        {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                        <div className="px-8 md:px-5 xl:px-0 flex flex-col w-[60%] xl:w-[240px] justify-center xl:justify-start  p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2 xl:pl-9 ">
                            <h2 className="text-3xl xl:text-5xl font-dragonslapper text-tree-poppy text-center">
                                Phase 1
                            </h2>
                            <p className=" text-sm xl:text-xl text-white text-center">
                                Publish Whitepaper Token Audit Launch Website Presale Begins
                            </p>
                        </div>
                    </motion.div>
                    {/* 2st card  */}

                    <motion.div
                        variants={cardVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        className=" flex bg-nav-black justify-end   rounded-3xl relative w-full py-3 h-full   ">
                        <Image src="/assets/roadmap/egg2.svg" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-3 xl:h-[330px] "
                        />
                        {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                        <div className="px-8 md:px-5 xl:px-0 flex flex-col w-[60%] xl:w-[240px] justify-center xl:justify-start p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2  ">
                            <h2 className="text-3xl xl:text-5xl font-dragonslapper text-tree-poppy text-center">
                                Phase 2
                            </h2>
                            <p className=" text-sm xl:text-xl text-white text-center">
                                Marketing Begins
                                Teaser Video
                                Giveaways
                            </p>
                        </div>
                    </motion.div>
                    {/* 3st card  */}

                    <motion.div
                        variants={cardVariants2}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        className=" flex bg-nav-black justify-end   rounded-3xl relative  w-full py-3 h-full  ">
                        <Image src="/assets/roadmap/egg3.svg" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-3 xl:h-[330px] "
                        />
                        {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                        <div className="px-8 md:px-5 xl:px-0 flex flex-col w-[60%] xl:w-[240px] justify-center xl:justify-start p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2 xl:pl-6 ">
                            <h2 className="text-3xl xl:text-5xl font-dragonslapper text-tree-poppy text-center">
                                Phase 3
                            </h2>
                            <p className=" text-sm xl:text-xl text-white text-center 2xl:pl-3">
                                Further marketing
                                PR blast
                            </p>
                        </div>
                    </motion.div>
                    {/* 4st card  */}

                    <motion.div
                        variants={cardVariants2}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        className="  flex bg-nav-black justify-end   rounded-3xl relative  w-full py-3 h-full  ">
                        <Image src="/assets/roadmap/egg4.svg" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-3 xl:h-[330px] "
                        />
                        {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                        <div className="px-8 md:px-5 xl:px-0 flex flex-col w-[60%] xl:w-[240px] justify-center xl:justify-start p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2  ">
                            <h2 className="text-3xl xl:text-5xl font-dragonslapper text-tree-poppy text-center">
                                Phase 4
                            </h2>
                            <p className=" text-sm xl:text-xl text-white text-center">
                                Start development of
                                NFT Marketplace
                                More promos and
                                giveaways
                            </p>
                        </div>
                    </motion.div>
                    {/* 5st card  */}

                    <motion.div
                        variants={cardVariants3}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        className=" block 2xl:hidden w-full py-3 h-full  rounded-3xl bg-nav-black  ">
                        <div className=" flex bg-nav-black justify-end   rounded-3xl relative  py-3    ">
                            <Image src="/assets/roadmap/egg4.svg" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className="px-8 md:px-6 xl:px-0 flex flex-col w-[60%] xl:w-[240px] justify-center xl:justify-start p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2  ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-tree-poppy text-center">
                                    Phase 5
                                </h2>
                                <p className=" text-sm xl:text-xl text-white text-center">
                                    Start development of
                                    P2E game
                                    Coin gecko listing
                                    Cmc listing
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    {/* 6st card  */}
                    <motion.div
                        variants={cardVariants3}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        className=" block 2xl:hidden w-full py-3 h-full rounded-3xl md:px-5 xl:px-0 bg-nav-black relative     ">
                        <div className=" flex bg-nav-black justify-end   rounded-3xl   ">
                            <Image src="/assets/roadmap/egg6.svg" alt="img" width={180} height={330} className="w-[180px] -left-4 absolute h-[300px] bottom-3 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col w-[60%] xl:w-[240px] justify-center p-2 md:p-5 xl:p-7 2xl:p-5 gap-y-10 md:gap-y-5 space-y-2  ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-tree-poppy text-center">
                                    Phase 6
                                </h2>
                                <p className=" text-sm xl:text-xl text-white text-center">
                                    NFT marketplace Launch
                                    Uniswap TGE
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 7st card  */}
                    <motion.div
                        variants={cardVariants3}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        className="xl:pb-24  md:hidden xl:block 2xl:hidden w-full py-3 h-full relative   md:col-span-1 xl:col-start-2 xl:col-span-1 2xl:col-start-auto  rounded-3xl bg-nav-black  ">
                        <div className=" flex justify-end  py-3   ">
                            <Image src="/assets/roadmap/egg7.svg" alt="img" width={180} height={330} className="w-[180px] -left-4 absolute h-[300px] bottom-3 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col w-[60%] xl:w-[240px] justify-center p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2   ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-tree-poppy text-center">
                                    Phase 7
                                </h2>
                                <p className=" text-sm xl:text-xl text-white text-center">
                                    Game Launch V1
                                </p>
                            </div>
                        </div>
                    </motion.div>



                </div>
                {/* 2nd cart */}
                <div className=" hidden 2xl:block 2xl:mt-24">
                    <div className="  max-w-7xl mx-5 2xl:mx-auto gap-5 flex">
                        {/* 5st card  */}

                        <motion.div
                            variants={cardVariants3}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
                            className=" flex bg-nav-black justify-end   rounded-3xl relative  w-full py-3 h-full  ">
                            <Image src="/assets/roadmap/egg4.svg" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-3 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col max-w-[240px] justify-start  p-9 md:p-7 2xl:p-5 gap-5 w-full space-y-2  ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-tree-poppy text-center">
                                    Phase 5
                                </h2>
                                <p className=" text-sm xl:text-xl text-white text-center">
                                    Start development of
                                    P2E game
                                    Coin gecko listing
                                    Cmc listing
                                </p>
                            </div>
                        </motion.div>
                        {/* 6st card  */}

                        <motion.div
                            variants={cardVariants3}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
                            className=" flex bg-nav-black justify-end   rounded-3xl relative  w-full py-3 h-auto  ">
                            <Image src="/assets/roadmap/egg6.svg" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-3 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col max-w-[250px] justify-start  p-9 md:p-7 2xl:p-5 gap-y-5 w-full space-y-2  ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-tree-poppy text-center">
                                    Phase 6
                                </h2>
                                <p className=" text-sm xl:text-xl text-white text-center">
                                    NFT marketplace Launch
                                    Uniswap TGE
                                </p>
                            </div>
                        </motion.div>
                        {/* 7st card  */}

                        <motion.div
                            variants={cardVariants3}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
                            className="flex  bg-nav-black justify-end rounded-3xl relative  w-full py-3 h-auto   ">
                            <Image src="/assets/roadmap/egg7.svg" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] -bottom-3 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col max-w-[240px] justify-start  p-9 md:p-7 2xl:p-5 gap-5 w-full space-y-2  ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-tree-poppy text-center">
                                    Phase 7
                                </h2>
                                <p className=" text-sm xl:text-xl text-white text-center">
                                    Game Launch V1
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
                {/* 7th card */}
                <div className=" flex justify-center items-center mx-5  2xl:hidden mt-32">
                    {/* 7st card  */}
                    <motion.div
                        variants={cardVariants3}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        className=" -mt-10  md:-mt-2  hidden md:block h-auto md:h-[180px] md:w-[360px] lg:w-[500px] xl:h-auto pt-5 xl:hidden   md:col-span-1 xl:col-start-2 xl:col-span-1 2xl:col-start-auto  rounded-3xl bg-nav-black  ">
                        <div className=" flex justify-end   relative  py-3   ">
                            <Image src="/assets/roadmap/egg7.svg" alt="img" width={180} height={330} className="w-[180px] -left-4 absolute h-[300px] -bottom-6 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col w-[60%] xl:w-[240px] justify-center p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2   ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-tree-poppy text-center">
                                    Phase 7
                                </h2>
                                <p className=" text-sm xl:text-xl text-white text-center">
                                    Game Launch V1
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>


            </section>
        </>
    );
}
