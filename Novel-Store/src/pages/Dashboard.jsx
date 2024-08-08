import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Dash.css'
import { Col, Row } from 'react-bootstrap'




function Dashboard() {
const[user,setUser]=useState('')
useEffect(()=>{
  setUser(sessionStorage.getItem("username"))
  })

  return (
    <>
<div className='mt-5 mb-5 p-5'>
    <div className='p-4 d-flex justify-content-center' style={{fontSize:'100px'}}>
      <h1>Welcome <span className='text-warning'>{user}</span></h1>
      </div>
      <aside className='d-flex justify-content-center p-5 m-5'>
      <Row>
<Col >
  <Link to={'/crt'}>
  <div className="tord">
<div className="tord-info">
<div className='mt-5'>    
<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}>
<path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z" />
</svg>
</div>
</div>
<ul className="tord-social">
<li className="tord-social__item">
<h4>Create</h4>
</li>
</ul>
</div>
  </Link>
</Col>
<Col>
  <Link to={'/select'}>
  <div className="tord">
<div className="tord-info">
<div className='mt-5'>    
<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}>
<path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" />
<path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2.897-2 2v14c0 1.103.897 2 2 2z" />
</svg>
</div>
</div>
<ul className="tord-social">
<li className="tord-social__item">
<h4>Edit / View</h4>
</li>
</ul>
</div>
  </Link>
</Col>
<Col>
  <Link to={'/all'}>
  <div className="tord">
<div className="tord-info">
<div className='mt-5'>    
<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)' }}>
<path d="M2 15h7v7h2v-9H2v2zM15 2h-2v9h9V9h-7V2z" />
</svg>
</div>
</div>
<ul className="tord-social">
<li className="tord-social__item">
<h4>View All</h4>
</li>
</ul>
</div>
  </Link>
</Col>
</Row> 
      </aside>
    </div>
    </>
  )
}

export default Dashboard



