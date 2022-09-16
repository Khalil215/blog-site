import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import useFetch from "./useFetch";

const Blog = () => {
  const { id } = useParams()
  const { data, loading, error } = useFetch(`http://localhost:8000/blogs/${id}`)
  const history = useHistory()

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/'+ id, {
      method: 'DELETE'
    }).then(()=>{
      history.push('/')
    })

  }

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div className="bdy">{data.body}</div>
          <button onClick={handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  );
}

export default Blog;