var nlbrkau0553 = nlbrkau0553 ||  {
            
            name: "Lisse",

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
                x: 1.2552379511698,
                y: 99.004144922913
            },{
                x: 1.2207083504143,
                y: 99.178024970877
            },{
                x: 1.138675440477,
                y: 99.529877365846
            },{
                x: 1.0307516881074,
                y: 99.648759732814
            },{
                x: 0.8164480422143,
                y: 99.827616461081
            },{
                x: 0.84916985666599,
                y: 100
            },{
                x: 0.51628518703511,
                y: 99.753613079813
            },{
                x: 0.35015985063628,
                y: 99.678059730105
            },{
                x: 0.26408965509341,
                y: 99.636938833714
            },{
                x: 0.14455698731662,
                y: 99.535670098514
            },{
                x: 0.18683858127911,
                y: 99.51684212418
            },{
                x: 0.2497083335588,
                y: 99.460763926127
            },{
                x: 0.21734750543332,
                y: 99.320667738017
            },{
                x: 0.16597455778236,
                y: 99.186834087993
            },{
                x: 0,
                y: 98.986775929836
            },{
                x: 0.07545859893631,
                y: 98.603469584174
            },{
                x: 0.38158901743092,
                y: 98.044447869307
            },{
                x: 0.46036604350852,
                y: 97.967692214249
            },{
                x: 0.63721508729245,
                y: 97.756611153533
            },{
                x: 0.73220379907357,
                y: 97.802962573849
            },{
                x: 0.88351442273377,
                y: 97.897312388712
            },{
                x: 1.330528643454,
                y: 98.249449782446
            },{
                x: 1.2572995438194,
                y: 98.437939823017
            },{
                x: 1.2965712747973,
                y: 98.666223480015
            },{
                x: 1.2773434977325,
                y: 98.845233151719
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