import React from "react";
import Hello from "./HelloWorld";
import "./App.css"

const App = () => {
  const [display, setDisplay] = React.useState(true)

  return <div>
    <button onClick={() => {setDisplay(!display)}}>Toggle</button>
    {display && <Hello />}
    </div>
}

export default App