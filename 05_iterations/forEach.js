// printing and accessing the array of object 
const arr = [{

    language:"c++",
    fileName:"cpp",

},{
    language:"java",
    fileName:"java",
},{
     language:"python",
     fileName:"py",
}];

// printing array of object
arr.forEach(function (item){
     console.log(`language is ${item.language} and file name is ${item.fileName}`)
})