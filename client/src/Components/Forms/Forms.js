import React ,{ useEffect, useState } from 'react';
// import { createPost, updatePost } from '../../actions/posts';
import { TextField, Button, Typography, Paper} from  '@material-ui/core';
import useStyles from './Style';
import { createPost } from '../../actions/posts';
import { useSelector , useDispatch} from 'react-redux';
import FileBase from 'react-file-base64';



function Forms({ currentId , setCurrentId }) {
  const dispatch = useDispatch();

  const post = useSelector( (state) =>( currentId ? state.posts.find((message)=> message._id ===currentId  ): null))

  const classes = useStyles();
  const [postData, setPostData] = useState({ creator : '', title: '', message: '', tags:''});

  const clear = () =>{
    // setCurrentId(0);
    setPostData({ creator : '', title: '', message: '', tags:'' })
  }
  useEffect(()=>{
    if(post) setPostData(post)
  },[post]);

  const handleSubmit= async (e) =>{
    e.preventDefault();
    
   
      dispatch(createPost(postData));
   
  }

  return (

    <>
    <Paper className={ classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant='h6'>
        {currentId? `Editing "${post.title}"`: "Creating a Memory ..."}
      </Typography>
      <TextField name='creator' 
      variant="outlined" 
      label= "Creator" 
      fullWidth
      value = {postData.creator} 
      onChange ={(e)=> setPostData({ ...postData, creator: e.target.value}) 
      } 
      />
       <TextField name='title' 
      variant="outlined" 
      label= "Title" 
      fullWidth
      value = {postData.title} 
      onChange ={(e)=>setPostData({ ...postData, title: e.target.value}) } 
      />
       <TextField name='message' 
      variant="outlined" 
      label= "Message" 
      fullWidth
      value = {postData.message} 
      onChange ={(e)=>setPostData({ ...postData, message: e.target.value}) } 
      />
       <TextField name='tags' 
      variant="outlined" 
      label= "Tags (Comma Separated)" 
      fullWidth
      value = {postData.tags} 
      onChange ={(e)=>setPostData({ ...postData, tags: e.target.value.split(',')}) } 
      />
      <div className={ classes.fileInput}>
        <FileBase type = "file" 
        multiple = {false}
        onDone = { ({base64}) =>setPostData({ ...postData, selectedFile: base64})}
        />

      </div>
      <Button className={classes.buttonSubmit} variant = "contained" color='primary' size="large" type='submit' fullWidth>Submit</Button>
      <Button variant = "contained" color='secondary' size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>

    </>
  )
}

export default Forms 