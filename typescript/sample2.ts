function calc1(num1:number,num2:number,action:string){
    if(action=='add'){
        console.log(num1+num2);
        //below line ill throw error
        //document.getElementById('test').innerHTML ="this is addition";
    }else if(action=='sub'){
        console.log(num1-num2);
    }else if(action=='mul'){
        console.log(num1*num2);
    }
}
calc1(10,15,'add');
calc1(10,15,'sub');