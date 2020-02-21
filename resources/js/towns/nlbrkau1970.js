var nlbrkau1970 = nlbrkau1970 ||  {
            
            name: "Noardeast-Fryslân",

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
                x: 6.2549478775062,
                y: 97.430573274061
            },{
                x: 5.1984288764355,
                y: 97.655900024614
            },{
                x: 3.9296255210637,
                y: 98.99184713768
            },{
                x: 2.9522785289525,
                y: 98.847156627859
            },{
                x: 1.8278123511069,
                y: 98.816813995333
            },{
                x: 0.12300732336413,
                y: 98.367431482509
            },{
                x: 0,
                y: 97.570620959275
            },{
                x: 14.333268830708,
                y: 97.262324518472
            },{
                x: 14.490964059399,
                y: 97.998659365808
            },{
                x: 14.097187666086,
                y: 98.301376203454
            },{
                x: 13.788086052445,
                y: 98.494043865679
            },{
                x: 13.586417966033,
                y: 99.297283323794
            },{
                x: 13.293953903344,
                y: 99.383849663059
            },{
                x: 13.073914182132,
                y: 99.709900641854
            },{
                x: 12.477330688038,
                y: 99.380417286625
            },{
                x: 11.869112067452,
                y: 99.47566139575
            },{
                x: 10.902071481495,
                y: 99.547330973463
            },{
                x: 9.7199271627691,
                y: 99.680940164831
            },{
                x: 8.9079321502973,
                y: 100
            },{
                x: 8.2105914296422,
                y: 99.797118760905
            },{
                x: 8.8322441394902,
                y: 98.356844751975
            },{
                x: 8.9109207329953,
                y: 97.569093649122
            },{
                x: 8.1263243491207,
                y: 97.327876712749
            },{
                x: 7.567880319045,
                y: 97.374486933186
            },{
                x: 6.7351144492095,
                y: 97.819163957078
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