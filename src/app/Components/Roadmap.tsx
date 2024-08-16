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
            <section className="relative bg-roadmap-bg bg-center bg-cover py-24 overflow-hidden" id="roadmap">
            
                <div className="brightness-100 gap-20 space-y-20 md:space-y-24 xl:space-y-24">
                    <div className="max-w-6xl mx-5 xl:mx-auto space-y-5">
                        <h2 className=" text-3xl md:text-5xl xl:text-[70px] text-text-orange font-dragonslapper text-start md:text-center">
                            Road Map
                        </h2>
                        <p className="text-start md:text-center text-base xl:text-2xl text-text-white2 font-medium">
                            Please be aware that the 7 stages of the roadmap operate
                            independently from the phases of the presale and are susceptible
                            to modifications.
                        </p>
                    </div>
                    {/* Cards */}
                    <div className="  max-w-7xl  2xl:max-w-8xl mx-5 xl:mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-16 md:gap-y-16 md:gap-x-10 xl:gap-24 place-items-center 2xl:gap-7" >
                        {/* 1st card  */}

                        <motion.div
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
                            className=" flex bg-nav-black  justify-end  rounded-3xl relative w-full 2xl:w-[390px] h-[250px]  ">
                            <Image src="/assets/roadmap/egg1.png" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col w-[60%] xl:w-[240px] justify-center  p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2 xl:pl-9 ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                    Phase 1
                                </h2>
                                <p className=" text-sm xl:text-xl text-text-white2 text-center">
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
                            className=" flex bg-nav-black justify-end   rounded-3xl relative w-full 2xl:w-[390px] h-[250px]  ">
                            <Image src="/assets/roadmap/egg2.png" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col w-[60%] xl:w-[240px] justify-center p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2  ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                    Phase 2
                                </h2>
                                <p className=" text-sm xl:text-xl text-text-white2 text-center">
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
                            className=" flex bg-nav-black justify-end   rounded-3xl relative  w-full 2xl:w-[390px] h-[250px]  ">
                            <Image src="/assets/roadmap/egg3.png" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col w-[60%] xl:w-[240px] justify-center p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2 xl:pl-6 ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                    Phase 3
                                </h2>
                                <p className=" text-sm xl:text-xl text-text-white2 text-center">
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
                            className=" flex bg-nav-black justify-end   rounded-3xl relative  w-full 2xl:w-[390px] h-[250px]  ">
                            <Image src="/assets/roadmap/egg4.png" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col w-[60%] xl:w-[240px] justify-center p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2  ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                    Phase 4
                                </h2>
                                <p className=" text-sm xl:text-xl text-text-white2 text-center">
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
                            className=" block 2xl:hidden w-full 2xl:w-[390px] h-[250px]  rounded-3xl bg-nav-black  ">
                            <div className=" flex bg-nav-black justify-end   rounded-3xl relative  2xl:w-[390px] h-[250px]    ">
                                <Image src="/assets/roadmap/egg4.png" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                                />
                                {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                                <div className=" flex flex-col w-[60%] xl:w-[240px] justify-center p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2  ">
                                    <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                        Phase 5
                                    </h2>
                                    <p className=" text-sm xl:text-xl text-text-white2 text-center">
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
                            className=" block 2xl:hidden w-full 2xl:w-[390px] h-[250px] rounded-3xl bg-nav-black    ">
                            <div className=" flex bg-nav-black justify-end   rounded-3xl relative  2xl:w-[390px] h-[250px]    ">
                                <Image src="/assets/roadmap/egg6.png" alt="img" width={180} height={330} className="w-[180px] -left-4 absolute h-[300px] bottom-0 xl:h-[330px] "
                                />
                                {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                                <div className=" flex flex-col w-[60%] xl:w-[240px] justify-center p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2  ">
                                    <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                        Phase 6
                                    </h2>
                                    <p className=" text-sm xl:text-xl text-text-white2 text-center">
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
                            className="hidden xl:block 2xl:hidden w-full 2xl:w-[390px] h-[250px]   md:col-span-1 xl:col-start-2 xl:col-span-1 2xl:col-start-auto  rounded-3xl bg-nav-black  ">
                            <div className=" flex justify-end   relative  2xl:w-[390px] h-[250px]   ">
                                <Image src="/assets/roadmap/egg7.png" alt="img" width={180} height={330} className="w-[180px] -left-4 absolute h-[300px] bottom-0 xl:h-[330px] "
                                />
                                {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                                <div className=" flex flex-col w-[60%] xl:w-[240px] justify-center p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2   ">
                                    <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                        Phase 7
                                    </h2>
                                    <p className=" text-sm xl:text-xl text-text-white2 text-center">
                                        Game Launch V1
                                    </p>
                                </div>
                            </div>
                        </motion.div>



                    </div>
                    {/* 2nd cart */}
                    <div className=" hidden 2xl:block">
                        <div className="  max-w-7xl mx-5 2xl:mx-auto gap-5 flex">
                            {/* 5st card  */}

                            <motion.div
                                variants={cardVariants3}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.1 }}
                                className=" flex bg-nav-black justify-end   rounded-3xl relative  w-full 2xl:w-[390px] h-[250px]  ">
                                <Image src="/assets/roadmap/egg4.png" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                                />
                                {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                                <div className=" flex flex-col max-w-[240px] justify-start  p-9 md:p-7 2xl:p-5 gap-5 w-full space-y-2  ">
                                    <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                        Phase 5
                                    </h2>
                                    <p className=" text-sm xl:text-xl text-text-white2 text-center">
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
                                className=" flex bg-nav-black justify-end   rounded-3xl relative  w-full 2xl:w-[390px] h-[250px]  ">
                                <Image src="/assets/roadmap/egg6.png" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                                />
                                {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                                <div className=" flex flex-col max-w-[240px] justify-start  p-9 md:p-7 2xl:p-5 gap-5 w-full space-y-2  ">
                                    <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                        Phase 6
                                    </h2>
                                    <p className=" text-sm xl:text-xl text-text-white2 text-center">
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
                                className="flex  bg-nav-black justify-end   rounded-3xl relative  w-full 2xl:w-[390px] h-[250px]   ">
                                <Image src="/assets/roadmap/egg7.png" alt="img" width={180} height={330} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                                />
                                {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                                <div className=" flex flex-col max-w-[240px] justify-start  p-9 md:p-7 2xl:p-5 gap-5 w-full space-y-2  ">
                                    <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                        Phase 7
                                    </h2>
                                    <p className=" text-sm xl:text-xl text-text-white2 text-center">
                                    Game Launch V1
                                    </p>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                    {/* 7th card */}
                    <div className=" flex justify-center items-center mx-5  2xl:hidden">
                        {/* 7st card  */}
                        <motion.div
                            variants={cardVariants3}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
                            className="  -mt-10 w-[500px] h-[250px]   md:col-span-1 xl:col-start-2 xl:col-span-1 2xl:col-start-auto  rounded-3xl bg-nav-black  ">
                            <div className=" flex justify-end   relative  2xl:w-[390px] h-[250px]   ">
                                <Image src="/assets/roadmap/egg7.png" alt="img" width={180} height={330} className="w-[180px] -left-4 absolute h-[300px] bottom-0 xl:h-[330px] "
                                />
                                {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                                <div className=" flex flex-col w-[60%] xl:w-[240px] justify-center p-2 md:p-5 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2   ">
                                    <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                        Phase 7
                                    </h2>
                                    <p className=" text-sm xl:text-xl text-text-white2 text-center">
                                        Game Launch V1
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>
        </>
    );
}
