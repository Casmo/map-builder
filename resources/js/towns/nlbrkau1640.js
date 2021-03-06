var nlbrkau1640 = nlbrkau1640 ||  {
            
            name: "Leudal",

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
                x: 3.1735563995265,
                y: 98.635379532891
            },{
                x: 2.4900276229799,
                y: 99.111214887639
            },{
                x: 1.9428481309894,
                y: 99.492951792894
            },{
                x: 1.5463237260235,
                y: 99.721099146135
            },{
                x: 1.1762953540813,
                y: 99.838688928641
            },{
                x: 1.0170246056299,
                y: 99.878001056471
            },{
                x: 0.83109484830082,
                y: 100
            },{
                x: 0.62346516743415,
                y: 99.550948864622
            },{
                x: 0.41193807991943,
                y: 98.900101255636
            },{
                x: 0,
                y: 98.062623709821
            },{
                x: 0.6048389477412,
                y: 97.760233647157
            },{
                x: 0.97614543446176,
                y: 97.175821551602
            },{
                x: 1.511601824141,
                y: 96.885673336525
            },{
                x: 2.2262335562586,
                y: 96.82071592228
            },{
                x: 2.6387628129222,
                y: 96.76052843147
            },{
                x: 2.6542769204482,
                y: 96.388622036422
            },{
                x: 2.2129229964652,
                y: 95.813434695935
            },{
                x: 2.8539290889724,
                y: 94.393714231504
            },{
                x: 6.6986413354439,
                y: 95.682490331532
            },{
                x: 6.6056838529765,
                y: 96.240619876351
            },{
                x: 6.295007498122,
                y: 97.289142371236
            },{
                x: 5.2753734622187,
                y: 98.219962854288
            },{
                x: 4.7160665424703,
                y: 98.204520523671
            },{
                x: 3.4059853998289,
                y: 97.869602011863
            },{
                x: 3.1502469596731,
                y: 98.30244609944
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