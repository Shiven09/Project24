class Paper{
    constructor(x, y, RADIUS) {
        var options = {
            
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,RADIUS/2,options);
        this.RADIUS = RADIUS;
         World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink")
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
}