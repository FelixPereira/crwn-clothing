import React from 'react';

import FormInput from '../formInput/FormInput';
import './signIn.scss';
import CustomButton from '../customButton/CustomButton';
import {auth, signInWithGoogle} from '../../firebase/firebase';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault(); 
    const {email, password} = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch(error) {
      console.log(error);
    }
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return(
      <div className='sign-in'>
        <h1 >I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            required
            label='Email'
            handleChange={this.handleChange} />

          <FormInput 
            type='password'
            name='password'
            value={this.state.password}
            required
            label='Password'
            handleChange={this.handleChange} />

          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} signInWithGoogle> Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;