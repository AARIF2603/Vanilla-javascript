let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)
const button = document.querySelector('button')
button.addEventListener('click', () => {
    
    const input = document.getElementById('input').value
    let inputdetail 
    let operand1 = 0
    let operand2 = 0
    let operator = ''
    if(input.includes('+')){
        inputdetail = input.split('+')
        operand1 = Number(inputdetail[0])
        operand2 = Number(inputdetail[1])
        operator ='+'
    }
    else if(input.includes('-')){
        inputdetail = input.split('-')
        operand1 = Number(inputdetail[0])
        operand2 = Number(inputdetail[1])
        operator ='-'
    }
    else if(input.includes('*')) {
        inputdetail = input.split('*')
        operand1 = Number(inputdetail[0])
        operand2 = Number(inputdetail[1])
        operator ='*'
    }
    else if(input.includes('/')) {
        inputdetail = input.split('/')
        operand1 = Number(inputdetail[0])
        operand2 = Number(inputdetail[1])
        operator ='/'
    }
    else if(input.includes('%')){ 
        inputdetail = input.split('%')
        operand1 = Number(inputdetail[0])
        operand2 = Number(inputdetail[1])
        operator ='%'
    }
    
    let value
    
    switch(operator){
        case '+':
            value = operand1 + operand2
            break
        case '-':
            value = operand1 - operand2
            break
        case '*':
            value = operand1 * operand2
            break
        case '/':
            value = operand1 / operand2
            break
        case '%':
            value = operand1 % operand2
            break    
        default:
            value="Enter proper numerical values and operators"    
            break
    }        
    document.getElementById('result').innerHTML = value 
    
})