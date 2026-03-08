// console.log(1)

// const p = new Promise(function(resolve, reject){
//     const data = {
//         name:'ilya',
//         id:1488
//     }
//     setInterval(function(){console.log(22222); resolve(data)} , 2000)
    
// })

// p.then(function(data){setTimeout(() => console.log(3, data), 2000)})

// async function getData(){
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data_new = await data.json()
//     console.log(data_new)
// }

// getData()



// console.log('Старт')
// setTimeout(function(){console.log('Прошло 2 секунды'); setTimeout(function(){console.log('И еще одна')}, 1000)}, 2000)


// const delayedMessage = (ms:number, mes:string) => {
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){resolve(mes)} ,ms)
//     })
// }

// delayedMessage(2000, 'привет').then(function(mes){console.log(mes)})
// // В ЗАДАНИИ НАПИСАНО СДЕЛАТЬ ЧЕРЕЗ ПРОМИС НО ИСПОЛЬЗОВАТЬ ПРИ ЭТОМ AWAIT ЭТО КАК?


// async function abc() {

//     await new Promise<void>(resolve => {
//         setTimeout(() => {
//             console.log('первый')
//             resolve()
//         }, 1000)
//     })
    
//     await new Promise<void>(resolve => {
//         setTimeout(() => {
//             console.log('второй')
//             resolve()
//         }, 1000)
//     })
    
//     await new Promise<void>(resolve => {
//         setTimeout(() => {
//             console.log('третий')
//             resolve()
//         }, 1000)
//     })
    
// }

// abc()

// console.time('promise.all')
// async function first() {
//     console.time('first')
//     return new Promise<void>(function(resolve,reject){
//         setTimeout(function(){console.log(1),
//             console.timeEnd('first')
//             resolve()}, 1000)
//     })
// }

// async function second() {
//     console.time('second')
//     return new Promise<void>(function(resolve,reject){
//         setTimeout(function(){console.log(2),
//             console.timeEnd('second')
//             resolve()}, 2000)
//     })
// }
// async function third() {
//     console.time('third')
//     return new Promise<void>(function(resolve,reject){
//         setTimeout(function(){console.log(3),
//             console.timeEnd('third')
//             resolve()}, 3000)
//     })
// }

// Promise.all([third(), first() , second()]).then(function(){console.timeEnd('promise.all')})



async function loadUserWithPosts(id:number) {

    const user = await new Promise(function(resolve, reject)
    {setTimeout(function()
        {console.log(id), resolve(id)},1000)
        
    })

    let posts ={
        name:'chatting with friends',
        likes: 19
    }

    const post_f = await new Promise(function(resolve, reject)
    {setTimeout(function()
        {console.log(posts), resolve(posts)},1000)
        
    })
    
    return {user, post_f}
}   

async function demo() {
    const result = await loadUserWithPosts(1488)
    console.log(`пользователь под номером ${result.user},выложил видео с характристками ${JSON.stringify(result.post_f)}`)
}
demo()