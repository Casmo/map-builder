var nlbrkau0388 = nlbrkau0388 ||  {
            
            name: "Enkhuizen",

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
                x: 0.46770307112556,
                y: 97.875027609477
            },{
                x: 0.85777435891808,
                y: 99.855033342306
            },{
                x: 0.12656839767657,
                y: 100
            },{
                x: 0.11965619724574,
                y: 99.706317092161
            },{
                x: 0.11677816823212,
                y: 99.620263042602
            },{
                x: 0.11357704218315,
                y: 99.55420174494
            },{
                x: 0.098078505598633,
                y: 99.235233250991
            },{
                x: 0.093580060610169,
                y: 99.181813153223
            },{
                x: 0.088069504426649,
                y: 99.108311794625
            },{
                x: 0.08303775469309,
                y: 99.02542636488
            },{
                x: 0.080571836596844,
                y: 98.971947143145
            },{
                x: 0.079594500504384,
                y: 98.93719251731
            },{
                x: 0.078719413594195,
                y: 98.902745902564
            },{
                x: 0.076632128891178,
                y: 98.847813364144
            },{
                x: 0.055350025616143,
                y: 98.643711763875
            },{
                x: 0.044953567517441,
                y: 98.461293082095
            },{
                x: 0.031601225697816,
                y: 98.231680020918
            },{
                x: 0.021273020225835,
                y: 98.081326709542
            },{
                x: 0,
                y: 97.959883602114
            },{
                x: 0.022994906835877,
                y: 97.89836883134
            },{
                x: 0.096468729767107,
                y: 97.946031245976
            },{
                x: 0.17926747050875,
                y: 97.954616612509
            },{
                x: 0.30833163058602,
                y: 97.951417899659
            },{
                x: 0.37852439663542,
                y: 97.945855998288
            },{
                x: 0.43341819366673,
                y: 97.927555537196
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