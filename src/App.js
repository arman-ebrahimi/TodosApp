import "bootstrap/dist/css/bootstrap.min.css";

import './App.sass';
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import {Todos} from "./Components";

function App() {

    const storeContents = useSelector(state => state.todo);
    const dispatch = useDispatch();

    useEffect(() => {
        const todos = localStorage.getItem("dd");
        if(todos){
            dispatch({type: "todos/loadTodos", payload: todos})
        }
        return () => {
            localStorage.setItem("dd", storeContents);
        }
        // eslint-disable-next-line
    },[])

  return (
    <div className="App">
      <h1 className="display-1 mb-5 text-center">todos</h1>
      <Todos />
    </div>
  );
}

export default App;
