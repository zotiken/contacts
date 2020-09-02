import React, {useState,useEffect} from 'react';
import './Contacts.scss';

import axios from 'axios'
import ItemList from "../../components/ItemList/ItemList"
import Header from "../../components/Header/Header"
import Modal from "../../components/Modal/Modal"

export default function Contacts() {
  const [state, setstate] = useState([])
  const [searchValue, setsearchValue] = useState(null)
  const [modal, setmodal] = useState(false)
  const [show, setshow] = useState(false)

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

  function addContanct(params) { 
    console.log(params,state)
    setstate([...state,params])
  }

  function editContanct(params, id) { 
    const{name,phone, email} = params
    console.log(params,state)

    var edit  = [...state]
    console.log(edit.filter(item => item.id === id )[0])
    edit.forEach(item =>{ if(item.id === id) {item.name = name; item.email = email;item.phone = phone}})
    setstate([...edit])
  }



  function renderList(params) {
    if (searchValue) {
      return state.filter(item => item.name.substr(0, searchValue.length) === searchValue || item.name.split(' ')[1].substr(0, searchValue.length) === searchValue || item.phone.substr(0, searchValue.length) === searchValue)
    } 
      return state
  }


  return (
    <>
      <Header searchValue={searchValue} setsearchValue={setsearchValue} setmodal={setmodal} />
      <h1>Contacts</h1>
      <ul className='contacts__list'>
       {renderList().length ? renderList().map((item,i)=> <ItemList item={item} key={item.id} setmodal={setmodal} />):'Нет совпадений'}
      </ul>
     { modal &&<Modal modal={modal} setmodal={setmodal} addContanct={addContanct} editContanct={editContanct} state={state}/>}
    </>
  )
}

