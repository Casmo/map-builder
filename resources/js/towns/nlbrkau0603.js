var nlbrkau0603 = nlbrkau0603 ||  {
            
            name: "Rijswijk",

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
                x: 1.3506725109081,
                y: 99.096833248079
            },{
                x: 1.6115016108593,
                y: 99.589399269477
            },{
                x: 1.4282889828154,
                y: 99.732773120406
            },{
                x: 0.98562735926525,
                y: 100
            },{
                x: 0.67022885689658,
                y: 99.949289691736
            },{
                x: 0.48980472495287,
                y: 99.943952603055
            },{
                x: 0.3985566723424,
                y: 99.998222032547
            },{
                x: 0.055802101949928,
                y: 99.527394867283
            },{
                x: 0.016105543785881,
                y: 99.393855420955
            },{
                x: 0,
                y: 99.02909311297
            },{
                x: 0.15946149248434,
                y: 98.920938028721
            },{
                x: 0.31720576964107,
                y: 98.866398469965
            },{
                x: 0.45179865200023,
                y: 98.796864789831
            },{
                x: 0.66456518645534,
                y: 98.63960317919
            },{
                x: 0.82689562490412,
                y: 98.571713641001
            },{
                x: 0.93042473856162,
                y: 98.520455285421
            },{
                x: 1.0174572182869,
                y: 98.464019157242
            },{
                x: 1.1033857182624,
                y: 98.410422395643
            },{
                x: 1.2220689911825,
                y: 98.450235838071
            },{
                x: 1.3237098686719,
                y: 98.557323504584
            },{
                x: 1.3251613399319,
                y: 98.589226372586
            },{
                x: 1.3384734568195,
                y: 98.719499839275
            },{
                x: 1.4618181505819,
                y: 98.868339293855
            },{
                x: 1.40906847219,
                y: 98.897327739701
            },{
                x: 1.3929554024491,
                y: 98.911779832371
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