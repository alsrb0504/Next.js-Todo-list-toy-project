export default function Container ({children}) {

  return (
    <div className='layout'>
      {children}

      <style jsx>{`
        .layout{
          display: flex;
          flex-direction: column;
          margin:auto;
          margin-top: 5vh;
          max-width: 760px;
          height: 90vh;
          border-radius: 10px;
          overflow: hidden;
          background-color: #e9e9e9;
        }
        
      `}</style>
    </div>
  )
}