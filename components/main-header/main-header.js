
import Link from "next/link";

import classes from './main-header.module.css';

import logoImg from '@/assets/logo.png'
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import {usePathname} from "next/navigation";
import NavLink from "@/components/main-header/nav-link";
export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>

                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="A plate with food on it"/>
                    NextLevel Food
                </Link>

            <nav className={classes.nav }>
                <ul>
                    <li>
                        <NavLink/>
                    </li>
                    <li>
                        <Link href="/community" className={path.startsWith('/community') ? classes.active : undefined}>Browse Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>

    )
}