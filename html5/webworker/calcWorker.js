/**
 * Created by dupeng on 14-12-22.
 */
var sum = 0,
    currPercent = 0,
    maxLimit = 1000000000;
for(var j=0; j<=maxLimit; j++){
    sum += j;
    newPercent = Math.round((j/maxLimit) * 100);
    if(newPercent > currPercent){
        postMessage(newPercent + "% complete");
        currPercent = newPercent;
    }
}
postMessage("Sum = " + sum);