var nlbrkau0096 = nlbrkau0096 ||  {
            
            name: "Vlieland",

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
                x: 8.2315457645995,
                y: 94.428262454506
            },{
                x: 8.3466879459153,
                y: 98.334623345136
            },{
                x: 7.8660077926593,
                y: 99.837428207395
            },{
                x: 6.747850441263,
                y: 100
            },{
                x: 6.5705371239078,
                y: 99.696671742642
            },{
                x: 6.268095980477,
                y: 99.179599013747
            },{
                x: 6.0930137195176,
                y: 98.880445191721
            },{
                x: 5.9329496315987,
                y: 98.607067649332
            },{
                x: 5.4894012429322,
                y: 98.154903477751
            },{
                x: 4.9207263257687,
                y: 97.917094489347
            },{
                x: 4.3563694901883,
                y: 97.681304566731
            },{
                x: 3.871100061452,
                y: 97.478728152402
            },{
                x: 3.2947193448745,
                y: 97.238321249787
            },{
                x: 2.7914724856728,
                y: 97.028599332252
            },{
                x: 2.2746231115254,
                y: 96.81338490435
            },{
                x: 1.8343448800818,
                y: 96.630194778706
            },{
                x: 1.2811259389294,
                y: 96.400195464544
            },{
                x: 0.74396401212869,
                y: 96.177066567824
            },{
                x: 0,
                y: 95.868352364855
            },{
                x: 0.26716283990669,
                y: 95.100069686977
            },{
                x: 5.1075384364473,
                y: 92.212087626789
            },{
                x: 7.6511742157251,
                y: 92.129018452498
            },{
                x: 8.4876778900586,
                y: 93.155116324034
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