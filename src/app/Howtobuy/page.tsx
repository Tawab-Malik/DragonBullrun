"use client"
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { MdOutlineFileCopy } from "react-icons/md";






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

                        {/* 1st component */}
                        <div className=" bg-buy-bg bg-cover bg-center py-24 relative">
                              {/* Overlay with brightness filter */}
                              <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                              <div className=" max-w-8xl mx-5 2xl:mx-auto brightness-100">
                                    <div className=" py-10">
                                          <h2 className=" text-[50px] font-dragonslapper text-text-orange text-center">How to Buy</h2>
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
                                                      className=" bg-card-bg bg-cover w-full md:w-[370px] h-[360px] relative ">
                                                      <Image src="/assets/buy/egg.png" className=" w-[70px] bottom-0 right-14 h-[90px] absolute" alt=" img" height={100} width={100}></Image>
                                                      <div className="px-10 py-8 ">
                                                            <h2 className=" py-2 text-center text-xl md:text-3xl font-dragonslapper text-text-white2">Account Creation</h2>
                                                            <p className=" w-56 leading-normal text-xs relative z-10 md:text-lg text-text-white2">To get started, click on  <Link href="/" ><Button className=" my-2 w-40 h-10 rounded uppercase bg-nav-black text-text-orange">Buy tokens</Button></Link>
                                                                  <br />to set up your account. This will enable you to track your purchases, redeem rewards, and manage your $DBRZ holdings efficiently.</p>
                                                      </div>

                                                </motion.div>
                                                {/* 2nd card */}
                                                <motion.div
                                                      variants={cardVariants3}
                                                      initial="offscreen"
                                                      whileInView="onscreen"
                                                      viewport={{ once: true, amount: 0.1 }}
                                                      className=" bg-card2-bg bg-cover w-full md:w-[370px] h-[360px] relative ">
                                                      <Image src="/assets/buy/egg.png" className=" w-[70px] bottom-0 right-[6.5rem] h-[90px] absolute" alt=" img" height={100} width={100}></Image>
                                                      <div className="px-10 py-8">
                                                            <h2 className=" py-2 text-center text-xl md:text-3xl font-dragonslapper text-text-white2">Specify Amount</h2>
                                                            <p className=" leading-normal text-xs md:text-lg text-text-white2">After creating your account, proceed to the next screen and indicate the payment amount in USD.</p>
                                                      </div>

                                                </motion.div>
                                                {/* 3rd card */}
                                                <motion.div
                                                      variants={cardVariants3}
                                                      initial="offscreen"
                                                      whileInView="onscreen"
                                                      viewport={{ once: true, amount: 0.1 }}
                                                      className=" bg-card3-bg bg-cover w-full md:w-[600px] h-full md:h-[360px] relative  ">
                                                      <Image src="/assets/buy/brokenegg.png" className=" w-[140px] bottom-0 right-[0.5rem] md:right-[5.5rem] h-[100px] absolute" alt=" img" height={100} width={100}></Image>
                                                      <div className="px-10 py-6">
                                                            <h2 className=" py-2 text-center text-xl md:text-3xl font-dragonslapper text-text-white2">Payment with Cryptocurrency</h2>
                                                            <p className=" leading-normal text-xs md:text-sm text-text-white2">Follow these instructions to finalize your purchase using cryptocurrency:
                                                            </p>
                                                            <div className=" text-text-white2 text-xs md:text-sm">
                                                                  <li>Choose your preferred cryptocurrency from the dropdown menu.</li>
                                                                  <li>Click on ‘PAY NOW’ to proceed with your transaction.</li>
                                                                  <li className=" w-full md:w-[450px]">On the final screen, you can either copy the payment wallet address
                                                                        or scan the payment QR code.</li>
                                                                  <li className=" w-full md:w-[450px]">Ensure that the payment network matches the cryptocurrency
                                                                        network you’ve selected.</li>
                                                                  <li className=" w-full md:w-[450px]">Your account will be automatically updated after the
                                                                        required number of blockchain confirmations.</li>
                                                            </div>
                                                            <p className=" text-white text-xs md:text-sm w-full md:w-[300px]">Congratulations! Your purchase is now successfully completed</p>
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
                                                            <Link className=" w-full md:w-72"><Button className=" w-full md:w-72 h-12 xl:h-16 bg-text-orange rounded text-2xl xl:text-3xl text-nav-black uppercase font-dragonslapper hover:scale-110 ">Buy now</Button></Link>
                                                      </motion.div>

                                                </form>







                                          </div>
                                    </div>


                              </div>

                        </div>



                        {/* 2nd component */}
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
                                          <h2 className=" text-3xl md:text-[48px] text-start xl:text-[70px] text-text-orange font-dragonslapper md:text-center py-5">Pre Sale Live Now</h2>
                                          <div className=" flex gap-5 items-center">
                                                <h3 className=" text-base md:text-2xl xl:text-3xl text-text-white2 font-bold text-start md:text-center">Contract Address - 0xC955faa 911D7507aEE0c0d7a2d5a 79c79a041AB8</h3>
                                                <MdOutlineFileCopy className=" size-7 hover:text-text-orange duration-500 cursor-pointer text-white" onClick={() => copyToClipboard(' 0xC955faa 911D7507aEE0c0d7a2d5a 79c79a041AB8')} />

                                          </div>
                                          {copySuccess && (
                                                <div className="mt-2 text-white font-inter text-xs md:text-base absolute top-[120px] xl:top-24 lg:top-16 right-0 xl:left-14">{copySuccess}</div>
                                          )}


                                          <div>
                                                <h3 className=" text-2xl md:text-3xl xl:text-[50px] font-bold text-end text-text-orange">3,750000000 </h3>
                                                <h4 className=" text-lg md:text-2xl xl:text-3xl font-medium text-end text-text-white2">/ 1,542,000,000</h4>
                                          </div>

                                          {/* progress Bar */}


                                          <div className=" flex items-center">
                                                <div className=" overflow-hidden w-[250px] md:w-[500px] xl:w-[1150px]  h-[25px] md:h-[50px] xl:h-[85px] bg-progress-brown rounded-full flex justify-start items-center">
                                                      <motion.div
                                                            variants={cardVariants4}
                                                            initial="offscreen"
                                                            whileInView="onscreen"
                                                            viewport={{ once: true, amount: 0.1 }}
                                                            className="  mx-5  h-[60%] bg-[#FF9D00] rounded-full w-[80%]">
                                                            <Image src="/assets/buy/progress.png" className=" w-full" alt="img" height={2000} width={2000}></Image>
                                                      </motion.div>

                                                </div>
                                                {/* <Image src="/assets/buy/progress.png" className=" w-[250px] md:w-[500px] xl:w-[1150px]  h-[25px] md:h-[50px] xl:h-[85px]" alt="img" height={2000} width={2000}></Image> */}
                                                <Image src="/assets/buy/treasure.png" className=" size-24 md:size-56" alt="img" height={2000} width={2000}></Image>
                                          </div>
                                          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                                                <h2 className=" text-lg md:text-2xl xl:text-3xl text-text-white2 font-bold">0.04745536 USDT = 1 $DBRZ</h2>
                                                <h3 className=" text-lg md:text-2xl xl:text-3xl text-text-white2 font-normal">USDT Raised: 3,641,817.38 </h3>
                                          </div>
                                          <div className=" flex justify-center py-5">
                                                <Link><Button className=" w-72 h-16 bg-text-orange rounded text-3xl text-nav-black uppercase font-dragonslapper hover:scale-110 ">join presale</Button></Link>
                                          </div>



                                    </div>


                              </div>


                        </div>

                  </section>
            </>
      )
}