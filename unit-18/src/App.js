// function App() {
//   return   
// }

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


import { useRef } from "react";

const Player = ({source}) => {
  const playerRef = useRef(null);
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>Sorry, we have a problem</video>
      <div>
        <button onClick = {play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  )
}

const App = () => {
  return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4"/>
}

export default App;