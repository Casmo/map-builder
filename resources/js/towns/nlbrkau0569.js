var nlbrkau0569 = nlbrkau0569 ||  {
            
            name: "Nieuwkoop",

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
                x: 0.95976194937079,
                y: 98.079185855462
            },{
                x: 0,
                y: 98.550108256338
            },{
                x: 0.068646831077901,
                y: 96.608723219551
            },{
                x: 0.98073081720673,
                y: 96.269459627188
            },{
                x: 2.0900903271612,
                y: 95.74758192532
            },{
                x: 2.4501935214996,
                y: 96.078663751886
            },{
                x: 2.5104995182675,
                y: 96.606813904841
            },{
                x: 2.9209191718787,
                y: 96.824655277885
            },{
                x: 3.1737258632728,
                y: 97.07311012079
            },{
                x: 3.4954835381347,
                y: 97.370492702042
            },{
                x: 4.1187737919931,
                y: 97.636870957983
            },{
                x: 4.8290241206989,
                y: 98.095201369931
            },{
                x: 4.2645510220889,
                y: 98.950313081588
            },{
                x: 3.6532031613008,
                y: 98.898579256018
            },{
                x: 3.3203683186826,
                y: 98.713834205434
            },{
                x: 3.018216794763,
                y: 98.807615084873
            },{
                x: 2.7311096549686,
                y: 98.934659391638
            },{
                x: 2.6853840282703,
                y: 99.184197583887
            },{
                x: 2.5497465952547,
                y: 99.383813197379
            },{
                x: 2.3193106754595,
                y: 99.443231014505
            },{
                x: 2.1550439904399,
                y: 99.590198328127
            },{
                x: 1.9498291030783,
                y: 99.667819600554
            },{
                x: 1.6825689447875,
                y: 99.808962672327
            },{
                x: 1.2406573215845,
                y: 100
            },{
                x: 1.2419925298149,
                y: 99.618218486242
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