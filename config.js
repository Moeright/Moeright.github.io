/*
	配置文件
*/

require.config({
	baseUrl: 'js',
	paths: {
		"jquery": "lib/jquery-1.11.3",
		"bootstrap": "lib/bootstrap",
		"layer": "plug/layer/layer",
		"template": "plug/template",
		"xuanxiangka":"js/xuanxiangka",
		"sfq":"js/sfq",
		"jquery.cookie": "plug/jquery.cookie",
		"detail":"detail"
		// "banner": "js/test"
	},
	shim: {
		"layer": ['jquery'],
		"bootstrap": {
			deps: ['jquery'],
			exports: "Bootstrap"
		},
		"xuanxiangka": ['jquery'],
		"sfq":['jquery'],
		"jquery.cookie": ['jquery'],
		"detail":['jquery']
	}
});
