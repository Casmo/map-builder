var nlbrkau0755 = nlbrkau0755 ||  {
            
            name: "Boekel",

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
                x: 1.217478158608,
                y: 98.415517677918
            },{
                x: 1.5077150576363,
                y: 98.392751410085
            },{
                x: 2.3668178773768,
                y: 98.510140100295
            },{
                x: 3.1008302413012,
                y: 98.586057398737
            },{
                x: 3.2955150199832,
                y: 99.08097704969
            },{
                x: 3.0680131845909,
                y: 99.664512552769
            },{
                x: 2.3065321228328,
                y: 99.830121971966
            },{
                x: 2.1184457901112,
                y: 99.898431396535
            },{
                x: 2.0441179010407,
                y: 99.845159639739
            },{
                x: 1.8692684256563,
                y: 99.948353975292
            },{
                x: 1.4767646972916,
                y: 99.96393898231
            },{
                x: 1.1819450106753,
                y: 99.97812306993
            },{
                x: 0.85267876832452,
                y: 99.989558070081
            },{
                x: 0.61782589146788,
                y: 100
            },{
                x: 0.60155685279664,
                y: 99.870221121231
            },{
                x: 0.57689559570861,
                y: 99.766421384574
            },{
                x: 0.46657521593231,
                y: 99.365408295745
            },{
                x: 0.40037094653847,
                y: 99.164285906173
            },{
                x: 0.046576059617821,
                y: 98.67074203808
            },{
                x: 0,
                y: 98.557864471184
            },{
                x: 0.19584092108557,
                y: 98.491926377958
            },{
                x: 0.41846074729803,
                y: 98.479292612814
            },{
                x: 0.65565990551736,
                y: 98.440904518248
            },{
                x: 0.97039352868559,
                y: 98.372090238724
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