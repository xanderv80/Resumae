var mouseWheelEvt = function (event) {
    if (document.body.doScroll)
        document.body.doScroll(event.wheelDelta>0?"up":"down");
    else if ((event.wheelDelta || event.detail) > 0)
        document.body.scrollLeft -= 10;
    else
        document.body.scrollLeft += 10;

    return false;
}
document.body.addEventListener("mousewheel", mouseWheelEvt);