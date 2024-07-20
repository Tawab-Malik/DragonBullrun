"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
// Manually provide the image path as a string
const logoPath = "/images/image.webp";
const Navimg = "/images/navbar.png"

export default function Navbars() {
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
     



        <Navbar isBordered isBlurred={false} className=" !bg-nav-black px-5 h-20 xl:h-40 md:px-14  2xl:px-28    !border-none !border-b-0  " classNames={{
            wrapper: '!max-w-8xl mx-auto',


        }}>
           
            <div className=" gap-4  contents text-text-white2 font-dragonslapper  " >
                <div className="flex flex-col relative">
                    <h2 className=" text-2xl xl:text-5xl 2xl:text-[64px] z-0  2xl:z-0 xl:z-10 relative text-text-orange drop-shadow-Logo-shadow ">Dragon</h2>
                    <h3 className=" text-lg xl:text-4xl 2xl:text-[47px] z-0 2xl:z-0 xl:z-10 relative text-center text-text-orange drop-shadow-Logo-shadow">Bull Run</h3>
                    <Image  src='/assets/Logo.png' alt="Logo" height={500} width={500} className=" absolute -bottom-4 xl:-bottom-8 -left-2 md:-left-10 xl:-left-20  !w-[60px] !h-[60px] xl:!w-[121px] xl:!h-[98px]" />
                </div>
                <div className=" gap-5 2xl:gap-20 hidden xl:flex">
                    <Link color="foreground" href="#" className=" text-xl font-normal text-lightbrown font-dragonslapper">
                    How to Buy
                    </Link>
                    <Link color="foreground" href="#" className=" text-xl font-normal text-lightbrown font-dragonslapper">
                    Roadmap
                    </Link>
                    <Link color="foreground" href="#" className=" text-xl font-normal text-lightbrown font-dragonslapper">
                    Whitepaper
                    </Link>
                    <Link color="foreground" href="#" className=" text-xl font-normal text-lightbrown font-dragonslapper">
                    Tokenomics
                    </Link>
                    <Link color="foreground" href="#" className=" text-xl font-normal text-lightbrown font-dragonslapper">
                    Audit
                    </Link>
                    <Link color="foreground" href="#" className=" text-xl font-normal text-lightbrown font-dragonslapper">
                    KYC
                    </Link>
                   
                </div>
                <div className=" gap-5 hidden xl:flex">
                    <Button as={Link} color="warning" href="#" className=" hover:scale-110 uppercase h-10 !w-40 text-base font-normal text-text-white2 bg-transparent border-border-color border rounded  ">
                        Login
                    </Button>
                    <Button as={Link}  href="#" className=" hover:scale-110 uppercase h-10 !w-40 bg-text-orange rounded text-white text-base font-normal">
                        Buy Tokens
                    </Button>
                </div>

            </div>
            <NavbarContent className="xl:hidden  flex justify-end" justify="end">
                <NavbarMenuToggle className=" !text-text-orange" />
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    );
}
