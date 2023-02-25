import axios from 'axios';
import { useTransition } from 'react';
import { useEffect, useState } from 'react';
import './Posts.css';
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [currentId, setCurrentId] = useState(0);

  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  async function getComments(postId) {
    const index = posts.findIndex(post=>post.id===postId);
     if(!posts[index].comments){
        const res = await axios.get(commentsUrl + '?postId=' + postId);
        console.log('comments', res.data);
        const newPosts = [...posts]
        newPosts.splice(index,1,{...posts[index],comments:res.data}) 
        setPosts(newPosts);
     }
  }

  const handleClick = (postId) => {

    getComments(postId);
    setCurrentId(postId);
  };

  async function getPosts() {
    const res = await axios.get(postsUrl);
    console.log('posts', res.data);
    startTransition(()=>{
        setPosts([...posts,...res.data]);
    })
  }

  const addPosts= ()=>{
     getPosts();
  }

  useEffect(() => {
   getPosts();
  }, []);

  return (
    <div>
        
      {posts.map((post,index) => (
        <div key={post.id}>
          <div className="posts" >
            {index+1}. {post.title}
            <button onClick={() => handleClick(post.id)}>Comments</button>
          </div>
          {post.comments?<div style={post.id===currentId?{}:{display:'none'}} key={post.id}>
           {  post.comments.map(cmt=><div className="comments">
                       {cmt.name} : {cmt.body}         
                </div>)}
          </div>:null}
        </div>
        
      ))}
      <button onClick={addPosts}>Get More</button>
    </div>
  );
};

export default Posts;
