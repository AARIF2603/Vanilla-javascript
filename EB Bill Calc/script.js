function EBcalc(){
    const totalUnits = Number(document.getElementById("input").value)
    if(totalUnits<=50)
        billAmount = totalUnits*0.75
    else if((totalUnits>50)&&(totalUnits<=150))
        billAmount = 50*0.75+((totalUnits-50)*1)
    else if((totalUnits>150)&&(totalUnits<=250))
        billAmount = (50*0.75)+(100*1)+((totalUnits-150)*1.30)
    else
        billAmount = (50*0.75)+(100*1)+(100*1.30)+((totalUnits-250)*1.50)
    const result = document.getElementById('result')
    result.innerHTML = "Your Bill amount is "+ billAmount
  }