var vm = new Vue({
    el: "#demo",
    data: {
        firstName: "Foo",
        lastName: "Bar",
        // fullName: "Foo Bar"
    },
    // watch: {
    //     firstName: function (val) {
    //         this.fullName = val + '' + this.lastName
    //     },
    //     lastName: function (val) {
    //         this.fullName = this.firstName + '' + val
    //     }
    // }，
    computed: {
        // fullName: function () {
        //     return this.firstName + ' ' + this.lastName
        // }
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }

        }
    }
})