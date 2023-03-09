import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SignIn from '../../auth/sign-in/sign-in';
import './open.css';

export function Open() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get('abrir');

  useEffect(() => {
    if (param === null) {
      return;
    }

    setSignIn(param === 'ingresar');
    setSignUp(param === 'registrar');

    searchParams.delete('abrir');
    setSearchParams(searchParams);
  }, [param, searchParams, setSearchParams]);

  return <SignIn open={signIn} setOpen={setSignIn}></SignIn>;
}

export default Open;
