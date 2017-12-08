const validUrl = require("valid-url");



var shortener = function(url){
	if(validUrl.isUri(url)!==undefined){
		console.log('lo')
		var obj = {
			"original_url": url,
			"short_url" : "localhost:3000/url/" + url
		};
		return obj;
	} else {
		return "error: url is invalid"
	}
};

module.exports = shortener;