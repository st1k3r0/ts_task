let cities:string[] = ['Moscow','WAShington','Kyoto','SPB','Boston']
console.log(`${cities[cities.length -5]}, ${cities[cities.length -3]}, ${cities[cities.length -1]}`)
cities[1] = "NEW_MOSCow"
cities.push('TVER'),
cities.unshift('VOLOGDA')
console.log(cities)
cities.pop()
cities.shift()
console.log(cities)
console.log(`${cities.includes('Москва')}, ${cities.indexOf('Москва')}`)

let masiv:number[]=[10, 20, 30, 40, 50]
let nsddsds:number = 0
for(const chislo of masiv){
    nsddsds+=chislo
}
console.log(nsddsds)


const org:number[] = [1,2,3]
const new_org:number[] = [...org]
new_org.push(4)
console.log(org)
console.log(new_org)
