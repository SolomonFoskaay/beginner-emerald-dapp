import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav.jsx'; //Import Nav component
import { useState, useEffect } from 'react'; //Import useState/UseEffect
import * as fcl from "@onflow/fcl"; //Import FCL (Flow Client Library)



export default function Home() {

  // declare variable greeting
  const [greeting, setGreeting] = useState('');
  // declare variable newGreeting
  const [newGreeting, setNewGreeting] = useState('');
  // declare variable txStatus
  // const [txStatus, setTxStatus] = useState('');

  // js runTransaction function for Run Transaction button
  // function runTransaction() {
  //   console.log("Running transaction!");
  //   console.log("Changing the greeting to: " + newGreeting);
  // }

  // Execute transaction on flow using FCL
  async function runTransaction() {
    const transactionId = await fcl.mutate({
      cadence: `
      import HelloWorld from 0xb3e2d05cf2cdb97a
  
      transaction(myNewGreeting: String) {

        prepare(signer: AuthAccount) {}
      
        execute {
          HelloWorld.changeGreeting(newGreeting: myNewGreeting)
        }
      }
      `,
      args: (arg, t) => [
        arg(newGreeting, t.String)
      ],
      proposer: fcl.authz,
      payer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 999
    })
    // Log Transaction hash for check on Flowscan
    //Example: 4ab9ba2dbd38ac11c11f026db7d4ad3859408006cf5f212509f9a74fec3f2466
    console.log("Here is the transactionId: " + transactionId);
    // Instantly auto update displayed greeting after transaction successful
    await fcl.tx(transactionId).onceSealed();
      executeScript(); //call executeScript function
    }

  // Execute script on flow using FCL
  async function executeScript() {
    const response = await fcl.query({
      // Cadence code in form of string goes in here
      cadence: `
        import HelloWorld from 0xb3e2d05cf2cdb97a

        pub fun main(): String {
            return HelloWorld.greeting
        }
      `,
      // Arguments used in above cadence code string goes in here
      args: (arg, t) => [] 
    })
    // set greeting variable to value of response
    setGreeting(response); //create ID to access greeting value in html
    console.log("Response from our script is: " + response); //console log greeting value
  }

    // Execute script on flow using FCL
    // async function executeScript() {
    //   const response = await fcl.query({
    //     // Cadence code in form of string goes in here
    //     cadence: `
    //       import SimpleTest from 0x6c0d53c676256e8c
  
    //       pub fun main(): Int {
    //           return SimpleTest.number
    //       }
    //     `,
    //     // Arguments used in above cadence code string goes in here
    //     args: (arg, t) => [] 
    //   })
    //   // set greeting variable to value of response
    //   setGreeting(response); //create ID to access greeting value in html
    //   console.log("Response from our script is: " + response); //console log greeting value
    // }


  // calling the script at every page refresh using useEffect
  useEffect(() => {
    executeScript()
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Emerald DApp</title>
        <meta name="description" content="Created by Emerald Academy" />
        <link rel="icon" href="https://i.imgur.com/hvNtbgD.png" />
      </Head>

      {/* add nav bar component*/}
      <Nav />

      <div className={styles.welcome}>

        <h1 className={styles.title}>
          Welcome to my <a href="https://github.com/SolomonFoskaay/beginner-emerald-dapp" target="_blank">Emerald DApp!</a>
        </h1>

        {/* adding p tag from chap2day2 quest */}
        <p>
          Foskaay is Learning Cadence dApp Development For Flow Blockchain At Emerald DAO
        </p>

       </div> 


      <main className={styles.main}>

        {/* print greeting on homepage */}
        <p>{greeting}</p>

        {/* added div and buttons */}
        <div className={styles.flex}>
          
          {/* search keyword input box */}
          <input onChange={(e) => setNewGreeting(e.target.value)} placeholder="Type Here!" />
          
          {/* run transaction button */}
          <button onClick={runTransaction}>
            Run Transaction
          </button>
          
          {/* added div and buttons ... */}
          {/* <div>
            <button onClick={executeScript}>
              Magic Number
            </button>
          </div> */}

        </div>

        

      </main>

    </div>
  )
}