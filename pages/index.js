import { useSelector } from 'react-redux';
import { TodoListContainer } from '../components/Todo-list-container'

export default function Home() {
  const todos = useSelector((state) => state);

  return (
    <>
      <TodoListContainer TodoList={todos}/>
    </>
  )
}
