var nlbrkau0392 = nlbrkau0392 ||  {
            
            name: "Haarlem",

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
                x: 0.64472910461081,
                y: 97.841665052146
            },{
                x: 0.76345493810416,
                y: 97.52958503146
            },{
                x: 1.1465696482827,
                y: 97.088804878884
            },{
                x: 1.2632416745971,
                y: 96.892655983294
            },{
                x: 1.447685704595,
                y: 96.892855305412
            },{
                x: 1.7272025294579,
                y: 96.977466305322
            },{
                x: 1.9371878342522,
                y: 97.189150996963
            },{
                x: 1.9540519424029,
                y: 97.505188783112
            },{
                x: 1.9100419739381,
                y: 98.176025957673
            },{
                x: 1.9128359198678,
                y: 98.711011832568
            },{
                x: 1.9234615303217,
                y: 99.268760788974
            },{
                x: 1.8172298202578,
                y: 99.627545557637
            },{
                x: 1.0979234319975,
                y: 100
            },{
                x: 1.0217758189014,
                y: 99.660353695009
            },{
                x: 0.9410423040291,
                y: 99.24233945623
            },{
                x: 0.72309557686517,
                y: 99.234009703496
            },{
                x: 0.5617933395843,
                y: 99.205305194309
            },{
                x: 0.36565994431496,
                y: 99.205546292643
            },{
                x: 0.13737670717694,
                y: 99.152838868807
            },{
                x: 0.087616130514394,
                y: 98.980772545905
            },{
                x: 0,
                y: 98.674425071814
            },{
                x: 0.0093085683218863,
                y: 98.425986868588
            },{
                x: 0.13646684516418,
                y: 98.365763620169
            },{
                x: 0.24786888634072,
                y: 98.238020800902
            },{
                x: 0.57851938538744,
                y: 98.177730285694
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