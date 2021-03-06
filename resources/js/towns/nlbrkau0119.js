var nlbrkau0119 = nlbrkau0119 ||  {
            
            name: "Meppel",

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
                x: 2.0386766355467,
                y: 97.884456643163
            },{
                x: 2.7542776587704,
                y: 97.687784836794
            },{
                x: 2.4192416040608,
                y: 98.451316001094
            },{
                x: 3.2624615444783,
                y: 98.631050029908
            },{
                x: 3.9171768128803,
                y: 98.715776091432
            },{
                x: 3.9590390294861,
                y: 99.074630251099
            },{
                x: 4.2000932932958,
                y: 99.266789163974
            },{
                x: 3.8571313698662,
                y: 99.532907203651
            },{
                x: 3.6349605057992,
                y: 100
            },{
                x: 3.4055029601593,
                y: 99.993471935113
            },{
                x: 3.2768776411155,
                y: 99.935109498508
            },{
                x: 3.259323740258,
                y: 99.837035935802
            },{
                x: 3.1766111587258,
                y: 99.726194428409
            },{
                x: 3.0340119577824,
                y: 99.710941152874
            },{
                x: 2.8595341088674,
                y: 99.666539053306
            },{
                x: 2.820806322778,
                y: 99.582689584259
            },{
                x: 2.6531695669946,
                y: 99.552785602007
            },{
                x: 2.4848308212669,
                y: 99.458563594044
            },{
                x: 2.3116004642788,
                y: 99.452146696377
            },{
                x: 1.9069033911707,
                y: 99.595823247858
            },{
                x: 1.6241763572096,
                y: 99.541461769076
            },{
                x: 1.0819058640308,
                y: 99.560654400216
            },{
                x: 0.69318146267482,
                y: 98.738456328581
            },{
                x: 0,
                y: 96.967254852665
            },{
                x: 0.93549437758607,
                y: 96.650040251739
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