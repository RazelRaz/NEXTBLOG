import React from 'react';
import styles from './blog.module.css'
import MyBlog from './../../components/MyBlog';


const BlogPage = () => {

    

    return (
        <div className={styles.blogArea}>
            <div className={styles.aboutBreadCrumb}>
                <h1>BLOG</h1>
            </div>
            <MyBlog></MyBlog>
        </div>
    );
};

export default BlogPage;