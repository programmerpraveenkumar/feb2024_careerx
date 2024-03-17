//shuld not contain the method definition
//it should be used in the child class
interface Detail{
    sub(a:number,b:number):number
}
class Sample{
    personDetail='';
    add(a:number,b:number):number{
        let res = a+b;
        return res;
    }
}

let sampleObj = new Sample();
let res = sampleObj.add(10,15);//method will return the value;
console.log(res);