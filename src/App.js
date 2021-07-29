import React, {useState} from "react"

import LogView from "./workout/LogView";
import ViewSelector from "./ViewSelector";
import TrendView from "./trends/TrendView";
import './app.scss';

const App = () => {
  
  const [view, setView] = useState("logView");

  let selectedView;
  if (view === "logView") {
    selectedView = <LogView />
  }
  else if (view === "trendView") {
    selectedView = <TrendView />
  }
  
  return (
    <main className="app">
      <h1 className="header">Growth</h1>
      <ViewSelector setView={setView}/>
      {selectedView}
    </main>
  );
}


export default App;
