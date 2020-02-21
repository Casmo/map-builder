var nlbrkau0385 = nlbrkau0385 ||  {
            
            name: "Edam-Volendam",

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
                x: 1.9246327246354,
                y: 98.697785765642
            },{
                x: 1.2866167719204,
                y: 98.590207051568
            },{
                x: 1.0117089457304,
                y: 98.753627821861
            },{
                x: 0.46286959137997,
                y: 98.539133856677
            },{
                x: 0.25538342269043,
                y: 98.485193326381
            },{
                x: 0.44990392793997,
                y: 98.068726223757
            },{
                x: 0.70152022085927,
                y: 97.571896550022
            },{
                x: 0.89867351279442,
                y: 97.119678919046
            },{
                x: 1.2097113730066,
                y: 96.82857055906
            },{
                x: 0.83838282745227,
                y: 96.474007666516
            },{
                x: 0.39141454100933,
                y: 96.544717099321
            },{
                x: 0.11702418910722,
                y: 96.65754545525
            },{
                x: 0.10237816156775,
                y: 96.508960198326
            },{
                x: 0.010626389000971,
                y: 96.261547282584
            },{
                x: 0,
                y: 96.116168881332
            },{
                x: 0.29507349296222,
                y: 96.097001740765
            },{
                x: 0.73571167266934,
                y: 96.068177921536
            },{
                x: 1.1696821157266,
                y: 96.04208123956
            },{
                x: 1.4240277351685,
                y: 95.97862529086
            },{
                x: 1.5752963172868,
                y: 95.562199610416
            },{
                x: 2.8287957728423,
                y: 100
            },{
                x: 2.8079102095432,
                y: 99.929985185304
            },{
                x: 2.8140825307389,
                y: 99.852628023534
            },{
                x: 2.6695309932518,
                y: 99.834890833294
            },{
                x: 2.0242877880571,
                y: 99.974732823748
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