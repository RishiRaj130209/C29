class Link{
    constructor(bodyA,bodyB){
        let lastLink = bodyA.body.bodies.length-1
        this.link = Constraint.create({
            bodyA:bodyA.body.bodies[lastLink],
            pointA:{x:0,y:0},
            bodyB:bodyB,
            pointB:{x:0,y:0},
            length:-10,
            stiffnes:0.01
        })
    World.add(world,this.link)
}
}