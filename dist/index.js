"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var q=v(function(A,f){
function m(e,r,i,u,a,I,j){var n,s,t;if(e<=0)return-1;for(n=u,s=j,t=0;t<e;t++){if(r[n]===a[s])return t;n+=i,s+=I}return-1}f.exports=m
});var c=v(function(B,x){
var o=require('@stdlib/strided-base-stride2offset/dist'),R=q();function _(e,r,i,u,a){return R(e,r,i,o(e,i),u,a,o(e,a))}x.exports=_
});var p=v(function(C,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=c(),b=q();O(l,"ndarray",b);y.exports=l
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=p(),d,E=h(g(__dirname,"./native.js"));k(E)?d=w:d=E;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
