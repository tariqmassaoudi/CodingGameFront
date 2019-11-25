// import {solveQuadratic} from '../Helper'
class Basic {
    constructor(x, y,speed) {
        this.x = x;
        this.y = y;
             //distance per turn
        this.speed=speed;

    }
    move(targetUnit){  
       let yOriginal=this.y
       let xOriginal=this.x
       let distance=this.speed
       let yTarget=targetUnit.y
       let xTarget=targetUnit.x
       let a=(yTarget-yOriginal)/(xTarget-xOriginal)
       let b=yOriginal-a*xOriginal
        
       let A=a+1
       let B=2*a*(b-yOriginal) - 2*xOriginal
       let C=Math.pow(xOriginal,2) + Math.pow(b-yOriginal,2) - Math.pow(distance,2)
       
        let newX=this.solve(A,B,C) 
        let newY=a*newX+b
        // console.log("x: "+newX+" y: "+newY)
        this.x=newX
        this.y=newY
        
    }
    distance(xDestination,yDestination){
        return Math.sqrt( Math.pow(this.x-xDestination,2) + Math.pow(this.y-yDestination,2) )
    }
    //solve a quadratic equation
     solve(a, b, c) {
        var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        // console.log("r1 :"+result+" r2:"+result2)
        return result
    }

}

