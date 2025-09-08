import React, { Component } from "react";






// class Error extends React.Component{
//   state = {hasError: false,}

//   componentDidCatch(error, info){
//     this.setState({hasError: true})
//   }

//   render(){
//     if(this.state.hasError){
//       return <p>Ups... theres is an Error</p>
//     }
//     return this.props.children
//   }
// }


class UserForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
    }
  }
componentDidMount(prevProps, prevState){
  const savedUsername = localStorage.getItem("username");
  const savedEmail = localStorage.getItem("email");

  if(savedUsername || savedEmail){
    this.setState({
      username: savedUsername || "",
      email: savedEmail || "",
    })
  }
}
componentDidUpdate(prevProps, prevState){
  if(prevState.username !== this.state.username){
    localStorage.setItem("username", this.state.username)
  }
  if(prevState.email !== this.state.email){
    localStorage.setItem("email", this.state.email)
  }
}

handleChance = (e) => {
  const {name, value} = e.target;
  this.setState({[
    name
   ]: value})
}

render(){
const { username, email } = this.state;

    return (
      <div>
        <h1>Форма введення користувача</h1>
        <form>
          <label>
            Ім&apos;я користувача:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChance}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChance}
            />
          </label>
        </form>
        <div>
          <h2>Введені дані:</h2>
          <p>Ім&apos;я користувача: {username}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    );
}
}


export default UserForm

