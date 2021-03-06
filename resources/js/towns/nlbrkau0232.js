var nlbrkau0232 = nlbrkau0232 ||  {
            
            name: "Epe",

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
                x: 5.0821871271368,
                y: 98.913390694958
            },{
                x: 5.1743982424767,
                y: 99.471577593566
            },{
                x: 5.1999371816318,
                y: 99.823519913611
            },{
                x: 5.1702792094285,
                y: 100
            },{
                x: 4.9132548690237,
                y: 99.941059423043
            },{
                x: 4.6318934066289,
                y: 99.700113678042
            },{
                x: 4.3465686206005,
                y: 99.714368926845
            },{
                x: 3.8378755651068,
                y: 99.390976756407
            },{
                x: 3.50132523634,
                y: 99.738462828677
            },{
                x: 2.320163703536,
                y: 99.815098111586
            },{
                x: 0.28308179191069,
                y: 99.579086562601
            },{
                x: 0,
                y: 98.894297193823
            },{
                x: 0.77667233176446,
                y: 98.017588594362
            },{
                x: 1.3605055604416,
                y: 96.319458323629
            },{
                x: 2.4072768926411,
                y: 95.546785602658
            },{
                x: 3.7946550433741,
                y: 96.0335263201
            },{
                x: 4.5449514978798,
                y: 96.379485082216
            },{
                x: 5.1170463128199,
                y: 96.670225599075
            },{
                x: 5.4182158293646,
                y: 96.755053622889
            },{
                x: 6.1472068241831,
                y: 96.613653875209
            },{
                x: 6.2780556736676,
                y: 96.987049698588
            },{
                x: 6.0959415755439,
                y: 97.405267153878
            },{
                x: 6.0513401708192,
                y: 97.718756236782
            },{
                x: 5.4923628359984,
                y: 97.819258130583
            },{
                x: 5.3182008176795,
                y: 98.339054102339
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