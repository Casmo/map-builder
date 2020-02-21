var nlbrkau0222 = nlbrkau0222 ||  {
            
            name: "Doetinchem",

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
                x: 2.74661078671,
                y: 99.30462213051
            },{
                x: 1.4614408147671,
                y: 99.340691999094
            },{
                x: 1.0922592425248,
                y: 99.325764082398
            },{
                x: 0.93801868671279,
                y: 99.146560399112
            },{
                x: 0.62391361054824,
                y: 98.954939974587
            },{
                x: 0.22423557090487,
                y: 98.690542548574
            },{
                x: 0,
                y: 97.977525910778
            },{
                x: 0.90962351786208,
                y: 98.01762612215
            },{
                x: 2.019679827447,
                y: 97.906920564479
            },{
                x: 2.2463371987806,
                y: 97.916858347513
            },{
                x: 2.499320879876,
                y: 98.082435195423
            },{
                x: 2.6564594474099,
                y: 97.743624414763
            },{
                x: 3.4579536764751,
                y: 97.76454898871
            },{
                x: 4.1471866079107,
                y: 97.55504905158
            },{
                x: 4.8392840735441,
                y: 97.789935829041
            },{
                x: 5.05846895007,
                y: 98.185419941822
            },{
                x: 5.7617603655206,
                y: 98.387497165767
            },{
                x: 6.2418503800951,
                y: 98.17737129346
            },{
                x: 6.6437356006908,
                y: 97.975039871858
            },{
                x: 6.468435346551,
                y: 98.924888005398
            },{
                x: 5.3797472994505,
                y: 100
            },{
                x: 5.153528250119,
                y: 99.953130979442
            },{
                x: 4.8545106376844,
                y: 99.918961928711
            },{
                x: 4.4955669594536,
                y: 99.590218508164
            },{
                x: 3.9922256365404,
                y: 99.282004557686
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