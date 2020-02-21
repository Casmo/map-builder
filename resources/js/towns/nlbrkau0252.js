var nlbrkau0252 = nlbrkau0252 ||  {
            
            name: "Heumen",

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
                x: 0.91533260354926,
                y: 100
            },{
                x: 0.052062999873438,
                y: 99.415558873516
            },{
                x: 0,
                y: 99.092904159511
            },{
                x: 0.19044792551006,
                y: 99.064363922903
            },{
                x: 0.62243800432902,
                y: 98.994976813562
            },{
                x: 1.0147016806794,
                y: 98.863360489337
            },{
                x: 1.2225836107978,
                y: 98.870345968392
            },{
                x: 1.6504920268281,
                y: 98.57843323922
            },{
                x: 2.0077620883674,
                y: 98.62816393061
            },{
                x: 2.0868479381173,
                y: 98.5675731931
            },{
                x: 2.4209484387607,
                y: 98.331966306957
            },{
                x: 2.7383763538333,
                y: 98.153259335806
            },{
                x: 2.9372821552301,
                y: 98.027043826692
            },{
                x: 3.2036420535887,
                y: 98.017992549134
            },{
                x: 3.711990212729,
                y: 97.965039070463
            },{
                x: 3.9866213951924,
                y: 98.686607441398
            },{
                x: 4.0194400089969,
                y: 98.936787500431
            },{
                x: 4.1408712935693,
                y: 99.093284393888
            },{
                x: 3.9267641010543,
                y: 99.078269384402
            },{
                x: 3.4711131981363,
                y: 99.219679753154
            },{
                x: 3.4620013427082,
                y: 99.387180077203
            },{
                x: 3.5156956582156,
                y: 99.63248329401
            },{
                x: 3.4227812553529,
                y: 99.766369695357
            },{
                x: 2.622550867703,
                y: 99.794198674176
            },{
                x: 1.5691528023328,
                y: 99.933433493346
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