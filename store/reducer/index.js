import { ADD_TODO, CHANGE_STATE, DELETE_TODO, EDIT_TODO, SHOW_TODOS } from '../constants/ActionType';

const initState = [
  {
    id: 1,
    contents : "make pages and design layout",
    state: true,
  },
  {
    id: 2,
    contents : "connect todo-list redux",
    state: true,
  },
  {
    id: 3,
    contents : "make add, edit, remove funcs",
    state: true,
  },
  {
    id: 4,
    contents : "revise and remove not used code",
    state: true,
  },
  {
    id: 5,
    contents : "upload github",
    state: false,
  },
]

// root reducer : 하나의 데이터 store 만 있으면 됨.
const reducer = (state = initState, action) => {
  let newState;
  switch (action.type) {
    case SHOW_TODOS :
      return [...state];
    case ADD_TODO :
      newState = {
        id: state.length + Math.floor(Math.random() * 1000),
        contents: action.text,
        state: false,
      }
      return [...state, newState];
    case DELETE_TODO :
      newState = state.filter((todo) => (todo.id !== action.id));
      return newState;
    case EDIT_TODO :
      newState = state.map((todo) => {
        if(todo.id === action.payload.id) {
          return {...todo, contents: action.payload.contents}
        }
        return todo;
      });
      return [...newState,];
    case CHANGE_STATE :
      newState = state.map((todo) => {
        if(todo.id === action.id) {
          return {...todo, state: !todo.state}
        }
        return todo;
      });
      return [...newState];
    default:
      return state;
  }
}

export default reducer;