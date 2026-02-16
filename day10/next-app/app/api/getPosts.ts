export type PostType = {
    userId: number;
    id: number;
    title: string
  }

export const  getPosts= async() => await fetch('https://jsonplaceholder.typicode.com/posts').then(response=> response.json())
