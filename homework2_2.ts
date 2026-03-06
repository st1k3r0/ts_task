
const numbers: number[] = [4.3, 4.8, -2.3, -2.8]

numbers.forEach(num => {
  console.log(`${num}: floor=${Math.floor(num)}, ceil=${Math.ceil(num)}, round=${Math.round(num)}`)
});


console.log(`${2 ** 10}`);
console.log(`${3 ** 5}`);
console.log(`${Math.sqrt(144)}`)
console.log(`${Math.sqrt(50)}`)

const arr: number[] = [34, 67, 12, 89, 45, 23]
console.log(`${Math.min(...arr)}`)
console.log(`${Math.max(...arr)}`)

console.log(`${Math.floor(Math.random() * 100) + 1}`)
console.log(`${Math.floor(Math.random() * 11) + 50}`)
console.log(`${Math.random()}`)

console.log(`${Math.abs(10 - 7)}`)
console.log(`${Math.abs(5 - 12)}`)

for (let i = 1; i <= 5; i++) {
  console.log(`D6-${i}: ${Math.floor(Math.random() * 6) + 1}`)
}
for (let i = 1; i <= 5; i++) {
  console.log(`D20-${i}: ${Math.floor(Math.random() * 20) + 1}`)
}


const piRounded: number = Math.round(Math.PI * 100) / 100;
console.log(`Пи: ${piRounded}`)
