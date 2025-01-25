'use client'

import classes from "@/components/main-header/main-header.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavLink({href, children}) {

    path = usePathname();
    return(
        <Link href={href} className={path.startsWith(href) ? classes.active : undefined}>{children}</Link>
    )
}