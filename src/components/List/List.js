import { useState } from "react";

function List({ todos, setTodos, activeFilter }) {
  const [toggle, setToggle] = useState(true);
  function handleCheck(idx) {
    let newArray = [...todos];
    newArray[idx]["done"] = todos[idx]["done"] ? false : true;
    setTodos(newArray);
  }
  function handleDestroy(idx) {
    let newArray = [...todos];
    newArray.splice(idx, 1);
    setTodos(newArray);
  }
  function toggleAll() {
    let newArray = [...todos];
    if (toggle) {
      newArray.forEach((obj) => (obj.done = true));
      setToggle(false);
    } else {
      newArray.forEach((obj) => (obj.done = false));
      setToggle(true);
    }
    setTodos(newArray);
  }
  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={() => toggleAll()}>
          Mark all as complete
        </label>

        <ul className="todo-list">
          {todos.map((elem, idx) => {
            return (
              <li
                key={idx}
                className={elem.done ? "completed" : ""}
                style={{ display: (elem.done && activeFilter === "active") || (!elem.done && activeFilter === "completed") ? "none" : "block" }}>
                <div className="view">
                  <input className="toggle" type="checkbox" onChange={() => handleCheck(idx)} checked={elem.done} />
                  <label>{elem.todo}</label>
                  <button className="destroy" onClick={() => handleDestroy(idx)}></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default List;
