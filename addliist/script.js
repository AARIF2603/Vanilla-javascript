arr = ['apple','orange','banana','guva','pineapple']
arr.forEach(x => {
    let list = document.createElement('li')
    document.getElementById('list').appendChild(list)
    list.textContent= x
    
});

input = [6,-5,7,-2,4,6,-1]
let  sum =0
input.forEach((x) =>{
    
    if(x>0){
      sum += x
    }
   
})
console.log(sum)

array = [5,6,7,8]
array.forEach((element,index,array) => {
    array[index] = element*2
});
console.log(array)
//map
let priceinr = [20,30,1,2]
let priceusd= priceinr.map(x => x*83)
console.log(priceusd)

let con =[{name:'AArif',age:22},{name:'Riya',age:20}]
let age = con.filter(x => x.age<21)
console.log(age)

console.clear()

//filter
let con2 =[{name:'AArif',age:22},{name:'Riya',age:20}]
let age2 = con.filter(x => x.age<21)
console.log(age)


let input1 = [6,-5,7,-2,4,6,-1]
let sumPositive = input1.filter(el => el>0).reduce((sum,x) => sum += x)
console.log(sumPositive)

let Name = "Robert Andrew George"
let re = /(?=[A-Z])/
let arr1 = Name.split('').filter(x => x.match(re) ).join('')
console.log(arr1)

let arr2 = [4,6,2,3,1,1,3,5,7,8,4,3]
let r=arr2.indexOf(11)
let unique = arr2.reduce((acc,el)=>{
    if(!acc.includes(el))
        acc.push(el);
    return acc
},[])
console.log(unique)
console.log(r)