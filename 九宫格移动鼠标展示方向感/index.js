const lis = document.querySelectorAll('.container li'),//li标签
      pos = document.querySelectorAll('.container li p');//p标签

// 获取移入移出的方向
function direct(e,o){
    var w = o.offsetWidth,
        h = o.offsetHeight,
        top = o.offsetTop,
        left = o.offsetLeft,
        scrollTop = document.doctype.scrollTop||document.documentElement.scrollTop,
        scrollLeft = document.doctype.scrollLeft||document.documentElement.scrollLeft,
        offTop = top-scrollTop,
        offLeft = left - scrollLeft,
        ex = (e.pageX - scrollLeft)||e.clientX,
        ey = (e.pageY - scrollTop)||e.clientY,
        x = (ex - offLeft - w/2)*(w>h?(h/w):1),
        y = (ey - offTop - h/2)*(h>w?(w/h):1),
        angle = (Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90)+3)%4,
        directName = ["上","右","下","左"];
    return directName[angle];
        
}
// 鼠标事件(方向,元素,鼠标进入事件)
function mouseEvent(angle,o,d){
    var w = o.offsetWidth,
        h = o.offsetHeight;
    var p = o.querySelector('p');//元素下的p元素
    p.style.transition ='0s';
    if(d=='in'){//鼠标进入
        // 判断方向
        switch(angle){
            case '上':
                if(p.offLeft==0&&p.offTop==0) break;
                p.style.left = 0;
                p.style.top = -h+'px';
                setTimeout(()=>{
                    p.style.left = 0;
                    p.style.top = 0;
                    p.style.transition = '0.25s';
                },50);
                break;
            case '右':
                if(p.offLeft==0&&p.offTop==0) break;
                p.style.left = w +'px';
                p.style.top = 0;
                setTimeout(()=>{
                    p.style.left = 0;
                    p.style.top = 0;
                    p.style.transition = '0.25s';
                },50);
                break;
            case '下':
                if(p.offLeft==0&&p.offTop==0) break;
                p.style.left = 0;
                p.style.top = h+'px';
                setTimeout(()=>{
                    p.style.left = 0;
                    p.style.top = 0;
                    p.style.transition = '0.25s';
                },50);
                break;
            case '左':
                if(p.offLeft==0&&p.offTop==0) break;
                p.style.left = -w +'px';
                p.style.top = 0;
                setTimeout(()=>{
                    p.style.left = 0;
                    p.style.top = 0;
                    p.style.transition = '0.25s';
                },50);
                break;
        }
    }else if(d=='out'){//鼠标离开
        switch(angle){
            case '上':
                setTimeout(()=>{
                    p.style.left = 0;
                    p.style.top=-h+'px';
                    p.style.transition = '0.25s';
                    p.style.transitionDelay = '0.1s';
                },50);
                break;
            case '右':
                setTimeout(()=>{
                    p.style.left = w +'px';
                    p.style.top = 0;
                    p.style.transition = '0.25s';
                    p.style.transitionDelay = '0.1s';
                },50);
                break;
            case '下':
                setTimeout(()=>{
                    p.style.left = 0;
                    p.style.top=h+'px';
                    p.style.transition = '0.25s';
                    p.style.transitionDelay = '0.1s';
                },50);
                break;
            case '左':
                setTimeout(()=>{
                    p.style.left = -w +'px';
                    p.style.top = 0;
                    p.style.transition = '0.25s';
                    p.style.transitionDelay = '0.1s';
                },50);
                break;
        }
    }
}
lis.forEach(li=>{
    li.addEventListener('mouseenter',function(e){
        var e = e||window.event;  //获取当前鼠标位置
        var angle = direct(e,this);//获取位置(在进入时候的上下左右)
        mouseEvent(angle,this,'in');
    });
    li.addEventListener('mouseleave',function(e){
        var e = e||window.event;
        var angle = direct(e,this);
        mouseEvent(angle,this,'out');
    })
})