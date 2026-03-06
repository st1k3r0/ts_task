let secretNumber: number = 7
let guess: number = 10

if (guess === secretNumber) {
  console.log("Ты победил!")
} else {
  console.log("Попробуй еще")
}

let purchaseAmount:number = 6000
if (purchaseAmount > 5000){
    purchaseAmount = purchaseAmount - (purchaseAmount * 0.1)
    console.log(purchaseAmount)
} else{
    console.log(purchaseAmount)
}


let age: number = 25

let status: string
if (age < 12) {
  status = "Ребенок"
} else if (age >= 12 && age <= 17) {
  status = "Подросток"
} else if (age >= 18 && age <= 60) {
  status = "Взрослый"
} else {
  status = "Пенсионер"
}
console.log(`Возраст ${age}: ${status}`)


const correctLogin: string = "admin"
const correctPassword: string = "12345"

let userLogin: string = "admin"    
let userPassword: string = "wrong" 

if (userLogin !== correctLogin) {
  console.log("Пользователь не найден")
} else if (userPassword !== correctPassword) {
  console.log("Неверный пароль")
} else {
  console.log("Добро пожаловать!")
}


const number: number = 17
const parity: string = number % 2 === 0 ? "четное" : "нечетное"
console.log(`${number} ${parity}`)



let dayNumber: number = 8

switch (dayNumber) {
  case 1:
    console.log("Понедельник")
    break
  case 2:
    console.log("Вторник")
    break
  case 3:
    console.log("Среда")
    break
  case 4:
    console.log("Четверг")
    break
  case 5:
    console.log("Пятница")
    break
  case 6:
  case 7:
    console.log("Выходной")
    break
  default:
    console.log("Неверный день")
}

