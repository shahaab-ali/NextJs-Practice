import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home Page</h1>
      {/* routing */}
      <ul>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>About</a></Link>
        </li>
        <li>
          <Link href="/services"><a>Services</a></Link>
        </li>
        <li>
          <Link href="/contact"><a>Contact</a></Link>
        </li>
      </ul>

      {/* image */}

      <Image src="/images/download.png" height={400} width={400} />

      {/* jsx css */}

      <style jsx>{`
  h2{
    color: green;
  }
  `}</style>
      <h2>I have styled jsx</h2>

      {/* global css for all pages */}
      <h3>I have global css</h3>

      {/* component based module css */}

      <h1 className={Styles.h1}>I have component based <code>module.css</code></h1>
    </>
  )
}