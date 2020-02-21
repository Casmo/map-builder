var nlbrkau0823 = nlbrkau0823 ||  {
            
            name: "Oirschot",

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
                x: 1.39422131999,
                y: 97.027776907243
            },{
                x: 0.87937203327339,
                y: 96.590301678238
            },{
                x: 1.357517496775,
                y: 96.226126007464
            },{
                x: 1.5681170752099,
                y: 95.925263254953
            },{
                x: 2.072714194552,
                y: 95.733532725314
            },{
                x: 2.7453017895644,
                y: 95.705168444467
            },{
                x: 3.5188334624359,
                y: 95.559115605143
            },{
                x: 3.8364378481784,
                y: 95.797936781709
            },{
                x: 4.0788883064059,
                y: 95.779462135036
            },{
                x: 4.3157378969894,
                y: 96.312677831264
            },{
                x: 4.0633316383066,
                y: 96.629558576494
            },{
                x: 3.9801091084415,
                y: 96.93938657588
            },{
                x: 4.059779906559,
                y: 97.341332548866
            },{
                x: 5.0220386563933,
                y: 97.898476458203
            },{
                x: 5.0026645124788,
                y: 98.412085655519
            },{
                x: 4.7649914786077,
                y: 98.593031194613
            },{
                x: 3.5457514679732,
                y: 98.581264462979
            },{
                x: 2.5165711473751,
                y: 98.951868360564
            },{
                x: 1.3311628998029,
                y: 99.383847184809
            },{
                x: 0.6719715047619,
                y: 100
            },{
                x: 0.51463233159888,
                y: 99.822885835612
            },{
                x: 0,
                y: 99.792260328536
            },{
                x: 0.084088274210416,
                y: 99.187895841158
            },{
                x: 0.64585799786681,
                y: 98.102296600063
            },{
                x: 0.81605513545803,
                y: 97.503557386452
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