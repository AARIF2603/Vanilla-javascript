const btn = document.getElementById('btn')
let colortxt = document.getElementById('color')
let flipper = document.getElementById('wrap')
let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',()=>{
    let color = "#"
    for (let i=1;i<=6;i++){
        color += hexGentrator()
    }
    flipper.style.backgroundColor = color
    colortxt.innerHTML = color

})
function hexGentrator(){
    let value = Math.floor(Math.random()*16)
    return hex[value]
    
}