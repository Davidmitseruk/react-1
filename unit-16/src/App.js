//import { useState } from "react";

const { useState, useEffect } = require("react")

// const App = () => {
//   const [value, setValue] = useState(0);
//   return(
//     <div>
//       {value}
//       <button type="button" onClick={() => setValue(value + 1)}>Add value by 1</button>
//     </div>
//   )
// }

// export default App
//const App = () => {
//  const[state, setState] = useState({
//    username: "",
//    todos: [{text: 'make homewoek'}],
//    age: 0,
//  })
//}

//const App = () => {
//  const [username, setUsername] = useState("");
//  const [todes, setTodes] = useState([{text: 'make homework'}])
//  const [age, setAge] = useState(0)
//}

// export default App


//import {useState, useEffect} from 'react';

//const App = () => {
//    const[value, setValue] = useState(0);

//    useEffect(() => {
//      document.title = `you clicked ${value} times`;
//    })

//    return(
//      <div>
//        <p>
//          you clicked {value} times
//        </p>
//        <button
//        onClick={() => {
//          setValue(value + 1)
//        }}
//        >Click me</button>
 //     </div>
//    )
//}

//export default App

//const App =()=>{
//  const [value, setValue] = useState(0);
//  useEffect(() => {
//    console.log(value);
//    console.log('Udating phase')
//  }, [value])


//  return <button onClick={() => setValue(value + 1)}>{value}</button>
//}

//export default App;



//const App =()=>{
//  const [firstvalue, setfirstValue] = useState(0);
//  const [secondValue, setsecondValue] = useState(0);

//  useEffect (() => {
//    console.log(firstvalue + secondValue);
    
//  }, [firstvalue, secondValue])
  
//  return(
//    <>
//    <button onClick={() => setfirstValue(firstvalue + 1)}> first: {firstvalue}</button>
 //   <button onClick={() => setsecondValue(secondValue + 1)}> second: {secondValue}</button>
 //   </>
 // )
//}

//export default App;


//const App =()=>{
//  useEffect(() => {
//    console.log("mounting");
//    return() => {
//      console.log("unmounting");
//    }
//  }, [])
//  return null;
//}

//export default App;

const App =({username})=>{
  const [isLog, setisLog] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log("First message")
  }, []);

  useEffect(()=>{
    if(username){
      console.log("Fetching user: ", username)
    }
  }, [username])

  useEffect(() => {
    console.log("value changed ", value)
  }, [value])

  useEffect(()=> {
    console.log("isLog cnaged to: ", isLog)
  }, [isLog])

  useEffect(() => {
    const handleKeyDown = e => console.log("keydown event: ", e.key);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, []);

  return(
    <div>
      <h1>Hello {username}</h1>
      <p>Value: {value}</p>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
      <p>Status: {isLog ? "logged in" : "Logged out"}</p>
      <button onClick={() => setisLog(prev => !prev)}>Toggle login</button>
    </div>
  )
}

export default App;