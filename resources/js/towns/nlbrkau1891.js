var nlbrkau1891 = nlbrkau1891 ||  {
            
            name: "Dantumadiel",

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
                x: 1.5160247500634,
                y: 99.206905081788
            },{
                x: 0.92499125853835,
                y: 98.94451857874
            },{
                x: 0.5491201503281,
                y: 98.743351580665
            },{
                x: 0,
                y: 98.324809120572
            },{
                x: 0.32835793743209,
                y: 97.407843117873
            },{
                x: 1.1960543597657,
                y: 96.937029760003
            },{
                x: 1.6798453276101,
                y: 96.824091298962
            },{
                x: 2.2775815904033,
                y: 96.723380878114
            },{
                x: 2.3047264126545,
                y: 97.118261005934
            },{
                x: 2.9259924441228,
                y: 97.082920096925
            },{
                x: 3.542391777837,
                y: 97.138913680438
            },{
                x: 3.6423517721957,
                y: 96.583160069426
            },{
                x: 3.9222615038148,
                y: 96.592396861708
            },{
                x: 4.4295760119578,
                y: 96.584413355922
            },{
                x: 4.9879453015145,
                y: 96.682440185911
            },{
                x: 4.8733486221812,
                y: 96.928660709303
            },{
                x: 4.841926721826,
                y: 97.49698825342
            },{
                x: 4.3814148304991,
                y: 98.156628339844
            },{
                x: 4.2675014559804,
                y: 98.829540163803
            },{
                x: 4.0648778327938,
                y: 99.467697361928
            },{
                x: 3.6653046374896,
                y: 99.510478685909
            },{
                x: 3.4534788474145,
                y: 99.531926170634
            },{
                x: 2.550640886326,
                y: 99.938642775127
            },{
                x: 2.0914418848801,
                y: 100
            },{
                x: 1.8229402035234,
                y: 99.880167047088
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