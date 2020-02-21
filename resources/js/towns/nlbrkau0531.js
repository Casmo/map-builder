var nlbrkau0531 = nlbrkau0531 ||  {
            
            name: "Hendrik-Ido-Ambacht",

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
                x: 0.47307971721251,
                y: 99.711797211278
            },{
                x: 0,
                y: 99.479045269289
            },{
                x: 0.15279142019328,
                y: 99.131741525422
            },{
                x: 0.29267868216532,
                y: 99.060901807467
            },{
                x: 0.5042293856079,
                y: 99.014651287336
            },{
                x: 0.57628547431898,
                y: 98.95697426391
            },{
                x: 0.69274236212558,
                y: 98.909559674288
            },{
                x: 0.76336306954951,
                y: 98.942037850357
            },{
                x: 0.88695118903019,
                y: 99.068190341109
            },{
                x: 1.0033164677979,
                y: 99.027111220935
            },{
                x: 1.0892602791992,
                y: 98.935269749243
            },{
                x: 1.2120140557332,
                y: 98.830085378833
            },{
                x: 1.1462553747808,
                y: 98.763368406993
            },{
                x: 1.0269951984796,
                y: 98.630047400712
            },{
                x: 0.93405847726757,
                y: 98.442322077324
            },{
                x: 1.2210319664811,
                y: 98.615720282655
            },{
                x: 1.6165818900271,
                y: 99.145052206888
            },{
                x: 1.8748054524402,
                y: 99.509684583759
            },{
                x: 1.8132862198167,
                y: 100
            },{
                x: 1.5781131005973,
                y: 99.731520541982
            },{
                x: 1.2010915593287,
                y: 99.857935373213
            },{
                x: 1.1239718004541,
                y: 99.876587745824
            },{
                x: 1.0988226538669,
                y: 99.904333526245
            },{
                x: 1.0281487457263,
                y: 99.909370038588
            },{
                x: 0.96719214312094,
                y: 99.93449949494
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