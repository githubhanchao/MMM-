$(function(){
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcategorytitle',
    success: function(info){
      // console.log(info);
      var htmlStr = template('titleList',info);
      $('.itemBox').html(htmlStr);

       //点击分类标题获取标题对应的分类列表然后渲染到页面上
       $('.item').on('click','a',function(){
        var $that = $(this);
        var titleid = $(this).data('titleid');
        // console.log(titleid);

        $.ajax({
          url: 'http://127.0.0.1:9090/api/getcategory',
          data: {
            titleid: titleid
          },
          success: function(info){
            // console.log(info);
            // console.log(this);
            // console.log($that);
            var htmlStr = template('cateList',info);
            $that.next().html(htmlStr);
            $that.next().slideToggle();
          }
        });

       });
    }

  })
















})