import { Button, Link } from "@nextui-org/react";
import Image from "next/image";





export default function HowtoBuy() {
      return (
            <>
                  <section>

                        {/* 1st component */}
                        <div className=" bg-buy-bg bg-cover bg-center py-32 relative">
                              {/* Overlay with brightness filter */}
                              <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                              <div className=" max-w-8xl mx-5 xl:mx-auto brightness-100">
                                    <div className=" py-10">
                                          <h2 className=" text-[50px] font-dragonslapper text-text-orange text-center">How to Buy</h2>
                                    </div>

                                    {/* cards  */}
                                    <div className=" flex justify-center xl:flex-row flex-col items-center gap-10">
                                          {/* 1st card */}
                                          <div className=" bg-card-bg bg-cover w-full md:w-[370px] h-[360px] relative ">
                                                <Image src="/assets/buy/egg.png" className=" w-[70px] bottom-0 right-14 h-[90px] absolute" alt=" img" height={100} width={100}></Image>
                                                <div className="px-10 py-8 ">
                                                      <h2 className=" py-2 text-center text-xl md:text-3xl font-dragonslapper text-text-white2">Account Creation</h2>
                                                      <p className=" w-56 leading-normal text-xs relative z-10 md:text-lg text-text-white2">To get started, click on  <Link href="/" ><Button className=" my-2 w-40 h-10 rounded uppercase bg-nav-black text-text-orange">Buy tokens</Button></Link>
                                                            <br />to set up your account. This will enable you to track your purchases, redeem rewards, and manage your $DBRZ holdings efficiently.</p>
                                                </div>

                                          </div>
                                          {/* 2nd card */}
                                          <div className=" bg-card2-bg bg-cover w-full md:w-[370px] h-[360px] relative ">
                                                <Image src="/assets/buy/egg.png" className=" w-[70px] bottom-0 right-[6.5rem] h-[90px] absolute" alt=" img" height={100} width={100}></Image>
                                                <div className="px-10 py-8">
                                                      <h2 className=" py-2 text-center text-xl md:text-3xl font-dragonslapper text-text-white2">Specify Amount</h2>
                                                      <p className=" leading-normal text-xs md:text-lg text-text-white2">After creating your account, proceed to the next screen and indicate the payment amount in USD.</p>
                                                </div>

                                          </div>
                                          {/* 3rd card */}
                                          <div className=" bg-card3-bg bg-cover w-full md:w-[600px] h-full md:h-[360px] relative  ">
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

                                          </div>
                                    </div>
                              </div>

                        </div>

                  </section>
            </>
      )
}