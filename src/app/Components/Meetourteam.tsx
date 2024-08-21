"use client"
import { Button, } from "@nextui-org/react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";


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


export default function MeetourTeam() {
    return (
        <>
            <section className=" bg-team-bg bg-cover bg-center relative overflow-hidden">
                
                <div className=" max-w-9xl mx-5 xl:mx-auto space-y-24 xl:space-y-52 py-16 md:py-24  xl:pb-20 xl:pt-20 brightness-100">
                    <div className=" space-y-5 md:space-y-10">
                        <h2 className=" text-tree-poppy text-start md:text-center text-3xl md:text-5xl xl:text-[70px] font-dragonslapper">Our Team</h2>
                        <p className=" text-xl md:text-2xl xl:text-5xl font-dragonslapper font-bold text-white text-start md:text-center">Meet the Dragons</p>
                    </div>
                    {/* teams cards */}
                    <div className=" grid h-fit grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center pt-14 md:pt-18 xl:p-0 gap-x-10 2xl:gap-x-20">


                        {/* 1st cards */}
                        <div className=" w-full xl:w-full h-auto xl:h-full p-5  text-center shadow-inner border-2 rounded-[28px] border-tree-poppy ">
                            <motion.div
                             variants={cardVariants3}
                             initial="offscreen"
                             whileInView="onscreen"
                             viewport={{ once: false, amount: 0.1 }}
                              className=" flex justify-center  ">
                                <Image src="/assets/team/dragon1.png" alt="img" className=" overflow-visible -mt-36  w-[260px] h-[220px]" width={260} height={220} />

                            </motion.div>
                           
                                <h2 className=" mt-3 text-2xl xl:text-5xl font-dragonslapper text-tree-poppy [text-shadow:_0_6px_3px_rgb(0_0_0_/_90%)]">Felix</h2>
                                <h3 className="text-xl mt-5 text-white font-bold">Lead Game Dev</h3>
                                <p className=" text-xl mt-5  text-white font-medium">
                                    Felix, with over ten years in the gaming industry, excels at leading successful game projects at DragonBullRun, blending innovation with a deep understanding of player preferences.</p>
                           

                        </div>
                        {/* 2st cards */}
                        <div
                         
                           className=" w-full xl:w-full h-auto md:h-full p-5 text-center shadow-inner border-2 rounded-[28px] border-tree-poppy mt-40 md:mt-0 ">
                            <motion.div
                             variants={cardVariants3}
                             initial="offscreen"
                             whileInView="onscreen"
                             viewport={{ once: false, amount: 0.1 }}
                              className=" flex justify-center">
                                <Image src="/assets/team/dragon2.png" alt="img" className=" -mt-36  w-[260px] h-[220px]" width={260} height={220} />

                            </motion.div>
                            
                                <h2 className="mt-3 text-2xl xl:text-5xl text-center font-dragonslapper text-tree-poppy [text-shadow:_0_6px_3px_rgb(0_0_0_/_90%)]">Quentin</h2>
                                <h3 className="text-xl mt-5  text-white font-bold">Blockchain Engineer</h3>
                                <p className=" text-xl mt-5  text-white font-medium">
                                    Quentin, a blockchain engineer with six years of experience, specializes in Ethereum-based solutions, playing a key role in developing secure systems for the DragonBullRun ecosystem.</p>
                            
                        </div>
                        {/* 3st cards */}
                        <div
                        
                           className="w-full xl:w-full h-auto md:h-auto xl:h-full p-5 text-center shadow-inner border-2 rounded-[28px] border-tree-poppy mt-40 xl:mt-0 ">
                            <motion.div
                              variants={cardVariants3}
                              initial="offscreen"
                              whileInView="onscreen"
                              viewport={{ once: false, amount: 0.1 }}
                               className=" flex justify-center ">
                                <Image src="/assets/team/dragon3.png" alt="img" className=" -mt-36   w-[260px] h-[220px]" width={260} height={220} />

                            </motion.div>
                            
                                <h2 className="mt-3 text-2xl xl:text-5xl font-dragonslapper text-tree-poppy [text-shadow:_0_6px_3px_rgb(0_0_0_/_90%)]">Jackson</h2>
                                <h3 className="text-xl mt-5  text-white font-bold">Head of Sales</h3>
                                <p className=" text-xl mt-5 text-white font-medium">
                                    Jackson excels in driving revenue growth and strategic partnerships for DragonBullRun, leveraging his vast experience in sales and business development across various industries.</p>
                            
                        </div>
                        {/* 4st cards */}
                        <div
                         
                           className="w-full xl:w-full h-auto md:h-auto xl:h-full p-5 text-center shadow-inner border-2 rounded-[28px] border-tree-poppy mt-40 xl:mt-0 ">
                            <motion.div 
                             variants={cardVariants3}
                             initial="offscreen"
                             whileInView="onscreen"
                             viewport={{ once: false, amount: 0.1 }}className=" flex justify-center">
                                <Image src="/assets/team/dragon4.png" alt="img" className=" -mt-36   w-[260px] h-[220px]" width={260} height={220} />

                            </motion.div>
                           
                                <h2 className="mt-3 text-2xl xl:text-5xl font-dragonslapper text-tree-poppy [text-shadow:_0_6px_3px_rgb(0_0_0_/_90%)]">Natalia</h2>
                                <h3 className="text-xl mt-5 text-white font-bold">Marketing Manager</h3>
                                <p className=" text-xl mt-5  text-white font-medium">
                                    Natalia, a seasoned marketing expert with a Web3 and digital marketing background, boosts DragonBullRun’s visibility with her knack for crafting impactful strategies and executing multi-channel campaigns.</p>
                            
                        </div>



                    </div>

                    {/* buttons */}
                    <div className=" flex justify-center md:flex-row flex-col gap-10 mt-16 xl:!mt-40">
                        <Link href="/#buynow"><Button className=" w-full px-10 !py-5 uppercase  bg-tree-poppy rounded font-dragonslapper text-base">buy now</Button></Link>
                        <Button className=" w-auto !px-5 !py-5 uppercase hover:text-tree-poppy hover:!opacity-100 hover:border-tree-poppy duration-300  bg-transparent border border-white text-white rounded font-dragonslapper text-base">verify smart contract</Button>
                    </div>
                </div>
            </section>
        </>
    )
}