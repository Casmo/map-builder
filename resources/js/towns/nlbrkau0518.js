var nlbrkau0518 = nlbrkau0518 ||  {
            
            name: "'s-Gravenhage",

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
                x: 3.7485769943674,
                y: 97.174673059683
            },{
                x: 4.5213116945517,
                y: 97.380340205965
            },{
                x: 3.5557280296838,
                y: 97.975552869636
            },{
                x: 3.9710154191118,
                y: 98.296787546314
            },{
                x: 3.8658905434701,
                y: 98.641715710411
            },{
                x: 4.0750329412999,
                y: 98.463704065439
            },{
                x: 4.8992591878059,
                y: 98.052577591852
            },{
                x: 5.6893941555587,
                y: 98.34004469432
            },{
                x: 5.5084359403229,
                y: 98.789717870482
            },{
                x: 5.039107003393,
                y: 98.768649203991
            },{
                x: 4.93024873502,
                y: 99.331273232444
            },{
                x: 4.6631518120988,
                y: 99.676358588406
            },{
                x: 3.8831161569785,
                y: 98.98961175606
            },{
                x: 3.8224509904942,
                y: 98.779411536249
            },{
                x: 3.7151197124473,
                y: 98.515404257614
            },{
                x: 3.354889614936,
                y: 98.645764463057
            },{
                x: 2.8797524573249,
                y: 98.921778863588
            },{
                x: 2.4439026016331,
                y: 99.311892962366
            },{
                x: 2.3930697061352,
                y: 100
            },{
                x: 2.1806618223651,
                y: 99.695248164958
            },{
                x: 1.8277080257991,
                y: 99.43221200634
            },{
                x: 1.3651537459838,
                y: 99.694545404028
            },{
                x: 0.85748162521859,
                y: 99.324051611556
            },{
                x: 0,
                y: 98.856863225559
            },{
                x: 3.4018113494542,
                y: 96.9552965877
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