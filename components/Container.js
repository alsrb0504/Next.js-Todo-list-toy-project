import Header from './Header';
import TodoItem from './Todo-item';

export default function Container () {

  return (
    <div className='container'>
      <Header />

      <ul className='todo-list'>
        <TodoItem item={{
          id: 1,
          contents : "first item",
        }} />
      </ul>

      <style jsx>{`
        .container{
          display: flex;
          flex-direction: column;
          margin:auto;
          margin-top: 5vh;
          max-width: 760px;
          height: 90vh;
        }
        .todo-list {
          margin: 0;
          flex: 1;
          padding: 16px;

          background-color: white;
        }
      `}</style>
    </div>
  )
}