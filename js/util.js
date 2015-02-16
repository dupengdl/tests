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