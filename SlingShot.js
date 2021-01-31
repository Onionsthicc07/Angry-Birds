class SlingShot{
constructor(bodyA,bodyB){
var options = {
bodyA:bodyA,
bodyB:bodyB,
stiffness: 1,
length:20
} 
    this.SlingShot = Constraint.create(options) 
    World.add(world,this.SlingShot);  
}
display(){
var pointA = this.SlingShot.bodyA.position
var pointB = this.SlingShot.bodyB.position
strokeWeight(7);
line(pointA.x,pointA.y,pointB.x,pointB.y);

}



}