import Image from "next/image";
import Link from "next/link";





export default function Footer() {
    return (
        <>
            <footer className=" bg-footer-bg bg-center bg-cover relative overflow-hidden">

                <div className=" max-w-8xl mx-5 2xl:mx-auto space-y-5 py-5  " >
                    {/* 1st list div element  */}
                    <div className="py-10 flex justify-between items-stretch md:flex-row md:items-start flex-col-reverse gap-10 xl:gap-0 xl:mx-28">
                        {/* 1st div  */}
                        <div className=" space-y-10 order-2 md:order-none ">
                            <h2 className=" text-xl xl:text-4xl text-white font-dragonslapper">Navigation</h2>
                            <ul className=" space-y-3">
                                <li>
                                    <Link href="/howtobuy" className="  hover:text-tree-poppy duration-500  text-base xl:text-xl text-white">How to buy</Link>
                                </li>
                                <li>
                                    <Link href="/#roadmap" className=" hover:text-tree-poppy duration-500  text-base xl:text-xl text-white">Roadmap</Link>
                                </li>
                                <li>
                                    <Link href="/#whitepaper" className=" hover:text-tree-poppy duration-500  text-base xl:text-xl text-white">Whitepaper</Link>
                                </li>
                                <li>
                                    <Link href="/#tokenomics" className=" hover:text-tree-poppy duration-500  text-base xl:text-xl text-white">Tokennomics</Link>
                                </li>
                            </ul>
                        </div>
                        {/* 2nd div  */}
                        <div className=" space-y-10 flex flex-col justify-center order-1 md:order-none ">
                            <h2 className=" text-xl xl:text-4xl text-white font-dragonslapper">Contact Us</h2>

                            <p className="text-base xl:text-xl text-white  " >Media & Marketing: <br /> <Link
                                rel="stylesheet" className="hover:text-tree-poppy duration-300" href="mailto:media@dragonbullrun.io" target="_blank" > media@dragonbullrun.io </Link></p>
                        </div>
                        {/* 3rd div  */}
                        <div className=" flex justify-center !order-3 md:order-none">
                            <Link href="/"><Image src="/assets/Logo2.png" className=" w-[220px] h-[90px]" alt="IMG" height={80} width={180} /></Link>
                        </div>

                    </div>


                    {/* 2nd copy right */}
                    <div className=" xl:px-28">
                        <p className=" text-sm md:text-lg text-white text-center md:text-end">© 2024 Dragon Bull Run. All rights reserved</p>
                    </div>
                    {/* line div */}
                    <div className=" h-[2px] bg-silver-color w-full flex justify-between ">

                    </div>
                    {/* copyright */}
                    <div  className=" xl:px-12">
                        <p className=" text-white text-sm text-center">Disclaimer: Digital currencies may be unregulated in your jurisdiction. The value of digital currencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}