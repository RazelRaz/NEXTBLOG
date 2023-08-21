import getBlogPost from '@/lib/getBlogPost';
import React from 'react';
import styles from './singleblog.module.css'

const SinglePage = async ({params}) => {
    const id = params.id;
    const post = await getBlogPost(id);
    // console.log(post);

    return (
        <div className={styles.singleBLog}>
            <figure><img src={post?.['postDetails']['img']} alt="Blog image" /></figure>
            <h2>{post['postDetails']['title']}</h2>
            <small>{post['postDetails']['created_at']}</small>
            <p>{post['postDetails']['content']}</p>
        </div>
    );
};

export default SinglePage;