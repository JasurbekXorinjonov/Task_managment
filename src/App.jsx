import "./App.css";
import Archive from "./components/Archive/Archive";
import TaskList from "./components/TaskList/TaskList";
import Closed from "./components/closed/Closed";
import { newData } from "./components/constans";
import Current from "./components/current/Current";
import Delete from "./components/delete/Delete";
import New from "./components/new/New";

function App() {
  return (
    //
    <div className="container">
      <h1 className="py-3">Заявки</h1>
      <div className="cards">
        <New />
        <Current />
        <Closed />
        <Archive />
        <Delete />
      </div>
    </div>
  );
}

export default App;
