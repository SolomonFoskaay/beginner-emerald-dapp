import styles from '../styles/Nav.module.css';
// Blockchain connection with FCL for wallet login
import * as fcl from "@onflow/fcl";
import "../flow/config.js";
import { useState, useEffect } from 'react';



export default function Nav() {

  // user variable
  const [user, setUser] = useState({ loggedIn: false });

  // keep user variable value even when page refreshes
  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, [])
  
  // Login/Lpogout function
  function handleAuthentication() {
    if (user.loggedIn) {
      fcl.unauthenticate(); // logs the user out
    } else {
      fcl.authenticate(); // logs the user in
    }
  }

  return (
    <nav className={styles.nav}>
    {/* dapp name/logo */}
    <h1>Emerald DApp</h1>
    {/* Login button */}
    <button onClick={handleAuthentication}>
      {user.loggedIn ? user.addr : "Log In"}
    </button>
    </nav>
  )
}