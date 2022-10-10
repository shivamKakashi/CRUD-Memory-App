import React from 'react'
import {useSelector} from 'react-redux';
import Post from './Post/Post'
import useStyles  from './Style'


function Posts() {

  const posts  = useSelector(state => state.posts);
  const classes = useStyles();

  
  return (
    <>
    
    <Post/>
    <Post/>
    </>
    

  )
}

export default Posts