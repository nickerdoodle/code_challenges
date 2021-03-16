// PROMPT: Write a method that takes a string argument and returns whether or not characters in the string have matching brackets. Meaning for every { there is a corresponding } bracket. Return true if they do, return false if they do not. Please unit test with the following use cases (and any others you choose to ensure functionality):

const OPEN_BRACKET = '{'
const CLOSED_BRACKET = '}'

const matchBrackets = (str) => {
  const bracketsToMatch = []
  const matching = str.split('').reduce((agg, char) => agg && charHelper(char, bracketsToMatch), true)
  return !bracketsToMatch.length && matching
}

const charHelper = (char, bracketsToMatch) => {
  if (char === OPEN_BRACKET) {
    return bracketsToMatch.push(char) && true
  }
  else if (char === CLOSED_BRACKET) {
    return !!bracketsToMatch.pop()
  }
  return true
}

module.exports = matchBrackets
