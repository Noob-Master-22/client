import logo from './logo.svg';
import './App.css';
import {useEffect, useState, usestate} from "react";
import React from 'react';
import { Axios } from 'axios';

function App() {
  const [listofUsers,setlistOfUsers]= useState([
     {age:25,userId:"Hehe",email:"hehe@gmail.com"}
  ]
  );

  useEffect(()=>{
    Axios.get("https://localhost:3001/getUsers").then((response)=>{
      setlistOfUsers(response.data)
    })
  },[]); 
  return(

  <div className="App">
      <div className='UsersDisplay'>
      {listofUsers.map((Users)=>{
        return (<div>
          <h1>Age: {Users.age}</h1>
          <h1>UserId:{Users.UserId}</h1>
          <h1>email:{Users.email}</h1>
          </div>
         );
      })};
      
      </div>  
    </div>
  )
}

export default App;
