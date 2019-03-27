// var data = {
// 	a: 1
// }
// var vm = new Vue({
// 	el:"#app",
// 	data:data
// })
// 
var data = {
	newTodoText: "",
	visitCount: 0,
	hideCompletedTodos: false,
	todos: [],
	error: null
}
var vm = new Vue({
	el:"#app",
	data:data
})

// alert(data.newTodoText==vm.newTodoText);