let array = [5,8,10,7,9,11]
console.log(array)
array.splice(3,3,17,19,111)
console.log(array)
array.unshift(100)
console.log(array)
array.splice(-2,1,200)
console.log(array)
array.push(1000)
console.log(array)
console.log(array.length)
array.splice(4,0,0)
console.log(array)
let string = "Was it a car or a cat i saw?"

const re = /[\W_]/g
let lowered = string.toLowerCase().replace(re,'')
console.log(lowered)
let reversed = lowered.split('').reverse().join('')
console.log(reversed)

let circleArea = r =>  Math.PI*r**2
console.log(circleArea(10))

console.clear()

let user = {
    name : 'Aarif',
    age : 22,
    gender : 'male',
    arr : [1,2,3,4,5],
    obj :{
        isfair : true,
        isShort : false
    },
    display(){
        console.log("hello!")
    }
}

console.log(user.name)
console.log(user['name'])
console.log(user.age)
console.log(user.arr[3])
console.log(user.obj.isfair)

for(let value of user.arr){
    console.log(value)
}
for(let obf in user['obj']){
    console.log(obf)
}
for(let key in user){
    console.log(user[key])
}
