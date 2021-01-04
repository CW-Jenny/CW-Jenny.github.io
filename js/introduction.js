window.onload = function(){
    var demo = document.getElementById('demo');
    var sx = sy = 10;
    var x = y = 0;

    function move(){
        if(document.documentElement.clientWidth - demo.offsetWidth-10 < x || x < 0){
            sx = -sx;
        }

        if(document.documentElement.clientHeight - demo.offsetHeight-10 < y || y < 0){
            sy = -sy;
        }

        x = demo.offsetLeft + sx;
        y = demo.offsetTop + sy;

        demo.style.left = x + 'px';
        demo.style.top = y + 'px';
    }

    var timer = setInterval(move, 100);

    demo.onmouseover = function(){
        clearInterval(timer);
    }

    demo.onmouseout = function(){
        timer = setInterval(move, 100);
    }
}

