class String{
	constructor(body,anchor){
		
		var options={
             bodyA:body,			 
			pointB:anchor, 
			stiffness:0.01, 
			length:0.2
		}
		
		this.bodyA=body;
		this.pointB=anchor;
		this.string=Constraint.create(options);
		World.add(world,this.string);
	}

	attach(body){
		this.string.bodyA=body;
	}

	fly(){
		this.string.bodyA=null;
	}

	display(){
		if(this.string.bodyA){
			var pointA=this.bodyA.position;
			var pointB=this.pointB;

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}