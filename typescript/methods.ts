function printMessage(message:string){
    console.log(message);
}

//return type of the function.
function getNameTitle(name:string,age:number):string{
    let res = "Name is "+name+" and his age is "+age;
    return res;
}

function checkChildAge(age:number):boolean{
    if(age>10){
        return false;
    }else{
        return true;
    }
}

printMessage("hello");
getNameTitle("test",56);
// print(45454);//error.method will accept only string