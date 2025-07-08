import React from "react";
import styled from 'styled-components'

const Button = styled.button`
background: ${(props) =>(props.$primary ? "#212121" : "white")};
color:${(props) =>(props.$primary ? "white" : "#212121")};
font-size: 16px;
  margin: 10px;
  padding: 10px 15px;
  border: 1px solid red;
  border-radius: 8px;
`


function App() {
  return(
    <div>
      <Button $primary = {true}>Primary</Button>
      <Button $primary = {false}>secondary</Button>
    </div>
  )
}

export default App;
