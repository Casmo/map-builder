var nlbrkau0088 = nlbrkau0088 ||  {
            
            name: "Schiermonnikoog",

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
                x: 3.5182051749479,
                y: 100
            },{
                x: 1.1237756065916,
                y: 99.544619767817
            },{
                x: 0,
                y: 97.839231056479
            },{
                x: 0.56693538348652,
                y: 97.127864933272
            },{
                x: 1.4840005137892,
                y: 96.737661263453
            },{
                x: 2.100343013567,
                y: 96.177429808486
            },{
                x: 3.3133925369074,
                y: 96.435339529685
            },{
                x: 4.3726870582938,
                y: 96.301860269431
            },{
                x: 5.4305581361147,
                y: 96.169072440965
            },{
                x: 6.4886121724978,
                y: 96.036772473739
            },{
                x: 7.6317323382152,
                y: 95.524117402724
            },{
                x: 7.6238492895842,
                y: 96.001189050252
            },{
                x: 8.4036428165648,
                y: 96.168886572205
            },{
                x: 8.7838576984117,
                y: 96.80941687185
            },{
                x: 7.9977745491431,
                y: 97.039152783427
            },{
                x: 7.6005977217299,
                y: 97.410350398936
            },{
                x: 5.5934924675765,
                y: 99.401900528959
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