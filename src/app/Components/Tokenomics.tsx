"use client"
import { motion, Variants } from "framer-motion";
import Image from "next/image"

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



export default function Tokenomics() {
    return (
        <>
            <section className=" bg-token-bg bg-center bg-cover py-24  xl:py-32 relative    " id="tokenomics">
                
                <Image src="/assets/token/upbg.png" alt="img" className=" absolute h-60 top-0 w-full" height={1000} width={1000}></Image>
                <div className=" max-w-7xl mx-5 xl:mx-auto  space-y-24 relative z-10">

                    <div className=" space-y-5">
                        <h2 className=" text-text-orange text-start xl:text-center text-3xl md:text-5xl xl:text-[70px] font-dragonslapper">Tokenomics</h2>
                        <p className=" text-base xl:text-3xl font-bold text-text-white2 text-start xl:text-center">Total token supply: 8,888,888,888 $DBRZ</p>
                    </div>

                    {/* token divs */}
                    <div className=" space-y-20">
                        {/* 1st div  */}
                        <motion.div
                          variants={cardVariants3}
                          initial="offscreen"
                          whileInView="onscreen"
                          viewport={{ once: false, amount: 0.1 }}
                           className=" flex justify-between gap-5 xl:gap-0 items-center">
                            {/* left  */}
                            <div className=" backdrop-blur-3xl xl:backdrop-blur-0 p-2 xl:p-0 rounded-xl">
                                <h2 className=" text-3xl xl:text-[70px] leading-tight text-text-orange font-dragonslapper text-center">65 % </h2>
                                <p className=" text-lg xl:text-2xl text-text-white2 font-bold text-center">777,777,777 tokens</p>
                                <h3 className=" text-xl xl:text-3xl text-white font-bold text-center">Public Sale</h3>
                            </div>
                            {/* right  */}
                            <div className=" backdrop-blur-3xl xl:backdrop-blur-0 p-2 xl:p-0 rounded-xl">
                                <h2 className="  text-3xl xl:text-[70px] leading-tight text-text-orange font-dragonslapper text-center">5 % </h2>
                                <p className=" text-lg xl:text-2xl text-text-white2 font-bold text-center">444,444,444 tokens</p>
                                <h3 className=" text-xl xl:text-3xl text-white font-bold text-center">Game Rewards</h3>
                            </div>
                        </motion.div>
                        {/* 2st div  */}
                        <motion.div  variants={cardVariants3}
                          initial="offscreen"
                          whileInView="onscreen"
                          viewport={{ once: false, amount: 0.1 }}
                           className=" flex justify-between items-center  gap-5">
                            {/* left  */}
                            <div className="backdrop-blur-3xl xl:backdrop-blur-0 p-2 xl:p-0 rounded-xl ">
                                <h2 className="  text-3xl xl:text-[70px] leading-tight  text-text-orange font-dragonslapper text-center">10 % </h2>
                                <p className=" text-lg xl:text-2xl text-text-white2 font-bold text-center">888,888,888 tokens</p>
                                <h3 className=" text-xl xl:text-3xl text-white font-bold text-center">Liquidity</h3>
                            </div>
                            {/* right  */}
                            <div className=" backdrop-blur-3xl xl:backdrop-blur-0 p-2 xl:p-0 rounded-xl">
                                <h2 className="  text-3xl xl:text-[70px] leading-tight text-text-orange font-dragonslapper text-center">5 % </h2>
                                <p className=" text-lg xl:text-2xl text-text-white2 font-bold text-center">444,444,444 tokens</p>
                                <h3 className=" text-xl xl:text-3xl text-white font-bold text-center">Marketing</h3>
                            </div>
                        </motion.div>
                           {/* 3st div  */}
                           <motion.div
                             variants={cardVariants3}
                             initial="offscreen"
                             whileInView="onscreen"
                             viewport={{ once: false, amount: 0.1 }}
                              className=" max-w-5xl mx-auto flex justify-between items-center  gap-5">
                            {/* left  */}
                            <div className=" backdrop-blur-3xl xl:backdrop-blur-0 p-2 xl:p-0 rounded-xl">
                                <h2 className="  text-3xl xl:text-[70px] leading-tight text-text-orange font-dragonslapper text-center">10 % </h2>
                                <p className=" text-lg xl:text-2xl text-text-white2 font-bold text-center">888,888,888 tokens</p>
                                <h3 className=" text-xl xl:text-3xl text-white font-bold text-center">Team</h3>
                            </div>
                            {/* right  */}
                            <div className=" backdrop-blur-3xl xl:backdrop-blur-0 p-2 xl:p-0 rounded-xl">
                                <h2 className="  text-3xl xl:text-[70px] leading-tight text-text-orange font-dragonslapper text-center">5 % </h2>
                                <p className=" text-lg xl:text-2xl text-text-white2 font-bold text-center">444,444,444 tokens</p>
                                <h3 className=" text-xl xl:text-3xl text-white font-bold text-center">Bonuses</h3>
                            </div>
                        </motion.div>
                    </div>





                </div>
            </section>
        </>
    )
}