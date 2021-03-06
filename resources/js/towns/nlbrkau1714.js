var nlbrkau1714 = nlbrkau1714 ||  {
            
            name: "Sluis",

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
                x: 1.4074670008606,
                y: 99.413889595033
            },{
                x: 1.1414818431598,
                y: 99.505249932163
            },{
                x: 0.90245206125593,
                y: 99.272549679392
            },{
                x: 0.61559223991509,
                y: 98.918402778835
            },{
                x: 0.35922525275563,
                y: 98.832339524347
            },{
                x: 0.43803471829461,
                y: 98.691814952999
            },{
                x: 0.46935333140486,
                y: 98.498356374947
            },{
                x: 0.084495973361026,
                y: 98.056411798844
            },{
                x: 0,
                y: 97.568678011171
            },{
                x: 2.011332245729,
                y: 94.765636912196
            },{
                x: 8.5916842530719,
                y: 96.133657892523
            },{
                x: 7.6761326182794,
                y: 96.232897648935
            },{
                x: 7.4429071643212,
                y: 96.259163559991
            },{
                x: 7.6357776688071,
                y: 96.81681020007
            },{
                x: 8.4585129976682,
                y: 97.267742327299
            },{
                x: 8.938076973937,
                y: 97.766773041187
            },{
                x: 8.880644594416,
                y: 98.096554494504
            },{
                x: 8.7078266078609,
                y: 98.60756152918
            },{
                x: 7.2487102751384,
                y: 98.404177205307
            },{
                x: 6.4858836245223,
                y: 98.066532972389
            },{
                x: 5.2857351452148,
                y: 98.212188583619
            },{
                x: 4.4597810432378,
                y: 98.577581429245
            },{
                x: 4.2198299806307,
                y: 99.581924867075
            },{
                x: 3.1640835577722,
                y: 100
            },{
                x: 1.6798899643089,
                y: 99.953181960588
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