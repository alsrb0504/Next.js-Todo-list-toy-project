import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Add() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TODO",
      text,
    })

    router.push("/");
  }

  const moveBack = (e) => {
    e.preventDefault();
    router.push("/");
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <textarea 
            name="contents" 
            onChange={handleChange} 
            value={text}
            placeholder='Input your todo !!'
          ></textarea>
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
          margin-top: 1rem;
          overflow:scroll;
          min-height: 350px;
          display: inline-block;
          padding: 1rem;
          width: 100%;
          border: 3px solid lightgreen;
          border-radius: 10px;
          font-size: 2rem;
          outline: none;
        }
        textarea::placeholder {
          font-size: 2rem;
        }
        textarea:focus {
          border: 4px solid lightgreen;
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