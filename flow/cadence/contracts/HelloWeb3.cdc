pub contract HelloWeb3 {

    pub var greeting: String
    pub var myNumber: Int

    pub fun changeGreeting(newGreeting: String) {
        self.greeting = newGreeting
    }

    pub fun updateMyNumber (newNumber: Int) {
        self.myNumber = newNumber
    }

    init() {
        self.greeting = "Hello, Web3!"
        self.myNumber = 0
    }
}