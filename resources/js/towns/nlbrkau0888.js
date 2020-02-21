var nlbrkau0888 = nlbrkau0888 ||  {
            
            name: "Beek",

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
                x: 2.4452764777015,
                y: 99.058628189987
            },{
                x: 2.2863438781955,
                y: 99.273254210501
            },{
                x: 1.978965967774,
                y: 99.335083719042
            },{
                x: 1.6684025022451,
                y: 99.46128719094
            },{
                x: 1.3675687990046,
                y: 99.492411534365
            },{
                x: 0.85455039548828,
                y: 99.57530369079
            },{
                x: 0.32370767576435,
                y: 99.812262285362
            },{
                x: 0,
                y: 100
            },{
                x: 0.075845536831626,
                y: 99.839364782856
            },{
                x: 0.2491345443659,
                y: 99.533866994524
            },{
                x: 0.46016543787933,
                y: 99.243465997934
            },{
                x: 0.44935453322204,
                y: 99.009838525576
            },{
                x: 0.57017102512239,
                y: 98.893002485147
            },{
                x: 0.73114082280306,
                y: 98.508432231917
            },{
                x: 0.79281965757657,
                y: 98.345569775975
            },{
                x: 0.99991343854125,
                y: 98.183918476277
            },{
                x: 1.4489474698848,
                y: 98.103726196354
            },{
                x: 1.8962017426193,
                y: 98.290013072557
            },{
                x: 2.1841157166971,
                y: 98.287208401477
            },{
                x: 2.2550151439733,
                y: 98.315278124595
            },{
                x: 2.4587731102453,
                y: 98.418411920037
            },{
                x: 2.609141691947,
                y: 98.402795049804
            },{
                x: 2.6209366801048,
                y: 98.552546500434
            },{
                x: 2.6047602885352,
                y: 98.721994021016
            },{
                x: 2.5253279853378,
                y: 98.914558658842
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