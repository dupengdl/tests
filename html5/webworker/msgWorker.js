/**
 * Created by dupeng on 14-12-22.
 */
onmessage = function(e){
    if(e.data === ""){
        postMessage({msgType: 'ERR', msg: 'Invalid data entry'});
    } else {
        newMsg = 'Worker received "' + e.data + '"';
        postMessage({msgType: 'MSG', msg: newMsg});
    }
}