import React from 'react';
import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
import styles from './components.module.css'

const MyBlog = async () => {

    const posts = await getAllPosts()
    // console.log(posts);

    return (
        <div className={styles.blogAll}>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <img src={post.img} alt='image' />
                            <div className={styles.innerBlog}>
                                <h2>{post.title}</h2>
                                <p>{post.short}</p>
                                <Link href={`/blog/${post.id}`}>Read More</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MyBlog;