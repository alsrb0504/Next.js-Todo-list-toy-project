import Link from 'next/link';
import { AiFillCheckCircle } from "react-icons/ai";

export default function TodoItem({item}) {
  return (
    <li>
      <div>
        <button>
          <AiFillCheckCircle />
        </button>
      </div>
      <Link href={`/list/${item.id}`}>
        <a>{`${item.contents}`}</a>
      </Link>

      <style jsx>{`
        li {
          background-color: orange;
        }
      `}</style>
    </li>

  )
}