import "bootstrap/dist/css/bootstrap.min.css";

import './App.sass';
import {useEffect} from "react";
import {useSelector} from "react-redux";

import {Todos} from "./Components";

function App() {

    const storeContents = useSelector(state => state.todo);

    useEffect(() => {
            localStorage.setItem("dd", JSON.stringify(storeContents));
    },[storeContents])

  return (
    <div className="App">
      <h1 className="display-1 mb-3 text-center">todos</h1>
      <Todos />
    </div>
  );
}

export default App;
