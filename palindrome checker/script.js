function PalindromeChecker(){
    let string = document.getElementById("input").value
    const re = /[\W_]/g
    let lowered = string.toLowerCase().replace(re,'')
    console.log(lowered)
    let reversed = lowered.split('').reverse().join('')
    console.log(reversed)
    let result = document.getElementById('result')
    if(reversed===lowered)
        result.innerHTML = "is a Palindrome"
    else
        result.innerHTML = "not a Palindrome"
  }