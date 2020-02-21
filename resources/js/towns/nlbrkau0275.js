var nlbrkau0275 = nlbrkau0275 ||  {
            
            name: "Rheden",

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
                x: 0.85039866346306,
                y: 98.512480630528
            },{
                x: 0.85244909693796,
                y: 97.335031774919
            },{
                x: 1.1649532208045,
                y: 97.360258591098
            },{
                x: 1.3106928211251,
                y: 97.156862938082
            },{
                x: 1.572189135918,
                y: 96.928786746023
            },{
                x: 2.9130252235887,
                y: 96.163833420183
            },{
                x: 3.1806974927969,
                y: 96.327329246052
            },{
                x: 3.5105027492379,
                y: 96.430637227075
            },{
                x: 4.1580875645128,
                y: 96.844164771006
            },{
                x: 4.2768660796915,
                y: 96.916954871815
            },{
                x: 4.3877945047319,
                y: 97.0324222101
            },{
                x: 4.6425252454593,
                y: 97.276716425067
            },{
                x: 4.256398336655,
                y: 98.040861487329
            },{
                x: 4.460982860403,
                y: 98.866758878342
            },{
                x: 3.4461265083717,
                y: 99.517049943155
            },{
                x: 3.1150750575823,
                y: 98.880097882666
            },{
                x: 2.4829908550174,
                y: 98.893285713733
            },{
                x: 2.1125540053775,
                y: 99.317609223316
            },{
                x: 1.3950483964973,
                y: 99.507345115633
            },{
                x: 1.2016757291492,
                y: 100
            },{
                x: 0.52897628287398,
                y: 99.865476334333
            },{
                x: 0.14767662543858,
                y: 99.689528717686
            },{
                x: 0,
                y: 99.271754515134
            },{
                x: 0.45256240667898,
                y: 99.192333325039
            },{
                x: 0.60571740835538,
                y: 98.990866104663
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