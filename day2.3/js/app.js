var data = {
	a: 1,
	message: ""
}
var vm = new Vue({
	el: "#app",
	data: data
})
vm.$data === data
vm.$el == document.getElementById("app");

vm.$watch('a', function(newVal, oldVal) {
	data.message += "<p>";
	data.message += "newVal:" + newVal;
	data.message += ",";
	data.message += "oldVal:" + oldVal;
	data.message += "</p>";
	data.messagethis.doFilterTutor
});