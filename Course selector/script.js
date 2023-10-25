arr = ['ECE','CSE','IT','MECH','EEE','CIVIL']
// const select = document.querySelector('select')
// select.addEventListener('click', () => {
    let value = 0
    for(value of arr){
        let options = document.createElement('option')
        document.getElementById('select').appendChild(options)
        options.value = value
        options.innerHTML = value
    }
    
// }, {once:true});

