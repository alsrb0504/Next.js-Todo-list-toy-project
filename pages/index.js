import { TodoListContainer } from '../components/Todo-list-container'

export default function Home({TodoList}) {

  console.log(TodoList);

  return (
    <TodoListContainer TodoList={TodoList}/>
  )
}
