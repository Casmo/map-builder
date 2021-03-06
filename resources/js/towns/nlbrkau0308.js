var nlbrkau0308 = nlbrkau0308 ||  {
            
            name: "Baarn",

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
                x: 2.5205645748288,
                y: 97.950629108045
            },{
                x: 2.4565158427647,
                y: 97.958245478776
            },{
                x: 2.3641077550153,
                y: 97.816736334054
            },{
                x: 2.5614704761131,
                y: 97.717710769262
            },{
                x: 3.1000057599508,
                y: 97.850976545968
            },{
                x: 2.9921826996693,
                y: 98.301568090822
            },{
                x: 2.9062604280704,
                y: 98.545301513187
            },{
                x: 2.8979951128265,
                y: 98.74460663734
            },{
                x: 2.6197543266164,
                y: 98.754426526476
            },{
                x: 2.4514994044569,
                y: 98.733195711619
            },{
                x: 2.2081458316246,
                y: 98.896554525659
            },{
                x: 1.742061359864,
                y: 99.130356183597
            },{
                x: 1.3454886849796,
                y: 99.305369499943
            },{
                x: 0.78963306440631,
                y: 99.789931127446
            },{
                x: 0.52620569335644,
                y: 100
            },{
                x: 0.13088284604008,
                y: 99.655260890985
            },{
                x: 0,
                y: 99.281383933046
            },{
                x: 0.12158777253414,
                y: 98.284398419862
            },{
                x: 0.44318999749711,
                y: 97.974433762683
            },{
                x: 0.8996905547876,
                y: 97.990582040552
            },{
                x: 1.403964058063,
                y: 98.008447391728
            },{
                x: 1.7695630161905,
                y: 98.034370242158
            },{
                x: 2.0131153780421,
                y: 98.029461536715
            },{
                x: 2.2299612396447,
                y: 98.04945039422
            },{
                x: 2.4205469679867,
                y: 98.122184911419
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