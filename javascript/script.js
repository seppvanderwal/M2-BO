  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');


var score = 0;
var scoreDisplayer = document.getElementById("score");
  var moles = [
    {x: 0, y: 0, w: 100, h: 100, visible: false},
    {x: 0, y: 200, w: 100, h: 100, visible: false},
    {x: 0, y: 400, w: 100, h: 100, visible: false},
    {x: 200, y: 0, w: 100, h: 100, visible: false},
    {x: 200, y: 200, w: 100, h: 100, visible: false},
    {x: 200, y: 400, w: 100, h: 100, visible: false},
    {x: 400, y: 0, w: 100, h: 100, visible: false},
    {x: 400, y: 200, w: 100, h: 100, visible: false},
    {x: 400, y: 400, w: 100, h: 100, visible: false}
  ]

 
  function drawMoles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < moles.length; i++) {
      var mole = moles[i];
      if (mole.visible) {
         ctx.fillStyle = '#ff0000';
         ctx.fillRect(mole.x, mole.y, mole.w, mole.h);
      }
    }
  }

  function handleClick(event) {

    console.log("click");

    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;

    for (var i = 0; i < moles.length; i++) {
      var mole = moles[i];      
      if (x > mole.x && x < mole.x + mole.w && y > mole.y && y < mole.y + mole.h && mole.visible) {
        mole.visible = false;
        score += 1;
        scoreDisplayer.innerHTML = "Score: " + score;
        drawMoles();
        break;
      }
    }
  }
  canvas.addEventListener('click', handleClick);

  function showMole() {
    var mole = moles[Math.floor(Math.random() * moles.length)];
    mole.visible = true;
    setTimeout(function() {
      mole.visible = false;
      drawMoles();
    }, Math.random() * 2000 + 1000);
  }
  setInterval(showMole, 1000);

