$(function () {
  var pageid = 0;
  var totalPage;
  var $next = $(".paging .next");
  var $prev = $(".paging .prev");
  var $curr = $(".paging .currPage");

  render();
  function render(pageid) {
    pageid = pageid || 0;

    $.ajax({
      url: 'http://127.0.0.1:9090/api/getmoneyctrl',
      data: {
        pageid: pageid
      },
      success: function (info) {
        console.log(info);
        //根据pageid获取数据渲染到页面中
        var htmlStr = template('moneyctrl', info);
        $('.mmb_moneyctrl .monCtrl').html(htmlStr);

        totalPage = Math.ceil(info.totalCount / info.pagesize);
        $('.paging .currPage span').text((pageid + 1) + "/" + totalPage);


        var page = template('pageCount', {
          pageCount: totalPage
        });
        $('.currPage .morePage').html(page);
      }
    });
  }

  $next.on("click", function () {
    pageid++;
    if (pageid >= totalPage) {
      pageid = 0;
    }
    render(pageid);
  })
  $prev.on("click", function () {
    pageid--;
    if (pageid < 0) {
      pageid = totalPage-1;
    }
    render(pageid);
  })
  $curr.on("click", function () {
    $(this).find(".morePage").toggle();
  })
  $curr.on("click", ".morePage li", function () {
    pageid = $(this).index();
    render(pageid);
  })



})