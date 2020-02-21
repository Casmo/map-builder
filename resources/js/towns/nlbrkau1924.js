var nlbrkau1924 = nlbrkau1924 ||  {
            
            name: "Goeree-Overflakkee",

            position: {
                x: 0,
                y: 0
            },

            size: {
                width: 512,
                height: 512
            },

            init(x, y, width, height) {
                this.position.x = x;
                this.position.y = y;
                this.size.width = width;
                this.size.height = height;
            },
            
            vector: [
        {
                x: 6.6115348937467,
                y: 94.22073449641
            },{
                x: 7.2404472955357,
                y: 94.605572046619
            },{
                x: 8.0299929031542,
                y: 94.819304126905
            },{
                x: 8.9916763067014,
                y: 95.523174959602
            },{
                x: 9.4512456370384,
                y: 95.988533688929
            },{
                x: 9.6839920250309,
                y: 96.377726232692
            },{
                x: 10.066321440728,
                y: 96.7929566885
            },{
                x: 10.444528190158,
                y: 96.980758483606
            },{
                x: 10.806644966743,
                y: 97.171251658356
            },{
                x: 11.071189552843,
                y: 97.375001701142
            },{
                x: 11.195735285224,
                y: 97.42802173853
            },{
                x: 11.943300077565,
                y: 97.608605099069
            },{
                x: 12.498789261983,
                y: 97.669498183095
            },{
                x: 13.340560585813,
                y: 98.127688396894
            },{
                x: 12.617162932684,
                y: 99.089904768778
            },{
                x: 11.798955893115,
                y: 99.579331909364
            },{
                x: 10.979875064216,
                y: 99.775331047839
            },{
                x: 10.034768225433,
                y: 100
            },{
                x: 7.9865707377295,
                y: 99.274241616161
            },{
                x: 3.9034105435334,
                y: 97.289048905802
            },{
                x: 0.23396247852069,
                y: 95.982115021083
            },{
                x: 0,
                y: 93.256908678083
            },{
                x: 4.0334035102689,
                y: 93.060745975099
            },{
                x: 4.7415348933574,
                y: 93.771880912972
            },{
                x: 6.0396967398251,
                y: 94.193133162568
            },
    ], renderCanvas() {
            ctx.beginPath();
            for (let i = 0; i < this.vector.lenght; i++) {
                let vector = this.vector[i];

                $x = this.position.x + (this.size.width / 100 * vector.x);
                $x = this.position.y + (this.size.height / 100 * vector.y);
            }
            ctx.closePath();
            ctx.stroke();
        }
};