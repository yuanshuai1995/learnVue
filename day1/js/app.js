var app = new Vue({
	el: "#app",
	data: {
		message: "Hello"
	}
});
var app2 = new Vue({
	el: "#app2",
	data: {
		message: "页面加载于" + new Date().toLocaleString()
	}
})
var app3 = new Vue({
	el: "#app3",
	data: {
		seen: true
	}
})
var app4 = new Vue({
	el: "#app4",
	data: {
		todos: [{
				text: "学习js"
			},
			{
				text: "学习vue"
			},
			{
				text: "学习整个项目"
			}
		]
	}
})
var app5 = new Vue({
	el: "#app5",
	data: {
		message: "abc def g"
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split("").reverse().join("")
		}
	}
})
var app6 = new Vue({
	el: "#app6",
	data: {
		message: "Hello Vue!"
	}
})
