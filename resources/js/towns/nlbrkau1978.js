var nlbrkau1978 = nlbrkau1978 ||  {
            
            name: "Molenlanden",

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
                x: 8.1349265157316,
                y: 98.909159967945
            },{
                x: 8.0283449785161,
                y: 99.681727540302
            },{
                x: 6.9159361591919,
                y: 99.921025603
            },{
                x: 5.7850858953469,
                y: 100
            },{
                x: 5.5159593002061,
                y: 99.021097569968
            },{
                x: 4.9642746158192,
                y: 99.340850607103
            },{
                x: 4.3435504531138,
                y: 99.570410562919
            },{
                x: 3.8765223823006,
                y: 99.554101906863
            },{
                x: 3.6301057457669,
                y: 99.59732329726
            },{
                x: 3.3368107138354,
                y: 99.588178200233
            },{
                x: 2.4458811492616,
                y: 99.662158215142
            },{
                x: 1.4541154653562,
                y: 99.062002504562
            },{
                x: 1.362526149612,
                y: 98.499688965447
            },{
                x: 0.78686195585741,
                y: 98.433454190276
            },{
                x: 0,
                y: 98.228868269124
            },{
                x: 4.0612256684738,
                y: 97.001734038699
            },{
                x: 7.9203641326945,
                y: 95.899287653198
            },{
                x: 8.5482501499255,
                y: 96.912081569946
            },{
                x: 9.0435433722281,
                y: 97.718867404002
            },{
                x: 9.7083444584466,
                y: 98.137101853007
            },{
                x: 10.078242293996,
                y: 98.396105898659
            },{
                x: 10.351450032894,
                y: 98.438866334531
            },{
                x: 10.445866772092,
                y: 98.912669170133
            },{
                x: 9.5788770109855,
                y: 98.991565679272
            },{
                x: 8.8204356565165,
                y: 98.985293936256
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