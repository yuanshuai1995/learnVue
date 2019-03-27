new Vue({
    el: "#app",
    data: {
        a: 1
    },
    created: function () {
        alert("this.a=" + this.a)
    }
})