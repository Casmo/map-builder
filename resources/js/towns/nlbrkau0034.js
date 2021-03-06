var nlbrkau0034 = nlbrkau0034 ||  {
            
            name: "Almere",

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
                x: 3.4526201099929,
                y: 99.426700378044
            },{
                x: 0.96721783517436,
                y: 99.461551301597
            },{
                x: 1.9691238351914,
                y: 95.937163812093
            },{
                x: 0,
                y: 91.090784236024
            },{
                x: 4.1809088553514,
                y: 95.711461783662
            },{
                x: 4.3688547900842,
                y: 95.86856761858
            },{
                x: 4.5998183052792,
                y: 95.975620589591
            },{
                x: 5.576928878596,
                y: 96.361966686059
            },{
                x: 5.9637307877128,
                y: 96.526797226643
            },{
                x: 6.1132873448173,
                y: 96.623394106305
            },{
                x: 6.2097794309966,
                y: 96.682591359169
            },{
                x: 6.3481093393067,
                y: 96.749507299091
            },{
                x: 6.2111982032795,
                y: 96.875538709623
            },{
                x: 5.9355702210468,
                y: 96.950607738448
            },{
                x: 5.4637551237967,
                y: 97.208274591134
            },{
                x: 5.3980600241887,
                y: 97.216514418792
            },{
                x: 5.1397323959834,
                y: 97.340496670499
            },{
                x: 5.2659642018087,
                y: 97.575883346415
            },{
                x: 6.0278257135699,
                y: 98.481115188769
            },{
                x: 6.4676923531275,
                y: 99.002194540058
            },{
                x: 7.1073027702483,
                y: 99.75822191699
            },{
                x: 6.3495509489704,
                y: 99.942703564988
            },{
                x: 6.1369110581725,
                y: 99.875118851566
            },{
                x: 5.908963374823,
                y: 99.783323050484
            },{
                x: 5.2012378742753,
                y: 100
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