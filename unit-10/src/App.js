// import React, {Component} from 'react';

// class LoginForm extends Component{
//   handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;
//     const login = form.elements.login.value;
//     const password = form.elements.password.value;
// 
//     this.props.onSubmit({login, password});
//     form.reset();
//   }

//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//       <input  type='text' name='login' placeholder='Your Login'/>
//       <input type='password' name='password' placeholder='Your Password'/>
//       <button type='submit'>Login</button>
//       </form>
//     )
//   }
// }



// class App extends Component {
//   handleLogin = value =>{
//     console.log("login Data:", value)
//   }
// 
//   render(){
//     return(
//       <>
//       <h1>Login form</h1>
//       <LoginForm onSubmit={this.handleLogin}/>
//       </>
//     )
//   }
// }

// export default App;



//import React, {Component} from 'react';



//class App extends Component{
//state={
//  inputValue: ""
//}

//handleChange = e => {
//  this.setState({inputValue: e.target.value})
//}

//  render(){
//    const {inputValue} = this.state;

//    return(
//      <div>
//        <input type='text' placeholder='Yout text' value={inputValue} onChange={this.handleChange}/>
//        <p>You entered: {inputValue}</p>
//      </div>
//    )
//  }
// }

import React from "react";
import { nanoid } from "nanoid";

class Form extends React.Component{
  loginInputId = nanoid();

  render(){
    return(
      <form>
        <label htmlFor={this.loginInputId}>Login</label>
        <input
        type="text"
        name="login"
        id={this.loginInputId}
        placeholder="Enter login"
         />
      </form>
    )
  }
}


export default Form;