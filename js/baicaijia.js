$(function() {
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
    success: function(info){
      // console.log(info);
      var htmlStr = template('navList',info);
      $('.navBox').html(htmlStr);

      // 实现白菜价标题列表区域滚动
      new IScroll('.mmb_bcjNav',{
        scrollX: true,
        scrollY: false
      });

      //给白菜价标题列表注册点击事件
      $('.mmb_bcjNav').on('click','.navList',function(){
        $(this).addClass('active').siblings().removeClass('active');
        //点击白菜价标题获取对应标题的商品列表
        var titleid = $(this).find('a').data('titleid');
        $.ajax({
          url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
          data: {
            titleid: titleid
          },
          success: function(info){
            console.log(info);
            var bcj = template('bcjList',info);
            $('.bcjBox').html(bcj);

          }

        });


      });
      //页面第一次加载时触发第一个标题的点击事件
      $('.navList').eq(0).trigger('click');


    }





  });








})