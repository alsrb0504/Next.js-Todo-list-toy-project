import Link from 'next/link';

export default function Header() {

  return (
    <div>
      <header>
        <Link href="/">
          <a>Next-To-Do-List</a>
        </Link>
      </header>
      <style jsx>{`
        header {
          background-color: lightgreen;
          text-align: center;
          padding: 10px 0;
        }
        a {
          font-size: 2rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}