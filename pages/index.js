import { TodoListContainer } from '../components/Todo-list-container'

export default function Home({TodoList}) {
  return (
    <TodoListContainer TodoList={TodoList}/>
  )
}
