var nlbrkau0899 = nlbrkau0899 ||  {
            
            name: "Brunssum",

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
                x: 0.8631395863146,
                y: 99.757122282002
            },{
                x: 0.61356801752499,
                y: 99.809999288955
            },{
                x: 0.43021966277468,
                y: 99.958243963503
            },{
                x: 0.29014736611492,
                y: 99.975863967916
            },{
                x: 0.17392482097733,
                y: 99.880414518065
            },{
                x: 0.1142299836618,
                y: 99.826857054433
            },{
                x: 0.059543020636268,
                y: 99.77813394874
            },{
                x: 0,
                y: 99.689650860014
            },{
                x: 0.14296356097362,
                y: 99.594803978982
            },{
                x: 0.20407016364839,
                y: 99.310683222265
            },{
                x: 0.45542330765698,
                y: 99.185999271734
            },{
                x: 0.52977611023376,
                y: 99.137478320445
            },{
                x: 0.65640134184665,
                y: 99.051024210507
            },{
                x: 0.75099013994786,
                y: 98.973778215958
            },{
                x: 0.93616107339635,
                y: 98.818306255949
            },{
                x: 1.0460792038515,
                y: 98.804363266663
            },{
                x: 1.2277884574973,
                y: 98.87006734227
            },{
                x: 1.5486118758714,
                y: 98.857870811256
            },{
                x: 1.8142703033171,
                y: 98.913593557433
            },{
                x: 2.1624046339848,
                y: 99.044518803907
            },{
                x: 2.1683005709696,
                y: 100
            },{
                x: 1.3566341053627,
                y: 99.950350736828
            },{
                x: 1.1340500923156,
                y: 99.892401459924
            },{
                x: 1.0401513464368,
                y: 99.845118217559
            },{
                x: 0.91122550822288,
                y: 99.774640678159
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