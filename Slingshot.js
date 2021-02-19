class Slingshot {
    constructor(bird, point) {
        var options = {
            bodyA: bird,
            pointB: point,
            stiffness: 0.17,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }
    fly() {
        this.sling.bodyA = null;
    }
    attach(bird) {
        this.sling.bodyA = bird;
    }
    display() {

        image(this.sling1, 200, 22);
        image(this.sling2, 170, 22);

        if (this.sling.bodyA) {
            var posA = this.sling.bodyA.position;
            var posB = this.sling.pointB;
            
            push();

            if (posA.x < 220) {
                strokeWeight(7);
                stroke("#301608");
                line(posA.x - 20, posA.y, posB.x - 10, posB.y);
                line(posA.x - 20, posA.y, posB.x + 30, posB.y - 3);
                image(this.sling3, posA.x - 30, posA.y - 10, 15, 30);
            } else {
                strokeWeight(4);
                stroke("#301608");
                line(posA.x - 20, posA.y, posB.x - 10, posB.y);
                line(posA.x - 20, posA.y, posB.x + 30, posB.y - 3);
                image(this.sling3, posA.x - 30, posA.y - 10, 15, 30);
            }

            pop();
        }

    }
}