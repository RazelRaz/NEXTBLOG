export default async function getBlogPost(id){
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);

    if(!res.ok) {
        throw new Error('Error Fetching Details Post')
    }
    //returning a promise
    return res.json();

}