var nlbrkau0762 = nlbrkau0762 ||  {
            
            name: "Deurne",

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
                x: 4.5780130183711,
                y: 99.639170320941
            },{
                x: 3.7080492074449,
                y: 100
            },{
                x: 3.0960138895912,
                y: 98.520638675931
            },{
                x: 2.6134865036465,
                y: 98.275769152898
            },{
                x: 1.8087195222015,
                y: 97.914895573408
            },{
                x: 1.7554977847676,
                y: 97.858723909921
            },{
                x: 1.7064096132605,
                y: 97.805864604755
            },{
                x: 1.6558253337946,
                y: 97.759302887214
            },{
                x: 1.5970432131645,
                y: 97.727915141203
            },{
                x: 1.5302368673674,
                y: 97.712919249646
            },{
                x: 1.4462363094606,
                y: 97.649946913758
            },{
                x: 1.2542839714896,
                y: 97.486081474583
            },{
                x: 1.0301322241529,
                y: 97.22581139715
            },{
                x: 0.44105937367368,
                y: 96.999818705382
            },{
                x: 0,
                y: 96.87906879992
            },{
                x: 0.034437213169471,
                y: 96.292138094159
            },{
                x: 0.44178082729476,
                y: 95.918552861663
            },{
                x: 0.12921286256825,
                y: 95.447526374281
            },{
                x: 0.31891753513918,
                y: 95.324061014745
            },{
                x: 0.81701456496783,
                y: 95.315412275815
            },{
                x: 1.1975629244776,
                y: 95.263520196273
            },{
                x: 1.829605604532,
                y: 95.159231182233
            },{
                x: 3.4887758360684,
                y: 94.689386820164
            },{
                x: 4.0838383086968,
                y: 96.748552110683
            },{
                x: 5.2876018415804,
                y: 98.528888770625
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