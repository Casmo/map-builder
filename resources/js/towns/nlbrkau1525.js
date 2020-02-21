var nlbrkau1525 = nlbrkau1525 ||  {
            
            name: "Teylingen",

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
                x: 0.92122490731429,
                y: 99.240286048977
            },{
                x: 0.59179231540561,
                y: 99.165363590945
            },{
                x: 0.27306241011106,
                y: 99.236215346115
            },{
                x: 0,
                y: 99.013947464298
            },{
                x: 0.12919910823662,
                y: 98.916933176506
            },{
                x: 0.25078402609814,
                y: 98.830570053752
            },{
                x: 0.31541407331015,
                y: 98.609108665335
            },{
                x: 1.0075579922522,
                y: 97.706538109589
            },{
                x: 1.6900712838998,
                y: 97.537020489932
            },{
                x: 1.8452019785321,
                y: 97.798777871481
            },{
                x: 1.8401050903601,
                y: 97.972805552345
            },{
                x: 1.7689012511783,
                y: 98.025656360653
            },{
                x: 1.9755546340153,
                y: 98.155515251498
            },{
                x: 2.4275333899052,
                y: 98.446685567738
            },{
                x: 2.6060243894663,
                y: 98.709027462283
            },{
                x: 2.5378706382014,
                y: 98.861491534701
            },{
                x: 2.6496084926821,
                y: 99.098481992489
            },{
                x: 2.5948761144107,
                y: 99.332826387207
            },{
                x: 2.2768362613386,
                y: 99.568090920795
            },{
                x: 2.1223393040238,
                y: 99.953291711665
            },{
                x: 1.8632409142162,
                y: 100
            },{
                x: 1.1718872205533,
                y: 99.839270963387
            },{
                x: 0.8650885491543,
                y: 99.903793975788
            },{
                x: 0.8233457097664,
                y: 99.678688143532
            },{
                x: 0.83275471066071,
                y: 99.583760896388
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