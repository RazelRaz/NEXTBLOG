import React from 'react';
import styles from './home.module.css'
import Link from 'next/link';
import MyBlog from '../../components/MyBlog';


const HomePage = () => {
    return (
        <div className={styles.homeArea}>
            <div className={styles.homebox}>
                <div className={styles.homeLeft}>
                    <h1>Welcome To The Next Blog</h1>
                    <p>We do this with the aim of creating the future of media. The future of media is one that is disruptive, agile, and credible.</p>
                    <Link href={'/blog'}>Know More</Link>
                </div>
            </div>
            <div>
                <MyBlog></MyBlog>
            </div>
        </div>
    );
};

export default HomePage;