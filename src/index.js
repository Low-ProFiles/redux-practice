import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS"

//reducer에서 state 값을 수정
//action은 redux에서 function을 부를 때 쓰는 두번째 parameter이다.
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};
const store = createStore(reducer);

//getState로 값 가져오기 가능
const onChange = () => {
  number.innerHTML = store.getState();
};

//subscribe를 통해 변화 감지
store.subscribe(onChange);

//dispatch가 reducer를 불러서 current state와 action을 더한다.
//action은 "type"을 가진 객체여야한다.
plus.addEventListener("click", () => {
  store.dispatch({ type: ADD });
});
minus.addEventListener("click", () => {
  store.dispatch({ type: MINUS });
});
