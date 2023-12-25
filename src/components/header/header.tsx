import React from "react";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { HeaderBackground } from "./header-background";
import { NavLink } from "./nav-link";

export const Header: React.FC = () => {
    return (
        <>
            <HeaderBackground />
            <header className="flex justify-between items-center py-8 px-4 md:px[10%]">
                <Link
                    href="/"
                    className="flex items-center justify-center gap-[32px] text-[#ddd6cb] font-bold text-2xl "
                >
                    <Image className="w-[80px] h-[80px] object-contain" src={logoImg} alt="logo" />
                </Link>
                <nav>
                    <ul className="flex gap-[1.5] text-xl">
                        <li>
                            <NavLink href="/meals">{"meals"}</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">{"community"}</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
