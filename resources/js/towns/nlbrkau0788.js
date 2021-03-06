var nlbrkau0788 = nlbrkau0788 ||  {
            
            name: "Haaren",

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
                x: 3.1847443804829,
                y: 98.811672688413
            },{
                x: 3.4700642357131,
                y: 98.714448103396
            },{
                x: 3.798004871914,
                y: 98.592646711806
            },{
                x: 4.0298650138216,
                y: 98.322752881033
            },{
                x: 4.1850634420493,
                y: 98.839275084363
            },{
                x: 3.4682647539115,
                y: 99.39487893826
            },{
                x: 3.0612880949733,
                y: 99.393985352069
            },{
                x: 2.7554472959899,
                y: 99.551328744964
            },{
                x: 2.5838241196764,
                y: 99.739451296444
            },{
                x: 2.4104619287173,
                y: 99.851049024164
            },{
                x: 1.5667481299397,
                y: 100
            },{
                x: 1.4040154421698,
                y: 99.810613894988
            },{
                x: 1.0349145793074,
                y: 99.670967332259
            },{
                x: 0.93410908282731,
                y: 99.540191488865
            },{
                x: 0.39210952402995,
                y: 99.360027306635
            },{
                x: 0.34422187210961,
                y: 98.927908638275
            },{
                x: 0,
                y: 98.316633727418
            },{
                x: 0.0021355546215798,
                y: 98.086686810545
            },{
                x: 0.20959940496167,
                y: 97.194587569684
            },{
                x: 1.3563613543714,
                y: 97.065716792571
            },{
                x: 1.5837606810657,
                y: 97.295521741115
            },{
                x: 1.9403199291273,
                y: 97.545645862503
            },{
                x: 2.1645762612875,
                y: 97.700660408344
            },{
                x: 2.4721843621269,
                y: 98.097256193328
            },{
                x: 2.3896952236046,
                y: 98.307502437784
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