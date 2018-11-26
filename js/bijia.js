$(function(){

  var productid = GetUrlParms().productid || 1;
  //根据商品id获取商品详情
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getproduct',
    data: {
      productid: productid
    },
    success: function(info){
      // console.log(info);
      var htmlStr = template('getproduct',info);
      $('.mmb_bijia .desc').html(htmlStr);

      var goShop = template('goShop', info);
      $('.mmb_bijia .shopTop').html(goShop);
       //保存分类id
       var categoryid = info.result[0].categoryId;
       //截取商品名
       var productName = info.result[0].productName.split(" ")[0];
       //根据分类id获取分类名
      $.ajax({
        url: "http://127.0.0.1:9090/api/getcategorybyid",
        data: {
          categoryid: categoryid
        },
        success: function(info){
          // console.log(info);
          
          brand = {
            category: info.result[0],
            productName: productName
          };
          // console.log(brand);
          // 将分类名和商品名包装成对象，结合模板引擎，渲染到三级菜单导航中
          var bijiaTitle = template('bijiaTitle',brand);
          $('.mmb_bijia .three').html(bijiaTitle);

        }


      });

    }





  });

  //根据商品id获取商品评论
  $.ajax({
    url: "http://127.0.0.1:9090/api/getproductcom",
    data: {
      productid: productid
    },
    success: function(info){
      console.log(info);
      var htmlStr = template('getproductcom',info);
      $('.mmb_evaluate .comBox').html(htmlStr);
    }
  });
})