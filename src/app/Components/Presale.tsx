"use client"
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { MdOutlineFileCopy } from "react-icons/md";

const cardVariants4: Variants = {
      offscreen: {
            x: -800,

      },
      onscreen: {
            x: 0,


            transition: {


                  duration: 3.0
            }
      }
};




export default function Presale() {
      const [copySuccess, setCopySuccess] = useState('');

      const copyToClipboard = (text: any) => {
            navigator.clipboard.writeText(text).then(() => {
                  setCopySuccess('Address Copied!');
                  setTimeout(() => setCopySuccess(''), 1000); // Clear message after 1 seconds
            }, (err) => {
                  setCopySuccess('Failed to copy!');
            });
      };
      return (
            <>
                  <section>
                        <div className=" bg-presale-bg bg-center bg-cover relative py-24" >
                              {/* Overlay with brightness filter */}
                              <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                              {/* main 2nd */}
                              <div className=" max-w-[1400px] mx-5 2xl:mx-auto brightness-100 ">
                                    <div className="flex justify-center py-5">
                                          <div className=" relative ">
                                                <Image src="/assets/buy/Ellipse1.png" className=" size-32" alt="img" height={300} width={300}></Image>
                                                <Image src="/assets/buy/Logo.png" className=" absolute top-0 w-[170px] h-[135px] left-0" alt="img" height={300} width={300}></Image>
                                          </div>
                                    </div>
                                    {/* address button */}
                                    <div className="brightness-100 space-y-5">
                                          <h2 className=" text-3xl md:text-5xl text-start xl:text-[70px] text-text-orange font-dragonslapper md:text-center py-5">Pre Sale Live Now</h2>
                                          <div className=" flex gap-5 items-center justify-center">
                                                <h3 className=" text-base md:text-2xl xl:text-3xl text-text-white2 font-bold text-start md:text-center w-[700px] line-clamp-1">Contract Address - 0xC955faa 911D7507aEE0c0d7a2d5a 79c79a041AB8</h3>
                                                <MdOutlineFileCopy className=" size-7 hover:text-text-orange duration-500 cursor-pointer text-white" onClick={() => copyToClipboard(' 0xC955faa 911D7507aEE0c0d7a2d5a 79c79a041AB8')} />

                                          </div>
                                          {copySuccess && (
                                                <div className="mt-2 w-36 text-center p-2 text-white bg-text-orange font-inter text-xs md:text-base absolute top-[120px] xl:top-14 lg:-top-10 right-0 xl:left-[71%] rounded-md">{copySuccess}</div>
                                          )}


                                          <div className=" space-y-2">
                                                <h3 className=" text-2xl md:text-3xl xl:text-[50px] font-bold text-end text-text-orange">3,750000000 </h3>
                                                <h4 className=" text-lg md:text-2xl xl:text-3xl font-medium text-end text-text-white2">/ 1,542,000,000</h4>
                                          </div>

                                          {/* progress Bar */}


                                          <div className=" flex items-center">
                                                <div className=" bg-progress-brown rounded-full px-5 py-5">
                                                      <div className=" w-[250px] md:w-[500px] xl:w-[1150px] overflow-hidden rounded-full    flex justify-start items-center">
                                                            <motion.div
                                                                  variants={cardVariants4}
                                                                  initial="offscreen"
                                                                  whileInView="onscreen"
                                                                  viewport={{ once: false, amount: 0.1 }}
                                                                  className="   bg-[#FF9D00] rounded-full w-[80%] ">
                                                                  <Image src="/assets/buy/progress.png" className=" w-full" alt="img" height={2000} width={2000}></Image>
                                                            </motion.div>

                                                      </div>
                                                </div>


                                                <Image src="/assets/buy/treasure.png" className=" size-24 md:size-56" alt="img" height={2000} width={2000}></Image>
                                          </div>
                                          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                                                <h2 className=" text-lg md:text-2xl xl:text-3xl text-text-white2 font-bold">0.04745536 USDT = 1 $DBRZ</h2>
                                                <h3 className=" text-lg md:text-2xl xl:text-3xl text-text-white2 font-normal">USDT Raised: 3,641,817.38 </h3>
                                          </div>
                                          <div className=" flex justify-center py-5">
                                                <Link><Button className="  !px-9 !py-8 bg-text-orange rounded text-3xl text-nav-black uppercase font-dragonslapper hover:scale-110 ">join presale</Button></Link>
                                          </div>



                                    </div>


                              </div>


                        </div>
                  </section>
            </>
      )

}