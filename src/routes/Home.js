import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { actionCreators } from "../store";
import Todo from "../components/Todo";

function Home({ toDos, addTodo }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  }
  return (
    <>
      <Link to={'/'} style={{textDecoration:"none", color:"black"}}>
        <h1>To Do</h1>
      </Link>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{toDos.map(toDo => (<Todo {...toDo} key={toDo.id} />))}</ul>
    </>
  );
}

//Redux state로부터 home component에 prop으로써 전달
function mapStateToProps(state) {
  //객체로 전달
  return { toDos: state }
}

function mapDispatchToProps(dispatch) {
  return { addTodo: text => dispatch(actionCreators.addTodo(text)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);