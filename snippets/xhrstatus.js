function getStatus(url, errorType) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log(xhr)
        if (xhr.readyState == 1) {
            console.log('initial status:', xhr.status);
        }
        if (xhr.readyState == 4) {
            console.log('final status:', xhr.status);
        }
    }
    if (errorType === 'timeout') {
        xhr.timeout = 4000;
    }
    xhr.open('GET', url, true);
    xhr.send(null);
    if (errorType === 'abort') {
        setTimeout(function() {
            xhr.abort();
        }, 4000);
    }
}
