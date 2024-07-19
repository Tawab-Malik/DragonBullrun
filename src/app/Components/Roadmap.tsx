import Image from "next/image";

const data = [
    {
        id: 1,
        imgSrc: "/assets/roadmap/egg1.png",
        buttonText: "Button 1",
        h2: "Phase 1",
        para: "Publish Whitepaper Token Audit Launch Website Presale Begins",
    },
    {
        id: 2,
        imgSrc: "/assets/roadmap/egg2.png",
        buttonText: "Button 1",
        h2: "Phase 2",
        para: "Marketing Begins Teaser Video Giveaways",
    },
    {
        id: 3,
        imgSrc: "/assets/roadmap/egg3.png",
        buttonText: "Button 1",
        h2: "Phase 3",
        para: "Further marketing PR blast",
    },
    {
        id: 4,
        imgSrc: "/assets/roadmap/egg4.png",
        buttonText: "Button 1",
        h2: "Phase 4",
        para: "Start development of NFT Marketplace More promos and giveaways ",
    },
    {
        id: 5,
        imgSrc: "/assets/roadmap/egg4.png",
        buttonText: "Button 1",
        h2: "Phase 5",
        para: "Start development of P2E game Coin gecko listingCmc listing",
    },
    {
        id: 6,
        imgSrc: "/assets/roadmap/egg6.png",
        buttonText: "Button 1",
        h2: "Phase 6",
        para: "NFT marketplace Launch Uniswap TGE ",
    },
    {
        id: 7,
        imgSrc: "/assets/roadmap/egg7.png",
        buttonText: "Button 1",
        h2: "Phase 7",
        para: "Game Launch V1",
    },
];

