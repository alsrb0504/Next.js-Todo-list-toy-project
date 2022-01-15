import { AiFillPlusCircle } from 'react-icons/ai'
import TodoItem from './Todo-item'

export function TodoListContainer ({TodoList}) {
  return (
    <>
      <ul className='todo-list'>
          {TodoList.map((item) => <TodoItem key={item.id} item={item} />)}
      </ul>
      <button>
        <AiFillPlusCircle />
      </button>
      <style jsx>{`
        .todo-list {
          margin: 0;

          // flex: 1;
          
          padding: 16px;
          background-color: #ffffff;
          overflow: scroll;
        }
        button {
          margin: 1rem 0 ;
          display: flex;
          justify-content: center;
          background-color: #ffffff;
          border: none;
          color: lightgreen;
          font-size: 3.5rem;
          transition: transform 100ms ease-in-out;
        }
        button:hover {
          transform: scale(1.2);
        }
      `}</style>
    </>
  )
}