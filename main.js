!function () {
  var duration = 100;
  // 速度控制
  $('.actions').on('click', 'button', function(e) {
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    console.log(speed)
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed) {
      case 'slow':
        duration = 300
        break
      case 'normal':
        duration = 100
        break
      case 'fast':
        duration = 10
        break
    }
  })
  function wirteCode(prefix, code, fn) {
    let container = document.querySelector("#code");
    let styleTag = document.querySelector("#styleTag");
    let n = 0;
    let id;
    setInterval( function run(){
      n += 1;
      container.innerHTML = code.substring(0, n);
      styleTag.innerHTML = code.substring(0, n);
      container.scrollTop = container.scrollHeight;
      if (n < code.length) {
        id = setTimeout(run, duration)
        // fn && fn.call();
      } else {
        fn && fn.call();
      }
    }, duration);
  }
  let code = `
    .preview {
      /* height: 100vh; */ /* 充满屏幕 */ 
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FEE433;
    }

    .wrapper {
      width: 100%;
      height: 165px; /* 适应手机端 */
      position: relative; 
    }

    /* 给除了最后一个子标签加上z-index: 1 */
    /*.wrapper > :not(:last-child) {
      z-index: 1;
    }*/

    /* 鼻子 */
    .nose {
      width: 0;
      height: 0; 
      border-style: solid; /* 扇形制作 */
      border-width: 12px;
      border-color: black transparent transparent; /* transparent 透明 */
      border-radius: 50%; /* border的宽度等于border是圆形 */
      position: absolute;
      top: 28px;
      left: 50%; /* 左边线对齐外部div, 所以这样并不居中 */
      margin-left: -12px; /* 使当前div在往右移动自身的一半 */
      /* transform: translateX(-50%); */ /* 用法同上 css3属性 */
    }

    /* 眼睛 */
    .eye {
      width: 49px;
      height: 49px;
      background: #2E2E2E;
      position: absolute;
      border-radius: 50%;
      border: 2px solid #000000;
    }

    .eye::before {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      background: white;
      position: absolute;
      border-radius: 50%;
      left: 6px;
      top: -0.5px;
      border: 2px solid #000;
    }

    .eye.left {
      right: 50%;
      margin-right: 90px;
    }

    .eye.right {
      left: 50%;
      margin-left: 90px;
    }

    .face {
      width: 68px;
      height: 68px;
      background: #FC0D1C;
      border: 2px solid black;
      border-radius: 50%;
      position: absolute;
      top: 85px;
    }

    .face.left {
      right: 50%;
      margin-right: 116px;
    }

    .face.right {
      left: 50%;
      margin-left: 116px;
    }

    .upperLip {
      height: 25px;
      width: 80px;
      border: 2px solid black;
      position: absolute;
      top: 47px; /* 将胡须上调 */
      background: #FEE433; /* 使用上嘴唇的背景色遮住下嘴唇的背景色 */
    }

    .upperLip.left {
      right: 50%;
      border-bottom-left-radius: 40px 25px; 
      border-top: none;
      border-right: none;
      transform: rotate(-20deg);
    }

    .upperLip.right {
      left: 50%;
      border-bottom-right-radius: 40px 25px; 
      border-top: none;
      border-left: none;
      transform: rotate(20deg);
    }

    .lowerLip-wrapper {
      bottom: 0;
      position: absolute;
      left: 50%;
      margin-left: -150px;
      /* z-index: -1; */
      height: 110px;
      width: 300px;
      overflow: hidden;
    }

    .lowerLip {
      width: 300px;
      height: 3500px;
      background: #990513;
      border-radius: 200px/1500px;
      border: 2px solid black;
      position: absolute;
      bottom: 0;
      overflow: hidden;
    }

    .lowerLip::after {
      content: '';
      position: absolute;
      bottom: -20px;
      width: 100px;
      height: 100px;
      background: #FC4A62;
      left: 50%;
      margin-left: -50px;
      border-radius: 50px;
    }
  `;
  wirteCode('', code);
}.call();
