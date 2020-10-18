class Bob {
    constructor(x, y) {
      var options = {
        'isStatic': false,
          'restitution':1,
          'friction':3,
          'density':10
      }
      this.radius = 50;
      this.body = Bodies.circle(x, y, this.radius, options);
     
      
            
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(0,0,225)
      ellipseMode(CENTER);
     
      ellipse(0, 0, this.radius*2, this.radius*2);
      pop();
    }
  };