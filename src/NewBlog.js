import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const NewBlog = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Mario')
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  const handleSubmit = (e) => {

    const blog = { title, body, author }
    e.preventDefault()
    setLoading(true)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      setLoading(false)
      history.push('/')
    }
    )

  }


  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label >Title</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Body</label>
        <textarea value={body} required onChange={(e) => setBody(e.target.value)}></textarea>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Luigi">Luigi</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        {loading && <button>Adding blog...</button>}
        {!loading && <button>Add blog</button>}
      </form>
    </div>
  );
}

export default NewBlog