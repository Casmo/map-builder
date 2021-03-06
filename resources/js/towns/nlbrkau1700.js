var nlbrkau1700 = nlbrkau1700 ||  {
            
            name: "Twenterand",

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
                x: 3.8523946894733,
                y: 97.813365205801
            },{
                x: 2.7386184819731,
                y: 97.844918994571
            },{
                x: 2.4074450588089,
                y: 97.758952037802
            },{
                x: 2.1668758298257,
                y: 97.911699692843
            },{
                x: 2.0492168653382,
                y: 98.132481686687
            },{
                x: 1.7976055032171,
                y: 98.186655526531
            },{
                x: 1.3072884942901,
                y: 98.204297835195
            },{
                x: 0.47170350550291,
                y: 97.915299882215
            },{
                x: 0,
                y: 97.429819531984
            },{
                x: 0.048167928866636,
                y: 97.196728423763
            },{
                x: 0.1318780887152,
                y: 97.040139835051
            },{
                x: 0.26230185149781,
                y: 97.086056145451
            },{
                x: 0.55833892622085,
                y: 96.887635048524
            },{
                x: 1.3548439661259,
                y: 96.678902306827
            },{
                x: 4.279760977225,
                y: 97.225059425252
            },{
                x: 5.5388797260386,
                y: 96.312885650239
            },{
                x: 6.4983621770102,
                y: 97.559944657701
            },{
                x: 6.3665045900345,
                y: 97.837868726977
            },{
                x: 5.9016616413399,
                y: 98.019490474322
            },{
                x: 5.8953099948018,
                y: 98.448879881213
            },{
                x: 5.8504503719645,
                y: 98.671846275532
            },{
                x: 5.838100798775,
                y: 99.039027709683
            },{
                x: 6.1510608917107,
                y: 99.843404684609
            },{
                x: 5.1559780782424,
                y: 99.72003916315
            },{
                x: 4.3813938097281,
                y: 100
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