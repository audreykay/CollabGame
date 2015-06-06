var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

// This function will return the time in seconds since the function 
// was last called
// You should only call this function once per frame
function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

		// Find the delta time (dt) - the change in time since the last drawFrame
		// We need to modify the delta time to something we can use.
		// We want 1 to represent 1 second, so if the delta is in milliseconds
		// we divide it by 1000 (or multiply by 0.001). This will make our 
		// animations appear at the right speed, though we may need to use
		// some large values to get objects movement and rotation correct
	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
		// validate that the delta is within range
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}

//-------------------- Don't modify anything above here
  function stars() {

        // Draw 50 stars.
        for (i = 0; i <= 50; i++) {
          // Get random positions for stars.
          var x = Math.floor(Math.random() * canvas.width)
          var y = Math.floor(Math.random() * canvas.height)

          // Make the stars white
          ctx.fillStyle = "white";

          // Give the ship some room.
          if (x < 0 || y < 0) ctx.fillStyle = "black";

          // Draw an individual star.
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.fill();
        }
      }
 

 function run() {

		//context.fillStyle = "#ccc";
		//context.fillRect(0, 0, canvas.width, canvas.height);
        // If you have it, create a canvas user interface element.
        {
          // Specify 2d canvas type.
          ctx = canvas.getContext("2d");

          // Paint it black.
          ctx.fillStyle = "black";
          ctx.rect(0, 0, canvas.width, canvas.height);
          ctx.fill();

          // Paint the starfield.
          stars();

        }
      }


//-------------------- Don't modify anything below here


// This code will set up the framework so that the 'run' function is called 60 times per second.
// We have a some options to fall back on in case the browser doesn't support our preferred method.
(function() {
  var onEachFrame;
  if (window.requestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.mozRequestAnimationFrame(_cb); }
      _cb();
    };
  } else {
    onEachFrame = function(cb) {
      setInterval(cb, 1000 / 60);
    }
  }
  
  window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);