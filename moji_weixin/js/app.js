/**
 * Created by huiliu on 14-11-12.
 * @Des:
 */
// (function(){
var app = function(){};
app.prototype.lsNumberKey = 'mNumbers';
app.prototype.lsGoodNumberKey = 'goodNumbers';
app.prototype.goodText = [
    '是懒神附体', '又被强迫穿秋裤了', '有选择困难症', '有镜头依赖症', '是苦逼异地恋',
    '是颜控', '有缺钱妄想症', '是脑洞青年', '是孤独寂寞冷', '是处女座'];

//app.prototype.init = function(){
//    var _g = this, isApp = _g.inApp();
//    console.log(isApp);
//    //event
//    $('.like-it').live('click', function(){
////        var data = $(this).attr('attr-data');
////        _g.saveRemark(data);
//    });
//
//    $('.parseJson').click(function(){
//        var arrList = _g.getRemark();
//        if(arrList == undefined){
//            arrList = [];
//            arrList[0] = 1;
//        }
//        //
//        var textList = _g.getRemarkText(arrList);
//        console.log(arrList, textList);
//    });
//
//    $('.getJson').click(function(){
//        _g.getRmtJSON(function(data){
//            //todo add storageToLocal
//            console.log(data.code);
//            _g.setAppStorage(_g.lsNumberKey, data.code);
//        });
//    });
//    //event
//};
app.prototype.inApp = function(){
    var ua = navigator.userAgent, regExpi = 'mojii', regExpa = 'mojia', patti = new RegExp(regExpi), patta = new RegExp(regExpa);
    console.log(ua);
    if(patti.test(ua) || patta.test(ua)){
        return true;
    } else {
        return false;
    }
};
//保存赞array
app.prototype.saveRemark = function(pos){
    var goodNums = this.getRemark();
    //获取赞数
    if(goodNums == undefined){
        //this.goodNum = [];
        goodNums = [];
    }

    //不增加多余赞
    if(goodNums[pos] == undefined){
        goodNums[pos] = 1;
    }

    this.setAppStorage(this.lsGoodNumberKey, goodNums);
    console.log(pos, goodNums);
};
//获取赞array
app.prototype.getRemark = function(){
    return this.getAppStorage(this.lsGoodNumberKey);
};

//json-storage
app.prototype.getAppStorage = function(key){
    if(window.localStorage){
        var tmp = localStorage.getItem(key);
        return JSON.parse(tmp);
    } else {
        var arr,reg=new RegExp("(^| )" + key + "=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return unescape(arr[2]);
        } else {
            return null;
        }
    }
};
app.prototype.setAppStorage = function(key, value){
    val = JSON.stringify(value);
    if(window.localStorage){
        localStorage.setItem(key, val);
    } else {
        var exp = new Date();
        exp.setTime(exp.getTime() + 30*24*60*60*1000);
        document.cookie = key + "="+ escape (val) + ";expires=" + exp.toGMTString();
    }
};

//获取赞数对应的文本
app.prototype.getRemarkText = function(arrList){
    console.log(arrList);
    var len = arrList.length;
    var rtnArr = [];
    for(var i = 0; i < len; i++){
        if(arrList[i] == 1){
            rtnArr.push(this.goodText[i]);
        }
    }
    if(rtnArr.length > 3){//前3
        rtnArr.length = 3;
    }
    return rtnArr;
};
//
app.prototype.getRmtJSON = function(ck){
    //var url = 'http://wx.mojichina.com/index/actions/getcode?type=jsonp&callback=?';
    var url = '/index/actions/getcode/type/json';
    /*$.getJSON(url, function(data){
        ck(data);
    });*/
    $.get(url, function(data){
        //console.log(data);
        ck(data);
    }, 'json');
};
//console.log(app, this, this.app);
// return app;
//var App = new app().init();
// }());