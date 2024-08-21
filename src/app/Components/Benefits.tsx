"use client"
import Image from "next/image"
import { motion, Variants } from "framer-motion";
const cardVariants: Variants = {
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


export default function Benefits() {
    return (
        <>
            <section className=" bg-sec3-img bg-center bg-cover py-16 relative overflow-hidden ">

                <div className=" max-w-8xl mx-5 xl:mx-auto">
                    <div className=" space-y-5  ">
                        <h2 className=" text-3xl md:text-5xl xl:text-[70px] font-dragonslapper text-center text-tree-poppy">BEnefits</h2>
                        <p className=" text-white text-base md:text-2xl font-medium text-center">Run from the dragon to earn income and rewards.</p>
                    </div>


                    {/* main div card */}
                    <div className=" grid-cols-1  gap-y-10 md:gap-x-0 lg:grid-cols-2 place-items-center grid 2xl:grid-cols-3 pt-12 xl:py-12">
                        {/* card1 */}
                        <motion.div
                             variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
                            className=" bg-center bg-cover  relative  w-full h-full bg-sec3-cart-img px-10 md:px-16  lg:px-8 xl:px-28 2xl:px-8 py-12 md:py-32 lg:py-12 xl:py-20 2xl:py-16 space-y-1 md:space-y-4 ">

                            <h2 className=" text-center z-10 relative font-dragonslapper text-2xl md:text-6xl text-black">Play</h2>
                            <p className="text-text-black  text-xs md:text-xl text-center relative z-10 md:px-12">Dive into a mesmerizing realm where ancient legends spring to life. Assume the persona of a bold adventurer as you enter the dragon’s lair, prepared to confront challenges and conquer obstacles on your quest for glory. </p>
                        </motion.div>
                        {/* card2 */}
                        <motion.div
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
                            className="   bg-center bg-cover  relative  w-full h-full bg-sec3-cart-img px-10 md:px-16  lg:px-8 xl:px-28 2xl:px-8 py-12 md:py-32 lg:py-12 xl:py-20 2xl:py-16 space-y-1 md:space-y-4">

                            <h2 className=" text-center z-10 relative font-dragonslapper text-2xl md:text-6xl text-black">Run</h2>
                            <p className="text-text-black  text-xs md:text-xl text-center relative z-10 md:px-9">Experience the rush of adrenaline surging through your veins as you traverse perilous landscapes, evade fiery obstacles, and out manoeuvres cunning foes. The journey to triumph is filled with hazards, yet bravery is rewarded by fortune.</p>
                        </motion.div>
                        {/* card3 */}
                        <motion.div
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
                            className=" 2xl:block hidden bg-center bg-cover  relative  md:h-[400px] md:w-[570px] xl:w-full xl:h-full bg-sec3-cart-img px-10 md:px-24 py-12 md:py-16 space-y-1 md:space-y-4   ">

                            <h2 className=" text-center  z-10 relative font-dragonslapper text-2xl md:text-6xl text-black">Earn</h2>
                            <p className=" text-text-black  text-xs md:text-xl text-center relative z-10 px-5
                            xl:px-0 ">Grasp the chance to claim your well-deserved rewards! Gather the precious dragon eggs strewn across the land and unveil valuable treasures concealed within. </p>
                        </motion.div>
                    </div>
                    {/* single card  */}
                    {/* card3 */}
                    <motion.div
                        variants={cardVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}
                        className=" flex justify-center 2xl:hidden">
                        <div className=" mt-10 md:mt-10 lg:mt-0  bg-center bg-cover  relative  w-full h-full lg:w-[500px] xl:w-[700px] bg-sec3-cart-img px-10 md:px-28 lg:px-8 xl:!px-32 py-12 md:py-32 lg:py-12 xl:py-28 space-y-1 md:space-y-4  ">

                            <h2 className=" text-center z-10 relative font-dragonslapper text-2xl md:text-6xl text-black">Earn</h2>
                            <p className=" text-text-black  text-xs md:text-xl text-center relative z-10 px-5
                            xl:px-0 ">Grasp the chance to claim your well-deserved rewards! Gather the precious dragon eggs strewn across the land and unveil valuable treasures concealed within. </p>
                        </div>
                    </motion.div>



                    {/* featured  */}
                    <div className=" space-y-5 ">
                        <div className=" pt-10 pb-5">
                            <h2 className=" text-white font-dragonslapper  text-2xl xl:text-5xl text-center">Featured In:</h2>
                        </div>
                        {/* scroll animation */}
                        <div className=" [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-50px),transparent_100%)] max-w-[1320px] mx-auto" >
                            <div className="overflow-hidden whitespace-nowrap   ">
                                <div className="flex animate-scroll   gap-x-10 xl:gap-x-16 items-center ">
                                    <div className=" flex-shrink-0 ">
                                        <Image src="/assets/3sec/1.png" height={40} width={150} alt="Image 1" className="inline-block h-10 w-[150px]" />
                                    </div>
                                    <div className=" flex-shrink-0">
                                        <Image src="/assets/3sec/2.png" height={60} width={210} alt="Image 2" className="inline-block " />
                                    </div>
                                    <div className=" flex-shrink-0 ">
                                        <Image src="/assets/3sec/3.png" height={60} width={230} alt="Image 3" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0 ">
                                        <Image src="/assets/3sec/4.png" height={60} width={290} alt="Image 3" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0 ">
                                        <Image src="/assets/3sec/5.png" height={50} width={200} alt="Image 3" className="inline-block" />
                                    </div>
                                    {/* Repeat images to create an infinite scroll effect */}
                                    <div className=" flex-shrink-0 ">
                                        <Image src="/assets/3sec/1.png" height={40} width={150} alt="Image 1" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0 ">
                                        <Image src="/assets/3sec/2.png" height={60} width={210} alt="Image 2" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0 ">
                                        <Image src="/assets/3sec/3.png" height={60} width={230} alt="Image 3" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0 ">
                                        <Image src="/assets/3sec/4.png" height={60} width={290} alt="Image 3" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0 ">
                                        <Image src="/assets/3sec/5.png" height={50} width={200} alt="Image 3" className="inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>


            </section>
        </>
    )
}