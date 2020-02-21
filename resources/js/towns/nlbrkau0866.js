var nlbrkau0866 = nlbrkau0866 ||  {
            
            name: "Waalre",

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
                x: 1.7666683781727,
                y: 99.756722221623
            },{
                x: 0.55616470376136,
                y: 100
            },{
                x: 0.37381055362341,
                y: 99.894470798786
            },{
                x: 0.34467446747478,
                y: 99.866728558722
            },{
                x: 0.2951116417688,
                y: 99.828816288181
            },{
                x: 0.24262070052084,
                y: 99.807105046834
            },{
                x: 0.18202845794571,
                y: 99.772165968383
            },{
                x: 0.15110638481134,
                y: 99.714127120439
            },{
                x: 0.1654980869736,
                y: 99.638515000799
            },{
                x: 0.19450804849638,
                y: 99.543122196665
            },{
                x: 0.15578311707955,
                y: 99.487651523931
            },{
                x: 0.098306619891053,
                y: 99.381242543919
            },{
                x: 0.074585328635947,
                y: 99.32375174329
            },{
                x: 0.043436438787629,
                y: 99.282547294465
            },{
                x: 0.015997585258396,
                y: 99.2051465863
            },{
                x: 0,
                y: 99.15200971712
            },{
                x: 0.057487396847549,
                y: 99.08828151494
            },{
                x: 0.11957678544428,
                y: 99.003310106654
            },{
                x: 0.11410593516148,
                y: 98.931127531162
            },{
                x: 0.16324055997726,
                y: 98.834357173991
            },{
                x: 0.23362536763804,
                y: 98.736131729956
            },{
                x: 0.45744104215481,
                y: 98.683638143702
            },{
                x: 1.160514464425,
                y: 98.630898502614
            },{
                x: 1.7762953722474,
                y: 98.639058672232
            },{
                x: 2.558640717018,
                y: 99.572630721003
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