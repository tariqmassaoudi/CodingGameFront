class Planet {
    constructor(id,x, y,productionPerTurn,owner,units) {
        this.x = x;
        this.y = y;
        this.productionPerTurn=productionPerTurn
        this.owner=owner
        this.units=units
        this.id=id
    }
    //attacks a planet with n number of units
    attack(planet,n){
        let dirX= planet.x>this.x ? 1 :0
        let dirY= planet.y>this.y ? 1 :0
        //check if u're trying to attack with more units than u have
        let numberOfUnits=this.units.length
        if (n>numberOfUnits){
            n=numberOfUnits
        }
        for(let i =0 ; i<n ;i++){
            console.log("attacked it")
            let unitX=this.units[i].x
            let unitY=this.units[i].y
            if(dirX && dirY){
                while(unitX<planet.x || unitY<planet.y){
                    this.units[i].move(planet)
                    unitX=this.units[i].x
                    unitY=this.units[i].y
                    console.log("unit:"+i+1 +"has x= "+unitX+"and y "+unitY)
                }
            }

        }



    }
    

}

let b1=new Basic(0,0,3)

let b2=new Basic(0,0,4)

let p1=new Planet(1,0,0,2,"tariq",[b1,b2])

let p2=new Planet(2,100,100,2,"adil",[])

p1.attack(p2,2)
