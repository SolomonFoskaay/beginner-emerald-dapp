import HelloWeb3 from "../contracts/HelloWeb3.cdc"

transaction(myNewNumber: Int) {

  prepare(signer: AuthAccount) {}

  execute {
    HelloWeb3.updateMyNumber(newNumber: myNewNumber)
  }
}