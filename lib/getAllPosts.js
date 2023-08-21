export default async function getAllPosts(){
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest');

    if(!res.ok) {
        throw new Error('Error Fetching Posts')
    }
    //returning a promise
    return res.json();

}