export{}

const film = {
    title: 'интестелар',
    year: 2099,
    rating: 8.6
}

console.log(film.title)   
console.log(film.year)    
console.log(film.rating)  

film.year = 2015      
film.director = 'qwdqfwqfqfqwfqw'  

console.log(film)

const person2 = {
    name: 'иван',
    age: 25,
    address: {
        city: 'москва',
        street: 'крымская'
    }
}

console.log(person2.address.city) 

const data = { name: 'анна', age: 25, city: 'москва' }

for(let key in data) {
    console.log(`${key}: ${data[key]}`)
}


const obj1 = { a: 1, b: 2, c: 3 }
const obj2 = { ...obj1, a: 10 }  

console.log(obj1)  
console.log(obj2)  

const person = { name: 'иван', age: 25 }
const contact = { email: 'ivanmail.ru', phone: '+7999312312321321321ё' }

const profile = { ...person, ...contact }
console.log(profile)  


const user = { name: 'иван', age: 25, city: 'москва' }
const updatedUser = { ...user, city: 'СПб' }

console.log(updatedUser)  

const students = [
    { name: 'анна', grade: 5 },
    { name: 'иван', grade: 4 },
    { name: 'мария', grade: 3 }
]


const names = students.map(student => student.name)
console.log(names)  


const goodStudents = students.filter(student => student.grade > 4)
console.log(goodStudents)  


const avgGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length
console.log(avgGrade)  
