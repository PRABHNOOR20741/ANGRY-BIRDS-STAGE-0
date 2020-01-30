//creating a ground class
class Ground
 {
     //constructing and giving properties
    constructor(x, y, width, height)
     {
      var options = {
          isStatic:true
      }
      //giving dimensions
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      //adding to the World in physice engine
      World.add(world, this.body);
    }
    //displaying on screen
    display()
    {
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  