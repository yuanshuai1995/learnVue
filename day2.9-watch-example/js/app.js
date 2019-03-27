var watchExampleVM = new Vue({
    el: "#watch-example",
    data: {
        question: "",
        answer: "正在等待你的输入完成...",
        img:null,
        ps:""
    },
    watch: {
        question: function (newQuestion, oldQuestion) {
            this.answer = "正在等待你的输入完成..."
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
        // 请参考：https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = '问题通常使用问号进行结尾~'
                this.ps = "Ps:请用英文状态下的问号结尾"
                return
            }
            this.answer = "I'm Thinking..."
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                    vm.img = _.capitalize(response.data.image)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        }
    }
})