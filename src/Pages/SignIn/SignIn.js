import React, {useState, useMemo} from 'react';
import './SignIn.scss';
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
const user = {
  id:"vdvdsvsdvsdv",
  email: "admin@mail.net",
  password: 'admin'
}


export default function SignIn(props) {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const router = useRouter();
  function onSunbmit(e) {
    e.preventDefault();
    if (user.email === email && user.password === password) {
      alert("WELCOME!")
      props.onLogIn()
      console.log(props.isAuth);
      router.push('/contacts')
    } else {
    // context auth
    }
  }
  
  return (
    <div>
      <h1>SignIn</h1>
      <form className='logIn_form' onSubmit={(e)=> onSunbmit(e)}>
        <label>
          Email:
        <input type="email" value={email} onInput={(e) => setemail(e.target.value) }/>
        </label>
        <label>
          Password:
        <input type="password" value={password} onInput={(e) => setpassword(e.target.value)}/>
        </label>
        <button>Отправить</button>
      </form>
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
