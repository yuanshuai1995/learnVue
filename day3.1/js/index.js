var app = new Vue({
	el: "#app",
	data: {
		isActive: true,
		hasError: true,
		error: null
		// 		classObject:{
		// 			active:true,
		// 			'text-danger':false
		// 		}
	},
	computed: {
		classObject: function() {
			return {
				active: this.isActive && !this.error,
				'text-danger': this.error && this.error.type === 'fatal'
			}
		}
	}
})
