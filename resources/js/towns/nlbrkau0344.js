var nlbrkau0344 = nlbrkau0344 ||  {
            
            name: "Utrecht",

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
                x: 1.1695201779354,
                y: 98.74110168358
            },{
                x: 0.74291297357996,
                y: 98.187647888692
            },{
                x: 0.54798269305427,
                y: 97.73817474272
            },{
                x: 0.094675735857714,
                y: 97.408130594889
            },{
                x: 0.17872663980862,
                y: 97.079083765719
            },{
                x: 0,
                y: 96.416562890532
            },{
                x: 0.44735704094811,
                y: 96.098490106988
            },{
                x: 0.89254712587605,
                y: 96.133782159066
            },{
                x: 1.4702173759224,
                y: 96.738307024631
            },{
                x: 1.8588216215135,
                y: 96.411265099819
            },{
                x: 2.7338010922003,
                y: 96.386328946977
            },{
                x: 3.481346680381,
                y: 96.2277244788
            },{
                x: 4.5693444157433,
                y: 96.925573871744
            },{
                x: 4.7942581011489,
                y: 97.481770735494
            },{
                x: 5.705532138806,
                y: 97.899760545808
            },{
                x: 4.8844577103675,
                y: 98.103505986128
            },{
                x: 4.8103260151595,
                y: 98.28125458255
            },{
                x: 4.8280133070823,
                y: 98.645327936998
            },{
                x: 4.0441939131866,
                y: 99.006374993997
            },{
                x: 3.3812649731633,
                y: 99.084907200366
            },{
                x: 2.8375471609755,
                y: 98.777633922832
            },{
                x: 2.484162049331,
                y: 98.819961018967
            },{
                x: 2.3067171575205,
                y: 100
            },{
                x: 1.7654457997522,
                y: 99.499695111507
            },{
                x: 1.4381736759714,
                y: 99.084425003697
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