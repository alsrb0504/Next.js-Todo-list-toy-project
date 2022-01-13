import TodoItem from './Todo-item'
import TodoList from '../data/todo-list'

export function TodoListContainer () {
  return (
    <>
      <ul className='todo-list'>
          {TodoList.map((item) => <TodoItem key={item.id} item={item} />)}
      </ul>
      <style jsx>{`
        .todo-list {
          margin: 0;
          flex: 1;
          padding: 16px;
          background-color: #ffffff;
          overflow: scroll;
        }
      `}</style>
    </>
  )
}