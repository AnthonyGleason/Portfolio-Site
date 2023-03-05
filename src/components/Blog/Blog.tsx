import React from 'react';
import BlogItem from './BlogItem';
import '../../styles/Blog.css';
export default function Blog(){
  return(
    <div className='blog'>
      <BlogItem title={''} date='' desc='' />
      <BlogItem title={''} date='' desc='' />
      <BlogItem title={''} date='' desc='' />
    </div>
  )
}