import{a as O,b as l,i as a,c as d,d as u}from"./is.51048137.js";import"./dayjs.min.1edc150c.js";import{h}from"./framework.dd579901.js";function w(o,v){const n={...{valueKey:"value",immediate:!1},...v},c=h(!1),r=new Map,s=h([]);function m(...t){return c.value=!0,d(o)?o(...t).then(e=>(s.value=e,b(e),e)).catch(e=>(s.value=[],Promise.reject(e))).finally(()=>{c.value=!1}):Promise.resolve([])}O(o)&&(s.value=o,b(o)),n.immediate&&m();function y(t){return t.isGroup===!0}function b(t){const e=[...t];for(;e.length>0;){const i=e.pop();if(l(i))if(a(i))if(y(i))e.push(...i.options);else{const{value:f}=i;a(f)?r.set(f[n.valueKey],i):l(f)?r.set(f,i):console.error("option：不存在value字段",i)}else r.set(i,{label:String(i),value:i})}}function k(t){s.value=t}function g(t){let e;return a(t)?e=r.get(t[n.valueKey]):e=r.get(t),u(e)&&d(n.fallback)&&(e=n.fallback(t)),e}function p(t){if(!u(t))return Array.isArray(t)?t.map(g):g(t)}function C(t){if(u(t))return;const e=p(t);if(O(e))return e.map(i=>l(i)&&a(i)?i.label:i);if(!u(e))return a(e)?e.label:e}function A(t){const e=p(t);return l(e)?e:n.fallback?n.fallback(t):{value:t,label:void 0}}return{loading:c,options:s,loadOptions:m,setOptions:k,getOptions:p,getLabels:C,fallbackOption:A}}export{w as u};
