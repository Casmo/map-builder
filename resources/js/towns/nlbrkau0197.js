var nlbrkau0197 = nlbrkau0197 ||  {
            
            name: "Aalten",

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
                x: 0.2273681848114,
                y: 98.316602218238
            },{
                x: 0.49024019228244,
                y: 97.970696915518
            },{
                x: 0.65069433228501,
                y: 97.480903347947
            },{
                x: 0.92513061846442,
                y: 96.925675834035
            },{
                x: 1.3223982763694,
                y: 96.623719819179
            },{
                x: 1.9719180406368,
                y: 95.856574658114
            },{
                x: 3.2670256469366,
                y: 95.878313868283
            },{
                x: 4.4360677969691,
                y: 96.161695044354
            },{
                x: 4.3350770062856,
                y: 96.415754626953
            },{
                x: 4.2909720550779,
                y: 97.054626623224
            },{
                x: 4.9456029808803,
                y: 97.355981131368
            },{
                x: 5.0774909311917,
                y: 97.683824239045
            },{
                x: 4.9357465749346,
                y: 98.039126004164
            },{
                x: 2.503498044439,
                y: 98.905335319917
            },{
                x: 2.2568231897927,
                y: 98.966105553545
            },{
                x: 2.0873098760474,
                y: 98.979938791753
            },{
                x: 1.8146990232387,
                y: 99.108674681252
            },{
                x: 1.2296406209842,
                y: 99.33683053135
            },{
                x: 0.87663310467017,
                y: 99.518870394896
            },{
                x: 0.49717886331373,
                y: 99.856281672302
            },{
                x: 0,
                y: 100
            },{
                x: 0.11456294229339,
                y: 99.563560679551
            },{
                x: 0.27197997016372,
                y: 99.389284111566
            },{
                x: 0.37922405093845,
                y: 98.985854374822
            },{
                x: 0.31650066550852,
                y: 98.764993785044
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