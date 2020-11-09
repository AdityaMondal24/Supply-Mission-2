class Package
{
    constructor(x,y,diameter)
    {
        var options={
            isStatic: true,
            restitution: 0.4
        }

        this.body = Bodies.circle(x,y,diameter/2,options);
        this.diameter = diameter;
        this.image = loadImage("sprites/package.png");
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.diameter,this.diameter);
        pop();
    }
}