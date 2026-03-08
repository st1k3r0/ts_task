export{}
type NumberArray = number[]
type StringArray = string[]

const nums: NumberArray = [2, 5, 8, 11, 14]
const multiplied: NumberArray = nums.map(n => n * 3)
console.log(multiplied)

const words: StringArray = ['привет', 'мир', 'typescript']
const upper: StringArray = words.map(w => w.toUpperCase())
console.log(upper)


const arr: NumberArray = [15, 22, 8, 31, 12, 47, 19]
const evens: NumberArray = arr.filter(n => n % 2 === 0)
console.log(evens)

const animals: StringArray = ['кот', 'собака', 'хомяк', 'слон', 'тигр']
const long: StringArray = animals.filter(w => w.length > 3)
console.log(long)

const fruits: StringArray = ['яблоко', 'банан', 'апельсин', 'киви', 'груша']
const withA: StringArray = fruits.filter(w => w.includes('а'))
console.log(withA)


const numbers: NumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenTimes10: NumberArray = numbers.filter(n => n % 2 === 0).map(n => n * 10)
console.log(evenTimes10)

const engWords: StringArray = ['apple', 'banana', 'cherry', 'date', 'elderberry']
const upperLong: StringArray = engWords
  .filter(w => w.length > 5)
  .map(w => w.toUpperCase())
console.log(upperLong)


const sumArr: NumberArray = [23, 45, 12, 67, 34]
const sum: number = sumArr.reduce((acc, n) => acc + n, 0)
console.log(sum)

const prodArr: NumberArray = [1, 2, 3, 4, 5]
const product: number = prodArr.reduce((acc, n) => acc * n, 1)
console.log(product)

const maxArr: NumberArray = [42, 17, 85, 23, 91, 36]
const max: number = maxArr.reduce((acc, n) => Math.max(acc, n), -Infinity)
console.log(max)

const min: number = maxArr.reduce((acc, n) => Math.min(acc, n), Infinity)
console.log(min)

const count = maxArr.reduce((acc: {even: number, odd: number}, n: number) => {
  if (n % 2 === 0) acc.even++
  else acc.odd++
  return acc
}, {even: 0, odd: 0})
console.log(count)


const chainArr: NumberArray = [5, 12, 8, 130, 44, 67, 23, 9]
const chainResult: StringArray = chainArr
  .filter(n => n > 10)
  .map(n => n * 2)
  .filter(n => n > 50)
  .map(n => `резултат ${n}`);
console.log(chainResult)


const avgArr: NumberArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const avg: number = avgArr.reduce((sum, n) => sum + n, 0) / avgArr.length
console.log(avg)


const pets: StringArray = ['кот', 'собака', 'хомяк', 'попугай', 'рыбка']
const totalLetters: number = pets.reduce((acc, w) => acc + w.length, 0)
console.log(totalLetters)

const longest: string = pets.reduce((max, w) => w.length > max.length ? w : max, '');
console.log(longest)

const withLen: StringArray = pets.map(w => `${w} (${w.length})`)
console.log(withLen);


