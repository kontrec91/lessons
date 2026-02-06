import { useEffect, useState } from "react";

type ErrorType = {
  message: string;
};

type PostType = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

// const resp = async () =>
//   await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Сетевая ошибка: " + response.statusText);
//       }
//       return response.json();
//     })
//     .then((data) => data)
//     .catch((error: unknown) => {
//       const knownError = error as ErrorType;
//       console.error("Произошла ошибка:", knownError.message);
//       return knownError.message;
//     });

// const fetchPosts = async () =>
//   //запрос данных с обработкой сетевой ошибки
//   await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((resp) => {
//       if (!resp.ok) {
//         throw new Error("Сетевая ошибка: " + resp.statusText);
//       }
//       return resp.json();
//     })
//     .then((data) => data);

// const getPosts = async () => {
//   //обработка данных полученных с запроса и проверка на ошибки(есть или нету данных, прошел ли запрос и т.д.)
//   try {
//     const result = await fetchPosts();
//     return result;
//   } catch (error: unknown) {
//     const knownError = error as ErrorType;
//     console.error("Произошла ошибка:", knownError.message);
//     return knownError.message;
//   }
// };

export const PostsViewer = () => {
  const [posts, setPosts] = useState<PostType>({
    body: "test",
    id: 0,
    title: "test",
    userId: 0,
  });
  const [error, setError] = useState<string | null>(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://jsonplaceholder.typicode.com/posts/1"
  //         );
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! status: ${response.status}`);
  //         }
  //         const result = await response.json();
  //         setPosts(result);
  //         console.log("result1", result);
  //       } catch (error: unknown) {
  //         const knownError = error as ErrorType;
  //         console.error("Произошла ошибка:", knownError.message);
  //         setError(knownError.message);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Сетевая ошибка: " + response.statusText);
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error: unknown) => {
        const knownError = error as ErrorType;
        console.error("Произошла ошибка:", knownError.message);
        setError(knownError.message);
      });
  }, []);

  //   useEffect(() => {
  //     getPosts()
  //       .then((res) => setPosts(res))
  //       .catch((error: unknown) => {
  //         const knownError = error as ErrorType;
  //         console.error("Произошла ошибка:", knownError.message);
  //         setError(knownError.message);
  //       });
  //   }, []);

  // const getData = async () => {
  //   try {
  //     const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  //     if (!resp.ok) {
  //       throw new Error(resp.statusText);
  //     }
  //     return resp.json();
  //   } catch (error: unknown) {
  //     // const knownError = error as ErrorType;
  //     // throw new Error("Error", knownError.message);
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <h1>PostsViewer</h1>
      <div>{posts.title}</div>
      <div>{posts.body}</div>
      {error && <div>{error}</div>}
    </div>
  );
};

// import { useEffect, useState } from 'react';

// function PostViewer() {
//   const [post, setPost] = useState<Post | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const load = async () => {
//       const data = await getData();
//       setPost(data);
//       setLoading(false);
//     };

//     load();
//   }, []);

//   if (loading) return <p>Загрузка...</p>;
//   if (!post) return <p>Не удалось загрузить пост</p>;

//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </div>
//   );
// }
