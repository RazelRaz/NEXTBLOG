'use client'
import React from 'react';
import styles from './components.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Navbar = () => {

    let currentPath = usePathname();

    return (
        <div className={styles.mainmenu}>
            <div className={styles.logobox}>
                <div className={styles.logo}>
                    <Link href={'/'}>NEXTBLOG</Link>
                </div>
            </div>
            <div className={styles.thememenu}>
                <ul>
                    <Link className={currentPath === '/' ? 'active' : ''} href={"/"}>Home</Link>
                    <Link className={currentPath === '/about' ? 'active' : ''} 
                    href={"/about"}>
                        About
                    </Link>

                    <Link className={currentPath === '/blog' ? 'active' : ''} href={"/blog"}>Blog</Link>
                    <Link className={currentPath === '/contact' ? 'active' : ''} href={"/contact"}>Contact</Link>
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;