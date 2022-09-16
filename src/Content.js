import BlogLists from "./BlogLists";
import useFetch from "./useFetch";
import React from 'react'

const Content = () => {
  const {data, loading, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {data && <BlogLists blogs={data} title="All blogs!" />}
    </div>
  );
}

export default Content;