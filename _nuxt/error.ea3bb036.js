import{_}from"./nuxt-link.c6d91546.js";import{_ as p,q as d,w as o,o as t,c as r,t as s,b as u,d as i}from"./entry.d1f47a4e.js";import{V as l}from"./VApp.c4485b66.js";import"./resizeObserver.84048280.js";import"./layout.ae81b20b.js";const m={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head(){return{title:this.error.statusCode===404?this.pageNotFound:this.otherError}}},f={key:0},h={key:1};function y(a,x,n,k,e,N){const c=_;return t(),d(l,{dark:""},{default:o(()=>[n.error.statusCode===404?(t(),r("h1",f,s(e.pageNotFound),1)):(t(),r("h1",h,s(e.otherError),1)),u(c,{to:"/"},{default:o(()=>[i(" Home page ")]),_:1})]),_:1})}const B=p(m,[["render",y],["__scopeId","data-v-c4fcf797"]]);export{B as default};