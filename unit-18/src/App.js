// function App() {
//   return   
// }

// export default App;

import React, { createContext, useContext, useState } from "react";
const UserContext = createContext();
const useUser = () => useContext(UserContext);

function UserProvider({children}){
  const [isLog, setIsLog] = useState(false);
  const [username, setUsername] = useState(null);

  const logIn = () =>{
    setIsLog(true);
    setUsername("David")
  }

  const logOut = () =>{
    setIsLog(false);
    setUsername(null)
  }

  return(
    <UserContext.Provider value={{isLog, logIn, username, logOut}}>
      {children}
    </UserContext.Provider>
  )
}

function UserMenu() {
  const { isLog, username, logIn, logOut } = useUser();
  return (
    <div>
      {isLog && <p>{username}</p>}
      {isLog ? (
        <button onClick = {logOut}>Log out</button>
      ) : (
        <button onClick = {logIn}>Log in</button>
      )}
    </div>
  );
}

export default function App() {
  return (
    < UserProvider>
      <div>
        <h1>useContext hook</h1>
        <UserMenu />
      </div>
    </ UserProvider>
  );
}