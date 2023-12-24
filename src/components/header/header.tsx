import React from "react";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { HeaderBackground } from "./header-background";

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
                            <Link
                                href="/meals"
                                className="text-[#ddd6cb] font-bold py-2 px-4 active:bg-clip-text active:text-transparent hover:bg-clip-text hover:text-transparent rounded-lg bg-gradient-to-r active:from-[#ff8a05] active:to-[#f9b331] hover:from-[#ff8a05] hover:to-[#f9b331] "
                            >
                                {"meals"}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/community"
                                className="text-[#ddd6cb] font-bold py-2 px-4 active:bg-clip-text active:text-transparent hover:bg-clip-text hover:text-transparent rounded-lg bg-gradient-to-r active:from-[#ff8a05] active:to-[#f9b331] hover:from-[#ff8a05] hover:to-[#f9b331]"
                            >
                                {"community"}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
