let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)
const button = document.querySelector('button')
button.addEventListener('click', () => {
let input = document.querySelector('input[name="qualification"]:checked').value

// if (document.getElementsByTagName('input').checked)
//     input = document.getElementsByName('qualification').value
let values 
switch (input){
    case 'Illiterate':
        values = 0
        break
    case 'HighSchool':
        values = 0
        break
    case 'UG':
        values = 1
        break
    case 'PG':
        values = 1
        break
    case 'Doctorate':
        values = 1
        break       
}
let result = document.getElementById('result')
if (values===0)
    result.innerHTML = input + " not Eligible"
else 
    result.innerHTML = input +" Eligible"
})