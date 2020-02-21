var nlbrkau0873 = nlbrkau0873 ||  {
            
            name: "Woensdrecht",

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
                x: 1.8859020838734,
                y: 99.528605315456
            },{
                x: 1.39179718392,
                y: 99.254463055883
            },{
                x: 0.73636331656952,
                y: 99.278514119391
            },{
                x: 0.10632773086968,
                y: 98.76199368624
            },{
                x: 0,
                y: 98.005476323853
            },{
                x: 0.28798949314393,
                y: 97.564811232891
            },{
                x: 0.090887066284237,
                y: 97.180625462468
            },{
                x: 0.63714579660295,
                y: 96.860546358423
            },{
                x: 0.86064304536681,
                y: 96.52902127912
            },{
                x: 0.89758484447051,
                y: 96.100019187321
            },{
                x: 1.1983892224379,
                y: 96.292207485162
            },{
                x: 1.4307001431009,
                y: 96.305402042908
            },{
                x: 1.9623761677087,
                y: 96.232884903649
            },{
                x: 2.8757670748576,
                y: 96.471799191612
            },{
                x: 3.0634835977195,
                y: 96.671482071892
            },{
                x: 3.4089358337203,
                y: 97.027952863003
            },{
                x: 3.313855772416,
                y: 97.337082703923
            },{
                x: 3.3924500994471,
                y: 97.469781315385
            },{
                x: 3.2551899148154,
                y: 97.589474424182
            },{
                x: 4.2559078519989,
                y: 99.241093250449
            },{
                x: 4.1927015078679,
                y: 99.703043677771
            },{
                x: 3.4159059061502,
                y: 100
            },{
                x: 2.7284880274577,
                y: 99.982747838714
            },{
                x: 2.5441472847048,
                y: 99.956276232897
            },{
                x: 1.9816815399651,
                y: 99.929620174463
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