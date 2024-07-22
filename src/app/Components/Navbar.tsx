"use client";
import React from "react";
import { Navbar,  NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent,  Link, Button } from "@nextui-org/react";
import Image from "next/image";
// Manually provide the image path as a string


export default function Navbars() {
    const menuItems = [
        { name: "How to buy", href: "/Components/How-to-buy" },
        { name: "Roadmap", href: "/#2" },
        { name: "Whitepaper", href: "/#3" },
        { name: "Tokenomics", href: "/#4" },
        { name: "Audit", href: "/audit" },
        { name: "KYC", href: "/kyc" },

    ];

    return (




        <Navbar isBordered isBlurred={false} className=" !fixed xl:!sticky backdrop-blur-xl bg-transparent xl:!bg-nav-black px-5 h-20 xl:h-40 md:px-14  2xl:px-28    !border-none !border-b-0  " classNames={{
            wrapper: '!max-w-8xl mx-auto',


        }}>

            <div className=" gap-4  contents text-text-white2 font-dragonslapper  " >
                <div className="">
                    <Link href="/">
                    <Image src='/assets/Logo2.png' alt="Logo" height={500} width={500} className="   !w-[100px] !h-[60px] xl:!w-[270px] xl:!h-[140px]" /></Link>
                </div>
                <div className=" gap-5 2xl:gap-20 hidden xl:flex">
                    <Link color="foreground" href="/Components/How-to-buy" className="hover:text-text-orange duration-500  text-xl font-normal text-lightbrown font-dragonslapper">
                        How to Buy
                    </Link>
                    <Link color="foreground" href="/#2" className="hover:text-text-orange duration-500  text-xl font-normal text-lightbrown font-dragonslapper">
                        Roadmap
                    </Link>
                    <Link color="foreground" href="/#3" className="hover:text-text-orange duration-500  text-xl font-normal text-lightbrown font-dragonslapper">
                        Whitepaper
                    </Link>
                    <Link color="foreground" href="/#4" className="hover:text-text-orange !duration-500  text-xl font-normal text-lightbrown font-dragonslapper">
                        Tokenomics
                    </Link>
                    <Link color="foreground" href="#" className="hover:text-text-orange !duration-500  text-xl font-normal text-lightbrown font-dragonslapper">
                        Audit
                    </Link>
                    <Link color="foreground" href="#" className="hover:text-text-orange !duration-500  text-xl font-normal text-lightbrown font-dragonslapper">
                        KYC
                    </Link>

                </div>
                <div className=" gap-5 hidden xl:flex">
                    <Button as={Link} color="warning" href="#" className=" hover:scale-110 uppercase h-10 !w-40 text-base font-normal text-text-white2 bg-transparent border-border-color border rounded  ">
                        Login
                    </Button>
                    <Button as={Link} href="#" className=" hover:scale-110 uppercase h-10 !w-40 bg-text-orange rounded text-white text-base font-normal">
                        Buy Tokens
                    </Button>
                </div>

            </div>
            <NavbarContent className="xl:hidden  flex justify-end" justify="end">
                <NavbarMenuToggle className=" !text-text-orange" />
            </NavbarContent>
            <NavbarMenu className=" py-10 bg-transparent backdrop-blur-xl space-y-5">
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
            </NavbarMenu>

        </Navbar>
    );
}
