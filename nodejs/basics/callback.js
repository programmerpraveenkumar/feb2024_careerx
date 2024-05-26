
//fn is not string..it shuld be a function.
function excuteFunction(fn){
    fn();
}

// excuteFunction(()=>{
//     console.log("this is from line noi 9");
// });

excuteFunction(()=>{
    let num1 = 10;
    let num2 = 20;
    console.log("output of addition is ",num1+num2);
});

setInterval(()=>{
    console.log("afw");
},1000);

setInterval(()=>{
    console.log("afw");
},5000);