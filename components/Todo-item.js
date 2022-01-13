import Link from 'next/link';
import { AiFillCheckCircle } from "react-icons/ai";

export default function TodoItem({item}) {
  return (
    <li>
      <div className='btn-container'>
        <button>
          <AiFillCheckCircle />
        </button>
      </div>
      <Link href={`/list/${item.id}`} className="link">
        <a>{`${item.contents}`}</a>
      </Link>

      <style jsx>{`
        li {
          background-color: white;
          border: 0;
          border-radius: 20px;
          -webkit-box-shadow: 5px 5px 15px 0px #CACACA; 
          box-shadow: 5px 5px 15px 0px #E3E3E3;
          display: flex;
          align-items: center;
          padding: 0.4rem 0.8rem;
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }
        .btn-container {
          margin-right: 1rem;
        }
        button {
          font-size: 2.4rem;
          display: flex;
          background-color: transparent;
          border: none;
          color: lightgreen;
          padding: 0.3rem 0.5rem;
        }
        a {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          padding: 0.2rem 0.5rem;
        }

      `}</style>
    </li>

  )
}