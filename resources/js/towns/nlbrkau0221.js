var nlbrkau0221 = nlbrkau0221 ||  {
            
            name: "Doesburg",

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
                x: 0.51173276278289,
                y: 99.18893706025
            },{
                x: 0.48305472182897,
                y: 98.783159712558
            },{
                x: 0.5487986103869,
                y: 98.668905654731
            },{
                x: 0.89615179882459,
                y: 98.483251086348
            },{
                x: 1.2321239266318,
                y: 98.492693219356
            },{
                x: 1.3864965759305,
                y: 98.563497533738
            },{
                x: 1.4748671185588,
                y: 98.570902899172
            },{
                x: 1.6912894505535,
                y: 98.486683462783
            },{
                x: 1.6316688347256,
                y: 98.896298557824
            },{
                x: 1.7176798606909,
                y: 99.198869178713
            },{
                x: 1.4140555852247,
                y: 99.28521212143
            },{
                x: 1.4083781604518,
                y: 99.354343262936
            },{
                x: 1.2777745532953,
                y: 99.639719076328
            },{
                x: 1.1668048652601,
                y: 99.703796003704
            },{
                x: 1.2640194431232,
                y: 99.774183263992
            },{
                x: 1.1220150521437,
                y: 99.854731703862
            },{
                x: 0.88070023458014,
                y: 99.894040999405
            },{
                x: 0.79291489983518,
                y: 99.974446054804
            },{
                x: 0.61128479847523,
                y: 99.975658981226
            },{
                x: 0.53376927817178,
                y: 99.987565202938
            },{
                x: 0.3838449873331,
                y: 99.989332195283
            },{
                x: 0.076971056383666,
                y: 100
            },{
                x: 0,
                y: 99.98325021542
            },{
                x: 0.19738088719617,
                y: 99.672975422939
            },{
                x: 0.45359761477053,
                y: 99.273893953071
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