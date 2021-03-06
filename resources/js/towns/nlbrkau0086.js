var nlbrkau0086 = nlbrkau0086 ||  {
            
            name: "Opsterland",

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
                x: 9.3554337414853,
                y: 95.127440897593
            },{
                x: 10.025642356158,
                y: 96.224975037295
            },{
                x: 9.0087573699699,
                y: 96.754288197634
            },{
                x: 7.4534227401221,
                y: 97.399218099338
            },{
                x: 6.6272036726245,
                y: 97.90405110486
            },{
                x: 5.4469465520038,
                y: 98.280284524641
            },{
                x: 4.8942352235431,
                y: 98.632534501738
            },{
                x: 4.4263245398647,
                y: 99.115309310895
            },{
                x: 3.7709892884769,
                y: 99.593989696795
            },{
                x: 2.6578587560159,
                y: 100
            },{
                x: 0.90488112812405,
                y: 99.431059265993
            },{
                x: 1.1844724339903,
                y: 98.600407175081
            },{
                x: 1.4193888921912,
                y: 97.976648610231
            },{
                x: 0.32871165731897,
                y: 97.232604280765
            },{
                x: 0.71732031467679,
                y: 96.905597051455
            },{
                x: 0.19739256540226,
                y: 96.394439905628
            },{
                x: 0,
                y: 95.970455208242
            },{
                x: 0.57199853461869,
                y: 95.921060850798
            },{
                x: 1.5692511587797,
                y: 95.893136282331
            },{
                x: 2.569246863795,
                y: 96.152508525145
            },{
                x: 3.5303992982384,
                y: 96.191256320016
            },{
                x: 4.6413633937106,
                y: 95.938529681952
            },{
                x: 5.3586779990421,
                y: 95.047480865112
            },{
                x: 6.3663133269703,
                y: 94.379433138093
            },{
                x: 8.0979486439468,
                y: 94.736999315762
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