// 预加载工具函数
 function preloadUtil(img, progressCallback, endCallback){
    var onload_img = 0;
    var tmp_img = [];
    for (var i = 0, imgnum = img.length; i < imgnum; i++) {
        tmp_img[i] = new Image();
        tmp_img[i].src = img[i];
        if (tmp_img[i].complete) {
            onload_img++;
            if(progressCallback){
                progressCallback(onload_img, img.length + 1);
            }
        } else {
            tmp_img[i].onload = function () {
                onload_img++;
                if(progressCallback){
                    progressCallback(onload_img, img.length + 1);
                }
            };
        }
    }
    var self = this;
    var et = setInterval(function () {
        if (onload_img == img.length && self._isReady) { // 定时器,判断图片完全加载后调用callback
            clearInterval(et);
            if(endCallback){
                endCallback();
            }
        }
    }, 200);
}
// 将数组内元素打乱
function shuffle(arr) {
    var tmparr = [];
    var num = arr.length;
    for (var i = 0; i < num; i++) {
        tmparr.push(arr.splice(Math.random() * arr.length, 1).pop());
    }
    return tmparr;
}
//获取url参数
var $_GET = (function(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        if(u[1].indexOf('#') != -1) {
            u = u[1].split("#");
            u = u[0].split("&");
        } else {
            u = u[1].split("&");
        }
        var get = {};
        for(var i in u){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();

//search string transform to json object
function qStrToJson(queryStr){
    if(typeof(queryStr) == 'string'){
        //针对编辑器中出现的单引号未被转义的情况做特殊处理
        var u = queryStr.replace(/%26%2339%3B/g, '\'');
        u = u.split('&');
        var get = {};
        for(var i in u){
            var j = u[i].split('=');
            if(j[0] in get) {
                get[j[0]] = [].concat(get[j[0]], decodeURIComponent(j[1]));
            } else {
                get[j[0]] = decodeURIComponent(j[1]);
            }
        }
        return get;
    } else {
        return {};
    }
}

// 检查身份证号合法性
function checkID(ID) {
    if (typeof ID !== 'string')
        return '非法字符串';
    const city = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外'
    };
    let birthday = ID.substr(6, 4) + '/' + Number(ID.substr(10, 2)) + '/' + Number(ID.substr(12, 2));
    let d = new Date(birthday);
    let newBirthday = d.getFullYear() + '/' + Number(d.getMonth() + 1) + '/' + Number(d.getDate());
    let currentTime = new Date().getTime();
    let time = d.getTime();
    let arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    let arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let sum = 0;

    if (!/^\d{17}(\d|x)$/i.test(ID))
        return '非法身份证';
    if (city[ID.substr(0, 2)] === undefined)
        return '非法地区';
    if (time >= currentTime || birthday !== newBirthday)
        return '非法生日';
    for (let i = 0; i < 17; i++) {
        sum += ID.substr(i, 1) * arrInt[i];
    }
    let residue = arrCh[sum % 11];
    if (residue !== ID.substr(17, 1))
        return '非法身份证哦';
    return city[ID.substr(0, 2)] + ',' + birthday + ',' + (ID.substr(16, 1) % 2 ? ' 男' : '女');
}
