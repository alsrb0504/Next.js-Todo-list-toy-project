import TodoItem from './Todo-item'

export function TodoListContainer ({TodoList}) {
  return (
    <>
      <ul className='todo-list'>
          {TodoList.map((item) => <TodoItem key={item.id} item={item} />)}
      </ul>
      <style jsx>{`
        .todo-list {
          margin: 0;
          padding: 16px;
          background-color: #ffffff;
          overflow: scroll;
        }
      `}</style>
    </>
  )
}