var nlbrkau0072 = nlbrkau0072 ||  {
            
            name: "Harlingen",

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
                x: 8.1753774860095,
                y: 95.424666995051
            },{
                x: 5.9435560378914,
                y: 98.141027047183
            },{
                x: 2.833470428985,
                y: 100
            },{
                x: 0,
                y: 97.709858964768
            },{
                x: 9.090872805897,
                y: 93.473418876769
            },{
                x: 9.4089108423593,
                y: 93.708892999511
            },{
                x: 9.617918032514,
                y: 93.734024226042
            },{
                x: 10.220811650635,
                y: 93.692402369088
            },{
                x: 10.156339907995,
                y: 93.960189333212
            },{
                x: 10.032627220982,
                y: 94.223036082713
            },{
                x: 9.9660879168313,
                y: 94.518288784994
            },{
                x: 10.371205664875,
                y: 94.548038761701
            },{
                x: 10.335749852618,
                y: 94.618714561112
            },{
                x: 10.268767295667,
                y: 94.696434609508
            },{
                x: 10.121500185988,
                y: 94.810385612747
            },{
                x: 10.094294637065,
                y: 94.921902620319
            },{
                x: 10.03766234442,
                y: 95.167844163553
            },{
                x: 9.8861088140728,
                y: 95.470964601936
            },{
                x: 9.7757941436417,
                y: 95.55403519237
            },{
                x: 9.7045448892141,
                y: 95.653728822591
            },{
                x: 9.5428025133212,
                y: 95.689387655689
            },{
                x: 9.2518205447439,
                y: 95.515061522701
            },{
                x: 8.9529492991591,
                y: 95.438555462835
            },{
                x: 8.7499291359966,
                y: 95.361967266677
            },{
                x: 8.4412780415949,
                y: 95.357232746816
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