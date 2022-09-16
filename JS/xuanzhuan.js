window.onload = function(){
  //toc目录设置
  var toc_img = document.querySelector('.toc');
  var square = document.querySelector('ul');
  var p_img = square.classList;
  var img_button = toc_img.querySelectorAll('span');
  var flage = '';
  // 每个板块添加点击事件
  img_button[0].onclick = function(e) {
      flage = img_button[0].className;
      square.setAttribute('class', flage);
  }
  img_button[1].onclick = function(e) {
      flage = img_button[1].className;
      square.setAttribute('class', flage);
  }
  img_button[2].onclick = function(e) {
      flage = img_button[2].className;
      square.setAttribute('class', flage);
  }
  img_button[3].onclick = function(e) {
      flage = img_button[3].className;
      square.setAttribute('class', flage);
  }
  img_button[4].onclick = function(e) {
      flage = img_button[4].className;
      square.setAttribute('class', flage);
  }
  img_button[5].onclick = function(e) {
      flage = img_button[5].className;
      square.setAttribute('class',flage);
  }
}
