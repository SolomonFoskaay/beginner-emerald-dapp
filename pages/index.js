import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav.jsx'; //Import Nav component
import { useState } from 'react';


export default function Home() {

  // declare variable newGreeting
  const [newGreeting, setNewGreeting] = useState('');

  // js runTransaction function for Run Transaction button
  function runTransaction() {
    console.log(newGreeting)
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Emerald DApp</title>
        <meta name="description" content="Created by Emerald Academy" />
        <link rel="icon" href="https://i.imgur.com/hvNtbgD.png" />
      </Head>

      {/* add nav bar component*/}
      <Nav />

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to my <a href="https://github.com/SolomonFoskaay/beginner-emerald-dapp" target="_blank">Emerald DApp!</a>
        </h1>

        {/* adding p tag from chap2day2 quest */}
        <p>
          Foskaay is Learning Cadence dApp Development For Flow Blockchain At Emerald DAO
        </p>

        {/* added div and buttons */}
        <div className={styles.flex}>
        <button onClick={runTransaction}>
          Run Transaction
        </button>

        {/* search keyword input */}
        <input onChange={(e) => setNewGreeting(e.target.value)} placeholder="Hello, Idiots!" />

        </div>
      </main>
    </div>
  )
}