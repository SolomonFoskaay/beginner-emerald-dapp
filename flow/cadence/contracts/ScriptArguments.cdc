pub contract ScriptArguments {

    pub var a: Int
    pub var b: String
    pub var c: UFix64
    pub var d: Address
    pub var e: Bool
    pub var f: String?
    pub var g: [Int]
    pub var h: {String: Address}



    init() {
        self.a = 2
        self.b = "Jacob is so cool"
        self.c = 5.0
        self.d = 0x6c0d53c676256e8c
        self.e = true
        self.f = nil
        self.g = [1, 2, 3]
        self.h = {"FLOAT": 0x2d4c3caffbeab845, "EmeraldID": 0x39e42c67cc851cfb}
    }
}