var nlbrkau0851 = nlbrkau0851 ||  {
            
            name: "Steenbergen",

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
                x: 1.5943242672695,
                y: 99.067175674697
            },{
                x: 1.3857925098607,
                y: 99.310424068108
            },{
                x: 1.3266621191732,
                y: 99.588728725798
            },{
                x: 1.2487453876114,
                y: 99.77983332026
            },{
                x: 0,
                y: 97.814081774126
            },{
                x: 1.7962656237043,
                y: 96.43918435775
            },{
                x: 3.6845059439539,
                y: 96.125563927588
            },{
                x: 4.9358745161703,
                y: 96.237608802439
            },{
                x: 5.2662743230595,
                y: 96.450506066466
            },{
                x: 5.4698482927066,
                y: 96.691164688487
            },{
                x: 5.7498389932213,
                y: 96.91400469205
            },{
                x: 6.1360372688408,
                y: 97.124566382344
            },{
                x: 6.4048711302821,
                y: 97.45376792513
            },{
                x: 6.2645525532315,
                y: 97.620373600881
            },{
                x: 6.1789756970173,
                y: 98.022704764745
            },{
                x: 6.4085217375079,
                y: 98.819530157479
            },{
                x: 6.5256022415201,
                y: 99.176853112599
            },{
                x: 6.4904440937609,
                y: 99.500131637566
            },{
                x: 6.0236815074997,
                y: 99.721970428075
            },{
                x: 4.8661496569118,
                y: 100
            },{
                x: 4.229978082213,
                y: 99.901502302486
            },{
                x: 2.770700071215,
                y: 99.670091801891
            },{
                x: 2.7026091227473,
                y: 99.454531835113
            },{
                x: 2.242887197184,
                y: 99.31772676318
            },{
                x: 1.990071941772,
                y: 99.159002276889
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