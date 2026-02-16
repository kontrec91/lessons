export const  getCurrentPosts = async(id:string) =>  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'force-cache'}).then(response=> response.json())
