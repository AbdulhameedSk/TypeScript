enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
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
