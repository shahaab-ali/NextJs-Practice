import Head from 'next/head'
import Link from 'next/link'
export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <h1>About Page</h1>
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
            <style jsx>{`
            h2{
                color:red;
            }
            `}</style>
            <h2>I have styled jsx</h2>
            <h3>I have global css -- About Page</h3>
        </>
    )
}