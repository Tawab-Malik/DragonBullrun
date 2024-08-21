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

      const copyToClipboard = (text: string) => {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    setCopySuccess('Address Copied!');
                    setTimeout(() => setCopySuccess(''), 1000);
                }).catch((err) => {
                    setCopySuccess('Failed to copy!');
                });
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    setCopySuccess('Address Copied!');
                } catch (err) {
                    setCopySuccess('Failed to copy!');
                }
                document.body.removeChild(textArea);
                setTimeout(() => setCopySuccess(''), 1000);
            }
        };
      return (
            <>
                  <section>
                        <div className=" bg-presale-bg bg-center bg-cover relative pb-16 pt-10 md:pt-20" >
                            
                              {/* main 2nd */}
                              <div className=" max-w-[1400px] mx-5 2xl:mx-auto  ">
                                    <div className="flex justify-center py-5">
                                          <div className=" relative ">
                                                <Image src="/assets/buy/Ellipse1.png" className=" size-32" alt="img" height={300} width={300}></Image>
                                                <Image src="/assets/buy/Logo.png" className=" absolute top-0 w-[170px] h-[135px] left-0" alt="img" height={300} width={300}></Image>
                                          </div>
                                    </div>
                                    {/* address button */}
                                    <div className=" ">
                                          <h2 className=" text-3xl md:text-5xl text-start xl:text-[70px] text-tree-poppy font-dragonslapper md:text-center py-5">Pre Sale Live Now</h2>
                                          <div className=" flex gap-5 items-center justify-center">
                                                <h3 className=" text-base md:text-2xl xl:text-3xl text-white font-bold text-start md:text-center w-full">Contract Address - 0xC955faa 911D7507aEE0c0d7a2d5a 79c79a041AB8</h3>
                                                <MdOutlineFileCopy className=" size-10 md:size-7 hover:text-tree-poppy duration-500 cursor-pointer text-white" onClick={() => copyToClipboard(' 0xC955faa 911D7507aEE0c0d7a2d5a 79c79a041AB8')} />

                                          </div>
                                          {copySuccess && (
                                                <div className="mt-2 w-28 md:w-36 text-center p-2 text-white bg-tree-poppy font-inter text-xs md:text-base absolute top-64 md:top-32 xl:top-14 lg:-top-10 right-0 xl:left-[93%] rounded-md">{copySuccess}</div>
                                          )}


                                          <div className=" space-y-2 pt-5">
                                                <h3 className=" text-2xl md:text-3xl xl:text-5xl font-bold text-end text-tree-poppy">3,750000000 </h3>
                                                <h4 className=" text-lg md:text-2xl xl:text-3xl font-medium text-end text-white">/ 1,542,000,000</h4>
                                          </div>

                                          {/* progress Bar */}


                                          <div className=" flex items-center justify-center py-3">
                                                <div className=" bg-progress-brown rounded-full px-5 py-3 md:py-4">
                                                      <div className=" w-full  2xl:w-[1150px] overflow-hidden rounded-full    flex justify-start items-center">
                                                            <div
                                                                  // variants={cardVariants4}
                                                                  // initial="offscreen"
                                                                  // whileInView="onscreen"
                                                                  // viewport={{ once: false, amount: 0.1 }}
                                                                  className=" h-5 md:h-12   bg-[#FF9D00] rounded-full w-[80%] ">
                                                                  <Image src="/assets/buy/progress.png" className=" h-full rounded-full w-full" alt="img" height={2000} width={2000}></Image>
                                                            </div>

                                                      </div>
                                                </div>


                                                <Image src="/assets/buy/treasure.png" className=" h-16 w-24 md:h-44 md:w-60" alt="img" height={2000} width={2000}></Image>
                                          </div>
                                          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                                                <h2 className=" text-lg md:text-2xl xl:text-3xl text-white font-bold">0.04745536 USDT = 1 $DBRZ</h2>
                                                <h3 className=" text-lg md:text-2xl xl:text-3xl text-white font-normal">USDT Raised: 3,641,817.38 </h3>
                                          </div>
                                          <div className=" flex justify-center py-5">
                                                <Link><Button className=" px-7  md:!px-9 py-6 md:!py-8 bg-tree-poppy rounded text-xl md:text-3xl text-nav-black uppercase font-dragonslapper  ">join presale</Button></Link>
                                          </div>



                                    </div>


                              </div>


                        </div>
                  </section>
            </>
      )

}