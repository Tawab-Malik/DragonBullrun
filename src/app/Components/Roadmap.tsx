import Image from "next/image";

const data = [
    { id: 1, imgSrc: '/assets/roadmap/egg1.png', buttonText: 'Button 1', h2: 'Phase 1', para: 'Publish Whitepaper Token Audit Launch Website Presale Begins' },
    { id: 2, imgSrc: '/assets/roadmap/egg2.png', buttonText: 'Button 1', h2: 'Phase 2', para: 'Publish Whitepaper Token Audit Launch Website Presale Begins' },
    { id: 3, imgSrc: '/assets/roadmap/egg3.png', buttonText: 'Button 1', h2: 'Phase 3', para: 'Publish Whitepaper Token Audit Launch Website Presale Begins' },
    { id: 4, imgSrc: '/assets/roadmap/egg4.png', buttonText: 'Button 1', h2: 'Phase 4', para: 'Publish Whitepaper Token Audit Launch Websit Presale Begins' },
    
];





export default function Roadmap() {
    return (
        <>
            <section className=" relative bg-roadmap-bg bg-center bg-cover py-24">
                {/* Overlay with brightness filter */}
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className=" brightness-100 gap-20 space-y-28 md:space-y-24 xl:space-y-10">
                    <div className=" max-w-6xl mx-5 xl:mx-auto space-y-5">
                        <h2 className="text-5xl xl:text-[70px] text-text-orange font-dragonslapper text-start xl:text-center">Road Map</h2>
                        <p className=" text-start xl:text-center text-base xl:text-2xl text-text-white2 font-medium">Please be aware that the 7 stages of the roadmap operate independently from the phases of the presale and are susceptible to modifications.</p>
                    </div>
                    {/* cards */}
                    <div className=" max-w-8xl mx-5 xl:mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center 2xl:grid-cols-4 gap-28 md:gap-5  ">
                        {data.map((item) => (
                            <>
                                <div className="flex bg-nav-black w-full xl:w-[390px] h-[240px] items-center   rounded-3xl">
                                    <div
                                        key={item.id}
                                        className="w-[90%]  shadow-md  "
                                    >
                                        <Image
                                            src={item.imgSrc}
                                            alt={`Image ${item.id}`}
                                            width={300}
                                            height={200}
                                            className="w-[180px] h-[330px] mt-[-120px] "
                                        />

                                    </div>
                                    <div className="p-4 w-full space-y-2 ">
                                        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                            {item.buttonText}
                                        </button> */}
                                        <h2 className=" text-3xl xl:text-5xl font-dragonslapper text-text-orange text-center">{item.h2}</h2>
                                        <p className=" text-xl text-text-white2 text-center">{item.para}</p>
                                    </div>
                                </div>

                            </>

                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}