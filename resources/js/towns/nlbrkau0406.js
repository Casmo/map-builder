var nlbrkau0406 = nlbrkau0406 ||  {
            
            name: "Huizen",

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
                x: 2.1281184589476,
                y: 99.179185145975
            },{
                x: 2.0363057001934,
                y: 99.218155983358
            },{
                x: 1.9209055602807,
                y: 99.267268528357
            },{
                x: 1.536322769838,
                y: 99.456922992456
            },{
                x: 1.4241860397401,
                y: 99.49513442319
            },{
                x: 1.1657917160022,
                y: 99.52009146414
            },{
                x: 1.0642185721081,
                y: 99.627948450301
            },{
                x: 0.51601113846536,
                y: 99.780671676877
            },{
                x: 0.42849284536652,
                y: 100
            },{
                x: 0.25014431991975,
                y: 99.880034283687
            },{
                x: 0,
                y: 99.703579687871
            },{
                x: 0.094660683947633,
                y: 99.567222117105
            },{
                x: 0.13190897108246,
                y: 99.396819054079
            },{
                x: 0.18210034379213,
                y: 99.245831310668
            },{
                x: 0.058153314110764,
                y: 99.130127476514
            },{
                x: 0.028275013085772,
                y: 99.101210899922
            },{
                x: 0.22893150733422,
                y: 99.006870644024
            },{
                x: 0.28611812549586,
                y: 98.827614917485
            },{
                x: 0.64936457388414,
                y: 98.845736236496
            },{
                x: 0.87066761748025,
                y: 98.85475388066
            },{
                x: 1.1186976630651,
                y: 98.654484717205
            },{
                x: 1.0839793944022,
                y: 98.484881774936
            },{
                x: 2.4343205037729,
                y: 99.057250282913
            },{
                x: 2.3394947678458,
                y: 98.982841176695
            },{
                x: 2.263544386675,
                y: 99.073405641497
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