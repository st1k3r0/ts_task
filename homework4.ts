// for(let i:number = 1; i != 30; i++){
//     if(i%3 != 0){
//         continue
//     }
//     console.log(i)
// }

// let i:number = 1
// let n:number = 1
// while(i != 10){
//     n = i * n
//     i++
//     console.log(n)
// }


let attempts: number = 0
let randomNum: number

do {
  randomNum = Math.floor(Math.random() * 10) + 1
  attempts++
  
  console.log(`Попытка ${attempts}: ${randomNum}`)
  
} while (randomNum !== 7)

console.log(`${attempts} попыток`)



let i:number = 1
let n:number = 1
while(i != 50){
    n = i + n
    i++
    if(n >=100){
        break
    }
}
console.log(n)


for(let i:number = 1; i != 20; i++){
    if(i%3 === 0){
        continue
    }
    console.log(i)
}





for (let i = 3; i <= 6; i++) { 

    console.log(`Таблица для ${i}`)

    for (let j = 1; j <= 5; j++) { 

        console.log(`${i} * ${j} = ${i * j}`)

    } 

} 



for (let i = 5; i >= 1; i--) {
  let stars: string = '* '.repeat(i)
  console.log(stars)
}
