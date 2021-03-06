var nlbrkau0798 = nlbrkau0798 ||  {
            
            name: "Hilvarenbeek",

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
                x: 3.4630111182621,
                y: 99.225643131046
            },{
                x: 3.2492773688265,
                y: 99.777138754294
            },{
                x: 2.8131194680095,
                y: 99.955595068146
            },{
                x: 2.2135123565996,
                y: 100
            },{
                x: 0.40100260773045,
                y: 98.74542729217
            },{
                x: 0.19864862134691,
                y: 98.482204202685
            },{
                x: 0,
                y: 97.987232862514
            },{
                x: 0.12322064526216,
                y: 97.366701333374
            },{
                x: 0.81926300891499,
                y: 96.715019262164
            },{
                x: 0.89033164042165,
                y: 96.310278885135
            },{
                x: 1.0486471116144,
                y: 96.189111571543
            },{
                x: 1.1767835030962,
                y: 95.966501691208
            },{
                x: 1.6581783625653,
                y: 96.436936938915
            },{
                x: 2.2538626347894,
                y: 96.773088203146
            },{
                x: 2.5251727949545,
                y: 96.92980849315
            },{
                x: 2.6775910315841,
                y: 97.079294062944
            },{
                x: 2.8732170736775,
                y: 97.15954334262
            },{
                x: 3.2767836964354,
                y: 97.149246213315
            },{
                x: 3.5051611377692,
                y: 97.114051521064
            },{
                x: 3.7654761371365,
                y: 97.049420527765
            },{
                x: 4.1780539232343,
                y: 97.180088390261
            },{
                x: 4.7302973449041,
                y: 97.234695569842
            },{
                x: 4.2102520350215,
                y: 97.760814265759
            },{
                x: 4.0179060117472,
                y: 98.126282166961
            },{
                x: 3.5911981153036,
                y: 98.893969002699
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