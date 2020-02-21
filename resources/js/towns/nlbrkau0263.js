var nlbrkau0263 = nlbrkau0263 ||  {
            
            name: "Maasdriel",

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
                x: 2.4158575194496,
                y: 98.436564040157
            },{
                x: 2.4960211378644,
                y: 98.060929648837
            },{
                x: 2.9269404549422,
                y: 97.867944062524
            },{
                x: 2.8177025151132,
                y: 97.726234887613
            },{
                x: 2.8002103789901,
                y: 97.566879863681
            },{
                x: 2.7915223126855,
                y: 97.322319767878
            },{
                x: 3.0435283981727,
                y: 97.009932798212
            },{
                x: 4.3631939743156,
                y: 97.672348524785
            },{
                x: 5.0973189680499,
                y: 97.394753000669
            },{
                x: 5.978292213137,
                y: 96.638286265392
            },{
                x: 6.0699217538133,
                y: 96.837472787574
            },{
                x: 5.8468386920923,
                y: 97.142395975911
            },{
                x: 4.8616304506681,
                y: 98.574453523541
            },{
                x: 3.9984695840668,
                y: 99.660959450149
            },{
                x: 2.3456084384953,
                y: 100
            },{
                x: 0.67324079600678,
                y: 99.947431004136
            },{
                x: 0.26647174962143,
                y: 99.651147703835
            },{
                x: 0,
                y: 99.230697699211
            },{
                x: 0.22228920322208,
                y: 99.047211599695
            },{
                x: 0.45030462016692,
                y: 98.999379955978
            },{
                x: 0.85860999944321,
                y: 98.934990061013
            },{
                x: 1.4923953273629,
                y: 98.886617804732
            },{
                x: 1.7830126763943,
                y: 98.8722205876
            },{
                x: 2.1522004770132,
                y: 98.779720609444
            },{
                x: 2.4544861705451,
                y: 98.722794141774
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