import React, {useState,useEffect} from 'react';
import './Contacts.scss';

import axios from 'axios'

export default function Contacts() {
  const [state, setstate] = useState([])

  async function getUser() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setstate(response.data)
      console.log(response);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }
  
   useEffect(()=>{
   getUser();
  },[])
  console.log(state);
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
       {state.map(item => <li>{item.name}</li>)}
      </ul>
    </div>
  )
}

