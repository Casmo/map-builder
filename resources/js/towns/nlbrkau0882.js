var nlbrkau0882 = nlbrkau0882 ||  {
            
            name: "Landgraaf",

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
                x: 0.3620903059847,
                y: 99.412861121228
            },{
                x: 0.2083384182189,
                y: 99.280335633239
            },{
                x: 0.094386116346523,
                y: 99.154514519933
            },{
                x: 0.080506179126995,
                y: 98.856261718848
            },{
                x: 0,
                y: 98.762474820802
            },{
                x: 0.14531295652461,
                y: 98.532704213723
            },{
                x: 0.54462793371623,
                y: 98.020425836729
            },{
                x: 1.3921283259417,
                y: 97.958639874583
            },{
                x: 1.7243151578794,
                y: 98.210459119062
            },{
                x: 2.3915362279169,
                y: 98.236003505294
            },{
                x: 2.6098556196131,
                y: 98.365897799712
            },{
                x: 2.372751184621,
                y: 98.613202026484
            },{
                x: 2.3380723623432,
                y: 98.649015573197
            },{
                x: 2.3082771063393,
                y: 98.720903590958
            },{
                x: 1.978046244165,
                y: 98.825076481277
            },{
                x: 1.6928608180628,
                y: 98.976608731646
            },{
                x: 1.3820393939369,
                y: 98.975987398934
            },{
                x: 1.3125582199123,
                y: 99.122714322293
            },{
                x: 1.3156768199715,
                y: 99.235953359673
            },{
                x: 1.3444059855166,
                y: 99.300173671521
            },{
                x: 1.3123744828031,
                y: 99.424900814411
            },{
                x: 0.88740949374054,
                y: 99.983849243881
            },{
                x: 0.72603952286431,
                y: 100
            },{
                x: 0.63205954857428,
                y: 99.985294063709
            },{
                x: 0.4949818034734,
                y: 99.798703070811
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