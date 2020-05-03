// em = required / parent 

var calculate = () => {
    var parentVal = document.getElementById('parent').value;
    var requiredVal = document.getElementById('required').value;
    var result =  document.getElementById('result');

    if(!parentVal | !requiredVal){
        alert('Please fill in all fields');
    }else{
        result.innerHTML =  requiredVal / parentVal;
    }
}

var btn = document.querySelector('button');
btn.addEventListener('click', calculate);