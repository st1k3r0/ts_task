let zov:number[] = [4, 17, 8, 22, 9, 35, 12, 6]
let total = 0
for(let num of zov){
    total += num
}   
console.log(total)
console.log(total/zov.length)


let min = 9999999999
let max = 0
for(let num of zov){
    if(num>max){
        max=num
    }
    if(num<min){
        min = num
    }
} 
console.log(min,max)


let conter = 0
for(let num of zov){
    if(num<15){
        conter += 1
    }
    
} 
console.log(conter)

let zov_3:number[] = []
for(let num of zov){
    zov_3.push(num * 3)
    
} 
console.log(zov_3)


let pets:string[] = ['кот', 'собака', 'хомяк', 'попугай', 'рыбка', 'крыса']


let max_word:string = ''
for(let pet of pets){
    if(pet.length > max_word.length){
        max_word = pet
    }
    
} 
console.log(max_word)

let word_5 = 0
for(let pet of pets){
    if(pet.length > word_5){
        word_5 += 1
    }
    
} 
console.log(word_5)

let up_pet:string[] = []
for(let pet of pets){
    up_pet.push(pet.toUpperCase())
    
} 
console.log(up_pet)


let pet_k:string[] = []
for(let pet of pets){
    if(pet[0] === 'к'){
        pet_k.push(pet)
    }
    
} 
console.log(pet_k)

let cen:number[] =  [350, 1200, 85, 430, 2100, 560, 75]
let cen_500:number[] = []
for (let cost of cen){
    if(cost < 500){
        cen_500.push(cost)
    }
}
console.log(cen_500)

let cen_new:string[] = []
for (let cost of cen){
    cen_new.push(`ценна: ${cost}`)
}
console.log(cen_new)


const students: string[] = ['Анна', 'Иван', 'Мария', 'Петр']
const grades: number[] = [5, 4, 3, 5]


students.forEach((student, index) => {
  console.log(`Студент ${student} получил оценку ${grades[index]}`)
})


const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length
console.log(`Средний балл: ${average.toFixed(2)}`)


const fruitsStr = "яблоко,груша,банан,апельсин,киви"
const fruits = fruitsStr.split(',')
const fruitsWithBang = fruits.map(fruit => fruit + '!')
const resultStr = fruitsWithBang.join(' | ')

console.log(`${fruitsStr}`)
console.log(`${fruitsWithBang.join(', ')}`)
console.log(`${resultStr}`)