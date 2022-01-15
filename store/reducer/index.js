import { ADD_TODO, DELETE_TODO, EDIT_TODO, SHOW_TODOS } from '../constants/ActionType';

const initState = [
  {
    id: 1,
    contents : "layout home",
    state: true,
  },
  {
    id: 2,
    contents : "connect todo-list state",
    state: false,
  },
  {
    id: 3,
    contents : "revise _app.js structure",
    state: false,
  },
  {
    id: 4,
    contents : "design todo pages",
    state: false,
  },
  {
    id: 5,
    contents : "revise and remove not used code",
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
        id: state.length + 1,
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
    default:
      return state;
  }
}

export default reducer;