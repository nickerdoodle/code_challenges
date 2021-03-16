const matchBrackets = require('./main.js')

// Test cases
test("Correct string input should pass", () => {
  expect(matchBrackets('{}')).toBe(true)
})

test("Closed bracket can't proceed all open brackets.", () => {
  expect(matchBrackets('}{')).toBe(false)
})

test("Not all bracket pairs were closed", () => {
  expect(matchBrackets('{{}')).toBe(false)
})

test("No brackets in string should pass", () => {
  expect(matchBrackets('')).toBe(true)
})

test("Chars inside brackets should still pass", () => {
  expect(matchBrackets('{"foo": "bar"}')).toBe(true)
})

test("Chars outside brackets should still pass", () => {
  expect(matchBrackets('foo{}bar')).toBe(true)
})

