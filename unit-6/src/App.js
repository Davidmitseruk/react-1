import React from "react";
import PageBoard from "./components/PageBoard"
import eventsApi from "./upcoming-events.json"


function App() {
  return(
    <>
    <PageBoard items = {eventsApi} />

    </>
  ) 
}

export default App;
