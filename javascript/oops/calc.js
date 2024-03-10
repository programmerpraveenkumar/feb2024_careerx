class Calculator{
    add(){
        let num1 = document.querySelector("#num1").value;
        let num2 = document.querySelector("#num2").value;
        let res = parseInt(num1)+parseInt(num2);
        document.querySelector('#result').innerHTML = "addition is "+res;                    
    }
    sub(){

    }
}

let calc = new Calculator();