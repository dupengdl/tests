/**
 * Created by dupeng on 14-12-22.
 */
var count = 0,
    connections = [],
    average = 0,
    numValues = 0,
    sumValues = 0;
onconnect = function(msg){
    var port = msg.ports[0];
    connections[count] = port;
    count += 1;
    port.postMessage({msgType:'LOG',msgText:'[SW] Now connected [' + count + '].'});
    port.postMessage({msgType:'AVE',msgText:'[SW] Average updated [' + average + '.]', aveValue: average});
    port.onmessage = function(msg){
        var newValue = msg.data;
        port.postMessage({msgType:'LOG',msgText:'[SW] Received: ' + newValue + '.'});
        updateAverage(newValue);
    }
}
function sendAllConnections(msgTypeVal, msgVal){
    for(var i=0; i < count; i++){
        connections[i].postMessage({
            msgType:msgTypeVal,
            msgText:msgVal,
            aveValue:average});
    }
}
function updateAverage(newValue){
    numValues ++;
    sumValues += parseFloat(newValue);
    average = Math.round((sumValues/numValues)*100)/100;
    sendAllConnections('AVE','[SW] Average updated: ' + average + '.');
}