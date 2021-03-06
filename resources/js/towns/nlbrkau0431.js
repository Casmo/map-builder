var nlbrkau0431 = nlbrkau0431 ||  {
            
            name: "Oostzaan",

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
                x: 1.1065172941062,
                y: 99.974040683889
            },{
                x: 1.0137204518516,
                y: 99.961959214489
            },{
                x: 0.93966297813122,
                y: 99.971445601964
            },{
                x: 0.85728257668355,
                y: 99.946237903714
            },{
                x: 0.71271754438051,
                y: 99.805413818137
            },{
                x: 0.59317293888193,
                y: 99.7950430494
            },{
                x: 0.49331804837815,
                y: 99.823143219591
            },{
                x: 0,
                y: 99.027006780393
            },{
                x: 0.14869159130622,
                y: 98.744205160819
            },{
                x: 0.28526950918613,
                y: 98.403858573147
            },{
                x: 0.45200211230202,
                y: 98.449769573011
            },{
                x: 0.56840476132918,
                y: 98.416098650556
            },{
                x: 0.84068395308469,
                y: 98.311641469542
            },{
                x: 1.3344366902453,
                y: 98.105186239719
            },{
                x: 1.5692306570401,
                y: 98.305041889437
            },{
                x: 1.5210113440667,
                y: 98.415564056599
            },{
                x: 1.4444679695418,
                y: 98.560953432958
            },{
                x: 1.3705760668323,
                y: 98.715824948363
            },{
                x: 1.2963675549798,
                y: 98.880366241753
            },{
                x: 1.3417882507411,
                y: 99.096892372047
            },{
                x: 1.3741257224544,
                y: 99.42399483697
            },{
                x: 1.340090758606,
                y: 99.586121960694
            },{
                x: 1.4555168500878,
                y: 99.720513216997
            },{
                x: 1.3925923399973,
                y: 100
            },{
                x: 1.2549283489504,
                y: 99.977364017318
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