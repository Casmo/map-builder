var nlbrkau0614 = nlbrkau0614 ||  {
            
            name: "Westvoorne",

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
                x: 0,
                y: 97.164448507705
            },{
                x: 0.80704163647686,
                y: 96.917801017218
            },{
                x: 1.1326204203736,
                y: 96.895728659424
            },{
                x: 1.9537488280758,
                y: 96.824946649293
            },{
                x: 2.7340053310492,
                y: 97.150170600615
            },{
                x: 2.833089978982,
                y: 97.215558168277
            },{
                x: 2.9605433251649,
                y: 97.288088760893
            },{
                x: 2.860948988415,
                y: 97.555339360881
            },{
                x: 2.7748593291953,
                y: 97.569586112827
            },{
                x: 2.6505243235558,
                y: 97.621637862485
            },{
                x: 2.5471382030441,
                y: 97.725018066798
            },{
                x: 2.5715630413376,
                y: 97.905279608855
            },{
                x: 2.663147945315,
                y: 98.008907284145
            },{
                x: 2.8892317869714,
                y: 98.262925090528
            },{
                x: 3.1810888424589,
                y: 98.679807123032
            },{
                x: 2.9582211787615,
                y: 98.765974464026
            },{
                x: 2.6578810743654,
                y: 98.843545463379
            },{
                x: 2.5062717481448,
                y: 98.879084278362
            },{
                x: 2.3825738535268,
                y: 99.026573440656
            },{
                x: 2.2154888281025,
                y: 99.21758492372
            },{
                x: 2.1348323893904,
                y: 99.423635844736
            },{
                x: 1.9009366064023,
                y: 99.637221000193
            },{
                x: 1.6870858153901,
                y: 99.707206783959
            },{
                x: 1.305608649222,
                y: 99.776182503778
            },{
                x: 0.90759721934646,
                y: 100
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