const helpers = require("./helpers")
// @ponicode
describe("helpers.formatPrice", () => {
    test("0", () => {
        let callFunction = () => {
            helpers.formatPrice(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            helpers.formatPrice(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            helpers.formatPrice(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            helpers.formatPrice(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            helpers.formatPrice(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            helpers.formatPrice(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("helpers.rando", () => {
    test("0", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            helpers.rando(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            helpers.rando(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let object2 = [["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674]]
        let object3 = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            helpers.rando(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            helpers.rando(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"]]
        let object2 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            helpers.rando(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            helpers.rando(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("helpers.slugify", () => {
    test("0", () => {
        let callFunction = () => {
            helpers.slugify("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            helpers.slugify("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            helpers.slugify("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            helpers.slugify("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            helpers.slugify(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("helpers.getFunName", () => {
    test("0", () => {
        let callFunction = () => {
            helpers.getFunName()
        }
    
        expect(callFunction).not.toThrow()
    })
})
