"use client";
import React from "react";
import { Navbar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, Link, Button } from "@nextui-org/react";
import Image from "next/image";
// Manually provide the image path as a string


export default function Header() {
    const menuItems = [
        { name: "How to buy", href: "/howtobuy" },
        { name: "Roadmap", href: "/#roadmap" },
        { name: "Whitepaper", href: "/#whitepaper" },
        { name: "Tokenomics", href: "/#tokenomics" },
        { name: "Audit", href: "/audit" },
        { name: "KYC", href: "/kyc" },

    ];

    return (




        <Navbar isBordered isBlurred={false} className=" !fixed xl:!sticky backdrop-blur-xl bg-transparent xl:!bg-nav-black px-5 py-2 md:py-4 xl:!py-4 md:px-14 xl:px-[2rem]  [1500px]:px-28  !border-none !border-b-0  " classNames={{
            wrapper: '!max-w-8xl mx-auto !justify-between gap-x-12 2xl:gap-x-20 ',


        }}>

            <div className="  contents text-white font-dragonslapper  " >

                <Link href="/" className="hover:!opacity-100">
                    <Image src='/assets/Logo2.png' alt="Logo" height={70} width={170} className=" w-[170px] h-[70px]" /></Link>

                <div className=" gap-5 2xl:gap-16 hidden xl:flex">
                    <Link target="_blank" color="foreground" href="/howtobuy" className="hover:text-tree-poppy duration-500  text-xl font-normal text-lightbrown font-dragonslapper">
                        How to Buy
                    </Link>
                    <Link color="foreground" href="/#roadmap" className="hover:text-tree-poppy !duration-500  text-xl font-normal text-lightbrown font-dragonslapper">
                        Roadmap
                    </Link>
                    <Link color="foreground" href="/#whitepaper" className="hover:text-tree-poppy !duration-500  text-xl font-normal text-lightbrown font-dragonslapper">
                        Whitepaper
                    </Link>
                    <Link color="foreground" href="/#tokenomics" className="hover:text-tree-poppy !duration-500  text-xl font-normal text-lightbrown font-dragonslapper">
                        Tokenomics
                    </Link>
                    <Link color="foreground" href="#" className="hover:text-tree-poppy !duration-500  text-xl font-normal text-lightbrown font-dragonslapper">
                        Audit
                    </Link>
                    <Link color="foreground" href="#" className="hover:text-tree-poppy !duration-500  text-xl font-normal text-lightbrown font-dragonslapper">
                        KYC
                    </Link>

                </div>
                <div className=" gap-5 2xl:gap-12 hidden xl:flex">
                    <Button as={Link} color="warning" href="#" className="   uppercase !py-5 !px-14 text-base font-normal text-white bg-transparent hover:text-tree-poppy hover:!opacity-100 hover:border-tree-poppy duration-300 border-white border rounded  ">
                        Login
                    </Button>
                    <Button as={Link} href="/#buynow" className="  uppercase !py-5 !px-8 bg-tree-poppy rounded text-black text-base font-normal">
                        Buy Tokens
                    </Button>
                </div>

            </div>
            <NavbarContent className="xl:hidden  flex justify-end" justify="end">
                <NavbarMenuToggle className=" !text-tree-poppy" />
            </NavbarContent>
            <NavbarMenu className=" py-10 bg-transparent backdrop-blur-xl space-y-5 items-center overflow-hidden ">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full text-2xl font-dragonslapper text-white  "

                            href={item.href}

                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <div className=" gap-5 flex">
                    <Button as={Link} color="warning" href="#" className=" font-dragonslapper hover:text-tree-poppy uppercase !py-5 !px-14 text-base font-normal text-white bg-transparent border-white border rounded  ">
                        Login
                    </Button>
                    <Button as={Link} href="/#buynow" className=" font-dragonslapper  uppercase !py-5 !px-8 bg-tree-poppy rounded text-white text-base font-normal">
                        Buy Tokens
                    </Button>
                </div>
            </NavbarMenu>

        </Navbar>
    );
}
