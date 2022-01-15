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
      return [...state, action.payload];;
    case DELETE_TODO :
      newState = state.filter((todo) => {
        if(todo.id !== action.payload.id) {
          return true;
        }
        return false;
      });
      return newState;
    case EDIT_TODO :
      // 나중에 기존에 있던거 수정하는 또는
      // 제거하고 새로 추가하고 id 별로 정렬하는 걸로 구현.
      newState = [...state];
      return newState;
    default:
      return state;
  }
}

export default reducer;