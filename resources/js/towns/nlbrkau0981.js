var nlbrkau0981 = nlbrkau0981 ||  {
            
            name: "Vaals",

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
                x: 1.3666581584447,
                y: 100
            },{
                x: 0.73082888494244,
                y: 99.790087965276
            },{
                x: 0.36852629512246,
                y: 99.882488813427
            },{
                x: 0.13868025449303,
                y: 99.856509317279
            },{
                x: 0.11114096839136,
                y: 99.726771506655
            },{
                x: 0,
                y: 99.642213258069
            },{
                x: 0.013426303791583,
                y: 99.272525604962
            },{
                x: 0.30887817063134,
                y: 99.403566267085
            },{
                x: 0.49438647447816,
                y: 99.066073915495
            },{
                x: 0.43920902679657,
                y: 98.656560074674
            },{
                x: 0.5094012738146,
                y: 98.548591921293
            },{
                x: 0.58673461410296,
                y: 98.567827744792
            },{
                x: 0.74173555088973,
                y: 98.530251454163
            },{
                x: 1.2852127920319,
                y: 98.396247866988
            },{
                x: 1.3968162173847,
                y: 98.546411415211
            },{
                x: 1.5359031329655,
                y: 98.578165942241
            },{
                x: 1.7164549466292,
                y: 98.673748863563
            },{
                x: 1.9204104043422,
                y: 98.894573695731
            },{
                x: 1.9943630337234,
                y: 98.954783844828
            },{
                x: 2.0848369510275,
                y: 99.006917022705
            },{
                x: 2.2167757664144,
                y: 99.088417464662
            },{
                x: 2.3785521388628,
                y: 99.154330775387
            },{
                x: 2.5211835197519,
                y: 99.237589004761
            },{
                x: 2.5609485900584,
                y: 99.433787111318
            },{
                x: 2.2294084712228,
                y: 99.993989181319
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