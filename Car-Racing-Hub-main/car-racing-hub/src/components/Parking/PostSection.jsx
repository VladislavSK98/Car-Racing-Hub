// import React, { useState, useEffect } from 'react';
// import { getAllPosts, createPost, addComment } from '../../api/postApi';

// export default function PostsSection() {
//     const [posts, setPosts] = useState([]);
//     const [postText, setPostText] = useState('');
//     const [postTitle, setPostTitle] = useState('');

//     useEffect(() => {
//         fetchPosts();
//     }, []);

//     const fetchPosts = () => {
//         getAllPosts()
//             .then(data => setPosts(data))
//             .catch(err => console.error('Error fetching posts:', err));
//     };

//     const handleAddPost = () => {
//         if (!postText.trim() || !postTitle.trim()) return;

//         createPost({
//             title: postTitle,
//             text: postText,
//             themeId: '66124673371bdf6745c6ebd4', // 🔧 временно, по-късно ще направим избор от UI
//         })
//             .then(() => {
//                 setPostText('');
//                 setPostTitle('');
//                 fetchPosts();
//             })
//             .catch(err => console.error('Error creating post:', err));
//     };

//     const handleAddComment = (postId, commentText) => {
//         if (!commentText.trim()) return;

//         addComment(postId, commentText)
//             .then(() => fetchPosts())
//             .catch(err => console.error('Error adding comment:', err));
//     };

//     return (
//         <div className="posts-section">
//             <h2>📝 Latest posts </h2>

//             <div className="new-post-form">
//                 <input
//                     type="text"
//                     placeholder="Post..."
//                     value={postTitle}
//                     onChange={(e) => setPostTitle(e.target.value)}
//                 />
//                 <textarea
//                     placeholder="Say something..."
//                     value={postText}
//                     onChange={(e) => setPostText(e.target.value)}
//                 />
//                 <button onClick={handleAddPost}>Post</button>
//             </div>

//             <div className="post-list">
//                 {posts.map(post => (
//                     <div key={post._id} className="post-card">
//                         <p><strong>{post.userId?.username || 'Anonimous'}</strong></p>
//                         <h3>{post.title}</h3>
//                         <p>{post.text}</p>

//                         <div className="comments">
//                         {post.comments?.map((c) => (
//                             <p key={c._id || `${post._id}-${c.text}`}><em>{c.userId?.username || 'Потребител'}:</em> {c.text}</p>
//                         ))}

//                             <CommentForm postId={post._id} onAddComment={handleAddComment} />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// function CommentForm({ postId, onAddComment }) {
//     const [comment, setComment] = useState('');

//     const submit = () => {
//         if (!comment.trim()) return;
//         onAddComment(postId, comment);
//         setComment('');
//     };

//     return (
//         <div className="comment-form">
//             <input
//                 type="text"
//                 placeholder="Comment..."
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//             />
//             <button onClick={submit}>💬</button>
//         </div>
//     );
// }

// src/components/Parking/PostSection.jsx
import React, { useEffect, useState } from 'react';
import {
  createPost,
  getPosts,
  addComment,
  likePost,
} from '../../api/postApi';

const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [commentTexts, setCommentTexts] = useState({});

  const fetchPosts = () => {
    getPosts().then(setPosts).catch(console.error);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAddPost = (e) => {
    e.preventDefault();
    const newPost = {
      title: postTitle,
      text: postText,
      themeId: '66124673371bdf6745c6ebd4', // по нужда
    };

    createPost(newPost)
      .then(() => {
        setPostTitle('');
        setPostText('');
        fetchPosts();
      })
      .catch((err) => console.error('Error creating post:', err));
  };

  const handleAddComment = (e, postId) => {
    e.preventDefault();
    const commentText = commentTexts[postId];
    if (!commentText) return;

    addComment(postId, { text: commentText })
      .then(() => {
        setCommentTexts((prev) => ({ ...prev, [postId]: '' }));
        fetchPosts();
      })
      .catch((err) => console.error('Error adding comment:', err));
  };

  const handleLike = (postId) => {
    likePost(postId)
      .then(fetchPosts)
      .catch((err) => console.error('Error liking post:', err));
  };

  return (
    <section>
      <h2>Add Post</h2>
      <form onSubmit={handleAddPost}>
        <input
          type="text"
          placeholder="title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <textarea
          placeholder="Your post..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <button type="submit">Post!</button>
      </form>

      <hr />

      <h2>Posts wall</h2>
      {posts.map((post) => (
        <div key={post._id} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.text}</p>

          <button onClick={() => handleLike(post._id)}>
            ❤️ Like {post.likes.length}
            </button>

          <form onSubmit={(e) => handleAddComment(e, post._id)}>
            <input
              type="text"
              placeholder="Comment..."
              value={commentTexts[post._id] || ''}
              onChange={(e) =>
                setCommentTexts((prev) => ({
                  ...prev,
                  [post._id]: e.target.value,
                }))
              }
            />
            <button type="submit">Comment!</button>
          </form>

          <div style={{ marginTop: '10px' }}>
            <strong>Comments:</strong>
            {post.comments?.map((c) => (
              <p key={c._id || c.text}>
                <em>{c.userId?.username || 'User'}:</em> {c.text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default PostSection;
