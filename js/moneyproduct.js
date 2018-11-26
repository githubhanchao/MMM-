$(function(){

  var productid = GetUrlParms().productid || 20;

  //根据商品id获取商品详情
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
    data: {
      productid: productid
    },
    success: function(info){
      // console.log(info);
      var htmlStr = template('moneyproduct',info);
      $('.mmb_moneyproduct').html(htmlStr);

      var extra = template('extra',info);
      $('.mmb_extra').html(extra);

    }

  });













})