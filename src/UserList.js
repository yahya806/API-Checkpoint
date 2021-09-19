import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios'
import Users from './Users';


const UserList = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState()
  
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( (res)=> {
    
          setUsers(res.data);
        })
    
        .catch( function (error){
          setError (error)
        })
      
    
      },
      [])

    return (
        <div>
         { users.map((el)=><Users el={el}/>)}
        </div>
    )
}

export default UserList
