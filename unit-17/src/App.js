import React, {useState, useEffect} from "react";


function App () {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {setTime(new Date())}, 1000);
     
    return() => {
    clearInterval(timerId);
    };
  }, []);

  const formed = time.toLocaleTimeString()

  return(
    <div style={{
      paddingTop:"195px",
      paddingBottom:"195px",
      display: "flex",
      justifyContent:"center",
      border:"1px solid #a29d9dff",
      borderRadius: "8px",
      backgroundColor: "black"
    }}>
    <div
    style={{
      fontSize:"400px",
      color:"lightgrey"
    }}
    >{formed}</div>
    </div>
  )

 
  
}
export default App

// function App() {
//   const [isDark, setisDark] = useState(false);

//   const lightStyle = {
//     backgroundColor: "lightgrey",
//     color: "grey",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight: "200px",
//     borderRadius: "14px",
//     padding: "20x",
//   }
//   const darkStyle = {
//     backgroundColor: "black",
//     color: "white",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
 //    minHeight: "200px",
 //    borderRadius: "14px",
 //    padding: "20x",
 //  }

//   const themeLabel = isDark? "Dark theme" : "Light theme";
//   const toggleText = isDark? "Turn on light" : "Turn off lights";

//   return(
//     <div style={isDark? darkStyle : lightStyle}>
//       <h2>{themeLabel}</h2>
//       <button
//       style={{
//         display: "block",
//         cursor: "pointer"
//       }}
//       onClick={() => setisDark(prev => !prev)}
//       aria-pressed={isDark}
//       >{toggleText}</button>
//     </div>
//   )
// }

// export default App;
