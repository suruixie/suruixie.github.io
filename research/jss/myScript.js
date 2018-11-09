function updateSlider(slideAmount) {
  //document.getElementById('output').innerHTML = slideAmount;
  //get the element
  var display = document.getElementById("chosen");
  //show the amount
  display.innerHTML=slideAmount;
  //get the element
  var pic = document.getElementById("pic");
  var picL = document.getElementById("picL");
  //set the dimensions
  var tmp = slideAmount;
  var tmp1 = tmp * 0.2732;
  pic.style.marginLeft=tmp1+"px";
  picL.style.marginLeft=tmp1+"px";
  //calc( ( slideAmount + "px") * 0.2732 );
  //pic.style.marginLeft=slideAmount+"px";
  //pic.style.height=slideAmount+"px";

}
//document.getElementById('slider').value = 0;

