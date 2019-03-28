var app = new Vue({
	el: "#app",
	data: {
		title: "袁帅的博客",
		desc: "技术/划水博客",
		articles: [{
			articleTitle: "欢迎使用 Typecho",
			author: "yuanshuai1995",
			articleTime: "2019-03-14",
			classification: "默认分类",
			comment: "1条评论",
			content:"如果您看到这篇文章,表示您的 blog 已经安装成功."
		}, {
			articleTitle: "欢迎使用 Typecho2",
			author: "yuanshuai1995",
			articleTime: "2019-03-15",
			classification: "默认分类",
			comment: "2条评论",
			content:"如果您看到这篇文章,表示您的 blog 已经安装成功."
		}]
	}
})
