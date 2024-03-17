interface School{
    name:string;
    printName();
}

//all the interface props should be in the child class.
class Sample3 implements School{
    name: string;
    printName() {
      console.log("test");
    }    
    getMobileNo():number{
        return 545445;
    }

    //no need to return
    printMobile():void{
        // return "wefew";
    }
}
let sObj = new Sample3();
sObj.name = "swdf";
sObj.printName();