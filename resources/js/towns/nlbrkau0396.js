var nlbrkau0396 = nlbrkau0396 ||  {
            
            name: "Heemskerk",

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
                x: 1.8934560666081,
                y: 99.621564477958
            },{
                x: 1.762910071935,
                y: 99.495590067179
            },{
                x: 1.6098848281041,
                y: 99.532272417582
            },{
                x: 1.5269293398851,
                y: 99.578423099636
            },{
                x: 1.2613067256047,
                y: 99.564129260939
            },{
                x: 0,
                y: 99.668420753229
            },{
                x: 0.62822468520778,
                y: 98.43958502707
            },{
                x: 1.5888988322326,
                y: 98.410649686584
            },{
                x: 1.8101263567626,
                y: 98.448462473083
            },{
                x: 2.0387954937332,
                y: 98.492302363907
            },{
                x: 2.375707846889,
                y: 98.563116237253
            },{
                x: 2.4784628252402,
                y: 98.661789890527
            },{
                x: 2.3794217759435,
                y: 98.871666167642
            },{
                x: 2.4527624673252,
                y: 99.162995799961
            },{
                x: 2.483564903726,
                y: 99.250487588633
            },{
                x: 2.6529476810787,
                y: 99.221286013276
            },{
                x: 2.8629680204913,
                y: 99.185329436127
            },{
                x: 2.7725486014823,
                y: 99.536009972819
            },{
                x: 2.9319356129633,
                y: 99.647417229313
            },{
                x: 2.9674944529494,
                y: 99.812578439272
            },{
                x: 2.8364852227678,
                y: 100
            },{
                x: 2.5629517916775,
                y: 99.977506339683
            },{
                x: 2.3044463952239,
                y: 99.812755811174
            },{
                x: 2.1316310038258,
                y: 99.772596475835
            },{
                x: 1.9860494485609,
                y: 99.726378172955
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