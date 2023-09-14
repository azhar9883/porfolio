import React from 'react'
import BlogCard from '../blog/BlogCard'
import BlogImage from '../blog/BlogImage'

const Blog = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "rgb(31,32,35)" }}>
    <div style={{ flex: 6,marginLeft:"34px"}}>
     <BlogCard/>
    </div>

    <div style={{ flex: 6 }}>
      <BlogImage/>
    </div>
  </div>
  )
}

export default Blog
