var nlbrkau0597 = nlbrkau0597 ||  {
            
            name: "Ridderkerk",

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
                x: 1.7541423343133,
                y: 98.268898735457
            },{
                x: 2.2081172848986,
                y: 99.01632870864
            },{
                x: 2.3903232515769,
                y: 99.300511067575
            },{
                x: 2.4355121998261,
                y: 99.428760511976
            },{
                x: 2.2696544241048,
                y: 99.583633443524
            },{
                x: 2.0493671249234,
                y: 99.524916971186
            },{
                x: 1.937026675008,
                y: 99.468432340111
            },{
                x: 1.7824567937841,
                y: 99.56487344405
            },{
                x: 1.4696988635717,
                y: 99.65063789238
            },{
                x: 1.1800064284632,
                y: 100
            },{
                x: 0.56298218096494,
                y: 99.756979251566
            },{
                x: 0.35618372885667,
                y: 99.544915033619
            },{
                x: 0.23628722008103,
                y: 99.321360939982
            },{
                x: 0,
                y: 98.88835966054
            },{
                x: 0.0097780322069575,
                y: 98.754751531279
            },{
                x: 0.13300282972017,
                y: 98.697032023566
            },{
                x: 0.26155782001163,
                y: 98.629488732324
            },{
                x: 0.45255358314547,
                y: 98.610955669756
            },{
                x: 0.48459468793959,
                y: 98.457190516017
            },{
                x: 0.5192680603879,
                y: 98.330223389042
            },{
                x: 0.54360881559751,
                y: 98.229593688342
            },{
                x: 0.55388330132143,
                y: 98.189490290648
            },{
                x: 0.56554463889826,
                y: 98.142832275387
            },{
                x: 0.62926119087781,
                y: 97.902143206293
            },{
                x: 0.80052986875734,
                y: 97.808842753344
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