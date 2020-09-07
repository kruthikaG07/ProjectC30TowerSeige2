class Box {
  constructor(x, y, width, height) {
    var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0,
      'isStatic':false
    }
    this.visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    if (this.body.speed < 3) {
      push()
      rectMode(CENTER);
      translate(pos.x,pos.y);
      rotate(angle);
      fill("pink");
      rect(0,0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world, this.body)
      push()
      this.visibility = this.visibility - 5;
      tint(255, this.visibility)
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y, this.width, this.height)
      pop()
    }
  }
  score(){
    if(this.visibility<0 && this.visibility >-105){
      score++;
    }
  }
}