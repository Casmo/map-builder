var nlbrkau0772 = nlbrkau0772 ||  {
            
            name: "Eindhoven",

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
                x: 4.2572521432784,
                y: 99.187256098588
            },{
                x: 2.7889803564918,
                y: 100
            },{
                x: 1.7665331704976,
                y: 99.983152147522
            },{
                x: 1.767860852773,
                y: 99.767795397255
            },{
                x: 1.6992571012998,
                y: 99.109785999419
            },{
                x: 1.2116356818556,
                y: 98.918591833917
            },{
                x: 0.84177884978519,
                y: 98.944777024826
            },{
                x: 0,
                y: 98.448144903031
            },{
                x: 0.67588474186708,
                y: 97.737216722026
            },{
                x: 0.91119384730858,
                y: 97.524576841976
            },{
                x: 0.95336929935344,
                y: 97.309811331384
            },{
                x: 2.7017636206259,
                y: 96.745821079036
            },{
                x: 3.9041748172435,
                y: 96.749229027005
            },{
                x: 3.9236722311113,
                y: 97.021910889178
            },{
                x: 3.8359530728676,
                y: 97.35853585322
            },{
                x: 3.8375000459018,
                y: 97.721817937804
            },{
                x: 4.095532085735,
                y: 97.949326964618
            },{
                x: 4.1461815036394,
                y: 97.996751113205
            },{
                x: 4.3860458880057,
                y: 98.113658314817
            },{
                x: 4.4280734161066,
                y: 98.172008006136
            },{
                x: 4.4919342588104,
                y: 98.330117178322
            },{
                x: 4.5629242570627,
                y: 98.393208116181
            },{
                x: 4.605157321591,
                y: 98.553137386073
            },{
                x: 4.7141310744465,
                y: 98.760940429933
            },{
                x: 4.7547063527404,
                y: 98.854229907775
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