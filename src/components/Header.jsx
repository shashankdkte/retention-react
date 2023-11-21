import React from 'react'

function Header({showForm,setShowForm}) {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="./logo.png" alt="Logo" height="68" width="68" />
          <h1>R<span>entention</span></h1>
        </div>
        <button className="btn btn-large btn-open" onClick={()=>setShowForm((show)=>!show)}>{showForm ?'Close':'Share a fact'}</button>
      </header>
    </>
  )
}

export default Header