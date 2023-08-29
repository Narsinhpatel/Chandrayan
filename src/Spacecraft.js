class Spacecraft {
    constructor(x, y, z, direction) {
      this.position = { x, y, z };
      this.direction = direction;
    }
  
    executeCommands(commands) {
      for (const command of commands) {
        switch (command) {
          case "f":
            this.moveForward();
            break;
          case "b":
            this.moveBackward();
            break;
          case "l":
            this.turnLeft();
            break;
          case "r":
            this.turnRight();
            break;
          case "u":
            this.turnUp();
            break;
          case "d":
            this.turnDown();
            break;
          default:
        }
      }
    }
  
    getPosition() {
      return this.position;
    }
  
    getDirection() {
      return this.direction;
    }
  
    moveForward() {
      switch (this.direction) {
        case "N":
          this.position.y += 1;
          break;
        case "E":
          this.position.x += 1;
          break;
        case "S":
          this.position.y -= 1;
          break;
        case "W":
          this.position.x -= 1;
          break;
      }
    }
  
    moveBackward() {
      switch (this.direction) {
        case "N":
          this.position.y -= 1;
          break;
        case "E":
          this.position.x -= 1;
          break;
        case "S":
          this.position.y += 1;
          break;
        case "W":
          this.position.x += 1;
          break;
      }
    }
  
    turnLeft() {
      switch (this.direction) {
        case "N":
          this.direction = "W";
          break;
        case "E":
          this.direction = "N";
          break;
        case "S":
          this.direction = "E";
          break;
        case "W":
          this.direction = "S";
          break;
      }
    }
  
    turnRight() {
      switch (this.direction) {
        case "N":
          this.direction = "E";
          break;
        case "E":
          this.direction = "S";
          break;
        case "S":
          this.direction = "W";
          break;
        case "W":
          this.direction = "N";
          break;
      }
    }
  
    turnUp() {}
  
    turnDown() {}
  }
  
  module.exports = {
    Spacecraft,
  };