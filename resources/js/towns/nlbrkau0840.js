var nlbrkau0840 = nlbrkau0840 ||  {
            
            name: "Rucphen",

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
                x: 2.6471545123077,
                y: 96.924441665468
            },{
                x: 2.9538078549197,
                y: 97.096914421392
            },{
                x: 3.2283422380304,
                y: 97.182930943164
            },{
                x: 3.333689778135,
                y: 97.196638144651
            },{
                x: 3.4647986623419,
                y: 97.356425800249
            },{
                x: 3.7655807219599,
                y: 97.546132661636
            },{
                x: 3.7817965599145,
                y: 98.003477792139
            },{
                x: 3.4873466831578,
                y: 98.258538587792
            },{
                x: 3.3962592707601,
                y: 98.413707139177
            },{
                x: 3.2037873823756,
                y: 98.756251580681
            },{
                x: 2.2461851225857,
                y: 98.704149557949
            },{
                x: 2.4854910291849,
                y: 99.145948625365
            },{
                x: 2.0959522675904,
                y: 99.464523785615
            },{
                x: 1.4215864710629,
                y: 100
            },{
                x: 0.305218739872,
                y: 99.793249504375
            },{
                x: 0,
                y: 99.308446424502
            },{
                x: 0.32749063599264,
                y: 98.456495543873
            },{
                x: 0.71209652333187,
                y: 97.999590833822
            },{
                x: 0.43544708733927,
                y: 97.500440455856
            },{
                x: 0.12940153047562,
                y: 97.248015456237
            },{
                x: 0.46127486745853,
                y: 96.634471530365
            },{
                x: 1.1201782000825,
                y: 96.728372781954
            },{
                x: 1.0079854145953,
                y: 97.310766519792
            },{
                x: 1.3770585092788,
                y: 97.155746309379
            },{
                x: 2.3059697523303,
                y: 96.959078043368
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