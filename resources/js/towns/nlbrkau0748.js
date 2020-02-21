var nlbrkau0748 = nlbrkau0748 ||  {
            
            name: "Bergen op Zoom",

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
                x: 2.2853260576552,
                y: 96.501390206276
            },{
                x: 2.7933166041733,
                y: 96.779199567974
            },{
                x: 2.9945915243136,
                y: 97.053390330443
            },{
                x: 3.1586734341612,
                y: 97.239147923224
            },{
                x: 3.410849502426,
                y: 97.391712541791
            },{
                x: 3.4352182853303,
                y: 97.749860754206
            },{
                x: 3.4417435478657,
                y: 98.033455767859
            },{
                x: 3.811023476555,
                y: 98.390863691555
            },{
                x: 3.9684070269012,
                y: 98.783797684949
            },{
                x: 3.8126856745561,
                y: 99.450561324363
            },{
                x: 2.8710202733528,
                y: 99.333885662121
            },{
                x: 2.4801478606221,
                y: 99.451871610613
            },{
                x: 2.2171629638254,
                y: 99.252225550048
            },{
                x: 2.0524262958893,
                y: 99.645455163279
            },{
                x: 1.8144016182568,
                y: 100
            },{
                x: 0,
                y: 97.788334879455
            },{
                x: 0.51758198694324,
                y: 96.252977139587
            },{
                x: 0.59480451403151,
                y: 96.06341968128
            },{
                x: 0.62997719466939,
                y: 95.81041724938
            },{
                x: 0.85624503295079,
                y: 95.547409059585
            },{
                x: 1.2674502405587,
                y: 95.655575118941
            },{
                x: 1.5542646466536,
                y: 95.803074194235
            },{
                x: 1.983735347144,
                y: 95.932299715153
            },{
                x: 2.044529233411,
                y: 96.144240020593
            },{
                x: 2.3235316981743,
                y: 96.38805133082
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