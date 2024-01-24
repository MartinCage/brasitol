export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","images/Arrow.png","images/Arrow.svg","images/Group.png","images/Group.svg","images/Vector.svg","style.css"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.97f4ddd6.js","app":"_app/immutable/entry/app.cb706ab2.js","imports":["_app/immutable/entry/start.97f4ddd6.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.13321f7a.js","_app/immutable/entry/app.cb706ab2.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a21d6cee.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
