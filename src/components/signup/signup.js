import React from 'react';

import './signup.scss';

import { auth, createDocument } from '../../firebase/firebase';

import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';


class SignUp extends React.Component {
  constructor() {
    super();
    
    this.state = {
      displayName: '',
      email: '',
      password:'',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword) {
      alert("Password don't match");
      this.setState({
        password:'',
        confirmPassword: ''
      })
    } else {
        try {
          const user = await auth.createUserWithEmailAndPassword(email, password);
          await createDocument(user, displayName);

          this.setState({
            displayName: '',
            email: '',
            password:'',
            confirmPassword: ''
          })

        } catch(error) {
          console.log(error)
        }
      }
  }

  handleChangge = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }
  
  render(){
    return(
      <div className='sign-up'>
        <h1>I don't have an account</h1>
        <span>Create an account</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type='text'
            name='displayName'
            value={this.state.displayName}
            label='Username'
            required
            onChange={this.handleChangge}
          />

          <FormInput 
            type='email'
            name='email'
            value={this.state.email}
            label='Email'
            required
            onChange={this.handleChangge}
          />

          <FormInput 
            type='password'
            name='password'
            value={this.state.password}
            label='Password'
            required
            onChange={this.handleChangge}
          />

          <FormInput 
            type='password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            label='Confirm password'
            required
            onChange={this.handleChangge}
          />

          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>

      </div>
    )
  }
}

export default SignUp;