export default function Roadmap() {
    return (
        <>
            <section className="relative bg-roadmap-bg bg-center bg-cover py-24">
                {/* Overlay with brightness filter */}
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="brightness-100 gap-20 space-y-28 md:space-y-24 xl:space-y-24">
                    <div className="max-w-6xl mx-5 xl:mx-auto space-y-5">
                        <h2 className="text-5xl xl:text-[70px] text-text-orange font-dragonslapper text-start xl:text-center">
                            Road Map
                        </h2>
                        <p className="text-start xl:text-center text-base xl:text-2xl text-text-white2 font-medium">
                            Please be aware that the 7 stages of the roadmap operate
                            independently from the phases of the presale and are susceptible
                            to modifications.
                        </p>
                    </div>
                    {/* Cards */}
                    <div className=" pt-5 max-w-7xl  2xl:max-w-8xl mx-5 xl:mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-24 xl:gap-24 place-items-center 2xl:gap-5" >
                        {/* 1st card  */}

                        <div className=" flex bg-nav-black  justify-end  rounded-3xl relative w-full 2xl:w-[390px] h-[250px]  ">
                            <Image src="/assets/roadmap/egg1.png" alt="img" width={500} height={500} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col w-[160px] xl:w-[240px] justify-center  p-2 md:p-1 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2  ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                    Phase 1
                                </h2>
                                <p className=" text-sm xl:text-xl text-text-white2 text-center">
                                    Publish Whitepaper Token Audit Launch Website Presale Begins
                                </p>
                            </div>
                        </div>
                        {/* 2st card  */}

                        <div className=" flex bg-nav-black justify-end   rounded-3xl relative w-full 2xl:w-[390px] h-[250px]  ">
                            <Image src="/assets/roadmap/egg2.png" alt="img" width={500} height={500} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col w-[160px] xl:w-[240px] justify-center  p-2 md:p-1 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2  ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                    Phase 2
                                </h2>
                                <p className=" text-sm xl:text-xl text-text-white2 text-center">
                                    Publish Whitepaper Token Audit Launch Website Presale Begins
                                </p>
                            </div>
                        </div>
                        {/* 3st card  */}

                        <div className=" flex bg-nav-black justify-end   rounded-3xl relative  w-full 2xl:w-[390px] h-[250px]  ">
                            <Image src="/assets/roadmap/egg3.png" alt="img" width={500} height={500} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col w-[160px] xl:w-[240px] justify-center  p-2 md:p-1 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2 ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                    Phase 3
                                </h2>
                                <p className=" text-sm xl:text-xl text-text-white2 text-center">
                                    Publish Whitepaper Token Audit Launch Website Presale Begins
                                </p>
                            </div>
                        </div>
                        {/* 4st card  */}

                        <div className=" flex bg-nav-black justify-end   rounded-3xl relative  w-full 2xl:w-[390px] h-[250px]  ">
                            <Image src="/assets/roadmap/egg4.png" alt="img" width={500} height={500} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                            />
                            {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                            <div className=" flex flex-col w-[160px] xl:w-[240px] justify-center  p-2 md:p-1 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2  ">
                                <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                    Phase 4
                                </h2>
                                <p className=" text-sm xl:text-xl text-text-white2 text-center">
                                    Publish Whitepaper Token Audit Launch Website Presale Begins
                                </p>
                            </div>
                        </div>
                        {/* 5st card  */}

                        <div className=" block 2xl:hidden w-full 2xl:w-[390px] h-[250px]  rounded-3xl bg-nav-black  ">
                            <div className=" flex bg-nav-black justify-end   rounded-3xl relative  2xl:w-[390px] h-[250px]    ">
                                <Image src="/assets/roadmap/egg4.png" alt="img" width={500} height={500} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                                />
                                {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                                <div className=" flex flex-col w-[160px] xl:w-[240px] justify-center  p-2 md:p-1 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2  ">
                                    <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                        Phase 5
                                    </h2>
                                    <p className=" text-sm xl:text-xl text-text-white2 text-center">
                                        Publish Whitepaper Token Audit Launch Website Presale Begins
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 6st card  */}
                        <div className=" block 2xl:hidden w-full 2xl:w-[390px] h-[250px] rounded-3xl bg-nav-black    ">
                            <div className=" flex bg-nav-black justify-end   rounded-3xl relative  2xl:w-[390px] h-[250px]    ">
                                <Image src="/assets/roadmap/egg6.png" alt="img" width={500} height={500} className="w-[180px] -left-4 absolute h-[300px] bottom-0 xl:h-[330px] "
                                />
                                {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                                <div className=" flex flex-col w-[160px] xl:w-[240px] justify-center  p-2 md:p-1 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2  ">
                                    <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                        Phase 6
                                    </h2>
                                    <p className=" text-sm xl:text-xl text-text-white2 text-center">
                                        Publish Whitepaper Token Audit Launch Website Presale Begins
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 7st card  */}
                        <div className=" block 2xl:hidden w-full 2xl:w-[390px] h-[250px]   md:col-span-1 xl:col-start-2 xl:col-span-1 2xl:col-start-auto  rounded-3xl bg-nav-black  ">
                            <div className=" flex justify-end   relative  2xl:w-[390px] h-[250px]   ">
                                <Image src="/assets/roadmap/egg7.png" alt="img" width={500} height={500} className="w-[180px] -left-4 absolute h-[300px] bottom-0 xl:h-[330px] "
                                />
                                {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                                <div className=" flex flex-col w-[160px] xl:w-[240px] justify-center  p-2 md:p-1 xl:p-7 2xl:p-5 gap-10 md:gap-5 space-y-2   ">
                                    <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                        Phase 7
                                    </h2>
                                    <p className=" text-sm xl:text-xl text-text-white2 text-center">
                                        Publish Whitepaper Token Audit Launch Website Presale Begins
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                    {/* 2nd cart */}
                    <div className=" hidden 2xl:block">
                        <div className="  max-w-7xl mx-5 2xl:mx-auto gap-5 flex">
                            {/* 5st card  */}

                            <div className=" flex bg-nav-black justify-end   rounded-3xl relative  w-full 2xl:w-[390px] h-[250px]  ">
                                <Image src="/assets/roadmap/egg4.png" alt="img" width={500} height={500} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                                />
                                {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                                <div className=" flex flex-col max-w-[240px] justify-center  p-9 md:p-7 2xl:p-5 gap-5 w-full space-y-2  ">
                                    <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                        Phase 5
                                    </h2>
                                    <p className=" text-sm xl:text-xl text-text-white2 text-center">
                                        Publish Whitepaper Token Audit Launch Website Presale Begins
                                    </p>
                                </div>
                            </div>
                            {/* 6st card  */}

                            <div className=" flex bg-nav-black justify-end   rounded-3xl relative  w-full 2xl:w-[390px] h-[250px]  ">
                                <Image src="/assets/roadmap/egg6.png" alt="img" width={500} height={500} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                                />
                                {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                                <div className=" flex flex-col max-w-[240px] justify-center  p-9 md:p-7 2xl:p-5 gap-5 w-full space-y-2  ">
                                    <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                        Phase 6
                                    </h2>
                                    <p className=" text-sm xl:text-xl text-text-white2 text-center">
                                        Publish Whitepaper Token Audit Launch Website Presale Begins
                                    </p>
                                </div>
                            </div>
                            {/* 7st card  */}

                            <div className=" flex bg-nav-black justify-end   rounded-3xl relative  w-full 2xl:w-[390px] h-[250px]   ">
                                <Image src="/assets/roadmap/egg7.png" alt="img" width={500} height={500} className="w-[180px] left-0 absolute h-[300px] bottom-0 xl:h-[330px] "
                                />
                                {/* <div className=" w-full md:w-[60%] 2xl:w-[90%] shadow-md">
                                
                            </div> */}
                                <div className=" flex flex-col max-w-[240px] justify-center  p-9 md:p-7 2xl:p-5 gap-5 w-full space-y-2  ">
                                    <h2 className="text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">
                                        Phase 7
                                    </h2>
                                    <p className=" text-sm xl:text-xl text-text-white2 text-center">
                                        Publish Whitepaper Token Audit Launch Website Presale Begins
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
