var nlbrkau1681 = nlbrkau1681 ||  {
            
            name: "Borger-Odoorn",

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
                x: 0.6676915719853,
                y: 98.10200558269
            },{
                x: 0.15438899878731,
                y: 97.076055698091
            },{
                x: 0,
                y: 95.813676502341
            },{
                x: 1.7287596236042,
                y: 94.566741761422
            },{
                x: 2.9266186554853,
                y: 94.06584103079
            },{
                x: 5.5009076496415,
                y: 93.587560351232
            },{
                x: 6.0071098735327,
                y: 94.181189413068
            },{
                x: 6.1820379821716,
                y: 94.386462163542
            },{
                x: 6.4214723490378,
                y: 94.666539832185
            },{
                x: 6.8835055213456,
                y: 95.207375085466
            },{
                x: 7.7867384653158,
                y: 96.149976815616
            },{
                x: 8.1592950391201,
                y: 96.516813418963
            },{
                x: 7.4503098494081,
                y: 97.784484740854
            },{
                x: 6.5211624470778,
                y: 98.023091017729
            },{
                x: 6.0657048833496,
                y: 98.12261046237
            },{
                x: 5.9542719598058,
                y: 98.275699761894
            },{
                x: 5.8782496927886,
                y: 98.392612628078
            },{
                x: 5.8366921476041,
                y: 98.511829558814
            },{
                x: 5.8235666224984,
                y: 98.600311585433
            },{
                x: 5.2121725679173,
                y: 98.914734968638
            },{
                x: 4.5346046072781,
                y: 99.262406909667
            },{
                x: 3.4337642189134,
                y: 99.887710840493
            },{
                x: 2.9712044892685,
                y: 100
            },{
                x: 2.1925764472564,
                y: 99.360071207065
            },{
                x: 1.4741417722023,
                y: 98.892460810475
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