// import HelloWorld from 0x01 // THIS IS NO LONGER CORRECT

import HelloWorld from "../contracts/HelloWorld.cdc"

transaction(myNewGreeting: String) {

  prepare(signer: AuthAccount) {}

  execute {
    HelloWorld.changeGreeting(newGreeting: myNewGreeting)
  }
}