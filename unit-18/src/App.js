// function App() {
//   return   
// }

//const { useState } = require("react")

// export default App;

//import React, { createContext, useContext, useState } from "react";
//const UserContext = createContext();
//const useUser = () => useContext(UserContext);

//function UserProvider({children}){
//  const [isLog, setIsLog] = useState(false);
//  const [username, setUsername] = useState(null);

//  const logIn = () =>{
//    setIsLog(true);
//    setUsername("David")
//  }

//  const logOut = () =>{
//    setIsLog(false);
//     setUsername(null)
//   }

//   return(
//     <UserContext.Provider value={{isLog, logIn, username, logOut}}>
//       {children}
//     </UserContext.Provider>
//   )
// }

// function UserMenu() {
//   const { isLog, username, logIn, logOut } = useUser();
//   return (
//     <div>
//       {isLog && <p>{username}</p>}
//       {isLog ? (
//         <button onClick = {logOut}>Log out</button>
//       ) : (
//         <button onClick = {logIn}>Log in</button>
//       )}
//     </div>
//   );
// }
// 
// export default function App() {
//   return (
//     < UserProvider>
//       <div>
//         <h1>useContext hook</h1>
//         <UserMenu />
// </div>
//     </ UserProvider>
 //  );
// }



//const App = () => {
//  const btnRef = useRef();

//  return <button ref={btnRef}>Button withg ref</button>
//}



//const App = () => {
//  const [value, setValue] = useState(0);
//  const btnRef = useRef()

//  console.log(btnRef.current)

 // useEffect(() => {
 //   console.log(btnRef.current)
 // })

 // const handleClick = () => {
 //   console.log(btnRef.current)
 // }

  //return(
 //   <>
 //    <button onClick={() => setValue(value+1)}>Update Value - re-render</button> 
 //     <button ref={btnRef}>Button with ref</button> 
 //   </>
//  )
//}



 //const App = () => {
 //  const valueRef = useRef(0);

 //  useEffect(() => {
 //    console.log(valueRef.current)
 //  })
 //
 //  const handleClick = () => {
 //    valueRef.current += 1;
 //  }

 //  return <button onClick={handleClick}>Click</button>
 //


 //import { useRef } from "react";

 //const Player = ({source}) => {
 //  const playerRef = useRef(null);
 //  const play = () => playerRef.current.play();
 //  const pause = () => playerRef.current.pause();

 //  return (
 //    <div>
 //      <video ref={playerRef} src={source}>Sorry, we have a problem</video>
 //      <div>
 //        <button onClick = {play}>Play</button>
  //       <button onClick={pause}>Pause</button>
 //      </div>
 //    </div>
 //  )
 //}

 //const App = () => {
 //  return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4"/>
 //}

 //export default App;



//import { useMemo, useState } from "react";


//const App = ({someProp}) => {
//  const [planets, setPlanets] = useState(['Earth', "Mars", "Venus", "Jupiter"])
//  const [query, setQuery] = useState("");
//  const [clikcs, setClicks] = useState(0)
//
//  const filteredPlanets = useMemo(() => planets.filter(planet => planet.includes(query)), [planets, query])
//
//  return(
//    <div>
//      <div>Some Props: {someProp}</div>
//      <button onClick={()=>setClicks(clikcs+1)}>Number of clicks: {clikcs}</button>
//      <div>
//      {filteredPlanets.map(planet =>(
//        <div key={planet}>{planet}</div>
//      ))}
//    </div>
//   </div>
    
//  )
//}

//export default App;


//import React, { useState, useMemo, useCallback } from "react";

//function App(){
//  const [numbers, setNumbers] = useState([1, 2, 3]);
//  const [input, setInput] = useState("");
//  const [filter, setFilter] = useState('');

//  const total = useMemo(()=> {
//    return numbers.reduce((acc, n) => acc + n, 0);
//  }, [numbers]);

//  const addNumber = useCallback(() => {
//    if(input.trim() === "") return;
//    setNumbers([...numbers, Number(input)]);
//    setInput("");
//  }, [input, numbers]);

//  const filteredNumbers = useMemo(() => {
//    return numbers.filter((n) => n.toString().includes(filter))
//  }, [numbers, filter]);

//  return(
//    <div>
//      <div>
//        <input type="number" value={input} placeholder="enter number" onChange={(e) => setInput(e.target.value)}/>
//        <button onClick={addNumber}>Add</button>
//      </div>
//      <h3>List of numbers</h3>
//      <ul>
//        {numbers.map((n, i) => (<li key={i}>{n}</li>))}
//      </ul>
//      <h3>Total: {total}</h3>
//      <div>
//        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)}/>
//      </div>
//      <h3>filtered Numbers</h3>
//      <ul>
//        {filteredNumbers.map((n, i) => (<li key={i}>{n}</li>))}
//      </ul>
//    </div>
//  )
//}

//export default App

import React, { useState, useMemo, useCallback, useEffect } from "react";

const TodoApp = () => {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");


const fetchTodos = useCallback(async () => {
  setLoading(true);
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=20");
  const data = await response.json();
  setTodos(data);
  setLoading(false);
}, []);

useEffect(()=>{
  fetchTodos()
}, [fetchTodos])

const toggleTodo = useCallback((id) => {
  setTodos((prev) => {
    prev.map((t) => t.id === id ? {...t, completed: !t.completed}: t)
  })
}, [])

const handleSearch = useCallback((e) => {
  setSearch(e.target.value);
}, []) 

const filteredTodos = useMemo(() => {
  return todos.filter((t) => 
  t.title.toLowerCase().includes(search.toLowerCase()))
}, [todos, search])

const completedCount = useMemo(() => {
  return filteredTodos.filter((t) => t.completed).length;
}, [filteredTodos])


    return (
      <div style={{ padding: "20px" }}>
        <h2>Todo App</h2>

        <input
          type="text"
          placeholder="Search todo..."
          value={search}
          onChange={handleSearch}
          style={{ marginBottom: "10px", padding: "5px" }}
        />

        {loading && <p>Loading...</p>}

        <p>
          Completed: {completedCount} / {filteredTodos.length}
        </p>

        <ul>
          {filteredTodos.map((t) => (
            <li key={t.id}>
              <label>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTodo(t.id)}
                />
                {t.title}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default TodoApp;

