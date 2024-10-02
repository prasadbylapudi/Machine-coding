// src/components/Posts.js
import React from "react";
import { useGetPostsQuery } from "./services/api";

const Posts = () => {
  // RTK Query automatically handles loading, error, and data states
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
