import React from 'react';
import styles from './about.module.css'
import Image from 'next/image';
import BlogImg from '../../public/images/about-image.jpg'

const AboutPage = () => {
    return (
        <div className={styles.aboutArea}>
            <div className={styles.aboutBreadCrumb}>
                <h1>ABOUT</h1>
            </div>
            <div className={styles.aboutContent}>
                
                <h2>NEXT Blog is a media network that builds and operates.</h2>
                <Image src={BlogImg}  alt="blogImg" height={300} />
                <p>We do this with the aim of creating the future of media. The future of media is one that is disruptive, agile, and credible. It embraces diversity, creates a positive impact, and leaves its audience in a better place than where they were before. We advocate for a media that embraces this and we embody.</p>
            </div>
        </div>
    );
};

export default AboutPage;