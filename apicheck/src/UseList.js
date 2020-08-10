import React, { useState, useEffect } from 'react'
import axios from 'axios';

function UseState (){

    const [state,setState]=useState([])
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=> {
            setState(res.data)
        })
    })
    return (
        <ul>
          {state.map( stat =>( 
            <li key={stat.id}>{stat.name}</li>
          ))}
        </ul>
      );
    };
    
    export default UseState;

