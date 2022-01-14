import React from 'react';

import './signIn-signUp-page.scss';

import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signup/signup';

const SignInAndSignUpPage = () => {
  return(
    <div className='signIn-signUp-page'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUpPage;