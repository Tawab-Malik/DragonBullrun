"use client"
import { motion, Variants } from "framer-motion";


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





export default function Dragons() {
    return (
        <>
            <section className=" bg-dragon-bg bg-cover bg-center" id="3">
                <div className=" max-w-8xl mx-5 xl:mx-auto space-y-24 xl:space-y-48 py-24 xl:py-36 ">
                    <div className=" space-y-5 md:space-y-10">
                        <h2 className=" text-text-orange text-start leading-tight xl:text-center text-3xl md:text-5xl xl:text-[70px] font-dragonslapper uppercase">THE DRAGONS REALM</h2>
                        <p className=" max-w-6xl mx-auto text-base xl:text-3xl font-bold text-text-white2 text-start xl:text-center">Step into the captivating Dragon Bull Run NFT marketplace, where unique digital collectibles boast immense value.</p>
                    </div>
                    <div>
                        {/* cards */}
                        <div className=" grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10 place-items-center">


                            {/* 1st card*/}
                            <motion.div
                                variants={cardVariants3}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.1 }}
                                className="w-full xl:h-[560px] h-auto xl:w-[530px] space-y-5 xl:space-y-10 p-5 xl:p-10 shadow-inner border-[12px] rounded-[46px] border-box-border border-opacity-65 bg-text-black bg-opacity-65">
                                <h2 className=" text-xl md:text-3xl xl:text-[40px] font-dragonslapper text-center  text-text-orange uppercase ">NFT MARKETPLACE</h2>
                                <p className=" text-text-white2 text-base md:text-2xl text-center">Dive into the enchanting Dragon Bull Run NFT marketplace, where rare digital artifacts channel legendary powers. Obtain sought-after NFTs to gain potent abilities, overcoming obstacles with dragon-like mastery. Deals bolster the realm’s reserves, ensuring steadiness and continuous progress.</p>
                            </motion.div>
                            {/* 2st card*/}
                            <motion.div variants={cardVariants3}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.1 }}
                                className="w-full xl:h-[560px] h-auto xl:w-[530px] space-y-5 xl:space-y-10 p-5 xl:p-10 shadow-inner border-[12px] rounded-[46px] border-box-border border-opacity-65 bg-text-black bg-opacity-65">
                                <h2 className=" text-xl md:text-3xl xl:text-[40px] font-dragonslapper text-center  text-text-orange uppercase ">PLAY-TO-EARN GAME</h2>
                                <p className=" text-text-white2 text-base md:text-2xl text-center">At the heart of the Mythic Dragon Haven lies an engaging play-to-earn experience that enchants players worldwide. Venture into exhilarating quests, conquer trials, and reap precious bounties. Engaging in the game actively enables players to amass $DBRZ tokens and virtual treasures, recognizing their expertise and commitment with tangible rewards.</p>
                            </motion.div>
                            {/* 3st card*/}
                            <motion.div variants={cardVariants3}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.1 }}
                                className="w-full xl:h-[560px] h-auto xl:w-[530px] space-y-5 xl:space-y-10 p-5 xl:p-10 shadow-inner border-[12px] rounded-[46px] border-box-border border-opacity-65 bg-text-black bg-opacity-65 hidden 2xl:block">
                                <h2 className=" text-xl md:text-3xl xl:text-[40px] font-dragonslapper text-center  text-text-orange uppercase ">Burn</h2>
                                <p className=" text-text-white2 text-base md:text-2xl text-center">Within the Fire Breathing domain, the Dragon Bull Run implements a token burn, commencing a deflationary cycle. Consequently, our fixed maximum supply gradually decreases, cultivating scarcity within the circulating supply of $DBRZ tokens.</p>
                            </motion.div>
                        </div>
                        <div className=" flex justify-center 2xl:hidden pt-10">
                            {/* 3st card*/}
                            <motion.div variants={cardVariants3}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.1 }}
                                className="w-full xl:h-[560px] h-full md:h-[350px] xl:w-[530px] space-y-5 xl:space-y-10 p-5 xl:p-10 shadow-inner border-[12px] rounded-[46px] border-box-border border-opacity-65 bg-text-black bg-opacity-65">
                                <h2 className=" text-xl md:text-3xl xl:text-[40px] font-dragonslapper text-center  text-text-orange uppercase ">Burn</h2>
                                <p className=" text-text-white2 text-base md:text-2xl text-center">Within the Fire Breathing domain, the Dragon Bull Run implements a token burn, commencing a deflationary cycle. Consequently, our fixed maximum supply gradually decreases, cultivating scarcity within the circulating supply of $DBRZ tokens.</p>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}