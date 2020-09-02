import React, {useState, useMemo} from 'react';
import './SignIn.scss';

import Button from "../../components/Button/Button"
import Notification from "../../components/Notification/Notification"

import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
const user = {
  id:"vdvdsvsdvsdv",
  email: "admin@mail.net",
  password: 'admin'
}


export default function SignIn(props) {
  const [email, setemail] = useState('admin@mail.net')
  const [password, setpassword] = useState('admine')
  const [info, setinfo] = useState('')
  const [show, setshow] = useState(false)

  const router = useRouter();
  function onSunbmit(e) {
    e.preventDefault();
    if (user.email === email && user.password === password) {
      props.onLogIn()
      router.push('/contacts')
    } else if (user.email !== email) {
      setinfo('Такой адрес EMAIL не существует!')
      setshow(true)
      setTimeout(() => {
        setshow(false)
        setinfo('')
      }, 2000);
    }  else if (user.password !== password) {
      setinfo('Введен неверный пароль!')
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
  }
  
  return (
    <div className='logIn'>
      <h1>Авторизация</h1>
      <form className='logIn__form form' onSubmit={(e)=> onSunbmit(e)}>
        <label  className='form__label'>
        <input className='form__email' type="email" value={email} onInput={(e) => setemail(e.target.value) }/>
        <p className={email.length > 0 ? 'fixed' : ''}>Email:</p>
        </label>
        <label  className='form__label'>
        <input className='form__password' type="password" value={password} onInput={(e) => setpassword(e.target.value)}/>
        <p className={password.length > 0 ? 'fixed' : ''}> Password:</p>
        </label>
        <Button type='submit'>Отправить</Button>
      </form>
      <Notification show={show} info={info}/>
    </div>
  )
}


export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params
      },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history
    };
  }, [params, match, location, history]);
}
