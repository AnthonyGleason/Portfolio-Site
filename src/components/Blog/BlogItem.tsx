import React from 'react';

export default function BlogItem({title,date,desc}:{title:string, date:string, desc:string}){
  return(
    <div className='blog-item'>
      <div className='blog-item-nav'>
        <div className='blog-title'>{title}</div>
        <div className='blog-date'>{date}</div>
      </div>
      <div className='blog-item-text'>{desc}</div>
    </div>
  )
}