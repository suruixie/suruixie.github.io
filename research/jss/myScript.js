function sliderChange(val) {
    document.getElementById('output').innerHTML = val;
}
document.getElementById('slider').value = 0;


$(function() {
    //滚动面板部分
    var scrollPane = $( ".scroll-pane" ),
      scrollContent = $( ".scroll-content" );
 
    //创建滑块
    var scrollbar = $( ".scroll-bar" ).slider({
      slide: function( event, ui ) {
        if ( scrollContent.width() > scrollPane.width() ) {
          scrollContent.css( "margin-left", Math.round(
            ui.value / 100 * ( scrollPane.width()  )
          )  );
        } else {
          scrollContent.css( "margin-left", 0 );
        }
      }
    });
 
 
    //基于滚动内容位置，重置滑块的值
    function resetValue() {
      var remainder = scrollPane.width() - scrollContent.width();
      var leftVal = scrollContent.css( "margin-left" ) === "auto" ? 0 :
        parseInt( scrollContent.css( "margin-left" ) );
      var percentage = Math.round( leftVal / remainder * 100 );
      scrollbar.slider( "value", percentage );
    }
 
    //初始化滚动条大小
    setTimeout( sizeScrollbar, 10 );//safari 超时
  });
