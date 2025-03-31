import { useState } from "react";
import styles from "./addPost.module.css";

const AddPost = ({ onPostAdded }) => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });

    if (response.ok) {
      onPostAdded();
      setPost({ title: "", content: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Create a New Post</h2>
      <input type="text" placeholder="Title" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} className={styles.input} required />
      <textarea placeholder="Content" value={post.content} onChange={(e) => setPost({ ...post, content: e.target.value })} className={styles.textarea} required />
      <button type="submit" className={styles.button}>Add Post</button>
    </form>
  );
};

export default AddPost;