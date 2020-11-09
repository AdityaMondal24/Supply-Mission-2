class Helicopter
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/helicopter.png")
        World.add(world, this.body);
    }

    display()
    {
        var locus = this.body.position;
        var angle = this.body.angle;

        push();
        translate(locus.x,locus.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}