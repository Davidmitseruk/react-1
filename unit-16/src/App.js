//import { useState } from "react";

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


import {useState, useEffect} from 'react';

const App = () => {
    const[value, setValue] = useState(0);

    useEffect(() => {
      document.title = `you clicked ${value} times`;
    })

    return(
      <div>
        <p>
          you clicked {value} times
        </p>
        <button
        onClick={() => {
          setValue(value + 1)
        }}
        >Click me</button>
      </div>
    )
}

export default App