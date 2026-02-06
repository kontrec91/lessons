import { useEffect, useState } from "react";

import type { PostType } from "../types/types.ts";

const useFetch = () => {
  const [posts, setPosts] = useState<PostType>({
    body: "test",
    id: 0,
    title: "test",
    userId: 0,
  });
  const [error, setError] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      try {
        setIsLoading(true);
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
          .then((response) => {
            if (!response.ok) {
              console.log("Error: ", response.statusText);
              setError(response.statusText);
            }
            return response.json();
          })
          .then((result) => setPosts(result));
      } catch (error) {
        console.log(error);
        setError(error as string);
      } finally {
        setIsLoading(false);
      }
    };
    getPost();
  }, []);

  return { posts, error, isLoading };
};

export default useFetch;

// import { useEffect, useState } from "react";
// import { PostType } from "./../types/types";

// const useFetch = () => {
//   const [posts, setPosts] = useState<PostType | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const getPost = async () => {
//       try {
//         setIsLoading(true);

//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts/1"
//         );

//         if (!response.ok) {
//           setError(response.statusText);
//           return;
//         }

//         const data = await response.json();
//         setPosts(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     getPost();
//   }, []);

//   return { posts, error, isLoading };
// };

// export default useFetch;
