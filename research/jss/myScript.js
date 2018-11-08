function updateSlider(slideAmount) {
  //document.getElementById('output').innerHTML = slideAmount;
  //get the element
  var display = document.getElementById("chosen");
  //show the amount
  display.innerHTML=slideAmount;
  //get the element
  var pic = document.getElementById("pic");
  //set the dimensions
  //pic.style.marginLeft=calc((slideAmount+"px") * 0.1639);
  pic.style.marginLeft=slideAmount+"px";
  //pic.style.height=slideAmount+"px";

}
//document.getElementById('slider').value = 0;

