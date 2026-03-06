export{}


function sum(a: number, b: number): number {
  return a + b
}

function isPositive(num: number): boolean {
  return num > 0
}

function getLength(str: string): number {
  return str.length
}


function max_max(a: number, b: number): number {
  return a > b ? a : b
}

function canVote(age: number): boolean {
  return age >= 18
}



function sumArray(arr: number[]): number {
  return arr.map((sum, el) => sum + el, 0)
}

function getLongWords(words: string[]): string[] {
  return words.filter(word => word.length > 5)
}

function doubleNumbers(nums: number[]): number[] {
  return nums.map(num => num * 2)
}



function greet(name: string, title?: string): string {
  return title ? `Привет, ${title} ${name}!` : `Привет, ${name}!`
}


function calculatePrice(price: number, discount: number = 0): number {
  return price * (1 - discount / 100)
}


const numbers = [1, 2, 3, 4, 5]
numbers.forEach((num) => console.log(num))



function analyzeArray(arr: number[]): string {
  let total = 0
  
  arr.forEach(num => total += num)
  const avg = total / arr.length
  const min = Math.min(...arr)
  const max = Math.max(...arr)

  return `${total}, ${avg}, ${min}, ${max}`
}

console.log( analyzeArray([1,2,3,4]))