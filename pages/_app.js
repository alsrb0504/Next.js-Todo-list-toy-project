import { useState } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import '../styles/globals.css'

import TodoListState from '../data/todo-list'

function MyApp({ Component, pageProps }) {

  const [TodoList, setTodoList] = useState(TodoListState)

  return (
    <>
      <Layout>
        <Header />
        <Component TodoList={TodoList} {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
