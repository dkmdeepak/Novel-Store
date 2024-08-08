import React from 'react'
import './Sidebar.css'

function Toolbar({openSidebar}) {

  return (
    <>
    <div className='tool-bar' onClick={openSidebar}>
    <button className="menu__icon">
    <span></span>
    <span></span>
    <span></span>
  </button>
    </div>
    </>
  )
}

export default Toolbar