import { useState } from "react";
import "./App.css";
import Items from "./items";

function App() {
  let [text, setText] = useState("");
  let [bttn, setBttn] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
    //  console.log(text);S
  }

  function handleSubmit() {
    setBttn((oldeItmes) => {
      return [...oldeItmes, text];
    });
    setText("");
  }
  function deleteChange(id) {
    setBttn((oldeItmes) => {
     return oldeItmes.filter((item, index)=>{
      return index !== id;
     })
    })
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List</h1>
        <input
          className="text"
          value={text}
          placeholder="Add your wish"
          onChange={handleChange}
        ></input>
        <button onClick={handleSubmit}>+</button>

        <ol>
          {bttn.map((item,index) => {
            return <Items key={index} id={index} items={item} onSelect={deleteChange} />;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
