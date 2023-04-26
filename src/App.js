import { useState, useRef } from "react";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [showElement, setShowElement] = useState(true);
  const inputElement = useRef(null);

  const Todo = (props) => {
    return (
      <li>
        <input type="text" readOnly value={props.userInput}></input>
        <div className="ButtonContainer">
          <button className="Update" onClick={handleUpdate}>UPDATE</button>
          <button className="Done" onClick={handleDone}>DONE</button>
        </div>
      </li>);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setTodoList(todoList.concat(<Todo key={todoList.length} userInput={todoInput} />));
    console.log(todoList);
  };

  const handleDone = (e) => {
    e.target.parentNode.parentNode.style.textDecoration = "line-through";
  };

  const handleUpdate = (e) => {
    setShowElement(!showElement);
    inputElement.current.focus();
  };

  const handleClear = () => {
    setShowElement(true);
    setTodoList([]);
    inputElement.current.value = "";
    inputElement.current.focus();
  }

  return (
    <div className="App">
      <h1>TODO++</h1>

      <div className="FormContainer">
        {showElement ?
          <form onSubmit={handleSumbit}>
            <input type="text" className="NewTodo" placeholder="ADD NEW TODO" maxLength="40" required autoFocus onChange={(e) => setTodoInput(e.target.value.toUpperCase())} ref={inputElement}></input>
            <input type="submit" value="ADD"></input>
          </form>
          :
         ""
        }
      </div>
      <div className="TodosContainer">
        <ul>{todoList}</ul>
      </div>
      <div className="PendingClearContainer">
        <p onClick={handleClear}>{todoList.length} TODOS</p>
        <p onClick={handleClear}>/</p>
        <p onClick={handleClear}>CLEAR</p>
        {/* <button className="Clear">CLEAR</button> */}
      </div>
    </div>
  );
}

export default App;
