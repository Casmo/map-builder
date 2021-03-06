var nlbrkau0109 = nlbrkau0109 ||  {
            
            name: "Coevorden",

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
                x: 0.40085935506899,
                y: 98.203455230149
            },{
                x: 0.21249689765211,
                y: 97.004761752291
            },{
                x: 0,
                y: 95.201036783732
            },{
                x: 1.9537397450266,
                y: 93.548254950082
            },{
                x: 2.0346619278063,
                y: 92.947918327242
            },{
                x: 2.8980991786186,
                y: 91.254072242917
            },{
                x: 4.5475702707181,
                y: 92.580309571961
            },{
                x: 5.8787248660189,
                y: 93.597848629643
            },{
                x: 5.5613999786756,
                y: 94.690051345236
            },{
                x: 5.7647014568471,
                y: 95.247950412792
            },{
                x: 5.6054504315882,
                y: 95.888897766532
            },{
                x: 5.5553735052983,
                y: 96.591471766337
            },{
                x: 6.1265091502443,
                y: 97.975750421575
            },{
                x: 6.1279715211633,
                y: 99.23909755102
            },{
                x: 5.5131490047878,
                y: 99.226908100721
            },{
                x: 5.1496894940172,
                y: 99.261191859031
            },{
                x: 4.9210237307506,
                y: 99.191645079574
            },{
                x: 4.5864779011814,
                y: 99.183476767134
            },{
                x: 4.3622257212723,
                y: 99.125665564167
            },{
                x: 4.1480731135113,
                y: 99.17014271931
            },{
                x: 3.5362742144522,
                y: 99.28000779615
            },{
                x: 2.385284235404,
                y: 100
            },{
                x: 2.2694852198742,
                y: 99.779609569677
            },{
                x: 2.2433576991318,
                y: 99.525028492442
            },{
                x: 2.3335259069519,
                y: 99.245559411225
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