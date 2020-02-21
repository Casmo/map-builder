var nlbrkau0297 = nlbrkau0297 ||  {
            
            name: "Zaltbommel",

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
                x: 3.3366840701782,
                y: 99.126153071371
            },{
                x: 2.4764863537372,
                y: 98.490806562933
            },{
                x: 1.5877961500614,
                y: 98.708001466727
            },{
                x: 0.89620707566677,
                y: 97.999454530065
            },{
                x: 0.43257061541978,
                y: 97.841449444384
            },{
                x: 0,
                y: 97.491656475276
            },{
                x: 0.12010775454815,
                y: 97.246406363829
            },{
                x: 0.75545822160048,
                y: 97.361378760159
            },{
                x: 1.9822646717228,
                y: 97.025012242202
            },{
                x: 3.2961604355068,
                y: 97.47498351645
            },{
                x: 3.9028977405279,
                y: 97.387169555261
            },{
                x: 6.1211550820225,
                y: 97.373858519759
            },{
                x: 7.0719071656318,
                y: 97.472314795092
            },{
                x: 7.0889705818333,
                y: 97.76570491538
            },{
                x: 7.2005540244779,
                y: 97.964547314829
            },{
                x: 6.7178278495138,
                y: 98.203262988746
            },{
                x: 6.7196224005173,
                y: 98.709778018037
            },{
                x: 6.4445612005538,
                y: 98.904753285172
            },{
                x: 5.9794987015846,
                y: 99.000564205506
            },{
                x: 5.3410511742754,
                y: 99.081062018266
            },{
                x: 4.7940040352873,
                y: 99.123728280633
            },{
                x: 4.4476634770761,
                y: 99.163099178395
            },{
                x: 4.5263172332004,
                y: 99.589513977055
            },{
                x: 3.999298477184,
                y: 100
            },{
                x: 3.1534774109952,
                y: 99.827678063299
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