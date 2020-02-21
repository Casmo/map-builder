var nlbrkau0397 = nlbrkau0397 ||  {
            
            name: "Heemstede",

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
                x: 1.1940241685146,
                y: 99.429449819549
            },{
                x: 0.86514174987096,
                y: 99.54288782501
            },{
                x: 0.70237636312401,
                y: 99.633423966953
            },{
                x: 0.54732845399715,
                y: 99.851134346775
            },{
                x: 0.5234210899916,
                y: 100
            },{
                x: 0.42571447037822,
                y: 99.961448694961
            },{
                x: 0.35485838222252,
                y: 99.92810525556
            },{
                x: 0.29396587999284,
                y: 99.890972217669
            },{
                x: 0.1143602605387,
                y: 99.806053560707
            },{
                x: 0,
                y: 99.795413016741
            },{
                x: 0.24877511513381,
                y: 98.887369422594
            },{
                x: 0.30816709763788,
                y: 98.71402538473
            },{
                x: 0.35155656408542,
                y: 98.58366659543
            },{
                x: 0.44351075889122,
                y: 98.564994396818
            },{
                x: 0.58723755551218,
                y: 98.597676143434
            },{
                x: 0.66433369845893,
                y: 98.614378487225
            },{
                x: 0.77208072064288,
                y: 98.612000075169
            },{
                x: 0.85107703747941,
                y: 98.608694089491
            },{
                x: 0.91893286473104,
                y: 98.61043417512
            },{
                x: 1.0092570414814,
                y: 98.647394089538
            },{
                x: 1.1352885011932,
                y: 98.632778432358
            },{
                x: 1.2034700206371,
                y: 98.69020515252
            },{
                x: 1.1722907674529,
                y: 98.906476731122
            },{
                x: 1.2782554358708,
                y: 99.125936047467
            },{
                x: 1.249947723808,
                y: 99.357168822124
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