import React, {useState,useEffect} from 'react';
import './Contacts.scss';

import axios from 'axios'
import ItemList from "../../components/ItemList/ItemList"
import Header from "../../components/Header/Header"

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
    <>
<Header/>
<h1>Contacts</h1>
      <ul className='contacts__list'>
       {state.map(item => <ItemList item={item} key={item.id}/>)}
      </ul>
    </>
  )
}

