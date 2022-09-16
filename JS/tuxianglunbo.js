// 定义对象获取需要的dom元素
var doms = {
  carousel: document.querySelector('.carousel'),//轮播区域
  indicators: document.querySelectorAll('.container_footer span'),
};
// 创建函数表示当前板块显示的图片

function moveTo (index) {
  doms.carousel.style.transform = `translateX(-${index}00%)`;
  // 去除当前选中的指示器
  var active = document.querySelector('.active');
  // active.className = '';
  active.classList.remove('active');
  // 重新选择指示器
  // doms.indicators[index].className='active';
  doms.indicators[index].classList.add('active');
}
// 给每个span添加onclick事件
doms.indicators.forEach(function (item, i) {
  item.onclick = function () {
    moveTo(i);
  };
})
function findindes(active){
  for(let i=0;i<=doms.indicators.length;i++){
    if(active===doms.indicators[i]){
      return i
    }
  }
}
function moveLeft(){
  var active = document.querySelector('.active');
  active.classList.remove('active');
  x = findindes(active)
  if(active.nextElementSibling == null){
    doms.indicators[0].classList.add('active');
    moveTo(0)
  }
  else{
    active.nextElementSibling.classList.add('active');
    moveTo(x+1)
  };
  
}
function autoRun(){
  return setInterval(moveLeft,1000);
}
var timer = autoRun(); //调用定时器

doms.carousel.onmouseover = function() {
  clearInterval(timer)
}
doms.carousel.onmouseout = function(event) {
  timer = setInterval(moveLeft, 1000)
  
}

