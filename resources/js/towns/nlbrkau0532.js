var nlbrkau0532 = nlbrkau0532 ||  {
            
            name: "Stede Broec",

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
                x: 1.8978551170869,
                y: 99.53203769189
            },{
                x: 1.9048052068086,
                y: 99.85281176808
            },{
                x: 1.36664699927,
                y: 99.884999634848
            },{
                x: 1.2729397759713,
                y: 99.884721716797
            },{
                x: 1.0038671600942,
                y: 99.912694434124
            },{
                x: 0.76459265489367,
                y: 99.939885086515
            },{
                x: 0.53591806809357,
                y: 100
            },{
                x: 0.40184862888323,
                y: 99.991726892983
            },{
                x: 0.25029380095778,
                y: 99.631707955754
            },{
                x: 0.20576194643827,
                y: 99.527718455944
            },{
                x: 0.13940430327103,
                y: 99.371544443076
            },{
                x: 0.081436802395075,
                y: 99.239147116023
            },{
                x: 0,
                y: 99.054656617131
            },{
                x: 0.10794892539159,
                y: 98.9892931239
            },{
                x: 0.39788608379676,
                y: 98.883643904572
            },{
                x: 0.5682254359867,
                y: 98.819227102891
            },{
                x: 0.82549216404699,
                y: 98.773943454347
            },{
                x: 1.0939621844894,
                y: 98.778412093373
            },{
                x: 1.5144502683658,
                y: 98.79881481865
            },{
                x: 1.8111831046565,
                y: 98.811771464383
            },{
                x: 1.8630922117252,
                y: 98.884885153853
            },{
                x: 1.8708639281247,
                y: 98.991802175142
            },{
                x: 1.876829934346,
                y: 99.074121147714
            },{
                x: 1.8929728483914,
                y: 99.409257037462
            },{
                x: 1.8972725043605,
                y: 99.505058752867
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