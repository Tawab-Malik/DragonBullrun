import Image from "next/image"




export default function Benefits() {
    return (
        <>
            <section className=" bg-sec3-img bg-center bg-cover py-20 relative ">
                {/* Overlay with brightness filter */}
                <div className="absolute inset-0 bg-black opacity-20 "></div>

                <div className=" max-w-8xl mx-5 xl:mx-auto">
                    <div className=" brightness-100 space-y-5 ">
                        <h2 className=" text-5xl xl:text-[70px] font-dragonslapper text-start xl:text-center text-text-orange">BEnefits</h2>
                        <p className=" text-text-white2 text-base md:text-2xl font-medium text-start xl:text-center">Run from the dragon to earn income and rewards.</p>
                    </div>


                    {/* main div card */}
                    <div className=" grid-cols-1 gap-10 md:gap-0 lg:grid-cols-2 place-items-center grid 2xl:grid-cols-3 py-12">
                        {/* card1 */}
                        <div className=" bg-cover  relative h-[200px] w-[300px] md:h-[400px] md:w-[570px] bg-sec3-cart-img px-10 md:px-24 py-8 md:py-20 space-y-1 md:space-y-3 ">

                            <h2 className=" text-center z-10 relative font-dragonslapper text-2xl md:text-6xl text-black">Play</h2>
                            <p className="text-text-black  text-xs md:text-xl text-center relative z-10">Dive into a mesmerizing realm where ancient legends spring to life. Assume the persona of a bold adventurer as you enter the dragon’s lair, prepared to confront challenges and conquer obstacles on your quest for glory. </p>
                        </div>
                        {/* card2 */}
                        <div className=" bg-cover  relative h-[200px] w-[300px] md:h-[400px] md:w-[570px] bg-sec3-cart-img px-10 md:px-24 py-8 md:py-20 space-y-1 md:space-y-3  ">

                            <h2 className=" text-center z-10 relative font-dragonslapper text-2xl md:text-6xl text-black">Run</h2>
                            <p className="text-text-black  text-xs md:text-xl text-center relative z-10">Experience the rush of adrenaline surging through your veins as you traverse perilous landscapes, evade fiery obstacles, and out manoeuvres cunning foes. The journey to triumph is filled with hazards, yet bravery is rewarded by fortune.</p>
                        </div>
                        {/* card3 */}
                        <div className=" 2xl:block hidden bg-cover  relative h-[200px] w-[300px] md:h-[400px] md:w-[570px] bg-sec3-cart-img px-10 md:px-24 py-8 md:py-20 space-y-1 md:space-y-3   ">

                            <h2 className=" text-center z-10 relative font-dragonslapper text-2xl md:text-6xl text-black">Earn</h2>
                            <p className=" text-text-black  text-xs md:text-xl text-center relative z-10">Grasp the chance to claim your well-deserved rewards! Gather the precious dragon eggs strewn across the land and unveil valuable treasures concealed within. </p>
                        </div>
                    </div>
                    {/* single card  */}
                    {/* card3 */}
                    <div className=" flex justify-center 2xl:hidden">
                        <div className=" bg-cover  relative h-[200px] w-[300px] md:h-[400px] md:w-[570px] bg-sec3-cart-img px-10 md:px-24 py-8 md:py-20 space-y-1 md:space-y-3   ">

                            <h2 className=" text-center z-10 relative font-dragonslapper text-2xl md:text-6xl text-black">Earn</h2>
                            <p className=" text-text-black  text-xs md:text-xl text-center relative z-10">Grasp the chance to claim your well-deserved rewards! Gather the precious dragon eggs strewn across the land and unveil valuable treasures concealed within. </p>
                        </div>
                    </div>



                    {/* featured  */}
                    <div className=" space-y-5">
                        <div className=" py-10">
                            <h1 className=" text-text-white2 font-dragonslapper brightness-100 text-2xl xl:text-5xl text-center">AS FEATURED IN:</h1>
                        </div>
                        {/* scroll animation */}
                        <div className=" [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] max-w-7xl mx-auto" >
                            <div className="overflow-hidden whitespace-nowrap ">
                                <div className="flex animate-scroll   gap-10 xl:gap-28 items-center">
                                    <div className=" flex-shrink-0">
                                        <Image src="/assets/3sec/1.png" height={40} width={150} alt="Image 1" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0">
                                        <Image src="/assets/3sec/2.png" height={60} width={210} alt="Image 2" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0">
                                        <Image src="/assets/3sec/3.png" height={60} width={230} alt="Image 3" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0">
                                        <Image src="/assets/3sec/4.png" height={60} width={290} alt="Image 3" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0">
                                        <Image src="/assets/3sec/5.png" height={50} width={200} alt="Image 3" className="inline-block" />
                                    </div>
                                    {/* Repeat images to create an infinite scroll effect */}
                                    <div className=" flex-shrink-0">
                                        <Image src="/assets/3sec/1.png" height={40} width={150} alt="Image 1" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0">
                                        <Image src="/assets/3sec/2.png" height={60} width={210} alt="Image 2" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0">
                                        <Image src="/assets/3sec/3.png" height={60} width={230} alt="Image 3" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0">
                                        <Image src="/assets/3sec/4.png" height={60} width={290} alt="Image 3" className="inline-block" />
                                    </div>
                                    <div className=" flex-shrink-0">
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