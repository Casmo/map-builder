var nlbrkau0716 = nlbrkau0716 ||  {
            
            name: "Tholen",

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
                x: 3.2897908823859,
                y: 95.47269760685
            },{
                x: 3.4577639705049,
                y: 95.258062381408
            },{
                x: 3.959141538184,
                y: 94.779486436048
            },{
                x: 5.1455951149597,
                y: 94.861290286629
            },{
                x: 6.3220998982037,
                y: 94.480375452346
            },{
                x: 6.0893392368482,
                y: 96.169240253903
            },{
                x: 6.6657051610314,
                y: 97.586346164443
            },{
                x: 7.1177321868397,
                y: 98.824879991445
            },{
                x: 6.7432056294248,
                y: 100
            },{
                x: 2.6025772425422,
                y: 99.166141407451
            },{
                x: 2.2543936038932,
                y: 99.060148773462
            },{
                x: 1.5644015890613,
                y: 98.864919308671
            },{
                x: 1.2236429538486,
                y: 98.764967940436
            },{
                x: 1.0104534088171,
                y: 98.599837531586
            },{
                x: 0.79385382760536,
                y: 98.615871455913
            },{
                x: 0.66975550027611,
                y: 98.576001367768
            },{
                x: 0,
                y: 96.144871974377
            },{
                x: 0.51479141471748,
                y: 96.15529868076
            },{
                x: 0.77104395545719,
                y: 96.244614107494
            },{
                x: 1.4057336955601,
                y: 96.375331180956
            },{
                x: 1.9024495828811,
                y: 96.289427596584
            },{
                x: 2.7029903512974,
                y: 96.095025513302
            },{
                x: 2.9103376790923,
                y: 95.999448964623
            },{
                x: 3.2847718489212,
                y: 95.685352002365
            },{
                x: 3.223138169878,
                y: 95.58860430348
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