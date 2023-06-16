//your JS code here. If required.
<!DOCTYPE html>
<html>
<head>
  <style>
    #line {
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: 0 0;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 2px;
      background-color: black;
    }
  </style>
</head>
<body>
  <div id="line"></div>

  <script>
    // JavaScript code to rotate the line
    var line = document.getElementById('line');
    var rotation = 0;

    function rotateLine() {
      rotation += 1;
      line.style.transform = 'rotate(' + rotation + 'deg)';
      requestAnimationFrame(rotateLine);
    }

    // Start rotating the line
    rotateLine();
  </script>
</body>
</html>

