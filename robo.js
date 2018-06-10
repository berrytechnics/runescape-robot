// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(500);

var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;
var mousePos = robot.getMousePos();
var pos = {
 x:67,
 y:136
}
var thisColor = robot.getPixelColor(pos.x,pos.y)

var images = [
  'pic.png',
  'pic2.jpg',
  'runescape.png',
  'runeapp.jpg'
]

console.log('moving mouse to: '+JSON.stringify(pos))
robot.moveMouse(pos.x,pos.y)
console.log('click')
robot.mouseClick('left',false)
pos = { x: 214, y: 136 }
console.log('click')
robot.mouseClick('left',false)
robot.mouseClick('left',false)
console.log('typing: '+ images[3])
robot.typeString(images[3],20)
console.log('moving mouse to: '+JSON.stringify(pos))
robot.moveMouse(pos.x,pos.y)
console.log('click')
robot.mouseClick('left',false)
