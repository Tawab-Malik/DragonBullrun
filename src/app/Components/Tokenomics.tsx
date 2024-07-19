import Image from "next/image"




export default function Tokenomics() {
    return (
        <>
            <section className=" bg-token-bg bg-center bg-cover py-20 relative    ">
                
                <Image src="/assets/token/upbg.png" alt="img" className=" absolute h-60 top-0 w-full" height={1000} width={1000}></Image>
                <div className=" max-w-7xl mx-5 xl:mx-auto  space-y-24 relative z-10">

                    <div className=" space-y-5">
                        <h2 className=" text-text-orange text-start xl:text-center text-5xl xl:text-[70px] font-dragonslapper">Tokenomics</h2>
                        <p className=" text-base xl:text-3xl font-bold text-text-white2 text-start xl:text-center">Total token supply: 8,888,888,888 $DBRZ</p>
                    </div>

                    {/* token divs */}
                    <div className=" space-y-20">
                        {/* 1st div  */}
                        <div className=" flex justify-between gap-5 xl:gap-0 items-center">
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
                        </div>
                        {/* 2st div  */}
                        <div className=" flex justify-between items-center  gap-5">
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
                        </div>
                           {/* 3st div  */}
                           <div className=" max-w-5xl mx-5 xl:mx-auto flex justify-between items-center  gap-5">
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
                        </div>
                    </div>





                </div>
            </section>
        </>
    )
}