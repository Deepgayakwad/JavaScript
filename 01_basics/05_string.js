
const name="Dipak"
const education ="Second Year of computer Engineering"
console.log(`my name is ${name} and i am learning in ${education}`)

const gameName = new String("dipaksg")
console.log(gameName)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))    // used to find out the character at particular index

console.log(gameName.indexOf('p'))


const newString = gameName.substring(0,4)
console.log(newString)

console.log(gameName.slice(0,5))

console.log(gameName.substring(2,5))
console.log(gameName.substr(2,5))

const str = "    vedant.    "
console.log(str)    // print string with extra start and end spaces
console.log(str.trim())   // print string by removing the start and end spaces

const str2 = "dipak"
console.log(str2.replace('a','g'))
console.log(str2)

console.log(str2.includes('ak'))  // check 'ak' is present in string or not acc to it return value 
console.log(str2.includes('mk'))   // check 'mk' is present in string or not acc to it return value 


const str3 = "hitesh-hc-hk"
console.log(str3.split('-'))  // this split the string on the basis of '-' and make array of every word
 