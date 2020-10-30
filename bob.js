class Bob {
    constructor(x, y,color) {
      var options = {
        'isStatic': false,
          'restitution':1,
          'friction':3,
          'density':10,
          inertia :Infinity,
          slop:1


      }
      this.radius = 50;
      this.body = Bodies.circle(x, y, this.radius, options);
     this.color = color
      
            
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(this.color)
      ellipseMode(CENTER);
     
      ellipse(0, 0, this.radius*2, this.radius*2);
      pop();
    }
  };