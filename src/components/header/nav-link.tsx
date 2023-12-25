"use client";

import Link from "next/link";
import { PropsWithChildren } from "react";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";
type Props = {
    href: string;
};

export const NavLink: React.FC<PropsWithChildren<Props>> = ({ href, children }) => {
    const path = usePathname();

    return (
        <Link
            href={href}
            className={
                path.startsWith(href) ? `${classes.link} ${classes.active}` : `${classes.link}`
            }
        >
            {children}
        </Link>
    );
};
