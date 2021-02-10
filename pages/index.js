import styles from '../styles/Home.module.css'
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SUAT PAGE</title>
        <link rel="stylesheet" href="/_next/static/suat.css" />
      </Head>
      <h1>Test Title</h1>
      <div className="name-suat">Hello World!</div>
    </div>
  )
}
