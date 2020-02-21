var nlbrkau0402 = nlbrkau0402 ||  {
            
            name: "Hilversum",

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
                x: 1.1751202670323,
                y: 99.948961854646
            },{
                x: 0.77292570373293,
                y: 99.931542942531
            },{
                x: 0.54785942310104,
                y: 99.91950218724
            },{
                x: 0.65165869259293,
                y: 99.699328426785
            },{
                x: 1.0488038590918,
                y: 99.412099236329
            },{
                x: 1.0443536840218,
                y: 99.101131595918
            },{
                x: 0.92004385140438,
                y: 98.891104853616
            },{
                x: 0.68349841321079,
                y: 98.664688735111
            },{
                x: 0.61496940225662,
                y: 98.621899268309
            },{
                x: 0.51925171089937,
                y: 98.489071079768
            },{
                x: 0.99403462959215,
                y: 97.899229846243
            },{
                x: 0.71296434380271,
                y: 97.128091516141
            },{
                x: 0,
                y: 96.493885710836
            },{
                x: 0.037412820082932,
                y: 96.268183682405
            },{
                x: 0.41849759852614,
                y: 96.326442740576
            },{
                x: 0.74256132981862,
                y: 96.463459525877
            },{
                x: 1.1117730058811,
                y: 96.290207183269
            },{
                x: 1.0176554882748,
                y: 96.561361381253
            },{
                x: 1.0456805877501,
                y: 96.794237589784
            },{
                x: 0.89826607315947,
                y: 97.124369184441
            },{
                x: 1.6523766297764,
                y: 97.184286545986
            },{
                x: 2.1704493608914,
                y: 96.946960462323
            },{
                x: 2.5206073949178,
                y: 97.855782935084
            },{
                x: 2.6059444586335,
                y: 99.582264741379
            },{
                x: 1.8449250752897,
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