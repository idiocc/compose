/*
 MIT
 (c) dead-horse
 https://npmjs.org/koa-compose
*/
'use strict';module.exports={_compose:function(b){if(!Array.isArray(b))throw new TypeError("Middleware stack must be an array!");for(const c of b)if("function"!=typeof c)throw new TypeError("Middleware must be composed of functions!");return(c,g)=>{function e(a){if(a<=f)return Promise.reject(Error("next() called multiple times"));f=a;let d=b[a];a==b.length&&(d=g);if(!d)return Promise.resolve();try{return Promise.resolve(d(c,e.bind(null,a+1)))}catch(h){return Promise.reject(h)}}let f=-1;return e(0)}}};

//# sourceMappingURL=compose.js.map