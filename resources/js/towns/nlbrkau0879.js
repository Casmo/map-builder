var nlbrkau0879 = nlbrkau0879 ||  {
            
            name: "Zundert",

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
                x: 2.7279492728831,
                y: 96.69108149009
            },{
                x: 3.2101966413972,
                y: 96.413739455559
            },{
                x: 4.0770989457162,
                y: 95.758265307609
            },{
                x: 4.7678103380437,
                y: 95.773745520049
            },{
                x: 5.079509963268,
                y: 96.077319832242
            },{
                x: 5.2080426352101,
                y: 96.057695631543
            },{
                x: 5.3739305147516,
                y: 96.296894918272
            },{
                x: 5.368898765018,
                y: 96.644696082344
            },{
                x: 5.4673403330684,
                y: 96.857914102746
            },{
                x: 5.3239558376439,
                y: 97.419103224372
            },{
                x: 5.1029530537023,
                y: 97.857814392122
            },{
                x: 4.750595105163,
                y: 98.320929951042
            },{
                x: 4.3166347832177,
                y: 98.704461817466
            },{
                x: 3.49260135687,
                y: 99.464127619629
            },{
                x: 3.0545759811403,
                y: 99.898806674412
            },{
                x: 2.9495434930846,
                y: 99.991574657618
            },{
                x: 2.6753166360678,
                y: 100
            },{
                x: 0.93064143416363,
                y: 99.728348735847
            },{
                x: 0,
                y: 99.633594966212
            },{
                x: 0.21977657230144,
                y: 98.552930275169
            },{
                x: 1.082610449132,
                y: 97.664886867669
            },{
                x: 1.3585812515925,
                y: 97.209453176091
            },{
                x: 2.0173011066229,
                y: 97.005044980877
            },{
                x: 2.3809544756147,
                y: 96.652326260469
            },{
                x: 2.6242369411477,
                y: 96.463959424333
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