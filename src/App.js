import "bootstrap/dist/css/bootstrap.min.css";

import './App.sass';
import {Todos} from "./Components";

function App() {
  return (
    <div className="App">
      <h1 className="display-1 mb-5 text-center">todos</h1>
      <Todos />
    </div>
  );
}

export default App;
