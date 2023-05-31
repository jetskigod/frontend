import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';

export default function index() {
  return (
    <>
    <Head>
      <title>jett</title>
    </Head>
    
<div className="text-center">
  <Image src="/jet1.png" className="rounded" alt="jet1" width={500} height={250}/>
</div>


<div className="text-center"><button type="button" className="btn btn-dark">Dark</button></div>
    </>
  )
}
