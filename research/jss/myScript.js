function updateSlider(slideAmount) {
  document.getElementById('output').innerHTML = slideAmount;
  //get the element
  var display = document.getElementById('slider').value=0;
  //show the amount
  display.innerHTML=slideAmount;
  //get the element
  var pic = document.getElementById("pic");
  //set the dimensions
  pic.style.marginLeft=calc((slideAmount+"px") * 0.1639);
  //pic.style.marginLeft=(slideAmount*0.1639)+"px";
  //pic.style.height=slideAmount+"px";

}
