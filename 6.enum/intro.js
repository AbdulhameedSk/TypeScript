"use strict";
var Direction;
(function (Direction) {
  Direction[(Direction["Up"] = 0)] = "Up";
  Direction[(Direction["Down"] = 1)] = "Down";
  Direction[(Direction["Left"] = 2)] = "Left";
  Direction[(Direction["Right"] = 3)] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
  switch (keyPressed) {
    case Direction.Up:
      console.log("Moving Up");
      break;
    case Direction.Down:
      console.log("Moving Down");
      break;
    case Direction.Left:
      console.log("Moving Left");
      break;
    case Direction.Right:
      console.log("Moving Right");
      break;
    default:
      console.log("Invalid direction");
      break;
  }
}
doSomething(Direction.Up);
