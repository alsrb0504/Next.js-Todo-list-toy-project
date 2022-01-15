import { ADD_TODO, CHANGE_STATE, DELETE_TODO, EDIT_TODO, SHOW_TODOS } from '../constants/ActionType'

export const show_all_todos = (todos) => {
  return {
    type: SHOW_TODOS,
  }
}

export const add_todo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  }
}

export const delete_todo = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo,
  }
}

export const edit_todo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  }
}

export const change_state = (id) => {
  return {
    type: CHANGE_STATE,
    id,
  }
}