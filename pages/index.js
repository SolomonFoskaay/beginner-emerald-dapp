import Head from 'next/head'
import styles from '../styles/Home.module.css'

// js printhello function for button
function printHello() {
  console.log("Hello there! Jacob is soooooo much cooler than me.")
}
// js printGoodbye function for button
function printGoodbye() {
  console.log("Goodbye Jacob")
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emerald DApp</title>
        <meta name="description" content="Created by Emerald Academy" />
        <link rel="icon" href="https://i.imgur.com/hvNtbgD.png" />
      </Head>

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
        <button onClick={printHello}>
          Hello
        </button>
        <button onClick={printGoodbye}>
          Goodbye
        </button>
        </div>
      </main>
    </div>
  )
}