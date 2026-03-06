let s:string = 'ASdqwdqwdjqwJKDASKDA'
console.log(`${s.length} , ${s.toUpperCase()}, ${s.toLowerCase()}`)

let js:string = 'JavaScript — это круто! Я учу JavaScript.'
console.log(`${js.includes('JavaScript')} , ${js.indexOf('JavaScript')}, ${js.lastIndexOf('JavaScript')}`)

let p:string = 'photo.jpg'
console.log(`${p.startsWith('photo')} , ${p.endsWith('jpg')}, ${p.endsWith('png')}`)

let ts:string = 'TypeScript'
let dt:string = '2024-03-15'
console.log(`${ts.slice(3)}, ${dt.split('-')}`)

let fr:string = 'я люблю яблоки, яблоки вкусные'
console.log(fr.replaceAll('яблоки', 'бананы'))

let adm = ' admin '
console.log(adm.trim())

let z:string = 'яблоки'
let v:string = 'бананы'
console.log(z === v)

let st:string = '*'
console.log(st.repeat(10))

let o:string = 'typescript'
let new_o = 
console.log(o.replace(o[0], o[0].toUpperCase()))