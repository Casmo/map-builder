var nlbrkau0384 = nlbrkau0384 ||  {
            
            name: "Diemen",

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
                x: 1.3875450193223,
                y: 99.013944986047
            },{
                x: 1.4999980990476,
                y: 98.999051764853
            },{
                x: 1.6366870896433,
                y: 99.018016751017
            },{
                x: 1.6976148860069,
                y: 99.005732773177
            },{
                x: 1.7538584241473,
                y: 98.933866705631
            },{
                x: 1.8553391804554,
                y: 99.343341602522
            },{
                x: 1.7776370683701,
                y: 99.41804278822
            },{
                x: 1.7745446793957,
                y: 99.42077027951
            },{
                x: 1.8211407217217,
                y: 99.546044053572
            },{
                x: 1.850052845829,
                y: 99.631573776211
            },{
                x: 1.5674431129603,
                y: 99.855475886973
            },{
                x: 1.3624241599454,
                y: 100
            },{
                x: 1.3295539025185,
                y: 99.840395380876
            },{
                x: 1.1675089313298,
                y: 99.533859205738
            },{
                x: 0.98123791086703,
                y: 99.412197658263
            },{
                x: 0.68712358789889,
                y: 99.552338808911
            },{
                x: 0.6737759173617,
                y: 99.566788777367
            },{
                x: 0.092574437307373,
                y: 99.533917621634
            },{
                x: 0,
                y: 99.438187421447
            },{
                x: 0.08251846379532,
                y: 99.25800801568
            },{
                x: 0.10793361396582,
                y: 99.225954328456
            },{
                x: 0.12939737822456,
                y: 99.192556013516
            },{
                x: 0.14621710919218,
                y: 99.145345702511
            },{
                x: 0.55674212617392,
                y: 98.58405992913
            },{
                x: 0.81036577296341,
                y: 98.59594136834
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