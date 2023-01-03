//There are several ways to clone an array.
//Here are some examples that you can see in action and compare the benchmark:
//http://jsben.ch/lO6C5

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//concat (usually the fastest one)
let obj01 = [].concat(testArray)

//slice
let obj02 = testArray.slice()

//for + unshift
let obj03 = []
for (let i = testArray.length; i--;) {
  obj03.unshift(testArray[i])
}

//for + push
let obj04 = []
for (let i = 0, l = testArray.length; i < l; i++) {
  obj04.push(testArray[i]);
}

//for + index
let obj05 = new Array(testArray.length);
for (let i = 0, l = testArray.length; i < l; i++) {
  obj05[i] = testArray[i]
}

//apply
let obj06 = Array.apply(undefined, testArray)

//map
let obj07 = testArray.map(function(i) {
  return i
})

//json stringify
let obj08 = JSON.parse(JSON.stringify(testArray))

//angular copy
//let obj09 = angular.copy(testArray) //needs specifics to run

//lodash clone
//let obj10 = _.clone(testArray) //needs specifics to run

//spread
let obj11 = [...testArray]

//array from
let obj12 = Array.from([testArray])

console.log('obj01: ' + obj01)
console.log('obj02: ' + obj02)
console.log('obj03: ' + obj03)
console.log('obj04: ' + obj04)
console.log('obj05: ' + obj05)
console.log('obj06: ' + obj06)
console.log('obj07: ' + obj07)
console.log('obj08: ' + obj08)
//console.log('obj09: ' + obj09)
//console.log('obj10: ' + obj10)
console.log('obj11: ' + obj11)
console.log('obj12: ' + obj12)