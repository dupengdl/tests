/**
 * Created by sunlan on 14/10/27.
 */
$(function(){
	var b = $(".slide-page").pageSlider();
    var App = new app(), inAPP = App.inApp();
    $(b).on("enter",function () {
        $(this).addClass("active");
    }).on("leave", function () {
        $(this).removeClass("active");
    })

    var slidePage = $(".slide-page");

    function a(a) {
        for (var b, c, d = a.length; d; b = parseInt(Math.random() * d), c = a[--d], a[d] = a[b], a[b] = c);
        return a
    }

    /* loading */
    var loadHeader = $("#loading-page .persons span"),loadHeader = a(loadHeader),b = 0;
    for (var d = 0; d < loadHeader.length; d++) b += 100, function (a) {
        setTimeout(function () {
            $(loadHeader[a]).addClass("active")
        }, b)
    }(d)

    var loadTxt = $("#loading-page .persons div"),loadTxt = a(loadTxt);
    for (var d = 0; d < loadHeader.length; d++) b += 100, function (a) {
        setTimeout(function () {
            $(loadTxt[a]).addClass("active")
        }, b)
    }(d)

    $(".process-percent").animate({"width":"100%"},4000,"linear",function(){
        $(".loading-page").hide();
        $(".slide-mainbody").show().animate({"opacity":"1"},400);
    });

    /* page01 */
    $(slidePage[1]).on("enter leave", function (a) {
        if ("enter" == a.type) {
            $(this).find(".title,.phone,.sunny").addClass("active");
        } else {
            $(this).find(".title,.phone,.sunny").removeClass("active");
        }
    })
    /* page02 */
    $(slidePage[2]).on("enter leave", function (a) {
        if ("enter" == a.type) {
            $(this).find(".title,.screen").addClass("active");
        } else {
            $(this).find(".title,.screen").removeClass("active");
        }
    })

    /* page03 */
    $(slidePage[3]).on("enter leave", function (a) {
        if ("enter" == a.type) {
            $(this).find(".title,.screen").addClass("active");
        } else {
            $(this).find(".title,.screen").removeClass("active");
        }
    })

    /* page04 */
    $(slidePage[4]).on("enter leave", function (a) {
        if ("enter" == a.type) {
            $(this).find(".title,.screen").addClass("active");
        } else {
            $(this).find(".title,.screen").removeClass("active");
        }
    })

    /* page05 */
    var umbrella = $("#umbrella span"),umbrella = a(umbrella);
    $(slidePage[5]).on("enter leave", function (a) {
        if ("enter" == a.type) {
            b = 0;
            for (var d = 0; d < umbrella.length; d++)b += 100, function (a) {
                setTimeout(function () {
                    $(umbrella[a]).addClass("active")
                }, b)
            }(d)
            $(this).find(".title").addClass("active");

        } else {
            b = 0;
            for (var d = 0; d < umbrella.length; d++)b += 100, function (a) {
                setTimeout(function () {
                    $(umbrella[a]).removeClass("active")
                }, b)
            }(d)
            $(this).find(".title").removeClass("active");
        }
    })

    /* page06 */
    $(slidePage[6]).on("enter leave", function (a) {
        if ("enter" == a.type) {
            $(this).find(".title,.person").addClass("active");
        } else {
            $(this).find(".title,.person").removeClass("active");
        }
    })

    /* page07 */
    $(slidePage[7]).on("enter leave", function (a) {
        if ("enter" == a.type) {
            $(this).find(".title,.phone,.crab").addClass("active");
        } else {
            $(this).find(".title,.phone,.crab").removeClass("active");
        }
    })
    /* page08 */
    $(slidePage[8]).on("enter leave", function (a) {
        if ("enter" == a.type) {
            $(this).find(".title,.phone").addClass("active");
        } else {
            $(this).find(".title,.phone").removeClass("active");
        }
    })
    /* page09 */
    $(slidePage[9]).on("enter leave", function (a) {
        if ("enter" == a.type) {
            $(this).find(".title,.content").addClass("active");
        } else {
            $(this).find(".title,.content").removeClass("active");
        }
    })

    /* page10 */
    $(slidePage[10]).on("enter leave", function (a) {
        if ("enter" == a.type) {
            $(this).find(".title,.content").addClass("active");
            //add
            var arrList = App.getRemark();
            if(arrList == undefined){
                //arrList = [];
                //arrList[0] = 1;
                $('#textMsg').html('这么多新功能你确定一个都不喜欢吗？不好吧看来你是高冷病症患者，更需要墨迹5.0来温暖你啦！');
            } else {
                $('#goodDesc').text(App.getRemarkText(arrList));
            }
            console.log(arrList);
            //alert(arrList);
            if(inAPP === true){
                console.log('端内');
                $('#btnShareMoji').hide();
            }
        } else {
            $(this).find(".title,.content").removeClass("active");
        }
    });

    //
    $("#btnShare").bind("click",function(){
        //$(".dialog-layer").show();
        if(inAPP === true){
            //端内操作
            if(App.getAppStorage('mNumber') == undefined){
                App.getRmtJSON(function(data){
                    console.log(data);
                    if(data.status == 0){
                        $('#myCode').text(data.code);
                        App.setAppStorage('mNumber', data.code);
                        $(".dialog-layer-moji").show();
                    }
                });
            } else {
                $('#myCode').text(App.getAppStorage('mNumber'));
                $(".dialog-layer-moji").show();
                $(".slide-mainbody").hide();
            }
        } else {
            $(".dialog-layer").show();
        }
    });
    $(".dialog-layer").bind("click",function(){
        $(this).hide();
    });

	/* 活动规则 */
    $("#rulePageUrl").bind("click",function(){
        $("#rulePage").show();
        $(document).off("touchmove");
    });
    $("#rulePageBtn").bind("touchstart",function(){
        $("#rulePage").hide();
    });

	/* 端内分享码 关闭 排除 码所在元素 */
   $(".dialog-layer-moji").bind("click",function(){
     if(event.target==this){  
        $(this).hide();
       }
       $(".slide-mainbody").show();
   });

   /* like it */
   $('.like-it').bind('touchstart',function(){
       var data = $(this).attr('data-role');
       console.log(data);
       App.saveRemark(data);
        $(this).addClass('active');
   });
    //add event
    $('.like-it').bind('click',function(){
        var data = $(this).attr('data-role');
        console.log(data);
        App.saveRemark(data);
    });

})
