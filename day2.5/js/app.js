var data = {
    msg: "hello",
    list: [1, 2, 3, 4]
}
Vue.component('mcn', {
    comment:"",
})
var app = new Vue({
    el: "#app",
    data: data,
    component:"mcn"
})