
//fn is not string..it shuld be a function.
function excuteMyFunction(fn){
    fn();
}





excuteMyFunction(()=>{
    let num1 = 10;
    let num2 = 20;
    console.log("output of addition is ",num1+num2);
});

// excuteMyFunction(function(){
//     let num1 = 10;
//     let num2 = 20;
//     console.log("output of addition is ",num1+num2);
// });

function msg(a,b,...etc){
    console.log(a,b);
    console.log(etc);
}
// msg(1,30);
// msg(1,30,56,58,69,5);
msg(1,30,"tet",'fwere','34546');