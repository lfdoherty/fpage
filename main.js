
var self = module.exports = typeof(global) !== 'undefined' ? global.page : {}
self.server = false

self.ready = function(cb){
	var hasLoaded = document.readyState === 'interactive' || document.readyState === 'complete'
	if(hasLoaded){
		cb()
	}else{
		document.addEventListener('DOMContentLoaded', cb)
	}
}

self.setBodyHtml = function(str){
	document.body.innerHTML = str
}

self.on = function(eventName, cb){
	//throw new Error('TODO')
	document.addEventListener(eventName, cb)
}
