var nlbrkau0638 = nlbrkau0638 ||  {
            
            name: "Zoeterwoude",

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
                x: 1.4672381357893,
                y: 98.759454895996
            },{
                x: 1.4820977447425,
                y: 99.032401930934
            },{
                x: 1.4944815740031,
                y: 99.282384083992
            },{
                x: 1.4899880598128,
                y: 100
            },{
                x: 1.1201880616787,
                y: 99.966668597814
            },{
                x: 0.8594700344433,
                y: 99.815759804372
            },{
                x: 0.68264746125986,
                y: 99.69008101343
            },{
                x: 0.54689454376175,
                y: 99.730944879879
            },{
                x: 0.53620613051062,
                y: 99.831214172203
            },{
                x: 0.31863699867714,
                y: 99.677542483898
            },{
                x: 0.22174681542779,
                y: 99.395613208371
            },{
                x: 0,
                y: 99.092870526116
            },{
                x: 0.10803119186564,
                y: 98.555175923825
            },{
                x: 0.48621458488303,
                y: 98.299940588555
            },{
                x: 0.68571234157102,
                y: 98.161186903946
            },{
                x: 0.89212541287809,
                y: 98.012714938457
            },{
                x: 0.97611351403178,
                y: 97.842070069024
            },{
                x: 1.1750694019569,
                y: 97.754971260016
            },{
                x: 1.3672311690905,
                y: 97.955615347313
            },{
                x: 1.6858110743157,
                y: 97.983631611035
            },{
                x: 1.8293689262218,
                y: 98.09687595895
            },{
                x: 1.7658885335211,
                y: 98.212083435006
            },{
                x: 1.7391233827258,
                y: 98.369653410771
            },{
                x: 1.6198907150878,
                y: 98.616823103964
            },{
                x: 1.5145317562928,
                y: 98.726135176989
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