

let port = chrome.extension.connect()
port.postMessage({ action: 'start' })

let slide = document.getElementById('volume-slider');

port.postMessage({ action: 'give value' });
port.onMessage.addListener(function (msg) {
    slide.value = parseInt(msg);
});


slide.onchange = function () {
    port.postMessage({ action: this.value });
}

button.onclick = function () {
    port.postMessage({ faction: true });
    window.close();
}