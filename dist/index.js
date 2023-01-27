import m from"./lib/format-bytes.js";import a from"files-pipeline/dist/lib/deepmerge.js";import{optimize as p}from"svgo";import"files-pipeline/dist/options/index.js";import i from"./options/index.js";import{files as c}from"files-pipeline";import{minify as l}from"csso";import{minify as u}from"html-minifier-terser";import{minify as d}from"terser";var $=(t={})=>{for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&t[r]===!0&&(t[r]=i[r]);t=a(i,t);const o=new Set;if(typeof t.path<"u")if(t.path instanceof Array||t.path instanceof Set)for(const r of t.path)o.add(r);else o.add(t.path);return{name:"astro-compress",hooks:{"astro:build:done":async()=>{for(const[r,s]of Object.entries(t))if(s)for(const n of o)await(await(await(await new c(t.logger).in(n)).by((()=>{switch(r){case"css":return"**/*.css";case"html":return"**/*.html";case"js":return"**/*.{js,mjs,cjs}";case"svg":return"**/*.svg";default:return""}})())).not(t.exclude)).pipeline(a(i.pipeline,{wrote:async e=>{switch(r){case"css":return l(e.buffer.toString(),s).css;case"html":return await u(e.buffer.toString(),s);case"js":{const{code:f}=await d(e.buffer.toString(),s);return f||e.buffer}case"svg":{const{data:f}=p(e.buffer.toString(),s);return typeof f<"u"?f:e.buffer}default:return e.buffer}},fulfilled:async e=>e.files>0?`Successfully compressed a total of ${e.files} ${r.toUpperCase()} ${e.files===1?"file":"files"} for ${await m(e.info.total)}.`:!1}))}}}};export{$ as default};
