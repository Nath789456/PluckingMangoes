class Stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:0.7

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("stone.png")
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
	
		World.add(world, this.body);

	}
	display()
	{
			
			var stonepos=this.body.position;		

			push()
			translate(stonepos.x, stonepos.y);
			imageMode(CENTER);
			ellipseMode(RADIUS);
			//strokeWeight(3);
			//fill(255,0,255)
			image(this.image,0,0,this.r, this.r);

			pop()
			this.body.position.x = mouseX;
            this.body.position.y = mouseY;
			
	}

}