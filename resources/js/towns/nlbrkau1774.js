var nlbrkau1774 = nlbrkau1774 ||  {
            
            name: "Dinkelland",

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
                x: 2.4017211807274,
                y: 96.996992084087
            },{
                x: 2.5751300845109,
                y: 95.330340192511
            },{
                x: 2.5554917536229,
                y: 94.591595423938
            },{
                x: 4.0194475349519,
                y: 94.393171140689
            },{
                x: 5.1506377643523,
                y: 94.043222749894
            },{
                x: 6.0044303740227,
                y: 93.378511455626
            },{
                x: 6.9986111109489,
                y: 95.339655226691
            },{
                x: 7.4755295842633,
                y: 95.57535451616
            },{
                x: 7.6993403279819,
                y: 96.61411766202
            },{
                x: 6.0605475280216,
                y: 96.72466567379
            },{
                x: 5.2598017422093,
                y: 96.662537713125
            },{
                x: 5.2036531868118,
                y: 97.442552427134
            },{
                x: 4.3827635335454,
                y: 98.020446016766
            },{
                x: 3.6785298166207,
                y: 97.967017776177
            },{
                x: 3.1832360752866,
                y: 98.367544419908
            },{
                x: 2.6448204281825,
                y: 98.890652395949
            },{
                x: 3.0191396325603,
                y: 99.326559600691
            },{
                x: 3.6632591348128,
                y: 99.666519935377
            },{
                x: 2.1887753209298,
                y: 100
            },{
                x: 2.2839091019822,
                y: 99.613530345061
            },{
                x: 1.4710911652541,
                y: 99.070984745153
            },{
                x: 1.3448191344967,
                y: 98.76424570754
            },{
                x: 0.49098422376867,
                y: 98.482403878838
            },{
                x: 0,
                y: 98.149928567626
            },{
                x: 0.8946572479599,
                y: 96.961265630164
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