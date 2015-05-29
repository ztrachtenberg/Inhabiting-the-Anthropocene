function windowH() {
    var wH = $(window).height();
    
    $('.container').css({height: wH});
}

windowH();