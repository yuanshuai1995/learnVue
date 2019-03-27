var app = new Vue({
    el: "#app",
    data: {
        message: "Hello",
        flag: false,
        nowTemp: 1234
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        },
        // now: function () {
        //     app.nowTemp = Date.now()
        //     console.log(app.nowTemp)
        //     return app.nowTemp
        // }
    },
    methods: {
        now: function () {
            app.nowTemp = Date.now()
            return
        }
    }
})