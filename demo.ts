interface ICircle {
    radius:number;
}

class smallCircle implements ICircle {
    radius: number;
    constructor(radius: number) {
        this.radius=radius;
    }
    getSmailRadius=()=>this.radius
}

class bigCircle implements ICircle {
    radius: number;
    constructor(radius: number) {
        this.radius=radius
    }
    getBigRadius=()=>this.radius

}

let small=new smallCircle(5);
let big=new bigCircle(9);
let distance=Math.sqrt(Math.pow(24,2)+Math.pow((big.getBigRadius()-small.getSmailRadius()),2))
console.log(distance);

