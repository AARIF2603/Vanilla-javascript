function calculate(){
    const words = document.getElementById("input").value
    // const inchVal = cmVal/2.54
    const WordSplit = words.split(' ')
    const WordCount = WordSplit.length
    const result = document.getElementById("result")
    result.innerHTML = WordCount + ' words'
  }