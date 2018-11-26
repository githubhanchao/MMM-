$(function(){
  //获取首页菜单栏数据
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getindexmenu',
    success: function(info){
      var htmlStr = template('getindexmenu',info);
      $('.mmb_nav ul').html(htmlStr);

      var $more = $('.mmb_nav .nav.more');
      $hide = $('.mmb_nav .nav.more~.nav');
      $more.on('click',function(){
        $hide.toggleClass('hide');
      })
    }

  });


  //获取首页列表数据
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getmoneyctrl',
    success: function(info){
      console.log(info);
      var htmlStr = template('getmoneyctrl',info);
      $('.recom_content ul').html(htmlStr);

    }



  });







})