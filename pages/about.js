import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function index() {
  return (
    <>
    <Head>
      <title>jett</title>
    </Head>
  
  <header>
<nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/.">หน้าแรก</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">เกี่ยวกับเรา</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการของเรา
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">ขายไก่</a></li>
            <li><a className="dropdown-item" href="#">ขายหมา</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">ขายคน</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact"> ติดต่อเรา</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark" type="submit">ค้นหา</button>
      </form>
    </div>
  </div>
</nav>

</header>
<br />
<br />
<br /> 
<main>
<div className="container marketing">
  {/* Three columns of text below the carousel */}
  <div className="row">
    <div className="col-lg-4">
    <img src="/html5.png" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">HTML5</h2>
      <p>เอชทีเอ็มแอล5 เป็นมาตรฐานตัวต่อไปของ HTML ที่อยู่ในระหว่างการพัฒนา โดยมีลักษณะเหมือนมาตรฐานตัวก่อนหน้าทั้ง HTML 4.01 และ XHTML 1.1 ที่ใช้ในการจัดโครงสร้างและการแสดงผลของเนื้อหาสำหรับเวิลด์ไวด์เว็บ มาตรฐานใหม่จะมีคุณลักษณะเด่นที่สำคัญได้แก่ การใช้งานวิดีโอ การแสดงตำแหน่งทางภูมิศาสตร์ การเก็บไฟล์ในลักษณะออฟไลน์</p>
      <p><a className="btn btn-secondary" href="https://www.w3schools.com/html/">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/pts.png" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">PHOTOSHOP</h2>
      <p>อะโดบี โฟโตชอป มักเรียกสั้นๆ ว่า โฟโตชอป เป็นโปรแกรมประยุกต์ที่มีความสามารถในการจัดการแก้ไขและตกแต่งรูปภาพ แบบแรสเตอร์ ผลิตโดยบริษัทอะโดบีซิสเต็มส์</p>
      <p><a className="btn btn-secondary" href="https://www.adobe.com/?sdid=49F59KY6&clickref=1100lwPBVo4o&mv=affiliate&mv2=pz&as_camptype=1414588&as_channel=affiliate&as_source=partnerize&as_campaign=chelen">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/ftr.png" className="bd-placeholder-img rounded-circle" alt="gtr2"width={140} height={140} />
      <h2 className="fw-normal">FLUTTER</h2>
      <p>เป็นชุดพัฒนาซอฟต์แวร์ UI แบบโอเพ่นซอร์สที่สร้างโดย Google ใช้เพื่อพัฒนาแอปพลิเคชันข้ามแพลตฟอร์มสำหรับ Android, iOS, Linux, macOS, Windows</p>
      <p><a className="btn btn-secondary" href="https://flutter.dev/">View details »</a></p>
    </div>{/* /.col-lg-4 */}
  </div>{/* /.row */}
</div>

</main>
<br />
<br />
<br />

<footer>

<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
  </footer>
</div>


</footer>
    </>
  )
}
