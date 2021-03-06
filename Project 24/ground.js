
class Ground {
    constructor(x,y,w,h){

        var options= {
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world,this.body);
    }

    display(){
        var angle=this.body.angle;
        push();
        
        rectMode(CENTER);
        fill("white")
        rect(this.body.position.x, this.body.position.y, this.width,this.height);
        pop();
    }
}