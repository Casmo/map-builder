var nlbrkau0353 = nlbrkau0353 ||  {
            
            name: "IJsselstein",

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
                x: 1.034978679683,
                y: 98.794014094106
            },{
                x: 0.38357690762425,
                y: 98.932324880013
            },{
                x: 0.36002040883297,
                y: 98.713088252144
            },{
                x: 0,
                y: 98.492865988794
            },{
                x: 0.13182177381024,
                y: 98.140398987792
            },{
                x: 0.25663402880553,
                y: 97.844800038564
            },{
                x: 0.52193484362901,
                y: 97.796217131022
            },{
                x: 0.66815766216638,
                y: 97.739353681712
            },{
                x: 0.92579368105503,
                y: 97.565087380763
            },{
                x: 1.1012994716221,
                y: 97.730826377039
            },{
                x: 1.214710423763,
                y: 97.770301361306
            },{
                x: 1.2266813635593,
                y: 97.869192746556
            },{
                x: 1.3226474114328,
                y: 97.977363408376
            },{
                x: 1.4779768950844,
                y: 98.117232659581
            },{
                x: 1.6204637257336,
                y: 98.357801710562
            },{
                x: 1.7761637977921,
                y: 98.575420749165
            },{
                x: 1.9510270275082,
                y: 98.689059846923
            },{
                x: 2.2179827738934,
                y: 99.032318732536
            },{
                x: 2.3879201362779,
                y: 99.420271089126
            },{
                x: 2.3898387357818,
                y: 99.693578886476
            },{
                x: 2.1128833307894,
                y: 100
            },{
                x: 1.8981309822665,
                y: 99.854528487351
            },{
                x: 1.6734934215562,
                y: 99.566683274719
            },{
                x: 1.3517969923974,
                y: 99.476993278179
            },{
                x: 1.1997690673672,
                y: 99.152097872017
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