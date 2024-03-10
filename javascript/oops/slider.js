class ImgSlider{
    imgArray = ["1.jpg","2.jpeg","3.jpeg","4.jpeg","5.jpg"];
    startCount = 0;
    changeimg(){
        if(this.startCount >= this.imgArray.length || this.startCount <0){
            this.startCount = 0;
        }
        let imgName = this.imgArray[this.startCount];
        document.querySelector("#slider_img").src = "../images/"+imgName;
    }
}
let imgsliderObj = new ImgSlider();


document.querySelector("#prev").addEventListener('click',()=>{
    imgsliderObj.startCount--;
    imgsliderObj.changeimg();
})
document.querySelector("#nxt").addEventListener('click',()=>{
    imgsliderObj.startCount++;
    imgsliderObj.changeimg();
})