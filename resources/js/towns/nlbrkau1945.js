var nlbrkau1945 = nlbrkau1945 ||  {
            
            name: "Berg en Dal",

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
                x: 0.7060918492726,
                y: 96.950360975542
            },{
                x: 0.37812759714382,
                y: 96.806883038107
            },{
                x: 0.31667661714705,
                y: 96.600191666449
            },{
                x: 0.15714090317507,
                y: 96.477969326373
            },{
                x: 0.12059175131192,
                y: 96.189299918554
            },{
                x: 0.33372705756398,
                y: 95.52031328877
            },{
                x: 2.751323851175,
                y: 95.526534758711
            },{
                x: 4.6843072717166,
                y: 95.821767989026
            },{
                x: 3.9809522749217,
                y: 96.467837531756
            },{
                x: 3.2947050715114,
                y: 96.7614818497
            },{
                x: 2.6270747452292,
                y: 96.863203750638
            },{
                x: 1.6868748291332,
                y: 97.113206791805
            },{
                x: 1.9495275458454,
                y: 97.62959410752
            },{
                x: 2.4022703159296,
                y: 97.977899418477
            },{
                x: 2.5859412486839,
                y: 98.49876847254
            },{
                x: 2.875473562611,
                y: 99.057631933434
            },{
                x: 2.1523164805271,
                y: 99.605403100767
            },{
                x: 1.7373158559377,
                y: 100
            },{
                x: 1.3528096226238,
                y: 99.824684337138
            },{
                x: 0.5457752525863,
                y: 99.075644563475
            },{
                x: 0.15951028143426,
                y: 98.523872084284
            },{
                x: 0.12567670176214,
                y: 97.616828995119
            },{
                x: 0.0064513005635342,
                y: 97.34231712224
            },{
                x: 0,
                y: 97.254863569427
            },{
                x: 0.5009968581603,
                y: 97.083605510104
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