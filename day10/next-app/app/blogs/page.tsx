import Link from "next/link";
import { getPosts, PostType } from "../api/getPosts";
import "./../globals.css";
import LikeCounter from "../components/page";



const Blogs = async () => {
  const posts: PostType[] = await getPosts();

  return (
  <div>
    <h1 className="pageTitle">All Blogs</h1>
    <ul className='postsList'>{
      posts.map((post) => 
      <li key={post.id} className="postItem">
        <p>User id: {post.userId}</p>
        <p>Post id: {post.id}</p>
        <p className="title">Title: {post.title}</p>
        <LikeCounter/>
        <Link href={`/blogs/${post.id}`}>See more details</Link>
      </li>)
      }</ul>
  </div>
  ) 
}

export default Blogs;