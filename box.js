//creating a class
class Box
 {
   //constructing and giving properties
  constructor(x, y, width, height)
   {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    //giving width and height
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    //adding it to World in physics engine
    World.add(world, this.body);
  }
  display()
  {
    //Namespacing
    var pos =this.body.position;
    var angle = this.body.angle;
    //making the object fall at a angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    //giving the color
    fill(255);
    rect(0,0, this.width, this.height);
    pop();
  }
};
