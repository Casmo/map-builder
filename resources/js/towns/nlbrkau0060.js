var nlbrkau0060 = nlbrkau0060 ||  {
            
            name: "Ameland",

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
                x: 0,
                y: 94.746050947357
            },{
                x: 3.8126226122432,
                y: 94.723981775883
            },{
                x: 7.4262875199514,
                y: 94.612967145017
            },{
                x: 10.555956182904,
                y: 94.313014618376
            },{
                x: 11.725279388429,
                y: 94.638988771417
            },{
                x: 11.423938851044,
                y: 95.432154496776
            },{
                x: 10.53730712583,
                y: 96.221499114465
            },{
                x: 9.3603697299289,
                y: 96.850386240948
            },{
                x: 8.18701391008,
                y: 97.161791469526
            },{
                x: 6.2295524505282,
                y: 98.106267110812
            },{
                x: 5.0636693850027,
                y: 97.464990149805
            },{
                x: 3.8882436680021,
                y: 98.414797569236
            },{
                x: 1.9304092844022,
                y: 100
            },{
                x: 1.5458994178687,
                y: 99.242642156782
            },{
                x: 1.5529247671408,
                y: 97.413557962681
            },{
                x: 1.3158141037721,
                y: 96.103865785563
            },{
                x: 0.78000062050202,
                y: 95.224787978974
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