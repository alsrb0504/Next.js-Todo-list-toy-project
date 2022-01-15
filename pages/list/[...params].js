import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {BsFillPencilFill, BsFillEraserFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';

export default function Description({TodoList}) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [item, setItem] = useState({id: -999, contents: 'error!'})

  useEffect(() => {
    if(router && router.query.params) {
      const passedId = Number(router.query.params);
      const findItem = TodoList.find(el => (el.id === passedId));
      setItem(findItem)
    }
  }, [router])

  const handleRevise = () => {
    router.push(`/write/${item.id}`);
  }

  const handleRemove = () => {
    console.log('remove');

    dispatch({
      type: "DELETE_TODO",
      id: item.id,
    })

    router.push('/');
  }

  return (
    <>
      <div className='container'>
        <p>{item.contents}</p>
        <div className='btns'>
          <button onClick={handleRevise}>
            <BsFillPencilFill />
          </button>
          <button onClick={handleRemove}>
            <BsFillEraserFill />
          </button>
        </div>
      </div>
      <style jsx>{`
        .container {
          flex: 1;
          position: relative;
          padding: 16px 32px;
          overflow: hidden
        }
        p {
          margin: 0;
          font-size: 2rem;
          height: 88%;
          overflow:scroll;
        }

        .btns {
          position: absolute;
          bottom: 20px;
          right: 30px;
        }
        button {
          font-size: 1.6rem;
          padding: 0.5rem 2rem;
          margin-left: 1rem;
          background-color: lightgreen;
          border: none;
          border-radius: 10px;
        }
      `}</style>
    </>
  )
}