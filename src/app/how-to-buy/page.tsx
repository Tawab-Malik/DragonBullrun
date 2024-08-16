"use client"
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { MdOutlineFileCopy } from "react-icons/md";
import Presale from "../Components/Presale";






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





export default function HowtoBuy() {

      return (
            <>
                  <section>

                        {/* 1st component */}
                        <div className=" bg-buy-bg bg-cover bg-center py-24 relative">
                              {/* Overlay with brightness filter */}
                              <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                              <div className=" max-w-8xl mx-5 2xl:mx-auto brightness-100">
                                    <div className=" py-10">
                                          <h2 className=" text-3xl md:text-[50px] font-dragonslapper text-text-orange text-center">How to Buy</h2>
                                    </div>
                                    {/* both div combiner */}
                                    <div className=" space-y-56">
                                          {/* cards  */}
                                          <div className=" flex justify-center xl:flex-row flex-col items-center gap-10">
                                                {/* 1st card */}
                                                <motion.div
                                                      variants={cardVariants3}
                                                      initial="offscreen"
                                                      whileInView="onscreen"
                                                      viewport={{ once: true, amount: 0.1 }}
                                                      className=" bg-card-bg bg-cover w-[210px] md:w-[370px] h-[210px] md:h-[360px] relative ">
                                                      <Image src="/assets/buy/egg.png" className=" w-[70px] bottom-0 right-10 md:right-14 h-[90px] absolute" alt=" img" height={100} width={100}></Image>
                                                      <div className=" px-5 md:px-10 py-3 md:py-8 ">
                                                            <h2 className="  py-2 text-center text-[10px] md:text-3xl font-dragonslapper text-text-white2">Account Creation</h2>
                                                            <p className="w-[160px] md:w-56 leading-normal text-[8px] relative z-10 md:text-lg text-text-white2">To get started, click on  <Link href="/" ><Button className=" my-2  w-14 md:w-40 h-7 md:h-10 rounded uppercase text-[10px] md:text-sm bg-nav-black text-text-orange">Buy tokens</Button></Link>
                                                                  <br />to set up your account. This will enable you to track your purchases, redeem rewards, and manage your $DBRZ holdings efficiently.</p>
                                                      </div>

                                                </motion.div>
                                                {/* 2nd card */}
                                                <motion.div
                                                      variants={cardVariants3}
                                                      initial="offscreen"
                                                      whileInView="onscreen"
                                                      viewport={{ once: true, amount: 0.1 }}
                                                      className=" bg-card2-bg bg-cover w-[210px] md:w-[370px] h-[210px] md:h-[360px] relative ">
                                                      <Image src="/assets/buy/egg.png" className=" w-[70px] bottom-0 right-14 md:right-[6.5rem] h-[90px] absolute" alt=" img" height={100} width={100}></Image>
                                                      <div className="px-5 md:px-10 py-3 md:py-8">
                                                            <h2 className=" py-2 text-center text-xs md:text-3xl font-dragonslapper text-text-white2">Specify Amount</h2>
                                                            <p className=" leading-normal text-[10px] md:text-lg text-text-white2">After creating your account, proceed to the next screen and indicate the payment amount in USD.</p>
                                                      </div>

                                                </motion.div>
                                                {/* 3rd card */}
                                                <motion.div
                                                      variants={cardVariants3}
                                                      initial="offscreen"
                                                      whileInView="onscreen"
                                                      viewport={{ once: true, amount: 0.1 }}
                                                      className=" bg-card3-bg bg-cover w-full md:w-[600px] h-[200px] md:h-[360px] relative  ">
                                                      <Image src="/assets/buy/brokenegg.png" className=" w-[140px] bottom-0 right-[0.5rem] md:right-[5.5rem] h-[100px] absolute" alt=" img" height={100} width={100}></Image>
                                                      <div className="px-5 md:px-10 py-2 md:py-6">
                                                            <h2 className=" py-2 text-center text-xs md:text-3xl font-dragonslapper text-text-white2">Payment with Cryptocurrency</h2>
                                                            <p className=" leading-normal text-[8px] md:text-sm text-text-white2">Follow these instructions to finalize your purchase using cryptocurrency:
                                                            </p>
                                                            <div className=" text-text-white2 text-[8px] md:text-sm w-[90%] md:w-full">
                                                                  <li>Choose your preferred cryptocurrency from the dropdown menu.</li>
                                                                  <li>Click on ‘PAY NOW’ to proceed with your transaction.</li>
                                                                  <li className=" w-full md:w-[450px]">On the final screen, you can either copy the payment wallet address
                                                                        or scan the payment QR code.</li>
                                                                  <li className=" w-full md:w-[450px]">Ensure that the payment network matches the cryptocurrency
                                                                        network you’ve selected.</li>
                                                                  <li className=" w-full md:w-[450px]">Your account will be automatically updated after the
                                                                        required number of blockchain confirmations.</li>
                                                            </div>
                                                            <p className=" text-white text-[9px] md:text-sm w-full md:w-[300px]">Congratulations! Your purchase is now successfully completed</p>
                                                      </div>

                                                </motion.div>
                                          </div>





                                          {/* DBRZ contract */}
                                          <div className="max-w-[1400px] mx-0 xl:mx-auto brightness-100 space-y-10">


                                                <div className=" space-y-3">
                                                      <h2 className=" text-2xl font-bold text-text-white2">$DBRZ Contract</h2>
                                                      <p className=" text-xl font-medium text-text-white2">Utilize the contract details provided below to include $DBRZ in
                                                            your wallet.</p>
                                                </div>

                                                <form action="">
                                                      <div className=" grid grid-cols-1 md:grid-cols-2 gap-7">
                                                            {/* 1st col  */}
                                                            <motion.div
                                                                  variants={cardVariants3}
                                                                  initial="offscreen"
                                                                  whileInView="onscreen"
                                                                  viewport={{ once: true, amount: 0.1 }}
                                                                  className=" space-y-2">
                                                                  <label htmlFor="Contract Address" className=" text-xl text-text-white2">Contract Address</label>
                                                                  <Input size='lg' isRequired type="email" defaultValue="" className=" border border-text-orange rounded-[18px] h-14  w-full "
                                                                        classNames={{
                                                                              inputWrapper: ' !bg-transparent group-data-[focus=true]:bg-transparent w-full h-14',
                                                                              input: 'group-data-[has-value=true]:text-text-white2 !text-xl  '
                                                                        }
                                                                        } />

                                                            </motion.div>
                                                            {/* 2nd col  */}
                                                            <motion.div
                                                                  variants={cardVariants3}
                                                                  initial="offscreen"
                                                                  whileInView="onscreen"
                                                                  viewport={{ once: true, amount: 0.1 }}
                                                                  className=" space-y-2" >
                                                                  <label htmlFor="Token Type" className=" text-xl text-text-white2">Token Type</label>
                                                                  <Input size='lg' isRequired type="email" defaultValue="" className=" border border-text-orange rounded-[18px] h-14  w-full "
                                                                        classNames={{
                                                                              inputWrapper: ' !bg-transparent group-data-[focus=true]:bg-transparent w-full h-14',
                                                                              input: 'group-data-[has-value=true]:text-text-white2 !text-xl  '
                                                                        }
                                                                        } />

                                                            </motion.div>
                                                            {/* 3rd col  */}
                                                            <motion.div
                                                                  variants={cardVariants3}
                                                                  initial="offscreen"
                                                                  whileInView="onscreen"
                                                                  viewport={{ once: true, amount: 0.1 }}
                                                                  className=" space-y-2">
                                                                  <label htmlFor="Token Name" className=" text-xl text-text-white2">Token Name</label>
                                                                  <Input size='lg' isRequired type="email" defaultValue="" className=" border border-text-orange rounded-[18px] h-14  w-full "
                                                                        classNames={{
                                                                              inputWrapper: ' !bg-transparent group-data-[focus=true]:bg-transparent w-full h-14',
                                                                              input: 'group-data-[has-value=true]:text-text-white2 !text-xl  '
                                                                        }
                                                                        } />

                                                            </motion.div>
                                                            {/* 4th col  */}
                                                            <motion.div
                                                                  variants={cardVariants3}
                                                                  initial="offscreen"
                                                                  whileInView="onscreen"
                                                                  viewport={{ once: true, amount: 0.1 }}
                                                                  className=" space-y-2">
                                                                  <label htmlFor="Token symbol" className=" text-xl text-text-white2">Token Symbol</label>
                                                                  <Input size='lg' isRequired type="email" defaultValue="" className=" border border-text-orange rounded-[18px] h-14  w-full "
                                                                        classNames={{
                                                                              inputWrapper: ' !bg-transparent group-data-[focus=true]:bg-transparent w-full h-14',
                                                                              input: 'group-data-[has-value=true]:text-text-white2 !text-xl  '
                                                                        }
                                                                        } />

                                                            </motion.div>
                                                            {/* 5th col  */}
                                                            <motion.div
                                                                  variants={cardVariants3}
                                                                  initial="offscreen"
                                                                  whileInView="onscreen"
                                                                  viewport={{ once: true, amount: 0.1 }}
                                                                  className=" space-y-2">
                                                                  <label htmlFor="Decimal" className=" text-xl text-text-white2">Decimal</label>
                                                                  <Input size='lg' isRequired type="email" defaultValue="" className=" border border-text-orange rounded-[18px] h-14  w-full "
                                                                        classNames={{
                                                                              inputWrapper: ' !bg-transparent group-data-[focus=true]:bg-transparent w-full h-14',
                                                                              input: 'group-data-[has-value=true]:text-text-white2 !text-xl  '
                                                                        }
                                                                        } />

                                                            </motion.div>
                                                      </div>
                                                      <motion.div
                                                            variants={cardVariants3}
                                                            initial="offscreen"
                                                            whileInView="onscreen"
                                                            viewport={{ once: true, amount: 0.1 }}
                                                            className=" md:flex justify-center py-10  ">
                                                            <div className=" flex justify-center py-5">
                                                                  <Link><Button className="  !px-9 !py-8 bg-text-orange rounded text-3xl text-nav-black uppercase font-dragonslapper hover:scale-110 ">buy now</Button></Link>
                                                            </div>
                                                      </motion.div>

                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </div>



                        {/* 2nd component */}
                        <Presale />


                  </section>
            </>
      )
}