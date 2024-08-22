"use client"
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
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

                  <section className=" overflow-hidden">

                        {/* 1st component */}
                        <div className=" bg-buy-bg bg-cover bg-center  pb-10 pt-24 relative">

                              <div className=" max-w-[1450px] mx-5 2xl:mx-auto ">
                                    <div className=" pb-20">
                                          <h2 className=" text-3xl md:text-5xl font-dragonslapper text-tree-poppy text-center">How to Buy</h2>
                                    </div>
                                    {/* both div combiner */}
                                    
                                    

                                          {/* for check  */}
                                          <div className=" flex flex-col 2xl:flex-row justify-center items-center gap-8 w-full h-full">
                                                <div className=" flex gap-x-8 md:flex-row flex-col gap-y-8 w-full 2xl:w-[51%] h-full">
                                                      {/* 1st card */}
                                                      <motion.div
                                                            variants={cardVariants3}
                                                            initial="offscreen"
                                                            whileInView="onscreen"
                                                            viewport={{ once: true, amount: 0.1 }}
                                                            className=" bg-card-bg  bg-center bg-cover w-full  h-full  relative 2xl:w-[50%] ">
                                                            <Image src="/assets/buy/egg.png" className=" w-[70px] bottom-0 right-10 md:right-14 h-[90px] absolute" alt=" img" height={100} width={100}></Image>
                                                            <div className=" px-5 md:px-7 py-3 md:py-5 ">
                                                                  <h2 className="  py-2 text-center text-xl md:text-3xl font-dragonslapper text-white">Account Creation</h2>
                                                                  <p className="w-full mr-10 md:ml-0 2xl:pr-28  leading-normal text-base md:text-xl xl:text-base relative z-10  text-white">To get started, click on <br />  <Link href="/" ><Button className=" font-dragonslapper my-5 py-5 px-6 md:px-8 rounded uppercase text-[10px] md:text-sm xl:text-base bg-nav-black text-tree-poppy">Buy tokens</Button></Link>
                                                                        <br />to set up your account. This will enable you to track your purchases, redeem rewards, and manage your $DBRZ holdings efficiently.</p>
                                                            </div>

                                                      </motion.div>
                                                      {/* 2nd card */}
                                                      <motion.div
                                                            variants={cardVariants3}
                                                            initial="offscreen"
                                                            whileInView="onscreen"
                                                            viewport={{ once: true, amount: 0.1 }}
                                                            className=" bg-card2-bg bg-center  bg-cover w-full  h-auto  relative 2xl:w-[50%] ">
                                                            <Image src="/assets/buy/egg.png" className=" w-[70px] bottom-0 right-14 md:right-[6.5rem] h-[90px] absolute" alt=" img" height={100} width={100}></Image>
                                                            <div className="px-5 md:px-7 py-3 md:py-5 xl:px-6">
                                                                  <h2 className=" py-2 text-center text-xl md:text-3xl font-dragonslapper text-white">Specify Amount</h2>
                                                                  <p className=" relative md:text-center leading-normal text-base md:text-xl xl:text-base text-white">After creating your account, proceed to the next screen and indicate the payment amount in USD.</p>
                                                            </div>

                                                      </motion.div>
                                                </div>
                                                <div className=" w-full xl:w-[50%] 2xl:w-[40%]">
                                                      {/* 3rd card */}
                                                      <motion.div
                                                            variants={cardVariants3}
                                                            initial="offscreen"
                                                            whileInView="onscreen"
                                                            viewport={{ once: true, amount: 0.1 }}
                                                            className=" bg-card3-bg bg-center bg-cover w-full xl:w-[600px] 2xl:w-full h-full  relative  ">
                                                            <Image src="/assets/buy/brokenegg.png" className=" w-[140px] bottom-0 right-[0.5rem] md:right-[5.5rem] h-[100px] absolute" alt=" img" height={100} width={100}></Image>
                                                            <div className="px-5 md:px-7 py-3 md:py-5">
                                                                  <h2 className=" py-2 text-center text-xl md:text-3xl font-dragonslapper text-white">Payment with Cryptocurrency</h2>
                                                                  <p className=" leading-normal text-base md:text-xl xl:text-base font-bold text-white">Follow these instructions to finalize your purchase using cryptocurrency:
                                                                  </p>
                                                                  <div className=" text-white text-sm md:text-xl xl:text-sm w-[90%] md:w-full">
                                                                        <li>Choose your preferred cryptocurrency from the dropdown menu.</li>
                                                                        <li>Click on ‘PAY NOW’ to proceed with your transaction.</li>
                                                                        <li className=" w-full md:w-[450px]">On the final screen, you can either copy the payment wallet address
                                                                              or scan the payment QR code.</li>
                                                                        <li className=" w-full md:w-[450px]">Ensure that the payment network matches the cryptocurrency
                                                                              network you’ve selected.</li>
                                                                        <li className=" w-full md:w-[450px]">Your account will be automatically updated after the
                                                                              required number of blockchain confirmations.</li>
                                                                  </div>
                                                                  <p className=" text-white text-lg md:text-lg xl:text-sm w-full relative md:w-[300px]">Congratulations! Your purchase is now successfully completed</p>
                                                            </div>

                                                      </motion.div>
                                                </div>
                                          </div>





                                          {/* DBRZ contract */}
                                          <div className="max-w-[1400px] mx-0 xl:mx-auto brightness-100 space-y-10 pt-20 xl:pt-80">


                                                <div className=" space-y-3">
                                                      <h2 className=" text-2xl font-bold text-white">$DBRZ Contract</h2>
                                                      <p className=" text-xl font-medium text-white">Utilize the contract details provided below to include $DBRZ in
                                                            your wallet.</p>
                                                </div>

                                                <form action="">
                                                      <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
                                                            {/* 1st col  */}
                                                            <motion.div
                                                                  variants={cardVariants3}
                                                                  initial="offscreen"
                                                                  whileInView="onscreen"
                                                                  viewport={{ once: true, amount: 0.1 }}
                                                                  className=" space-y-5">
                                                                  <label htmlFor="Contract Address" className=" text-xl text-white">Contract Address</label>
                                                                  <Input size='lg' isRequired type="email" defaultValue="" className=" border border-tree-poppy rounded-2xl roun roun !py-0  w-full "
                                                                        classNames={{
                                                                              inputWrapper: ' !bg-transparent group-data-[focus=true]:bg-transparent w-full !py-4 h-auto',
                                                                              input: 'group-data-[has-value=true]:text-white !text-xl  '
                                                                        }
                                                                        } />

                                                            </motion.div>
                                                            {/* 2nd col  */}
                                                            <motion.div
                                                                  variants={cardVariants3}
                                                                  initial="offscreen"
                                                                  whileInView="onscreen"
                                                                  viewport={{ once: true, amount: 0.1 }}
                                                                  className=" space-y-5" >
                                                                  <label htmlFor="Token Type" className=" text-xl text-white">Token Type</label>
                                                                  <Input size='lg' isRequired type="email" defaultValue="" className=" border border-tree-poppy rounded-2xl py-0  w-full "
                                                                        classNames={{
                                                                              inputWrapper: ' !bg-transparent group-data-[focus=true]:bg-transparent w-full !py-4 h-auto',
                                                                              input: 'group-data-[has-value=true]:text-white !text-xl  '
                                                                        }
                                                                        } />

                                                            </motion.div>
                                                            {/* 3rd col  */}
                                                            <motion.div
                                                                  variants={cardVariants3}
                                                                  initial="offscreen"
                                                                  whileInView="onscreen"
                                                                  viewport={{ once: true, amount: 0.1 }}
                                                                  className=" space-y-5">
                                                                  <label htmlFor="Token Name" className=" text-xl text-white">Token Name</label>
                                                                  <Input size='lg' isRequired type="email" defaultValue="" className=" border border-tree-poppy rounded-2xl py-0 w-full "
                                                                        classNames={{
                                                                              inputWrapper: ' !bg-transparent group-data-[focus=true]:bg-transparent w-full !py-4 h-auto',
                                                                              input: 'group-data-[has-value=true]:text-white !text-xl  '
                                                                        }
                                                                        } />

                                                            </motion.div>
                                                            {/* 4th col  */}
                                                            <motion.div
                                                                  variants={cardVariants3}
                                                                  initial="offscreen"
                                                                  whileInView="onscreen"
                                                                  viewport={{ once: true, amount: 0.1 }}
                                                                  className=" space-y-5">
                                                                  <label htmlFor="Token symbol" className=" text-xl text-white">Token Symbol</label>
                                                                  <Input size='lg' isRequired type="email" defaultValue="" className=" border border-tree-poppy rounded-2xl py-0  w-full "
                                                                        classNames={{
                                                                              inputWrapper: ' !bg-transparent group-data-[focus=true]:bg-transparent w-full !py-4 h-auto',
                                                                              input: 'group-data-[has-value=true]:text-white !text-xl  '
                                                                        }
                                                                        } />

                                                            </motion.div>
                                                            {/* 5th col  */}
                                                            <motion.div
                                                                  variants={cardVariants3}
                                                                  initial="offscreen"
                                                                  whileInView="onscreen"
                                                                  viewport={{ once: true, amount: 0.1 }}
                                                                  className=" space-y-5">
                                                                  <label htmlFor="Decimal" className=" text-xl text-white">Decimal</label>
                                                                  <Input size='lg' isRequired type="email" defaultValue="" className=" border border-tree-poppy rounded-2xl py-0  w-full "
                                                                        classNames={{
                                                                              inputWrapper: ' !bg-transparent group-data-[focus=true]:bg-transparent w-full !py-4 h-auto',
                                                                              input: 'group-data-[has-value=true]:text-white !text-xl  '
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
                                                                  <Link><Button className=" px-6 md:!px-8 py-6 md:!py-8 bg-tree-poppy rounded  text-xl md:text-3xl text-nav-black uppercase font-dragonslapper  ">buy now</Button></Link>
                                                            </div>
                                                      </motion.div>

                                                </form>
                                          </div>
                                    
                              </div>
                        </div>



                        {/* 2nd component */}
                        <Presale />


                  </section>


            </>

      )

}
