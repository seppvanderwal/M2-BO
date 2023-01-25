  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  
  var moles = [
    {x: 50, y: 50, w: 50, h: 50, visible: false},
    {x: 50, y: 100, w: 50, h: 50, visible: false},
    {x: 50, y: 150, w: 50, h: 50, visible: false},
    {x: 100, y: 50, w: 50, h: 50, visible: false},
    {x: 100, y: 100, w: 50, h: 50, visible: false},
    {x: 100, y: 150, w: 50, h: 50, visible: false},
    {x: 150, y: 50, w: 50, h: 50, visible: false},
    {x: 150, y: 100, w: 50, h: 50, visible: false},
    {x: 150, y: 150, w: 50, h: 50, visible: false}
  ];

 
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
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;

    for (var i = 0; i < moles.length; i++) {
      var mole = moles[i];
      if (x > mole.x && x < mole.x + mole.w && y > mole.y && y < mole.y + mole.h && mole.visible) {
        mole.visible = false;
        drawMoles();
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