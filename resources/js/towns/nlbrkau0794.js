var nlbrkau0794 = nlbrkau0794 ||  {
            
            name: "Helmond",

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
                x: 0.32614115439923,
                y: 97.78297654863
            },{
                x: 1.021700559351,
                y: 97.807164269932
            },{
                x: 1.3395315022918,
                y: 97.928039504043
            },{
                x: 1.5918266882589,
                y: 97.986429555435
            },{
                x: 1.7931348264076,
                y: 97.791233370003
            },{
                x: 1.9625477075805,
                y: 97.699409954134
            },{
                x: 2.094752267035,
                y: 97.600896325011
            },{
                x: 2.5858745531513,
                y: 97.858005925454
            },{
                x: 2.868512832746,
                y: 97.576807733715
            },{
                x: 3.3729557997676,
                y: 97.925222795749
            },{
                x: 3.8195054874009,
                y: 98.400732791658
            },{
                x: 4.0744295673182,
                y: 98.709956452047
            },{
                x: 4.0433655391008,
                y: 98.914189399572
            },{
                x: 3.7105021497566,
                y: 99.160885038919
            },{
                x: 3.9483345262621,
                y: 99.688302337906
            },{
                x: 3.7166799207818,
                y: 100
            },{
                x: 3.0946506536662,
                y: 99.995031462518
            },{
                x: 2.8370885967495,
                y: 99.69302340441
            },{
                x: 2.5049347233046,
                y: 99.329201769368
            },{
                x: 2.0004938324085,
                y: 99.376977121404
            },{
                x: 1.1793638676122,
                y: 99.604572178901
            },{
                x: 0.67096691952188,
                y: 99.527507450646
            },{
                x: 0.26773922425649,
                y: 99.209657355579
            },{
                x: 0.72299203010445,
                y: 98.886068341273
            },{
                x: 0,
                y: 98.140474043367
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