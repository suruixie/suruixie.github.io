function sliderChange(slideAmount) {
    document.getElementById('output').innerHTML = slideAmount;
}
document.getElementById('slider').value = 0;

//get the element
var display = document.getElementById("chosen");
//show the amount
display.innerHTML=slideAmount;

//get the element
var pic = document.getElementById("pic");
//set the dimensions
pic.style.margin-left=slideAmount;
