var nlbrkau0153 = nlbrkau0153 ||  {
            
            name: "Enschede",

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
                x: 2.6985207125507,
                y: 99.913612802816
            },{
                x: 1.7806757375965,
                y: 99.66535055535
            },{
                x: 1.0990821695579,
                y: 99.7645173804
            },{
                x: 0.17526547903722,
                y: 98.965050173024
            },{
                x: 0,
                y: 98.308507545231
            },{
                x: 0.12034521140546,
                y: 97.473171207531
            },{
                x: 1.0508833583241,
                y: 97.484485481497
            },{
                x: 1.5059874616811,
                y: 97.1367445035
            },{
                x: 2.1197353235799,
                y: 96.719672353807
            },{
                x: 1.953531094411,
                y: 96.119521953763
            },{
                x: 2.6417454267594,
                y: 96.022183723275
            },{
                x: 3.2411283166122,
                y: 95.683441979583
            },{
                x: 4.2100257373389,
                y: 95.665694876342
            },{
                x: 4.9478586912668,
                y: 95.862570961329
            },{
                x: 5.449919823276,
                y: 96.55728572189
            },{
                x: 5.3573285174488,
                y: 97.25210846335
            },{
                x: 5.5060120637686,
                y: 97.706685388454
            },{
                x: 5.7021698535129,
                y: 97.942028163939
            },{
                x: 5.6465021806909,
                y: 98.198140091685
            },{
                x: 5.5172553215671,
                y: 98.456929237646
            },{
                x: 4.8232979069761,
                y: 99.3271412814
            },{
                x: 4.0945941960276,
                y: 99.41296131334
            },{
                x: 3.7628724162083,
                y: 99.635619342535
            },{
                x: 3.3465944553876,
                y: 100
            },{
                x: 3.0011448145437,
                y: 99.966291549758
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