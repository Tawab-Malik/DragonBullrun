import Image from "next/image";
import Link from "next/link";





export default function Footer() {
    return (
        <>
            <footer className=" bg-footer-bg bg-center bg-cover relative">
                {/* Overlay with brightness filter */}
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className=" max-w-8xl mx-5 2xl:mx-auto space-y-5 py-5 brightness-100 " >
                    {/* 1st list div element  */}
                    <div className="py-10 flex justify-between md:flex-row flex-col-reverse gap-10 xl:gap-0">
                        {/* 1st div  */}
                        <div className=" space-y-10 ">
                            <h2 className=" text-xl xl:text-4xl text-text-white2 font-dragonslapper">Navigation</h2>
                            <ul className=" space-y-3">
                                <li>
                                    <Link href="" className="  hover:text-text-orange duration-500  text-base xl:text-xl text-text-white2">How to buy</Link>
                                </li>
                                <li>
                                    <Link href="" className=" hover:text-text-orange duration-500  text-base xl:text-xl text-text-white2">Roadmap</Link>
                                </li>
                                <li>
                                    <Link href="" className=" hover:text-text-orange duration-500  text-base xl:text-xl text-text-white2">Whitepaper</Link>
                                </li>
                                <li>
                                    <Link href="" className=" hover:text-text-orange duration-500  text-base xl:text-xl text-text-white2">Tokennomics</Link>
                                </li>
                            </ul>
                        </div>
                        {/* 2nd div  */}
                        <div className=" space-y-10 ">
                            <h2 className=" text-xl xl:text-4xl text-text-white2 font-dragonslapper">Contact Us</h2>
                            <ul>
                                <li className=" text-base xl:text-xl text-text-white2">
                                    Media & Marketing: media@dragonbullrun.io
                                </li>

                            </ul>
                        </div>
                        {/* 3rd div  */}
                        <div className=" flex justify-center">
                            <Link href="/"><Image src="/assets/Logo2.png" className=" w-[220px] h-[100px] xl:w-[295px] xl:h-[145px]" alt="IMG" height={200} width={200} /></Link>
                        </div>

                    </div>


                    {/* 2nd copy right */}
                    <div>
                        <p className=" text-lg text-text-white2 text-center md:text-end">© 2024 Dragon Bull Run. All rights reserved</p>
                    </div>
                    {/* line div */}
                    <div className=" h-[2px] bg-silver-color w-full flex justify-around">
                        <div className=" h-[2px] bg-text-white2 w-40"></div>
                        <div className=" h-[2px] bg-text-white2 w-40"></div>

                    </div>
                    {/* copyright */}
                    <div>
                        <p className=" text-text-white2 text-sm text-center">Disclaimer: Digital currencies may be unregulated in your jurisdiction. The value of digital currencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}