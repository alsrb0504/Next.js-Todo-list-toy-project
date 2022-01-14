import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Description({TodoList}) {
  const router = useRouter();

  const [text, setText] = useState('Empty! error')

  useEffect(() => {
    if(router && router.query.params) {
      const passedId = Number(router.query.params);
      const findItem = TodoList.find(el => (el.id === passedId));
      setText(findItem.contents)
    }
  }, [router])

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const moveBack = (e) => {
    e.preventDefault();
    router.push(`/list/${router.query.params}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // 나중에 새로 만들기는 page id = 0으로 설정.
    const newItem = {
      id: router.query.params,
      contents: text,
    }
    // listItem 설정하는 방법 구현.

    console.log(newItem);

    router.push(`/list/${router.query.params}`);
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <textarea name="contents" onChange={(e) => handleChange(e)} value={text}></textarea>
          <div className='btns'>
            <button onClick={(e) => moveBack(e)}>Cancel</button>
            <input type="submit" value="Done" />
          </div>
        </form>
      </div>
      <style jsx>{`
        .container {
          flex: 1;
          position: relative;
          padding: 16px 32px;
          overflow: hidden
        }
        textarea {
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
        button,
        input {
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