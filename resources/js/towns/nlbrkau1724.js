var nlbrkau1724 = nlbrkau1724 ||  {
            
            name: "Bergeijk",

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
                x: 2.3393058404227,
                y: 97.089482857314
            },{
                x: 2.3663647629802,
                y: 96.680372263192
            },{
                x: 2.8087014728852,
                y: 96.396447996307
            },{
                x: 3.2048210333731,
                y: 96.271171035923
            },{
                x: 3.5907989801708,
                y: 95.982674751578
            },{
                x: 4.3038640160616,
                y: 95.86355836699
            },{
                x: 4.3781581680922,
                y: 95.9712701985
            },{
                x: 4.3274947363406,
                y: 96.108120587006
            },{
                x: 4.2233056742807,
                y: 96.269558403158
            },{
                x: 4.2307462486585,
                y: 96.48017673917
            },{
                x: 4.2382226362017,
                y: 96.72959951577
            },{
                x: 4.3000387547757,
                y: 96.889537282519
            },{
                x: 4.3689186309442,
                y: 97.174061285936
            },{
                x: 4.2746202309012,
                y: 97.362636649119
            },{
                x: 4.4398022277631,
                y: 98.237989999793
            },{
                x: 3.6243390475964,
                y: 98.359979030322
            },{
                x: 3.5871566774471,
                y: 98.518947447233
            },{
                x: 3.5272059576602,
                y: 98.980793079978
            },{
                x: 2.3129608455312,
                y: 99.644250379679
            },{
                x: 2.3055817763722,
                y: 99.711191102102
            },{
                x: 2.2619561506458,
                y: 99.837497598399
            },{
                x: 2.229158817128,
                y: 99.933824702832
            },{
                x: 0,
                y: 100
            },{
                x: 1.3693534884119,
                y: 98.032515802987
            },{
                x: 1.7001869460208,
                y: 97.697698545399
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