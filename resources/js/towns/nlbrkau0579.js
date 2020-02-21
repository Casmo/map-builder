var nlbrkau0579 = nlbrkau0579 ||  {
            
            name: "Oegstgeest",

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
                x: 0.85039373266491,
                y: 99.585171374749
            },{
                x: 0.38138815228603,
                y: 99.81343414364
            },{
                x: 0.24442952488736,
                y: 100
            },{
                x: 0.25259388852744,
                y: 99.66492571247
            },{
                x: 0.21697224574408,
                y: 99.453433970304
            },{
                x: 0,
                y: 99.341151537476
            },{
                x: 0.24759924953771,
                y: 99.311307741299
            },{
                x: 0.51932463480855,
                y: 99.276137831549
            },{
                x: 0.6797792938425,
                y: 98.869566027671
            },{
                x: 0.61583281096069,
                y: 98.79213097804
            },{
                x: 0.75605121495449,
                y: 98.632225074507
            },{
                x: 0.99519544327816,
                y: 98.571996869588
            },{
                x: 1.0771170209841,
                y: 98.610509230696
            },{
                x: 1.2733389111041,
                y: 98.560252796242
            },{
                x: 1.4168931297905,
                y: 98.884259572712
            },{
                x: 1.3154476676164,
                y: 98.987223076967
            },{
                x: 1.2863787960317,
                y: 99.036612123874
            },{
                x: 1.3223100410345,
                y: 99.104508388742
            },{
                x: 1.3768540109143,
                y: 99.227304266707
            },{
                x: 1.4092662231466,
                y: 99.354754298422
            },{
                x: 1.5311537363039,
                y: 99.365502469251
            },{
                x: 1.4008799735906,
                y: 99.56248865935
            },{
                x: 1.2838438467616,
                y: 99.464002999051
            },{
                x: 1.049058184469,
                y: 99.413554677229
            },{
                x: 0.9423481869864,
                y: 99.519380206352
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