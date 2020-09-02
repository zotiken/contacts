import React, {useState, useEffect} from 'react'
import './Modal.scss'
import Button from "../../components/Button/Button"
import add from '../../images/person_add-24px.svg'


  const userInfoInit = {
    address: {street: "Lenina", suite: "Apt. 556", city: "Tula", zipcode: "31655", geo: {}},
    company: {name: "Staff", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"},
    email: "",
    id: null,
    name: "",
    phone: "",
    username: "Noname",
    website: "google.com"
  } ;

  
export default function Modal(props) {

    const [title, settitle] = useState('Добавить')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [tel, settel] = useState('')

    const [info, setinfo] = useState('')
    const [show, setshow] = useState(false)


    useEffect(() => {
        if (props.modal.id) {
            settitle('Редактировать')
            setname(props.state.filter(item => item.id === props.modal.id)[0].name)
            setemail(props.state.filter(item => item.id === props.modal.id)[0].email) 
            settel(props.state.filter(item => item.id === props.modal.id)[0].phone)  
        } 
    },[])
  
    function onSunbmit(e) {
      e.preventDefault();
      let userInfo;
      if (name && email && tel) {
        userInfo = {...props.modal.id ? props.state[props.modal.id] : userInfoInit,id:props.modal.id ? props.modal.id : props.state.length+1,name:name,email:email,phone:tel} 
      } 
      else if (!name && email && tel) {
        setinfo('введите имя!')
        setshow(true)
        setTimeout(() => {
          setshow(false)
          setinfo('')
        }, 2000);
      }  else if (name && !email && tel) {
        setinfo('введите почту!')
        setshow(true)
        setTimeout(() => {
          setshow(false)
          setinfo('')
        }, 2000);
      }
      else {
        setinfo('Ошибка!')
        setTimeout(() => {
  
          setinfo('')
        }, 1000);
      }
      !props.modal.id ? props.addContanct(userInfo) : props.editContanct(userInfo, props.modal.id )

      props.setmodal(false)
    }
  
    function onInputSearch(e) {
        props.setsearchValue(e.target.value)
    }

  // props.modal.id &&  settitle('Редактировать')
    return (
        <>
        <div className={`overlay ${!props.modal && 'visually-hidden'}`} onClick={() => props.setmodal(false)}></div>
        <div className={`modal ${!props.modal && 'visually-hidden'}`}>
            <form className='modal__form form' onSubmit={(e)=> onSunbmit(e)}>
            <h2 className='form__title'>{`${title} пользователя`}</h2>
        <label  className='form__label'>
        <input className='form__input' type="text" value={name} onInput={(e) => setname(e.target.value) }/>
        <p className={name.length > 0 ? 'fixed' : ''}>имя:</p>
        </label>
        <label  className='form__label'>
        <input className='form__input' type="email" value={email} onInput={(e) => setemail(e.target.value)}/>
        <p className={email.length > 0 ? 'fixed' : ''}> почта:</p>
        </label>
        <label  className='form__label'>
        <input className='form__input' type="text" value={tel} onInput={(e) => settel(e.target.value) }/>
        <p className={tel.length > 0 ? 'fixed' : ''}>тел:</p>
        </label>
        <Button type='submit' onClick={(e)=> onSunbmit(e) }>{title}</Button>
      </form>
        </div>
        </>
    )
}
