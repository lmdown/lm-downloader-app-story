var t,e={exports:{}};function o(){if(t)return e.exports;function o(t,e=100,o={}){if("function"!=typeof t)throw new TypeError(`Expected the first parameter to be a function, got \`${typeof t}\`.`);if(e<0)throw new RangeError("`wait` must not be negative.");const{immediate:r}="boolean"==typeof o?{immediate:o}:o;let n,i,c,f,s;function a(){const e=n,o=i;return n=void 0,i=void 0,s=t.apply(e,o),s}function p(){const t=Date.now()-f;t<e&&t>=0?c=setTimeout(p,e-t):(c=void 0,r||(s=a()))}const u=function(...t){if(n&&this!==n&&Object.getPrototypeOf(this)===Object.getPrototypeOf(n))throw new Error("Debounced method called with different contexts of the same prototype.");n=this,i=t,f=Date.now();const o=r&&!c;return c||(c=setTimeout(p,e)),o&&(s=a()),s};return Object.defineProperty(u,"isPending",{get:()=>void 0!==c}),u.clear=()=>{c&&(clearTimeout(c),c=void 0)},u.flush=()=>{c&&u.trigger()},u.trigger=()=>{s=a(),u.clear()},u}return t=1,e.exports.debounce=o,e.exports=o,e.exports}export{o as r};
