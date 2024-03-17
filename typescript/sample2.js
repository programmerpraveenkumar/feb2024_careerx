function calc(num1,num2,action){
    if(action=='add'){
        console.log(num1+num2);
        //below line ill throw error
        //document.getElementById('test').innerHTML ="this is addition";
    }else if(action=='sub'){
        console.log(num1-num2);
    }else if(action=='mul'){
        console.log(num1*um2);
    }
}
calc(10,15,'add');
calc(10,15,'sub');