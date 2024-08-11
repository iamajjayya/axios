import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {post.length > 0 ? (
        <ul>
          {post.map((posts) => (
            <li key={posts.id}>
              <h2>{posts.title}</h2>
              <p>{posts.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
}

export default App;
