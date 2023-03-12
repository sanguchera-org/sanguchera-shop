import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SignIn from '../../auth/sign-in/sign-in';
import SignUp from '../../auth/sign-up/sign-up';
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

  return (
    <>
      {signIn && <SignIn open={signIn} setOpen={setSignIn}></SignIn>}
      {signUp && <SignUp open={signUp} setOpen={setSignUp}></SignUp>}
    </>
  );
}

export default Open;
