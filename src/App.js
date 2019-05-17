import React from 'react';
import EmailInput from './components/email-input';
import PasswordInput from './components/password-input';

class App extends React.Component{
  constructor(props){
    super();

    this.state = {
      email: "",
      password: ""
    }

  }
  handleChange = (event, attr)=>{
    const newState = { ...this.state };
    newState[attr] = event.target.value;
    this.setState( newState );
  }
  render() {
    return (
        <div>
          <EmailInput
           value = {this.state.email}
           placeholder = "Your email address"
           handleChange = {e=>(this.handleChange(e, 'email'))}
          />
          <PasswordInput
           value = {this.state.password}
           placeholder = "Your password"
           handleChange = {e=>(this.handleChange(e, 'password'))}
          />
        </div>
      )
  }
}

export default App;
