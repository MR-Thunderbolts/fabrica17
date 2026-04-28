export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.D-SOXLHG.js",app:"_app/immutable/entry/app.Dp8wwB7C.js",imports:["_app/immutable/entry/start.D-SOXLHG.js","_app/immutable/chunks/BMsHUpVe.js","_app/immutable/chunks/7vxRgPBw.js","_app/immutable/chunks/CHtVM-Vl.js","_app/immutable/entry/app.Dp8wwB7C.js","_app/immutable/chunks/7vxRgPBw.js","_app/immutable/chunks/CHtVM-Vl.js","_app/immutable/chunks/BiOIQgMt.js","_app/immutable/chunks/DJcclk4P.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
