import { getCurrentPosts } from "@/app/api/getCurrentPost";
import { PostType } from "@/app/api/getPosts";
import { describe } from "node:test";

type Props = {
    params: Promise<{ id: string }>
}

 export async function generateMetadata({ params }: Props){
    const {id} = await params;
    const currentPost = await getCurrentPosts(id);
    return {
        title: currentPost.title,
        description: currentPost.body? currentPost.body.substring(0, 160) : ''
    }
}


 const currentPost = async({params}: Props) => {
    const {id} = await params;
    const post: PostType = await getCurrentPosts(id)
    return (
            <>
                <h1  className="pageTitle">Curremnt post</h1> 
                <div>
                    <p>User id: {post.userId}</p>
                    <p>Post id: {post.id}</p>
                    <p className="title">Title: {post.title}</p>
                </div>
            </>
    );
}

export default currentPost;