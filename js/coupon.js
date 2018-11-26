$(function(){

  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcoupon',
    success: function(info){
      console.log(info);
      var str = template("couponList",info);
      $(".couponBox").html(str);
    }

  });

})