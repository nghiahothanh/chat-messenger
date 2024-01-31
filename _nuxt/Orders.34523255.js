import{_ as y}from"./CheckoutSidebar.7d45d7de.js";import{_ as C}from"./Order.393d23f4.js";import{_ as v,o as n,c as s,a,b as l,F as f,n as g,q as b,w as h,d as k,t as i,x as P,y as T,z as V,D as S,R as $}from"./entry.32f4f5fb.js";import{a as q,V as w}from"./VTabs.49a93859.js";import{_ as N}from"./Asset.31d65090.js";import{m as A,a as B}from"./resizeObserver.1250b9c0.js";import{b as D,p as H}from"./index.147485b1.js";import{m as O}from"./tag.0dbb252b.js";import{V as F}from"./VContainer.05e4ad1f.js";import{_ as R}from"./SupportMessenger.990fa32b.js";import"./nuxt-link.c2ac7545.js";import"./ssrBoot.bbb4229d.js";import"./layout.1330fd77.js";import"./VSlideGroup.18f1a278.js";import"./VSheet.a056161f.js";/* empty css              */const M={name:"NavbarHeader",props:{dataCatalog:{type:String,required:!0}},data:()=>({tab:null})},U={class:"NewHeader-module__title"},z={class:"NewHeader-module__filters"};function j(e,u,t,x,r,m){const o=C;return n(),s("div",null,[a("div",null,[a("div",U,[l(o)]),a("div",z,[(n(!0),s(f,null,g(t.dataCatalog,(d,c)=>(n(),b(w,{key:c,modelValue:e.tab,"onUpdate:modelValue":u[0]||(u[0]=_=>e.tab=_),class:"text-btn",transition:!1},{default:h(()=>[(n(!0),s(f,null,g(d.Status,(_,p)=>(n(),b(q,{key:p,class:"rounded"},{default:h(()=>[k(i(p)+" "+i(_),1)]),_:2},1024))),128))]),_:2},1032,["modelValue"]))),128))])])])}const E=v(M,[["render",j],["__scopeId","data-v-48e54a1d"]]);const I=P({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...A(),...D(),...O(),...T()},"VTable"),J=V()({name:"VTable",props:I(),setup(e,u){let{slots:t,emit:x}=u;const{themeClasses:r}=S(e),{densityClasses:m}=H(e);return B(()=>l(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},r.value,m.value,e.class],style:e.style},{default:()=>{var o,d,c;return[(o=t.top)==null?void 0:o.call(t),t.default?l("div",{class:"v-table__wrapper",style:{height:$(e.height)}},[l("table",null,[t.default()])]):(d=t.wrapper)==null?void 0:d.call(t),(c=t.bottom)==null?void 0:c.call(t)]}})),{}}}),L={name:"TableOrder",props:{dataCatalog:{type:Object,default:()=>({Status:{},Properties:{}})}},data(){return{}}},W=a("thead",null,[a("tr",null,[a("th",{class:"text-left"}," Name "),a("th",{class:"text-left"}," Request "),a("th",{class:"text-left"}," Status "),a("th",{class:"text-left"}," Price "),a("th",{class:"text-left"}," CreatedAt ")])],-1),Y={key:0},G={key:1};function K(e,u,t,x,r,m){return n(),s("div",null,[l(F,null,{default:h(()=>[l(J,null,{default:h(()=>[W,a("tbody",null,[(n(!0),s(f,null,g(t.dataCatalog,(o,d)=>(n(),s("tr",{key:d},[a("td",null,i(o.Properties.name),1),a("td",null,i(o.Properties.Request),1),a("td",null,i(o.Properties.Status),1),o.Properties.Price?(n(),s("td",Y,i(o.Properties.Price),1)):(n(),s("td",G," 0.00$ ")),a("td",null,i(o.CreatedAt),1)]))),128))])]),_:1})]),_:1})])}const Q=v(L,[["render",K]]),X={name:"PageOrders",data(){return{title:"This is where you will see your 3D modeling requests",content:"Start by requesting a quote for the items you want to be 3D modeled.",buttonText:"Request",data:{dataCatalog:{Status:{Action:"2",Complete:"0",Draft:"2"},Media:"",CreatedAt:"Jan 26 , 2024",UpdateAt:"",Sku:"",Properties:{name:"Frozen Yogurt",Request:1,Status:"Waiting",dimension:"",description:"",Price:""}}}}}};function Z(e,u,t,x,r,m){const o=y,d=E,c=N,_=Q,p=R;return n(),s(f,null,[l(o),l(d,{"data-catalog":r.data},null,8,["data-catalog"]),r.data.dataCatalog.Status.Action===0?(n(),b(c,{key:0,title:r.title,content:r.content,"button-text":r.buttonText},null,8,["title","content","button-text"])):(n(),b(_,{key:1,"data-catalog":r.data},null,8,["data-catalog"])),l(p)],64)}const bt=v(X,[["render",Z]]);export{bt as default};