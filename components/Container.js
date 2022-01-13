import Header from './Header';
import TodoItem from './Todo-item';

export default function Container () {

  return (
    <div className='container'>
      <Header />

      <ul className='todo-list'>
        <TodoItem item={{
          id: 1,
          contents : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia! consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia!",
        }} />
        <TodoItem item={{
          id: 1,
          contents : "iameit.ia! olor sit amet consectetur adipisicing elit. Quae, officia!",
        }} />
        <TodoItem item={{
          id: 1,
          contents : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia! consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia!",
        }} />

<TodoItem item={{
          id: 1,
          contents : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia! consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia!",
        }} />
        <TodoItem item={{
          id: 1,
          contents : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia! consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia!",
        }} />
        <TodoItem item={{
          id: 1,
          contents : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia! consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia!",
        }} />
        <TodoItem item={{
          id: 1,
          contents : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia! consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia!",
        }} />
        <TodoItem item={{
          id: 1,
          contents : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia! consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia!",
        }} />
        <TodoItem item={{
          id: 1,
          contents : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia! consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia!",
        }} />
        <TodoItem item={{
          id: 1,
          contents : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia! consectetur adipisicing elit. Quae, officia! olor sit amet consectetur adipisicing elit. Quae, officia!",
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
          border-radius: 10px;
          overflow: hidden;
          background-color: #e9e9e9;
        }
        .todo-list {
          margin: 0;
          flex: 1;
          padding: 16px;
          
          background-color: white;

          overflow: scroll;
        }
      `}</style>
    </div>
  )
}