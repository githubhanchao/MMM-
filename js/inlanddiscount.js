$(function(){
  //获取国内商品列表数据
  $.ajax({
    url: "http://127.0.0.1:9090/api/getinlanddiscount",
    success: function(info){
      console.log(info);
      var htmlStr = template('inlanddiscount',info);
      $('.discountBox').html(htmlStr);

    }


  });





})