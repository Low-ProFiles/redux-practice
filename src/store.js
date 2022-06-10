import { configureStore, createSlice } from "@reduxjs/toolkit"

// const addTodo = createAction("ADD");
// const deleteTodo = createAction("DELETE")

//createReducer에 두 가지 옵션이 있는데
//새로운 state를 return하거나 기존의 state를 mutate를 할 수 있다.
//redux는 immer 아래에서 동작하기 때문에 return 하는 경우에는 
//새로운 state로 할 수 있다.
// const reducer = createReducer([], {
//   //return X -> mutate the state
//   [addTodo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   //return -> new array
//   [deleteTodo]: (state, action) =>
//     state.filter(toDo => toDo.id !== action.payload)
// })

//createSlice를 통해 기존의 함수들 대체 가능
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
  }
})

const store = configureStore({ reducer: toDos.reducer })

export const { add, remove } = toDos.actions

export default store;