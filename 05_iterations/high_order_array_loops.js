
const arr = [1,2,3,4,5]

for(const num of arr){
     console.log(num)
}

console.log()

// const str = "dipak"

// for(const ch of str){
//      console.log(ch)
// }


// maps 
 
const map = new Map()

map.set("IN","India")
map.set("USA","United States Of America")
map.set("Fr","France")

// console.log(map)

// printing the map
 
for(const [key,value] of map){
     console.log(key,":-",value)
}
