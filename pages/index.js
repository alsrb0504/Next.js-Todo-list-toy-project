import { useSelector } from 'react-redux';
import { TodoListContainer } from '../components/Todo-list-container'

export default function Home({TodoList}) {
  const todos = useSelector((state) => state);
  // console.log(todos);

  return (
    <>
      {/* <TodoListContainer TodoList={TodoList}/> */}
      <TodoListContainer TodoList={todos}/>
    </>
  )
}
