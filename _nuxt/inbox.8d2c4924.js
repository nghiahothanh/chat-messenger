import{_ as d}from"./CheckoutSidebar.57334673.js";import{_,c as i,a as e,b as n,w as c,F as p,o as r,P as u,p as h,e as v}from"./entry.84b9deff.js";import{V as f}from"./VSelect.84cef8ed.js";import"./nuxt-link.806259cd.js";import"./resizeObserver.a6f6a469.js";import"./index.40037e00.js";import"./tag.b0ac41dd.js";import"./ssrBoot.21a200ee.js";import"./layout.b226341d.js";import"./VCheckboxBtn.35a149bb.js";const b={name:"InboxPage",data(){return{value:[],items:["Ready for review","In progress","Finished"]}}},l=s=>(h("data-v-d22b73f2"),s=s(),v(),s),g=l(()=>e("div",null,[e("div",{class:"NewHeader-module__title"},[e("h1",{class:"heading_oder"}," Inbox ")])],-1)),x={class:"modal__message"},I={style:{height:"100vh","background-color":"rgb(246,246,246)"}},V={key:0},y=l(()=>e("div",{class:"message"},[e("p",{style:{"font-size":"3rem","margin-left":"3rem"}},[e("span",{class:"mdi mdi-email-outline"})]),e("p",{class:"ml-50"}," There are no messages ")],-1));function S(s,a,k,w,o,N){const m=d;return r(),i(p,null,[e("div",null,[n(m)]),g,e("div",x,[e("div",I,[n(f,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t),items:o.items,label:"Statuses",multiple:"",class:"selectItem",menu:!0},{selection:c(({index:t})=>[t>0?(r(),i("span",V)):u("",!0)]),_:1},8,["modelValue","items"]),y])])],64)}const $=_(b,[["render",S],["__scopeId","data-v-d22b73f2"]]);export{$ as default};