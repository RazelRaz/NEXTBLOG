'use client'
import React from 'react';
import styles from './components.module.css'
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={styles.mainmenu}>
            <div className={styles.logobox}>
                <div className={styles.logo}>
                    <Link href={'/'}>NEXTBLOG</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;