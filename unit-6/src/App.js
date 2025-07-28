import React from "react";
import PageBoard from "./components/PageBoard"
import eventsApi from "./upcoming-events.json"
import GlobalStyles from "./GlobalStyles";


function App() {
  return(
    <>
    <GlobalStyles />
    <PageBoard items = {eventsApi} />

    </>
  ) 
}

export default App;
