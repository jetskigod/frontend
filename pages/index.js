import React from 'react'
import Head from 'next/head'
import Image from 'next/image';

export default function index() {
  return (
    <>
    <Head>
      <title>jett</title>
    </Head>
  
<nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">หน้าแรก</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">เกี่ยวกับเรา</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการของเรา
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">ขายไก่</a></li>
            <li><a className="dropdown-item" href="#">ขายหมา</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">ขายแมว</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link">ติดต่อเรา</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark" type="submit">ค้นหา</button>
      </form>
    </div>
  </div>
</nav>


<div className="text-center">
  <Image src="/jet1.png" className="rounded" alt="jet1" width={500} height={250}/>
</div>


<div className="text-center"><button type="button" className="btn btn-dark">Dark</button></div>
    </>
  )
}
