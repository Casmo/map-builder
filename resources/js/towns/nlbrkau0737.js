var nlbrkau0737 = nlbrkau0737 ||  {
            
            name: "Tytsjerksteradiel",

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
                x: 2.5832300882596,
                y: 98.353741628772
            },{
                x: 0.57172656217448,
                y: 97.829692979787
            },{
                x: 0.63541871967907,
                y: 97.261335696668
            },{
                x: 1.3271583131745,
                y: 97.052459924536
            },{
                x: 1.9050546013877,
                y: 96.897352975368
            },{
                x: 1.4530478178033,
                y: 96.678463656554
            },{
                x: 1.3653901647783,
                y: 96.419844093709
            },{
                x: 0.61745919579641,
                y: 96.222986772616
            },{
                x: 0,
                y: 95.627919263596
            },{
                x: 0.1954049347246,
                y: 94.578250755041
            },{
                x: 1.1355140203287,
                y: 94.467888966067
            },{
                x: 2.0069404616896,
                y: 95.140778839811
            },{
                x: 2.9990590869348,
                y: 95.848191091948
            },{
                x: 3.4659685590771,
                y: 96.310293754635
            },{
                x: 4.7532847257849,
                y: 95.853857787896
            },{
                x: 5.9725781966517,
                y: 96.562026968431
            },{
                x: 6.4169925891791,
                y: 96.846193041722
            },{
                x: 6.4441506467306,
                y: 97.298088500182
            },{
                x: 7.1974901822295,
                y: 98.523510967836
            },{
                x: 6.5857483766223,
                y: 98.802315878017
            },{
                x: 4.4514970428641,
                y: 99.036751259918
            },{
                x: 3.4050041710011,
                y: 99.720522775961
            },{
                x: 2.8481826330257,
                y: 100
            },{
                x: 2.148848312832,
                y: 99.52653880888
            },{
                x: 2.3262179450922,
                y: 98.982762580762
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