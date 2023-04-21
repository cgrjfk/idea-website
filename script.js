      
Array.prototype.forEach.call(document.querySelectorAll('p'), function (p, i) {
    p.style.marginLeft = i * 6 + '%'
})
Zoomerang
    .config({
        maxHeight: 400,
        maxWidth: 400,
        bgColor: '#000',
        bgOpacity: .85,
        onOpen: openCallback,
        onClose: closeCallback
    })
    .listen('.zoom')

function openCallback (el) {
    console.log('zoomed in on: ')
    console.log(el)
}

function closeCallback (el) {
    console.log('zoomed out on: ')
    console.log(el)
}
