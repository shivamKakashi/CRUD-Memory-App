import React from 'react';
import * as api from '../api/index.js';


export const getPosts = ()=> async (dispatch) =>{
    try{
        const { data } = await api.fetchPosts();
        console.log(data)
        dispatch({ type: 'FETCH_ALL', payload : data})
    }catch(error){
        console.log(error.messsage)
    }
}

export const createPost = (post) => async (dispatch) =>{
    try {
        const { data }  = await api.createPost(post);
        console.log("createPost:",data)
        dispatch({ type: 'CREATE' , payload: data})
        
    } catch (error) {

        console.log(error.messsage);
        
    }
}

