export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["dataset.json","favicon.ico","images/Arrow.png","images/Arrow.svg","images/Group.png","images/Group.svg","images/Vector.svg","style.css"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".svg":"image/svg+xml",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.68a91b3d.js","app":"_app/immutable/entry/app.4c5d4040.js","imports":["_app/immutable/entry/start.68a91b3d.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.be11c517.js","_app/immutable/entry/app.4c5d4040.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a21d6cee.js"],"stylesheets":[],"fonts":[]},
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
