var nlbrkau0301 = nlbrkau0301 ||  {
            
            name: "Zutphen",

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
                x: 2.5322822273106,
                y: 98.039350816855
            },{
                x: 2.8726409488434,
                y: 98.013484612141
            },{
                x: 3.4807991022729,
                y: 97.939749589959
            },{
                x: 3.692627487505,
                y: 97.943508741376
            },{
                x: 3.9674992410139,
                y: 97.922091349688
            },{
                x: 4.5383382595251,
                y: 97.853095803868
            },{
                x: 4.6261186634719,
                y: 98.450075459884
            },{
                x: 3.9446156664095,
                y: 98.716616572263
            },{
                x: 3.2750568790272,
                y: 99.250177453331
            },{
                x: 2.2281918616632,
                y: 99.365138520517
            },{
                x: 2.0459062236677,
                y: 99.892772489373
            },{
                x: 2.0262990346626,
                y: 100
            },{
                x: 2.0352850249805,
                y: 99.771381071162
            },{
                x: 1.2498384677021,
                y: 99.126723068902
            },{
                x: 1.1201042381105,
                y: 98.557835440254
            },{
                x: 0.89342740310007,
                y: 98.212639625144
            },{
                x: 0.71214894550147,
                y: 98.040416818448
            },{
                x: 0.3668547545565,
                y: 98.091006754563
            },{
                x: 0,
                y: 97.959327057942
            },{
                x: 0.21507674313673,
                y: 97.618659713896
            },{
                x: 0.681754467767,
                y: 97.730373565336
            },{
                x: 1.0125565239773,
                y: 97.817982539836
            },{
                x: 1.370419319355,
                y: 97.224930556245
            },{
                x: 1.7215206929183,
                y: 97.313762016132
            },{
                x: 2.0326999891821,
                y: 97.613216768532
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