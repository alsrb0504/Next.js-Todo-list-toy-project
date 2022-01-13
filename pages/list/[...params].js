import {BsFillPencilFill, BsFillEraserFill } from "react-icons/bs";



export default function Description() {

  return (
    <>
      <div className='container'>
        <p>s cumquia.</p>
        <div className='btns'>
          <button>
            <BsFillPencilFill />
          </button>
          <button>
            <BsFillEraserFill />
          </button>
        </div>
      </div>
      <style jsx>{`
        .container {
          flex: 1;
          position: relative;
          padding: 16px;
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