import{m as X,a as V,b as Z,c as ee,_ as te}from"./CheckoutSidebar.7d45d7de.js";import{m as ae,V as R,a as ce,b as M,_ as se}from"./CheckoutStepper.d4ee4420.js";import{x as D,I as le,z as S,A as oe,B as de,r as G,h as T,Q as H,b as a,F as E,M as C,R as U,_ as P,o as _,c as b,w as l,a as t,n as O,q as x,s as j,d as f,p as W,e as Q,S as ne,y as re,D as ie,L as A,G as ue,J as w,T as q}from"./entry.32f4f5fb.js";import{g as me,a as I,h as he,i as _e,u as ve,j as ge,V as J,m as pe,c as be,d as ke,k as fe,l as ye,n as we,o as Ve}from"./index.147485b1.js";import{V as k,a as Y}from"./VRow.e43f4649.js";import{V as N}from"./VSheet.a056161f.js";import{V as xe,a as z}from"./VSlideGroup.18f1a278.js";import{a as F,m as Ie,u as Ce}from"./resizeObserver.1250b9c0.js";import{V as K}from"./VContainer.05e4ad1f.js";import{m as Se,u as Pe}from"./layout.1330fd77.js";import{m as $e}from"./tag.0dbb252b.js";import Te from"./nuxt-facebook-chat.c6e89e2f.js";import{_ as Ee}from"./SupportMessenger.990fa32b.js";import"./nuxt-link.c2ac7545.js";import"./ssrBoot.bbb4229d.js";/* empty css              */const De=D({color:String,cycle:Boolean,delimiterIcon:{type:le,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...ae({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),Fe=S()({name:"VCarousel",props:De(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:d}=c;const n=oe(e,"modelValue"),{t:s}=de(),r=G();let o=-1;T(n,i),T(()=>e.interval,i),T(()=>e.cycle,m=>{m?i():window.clearTimeout(o)}),H(u);function u(){!e.cycle||!r.value||(o=window.setTimeout(r.value.group.next,+e.interval>0?+e.interval:6e3))}function i(){window.clearTimeout(o),window.requestAnimationFrame(u)}return F(()=>{const m=R.filterProps(e);return a(R,C({ref:r},m,{modelValue:n.value,"onUpdate:modelValue":v=>n.value=v,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:U(e.height)},e.style]}),{default:d.default,additional:v=>{let{group:h}=v;return a(E,null,[!e.hideDelimiters&&a("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[h.items.value.length>0&&a(me,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[h.items.value.map((g,y)=>{const B={id:`carousel-item-${g.id}`,"aria-label":s("$vuetify.carousel.ariaLabel.delimiter",y+1,h.items.value.length),class:["v-carousel__controls__item",h.isSelected(g.id)&&"v-btn--active"],onClick:()=>h.select(g.id,!0)};return d.item?d.item({props:B,item:g}):a(I,C(g,B),null)})]})]),e.progress&&a(he,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(h.getItemIndex(n.value)+1)/h.items.value.length*100},null)])},prev:d.prev,next:d.next})}),{}}}),Be=D({...X(),...ce()},"VCarouselItem"),Re=S()({name:"VCarouselItem",inheritAttrs:!1,props:Be(),setup(e,c){let{slots:d,attrs:n}=c;F(()=>{const s=V.filterProps(e),r=M.filterProps(e);return a(M,C({class:"v-carousel-item"},r),{default:()=>[a(V,C(n,s),d)]})})}}),L=S()({name:"VSlideGroupItem",props:_e(),emits:{"group:selected":e=>!0},setup(e,c){let{slots:d}=c;const n=ve(e,xe);return()=>{var s;return(s=d.default)==null?void 0:s.call(d,{isSelected:n.isSelected.value,select:n.select,toggle:n.toggle,selectedClass:n.selectedClass.value})}}}),Me={name:"MainContentProduct",data(){return{items:[{src:"https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0005.jpg"},{src:"https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0001.jpg"},{src:"https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0028.jpg"},{src:"https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0009.jpg"},{src:"https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0025.jpg"},{src:"https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0017.jpg"},{src:"https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14275/assets/1668506907/4%20Egg_lounge_chair_360_45FOV_580_0001.jpg"}],chooseImg:"",dialogCarousels:!1,activeIndex:0,model:1}},mounted(){window.addEventListener("scroll",this.handleScroll),this.chooseImg="https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0005.jpg"},methods:{created(){this.activeIndex=0},selectedImage(e,c,d){e(),this.chooseImg=c,this.activeIndex=d},openDialog(){this.dialog=!0;const e=this.$refs.imageRef.src;this.dialogImg=e,console.log(this.dialogImg)}}},$=e=>(W("data-v-9cdab647"),e=e(),Q(),e),Oe=$(()=>t("div",null,[t("h3",null," Please select a service "),t("p",null," Submit your order for a custom 3D model within minutes! Choose the 3D model type that best suits your use case to get started. ")],-1)),je=$(()=>t("div",null,[t("div",{class:"dimensionImg"},[t("img",{src:"https://arsenal-embeds.cgtrader.com/product-viewers/Egg_lounge_chair14248/assets/1668182817/3%20Egg_lounge_chair_360_45FOV_0005.jpg",alt:""})]),t("h4",null,"6 Photorealistic Product Images for E-commerce"),t("p",null," This option will replace your product photography and will provide you with 6 images from all sides to use on your e-commerce website, as well as the underlying high-resolution 3D model and a 360 spinner that is made from these images. Please note: This model is NOT for use in augmented reality and similar interactive applications. ")],-1)),Ae={class:"d-flex justify-center align-center"},Ne={class:"ma-4 outlined"},ze=$(()=>t("h4",null,"6 Photorealistic Product Images for E-commerce",-1)),Le=$(()=>t("p",null," This option will replace your product photography and will provide you with 6 images from all sides to use on your e-commerce website, as well as the underlying high-resolution 3D model and a 360 spinner that is made from these images. Please note: This model is NOT for use in augmented reality and similar interactive applications. ",-1));function Ge(e,c,d,n,s,r){return _(),b("div",null,[a(Y,null,{default:l(()=>[a(k,{cols:"2"},{default:l(()=>[Oe]),_:1}),a(k,{cols:"5"},{default:l(()=>[je]),_:1}),a(k,{cols:"5"},{default:l(()=>[t("div",null,[t("div",null,[a(N,null,{default:l(()=>[a(z,{modelValue:s.activeIndex,"onUpdate:modelValue":c[0]||(c[0]=o=>s.activeIndex=o),"selected-class":"is_active"},{default:l(()=>[(_(!0),b(E,null,O(s.items,(o,u)=>(_(),x(L,{key:u},{default:l(({toggle:i,selectedClass:m})=>[a(V,{src:o.src,class:j(["ma-2 rounded",m]),width:"72",height:"50",cover:"",onClick:v=>r.selectedImage(i,o.src,u)},null,8,["src","class","onClick"])]),_:2},1024))),128))]),_:1},8,["modelValue"]),a(ge,null,{default:l(()=>[a(N,null,{default:l(()=>[t("div",Ae,[a(V,{class:"roundeds outlined",cover:"",width:"420",height:"350",src:s.chooseImg},{default:l(()=>[a(I,{class:"btn-size ma-4 float-right","prepend-icon":"mdi-crop-free",variant:"outlined",onClick:c[1]||(c[1]=o=>s.dialogCarousels=!0)})]),_:1},8,["src"])])]),_:1})]),_:1})]),_:1}),a(Z,{modelValue:s.dialogCarousels,"onUpdate:modelValue":c[4]||(c[4]=o=>s.dialogCarousels=o)},{default:l(()=>[a(ee,{class:""},{default:l(()=>[t("div",Ne,[a(I,{class:"ma-4 float-right",size:"40",variant:"outlined",onClick:c[2]||(c[2]=o=>s.dialogCarousels=!1)},{default:l(()=>[a(J,{size:"40"},{default:l(()=>[f(" mdi-close ")]),_:1})]),_:1}),a(Fe,{"hide-delimiters":""},{default:l(()=>[(_(),x(Re,{key:e.i,src:s.chooseImg},null,8,["src"]))]),_:1}),t("div",null,[a(z,{modelValue:s.model,"onUpdate:modelValue":c[3]||(c[3]=o=>s.model=o),"selected-class":"is_active",class:"pa-4","center-active":"","show-arrows":""},{default:l(()=>[(_(!0),b(E,null,O(s.items,(o,u)=>(_(),x(L,{key:u},{default:l(({toggle:i,selectedClass:m})=>[a(V,{src:o.src,class:j([["ma-2 rounded",m],"ma-2"]),height:"50",width:"80",onClick:v=>r.selectedImage(i,o.src)},null,8,["src","class","onClick"])]),_:2},1024))),128))]),_:1},8,["modelValue"])])])]),_:1})]),_:1},8,["modelValue"])]),ze,Le])]),_:1})]),_:1})])}const He=P(Me,[["render",Ge],["__scopeId","data-v-9cdab647"]]);const Ue={name:"TableTable",data(){return{}}},p=e=>(W("data-v-8cb0477a"),e=e(),Q(),e),We={class:"table100-nextcols"},Qe=p(()=>t("div",{class:"cell100 column1"}," Applications ",-1)),qe=p(()=>t("tr",{class:"row100 body"},[t("td",{class:"cell100 column2"}," E-commerce "),t("td",{class:"cell100 column3"},[t("input",{type:"checkbox",checked:"checked"}),t("div",{class:"checkmark"})]),t("td",{class:"cell100 column4"},[t("input",{type:"checkbox",checked:"checked"}),t("div",{class:"checkmark"})])],-1)),Je={class:"row100 body"},Ye={class:"cell100 column2"},Ke=p(()=>t("td",{class:"cell100 column3"},[t("input",{type:"checkbox",checked:"checked"}),t("div",{class:"checkmark"})],-1)),Xe=p(()=>t("td",{class:"cell100 column4"}," - ",-1)),Ze=p(()=>t("tr",{class:"row100 body"},[t("td",{class:"cell100 column2"}," QR code "),t("td",{class:"cell100 column3"},[t("input",{type:"checkbox",checked:"checked"}),t("div",{class:"checkmark"})]),t("td",{class:"cell100 column4"}," - ")],-1)),et=p(()=>t("tr",{class:"row100 body"},[t("td",{class:"cell100 column2"}," 3D ads "),t("td",{class:"cell100 column3"},[t("input",{type:"checkbox",checked:"checked"}),t("div",{class:"checkmark"})]),t("td",{class:"cell100 column4"}," - ")],-1)),tt=p(()=>t("tr",{class:"row100 body"},[t("td",{class:"cell100 column2"}," Developer "),t("td",{class:"cell100 column3"},[t("input",{type:"checkbox",checked:"checked"}),t("div",{class:"checkmark"})]),t("td",{class:"cell100 column4"}," - ")],-1)),at=ne('<div class="cell100 column1" data-v-8cb0477a> What you will get? </div><table data-v-8cb0477a><tbody data-v-8cb0477a><tr class="row100 body" data-v-8cb0477a><td class="cell100 column2" data-v-8cb0477a> AR viewer </td><td class="cell100 column3" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div></td><td class="cell100 column4" data-v-8cb0477a> - </td></tr><tr class="row100 body" data-v-8cb0477a><td class="cell100 column2" data-v-8cb0477a> Interactive 3D viewer </td><td class="cell100 column3" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div></td><td class="cell100 column4" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div></td></tr><tr class="row100 body" data-v-8cb0477a><td class="cell100 column2" data-v-8cb0477a> JS script for easy integration </td><td class="cell100 column3" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div></td><td class="cell100 column4" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div></td></tr><tr class="row100 body" data-v-8cb0477a><td class="cell100 column2" data-v-8cb0477a> 3D model </td><td class="cell100 column3" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div><span data-v-8cb0477a>(Low-Poly)</span></td><td class="cell100 column4" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div><span data-v-8cb0477a>(High-Poly)</span></td></tr><tr class="row100 body" data-v-8cb0477a><td class="cell100 column2" data-v-8cb0477a> Photorealistic images </td><td class="cell100 column3" data-v-8cb0477a> - </td><td class="cell100 column4" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div><span data-v-8cb0477a>(6 images)</span></td></tr><tr class="row100 body" data-v-8cb0477a><td class="cell100 column2" data-v-8cb0477a> High-res 360 turntable viewer </td><td class="cell100 column3" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div></td><td class="cell100 column4" data-v-8cb0477a> - </td></tr><tr class="row100 body" data-v-8cb0477a><td class="cell100 column2" data-v-8cb0477a> Modelry Quality Assurance </td><td class="cell100 column3" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div></td><td class="cell100 column4" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div></td></tr><tr class="row100 body" data-v-8cb0477a><td class="cell100 column2" data-v-8cb0477a> DAM </td><td class="cell100 column3" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div></td><td class="cell100 column4" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div></td></tr><tr class="row100 body" data-v-8cb0477a><td class="cell100 column2" data-v-8cb0477a> Support </td><td class="cell100 column3" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div></td><td class="cell100 column4" data-v-8cb0477a><input type="checkbox" checked="checked" data-v-8cb0477a><div class="checkmark" data-v-8cb0477a></div></td></tr></tbody></table>',2);function ct(e,c,d,n,s,r){return _(),b("div",null,[t("div",We,[Qe,t("table",null,[t("tbody",null,[qe,t("tr",Je,[t("td",Ye,[f(" Metaverse and 3D games"),a(J,{color:"rgba(30,39,50,.24)"},{default:l(()=>[f(" mdi-help-circle-outline ")]),_:1})]),Ke,Xe]),Ze,et,tt])]),at])])}const st=P(Ue,[["render",ct],["__scopeId","data-v-8cb0477a"]]);const lt=D({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...pe(),...Ie(),...be(),...Se(),...ke(),...$e({tag:"footer"}),...re()},"VFooter"),ot=S()({name:"VFooter",props:lt(),setup(e,c){let{slots:d}=c;const{themeClasses:n}=ie(e),{backgroundColorClasses:s,backgroundColorStyles:r}=fe(A(e,"color")),{borderClasses:o}=ye(e),{elevationClasses:u}=we(e),{roundedClasses:i}=Ve(e),m=ue(32),{resizeRef:v}=Ce(y=>{y.length&&(m.value=y[0].target.clientHeight)}),h=w(()=>e.height==="auto"?m.value:parseInt(e.height,10)),{layoutItemStyles:g}=Pe({id:e.name,order:w(()=>parseInt(e.order,10)),position:w(()=>"bottom"),layoutSize:h,elementSize:w(()=>e.height==="auto"?void 0:h.value),active:w(()=>e.app),absolute:A(e,"absolute")});return F(()=>a(e.tag,{ref:v,class:["v-footer",n.value,s.value,o.value,u.value,i.value,e.class],style:[r.value,e.app?g.value:{height:U(e.height)},e.style]},d)),{}}}),dt={name:"TableFooter",data(){return{showDiv:!0}},mounted(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const e=window.innerHeight+window.scrollY>=document.body.offsetHeight-80;this.showDiv=!e}}},nt=t("div",null,[f(" Need something more specific? "),t("span",null," Contact us")],-1);function rt(e,c,d,n,s,r){return _(),x(ot,{app:"",height:"70px"},{default:l(()=>[a(K,null,{default:l(()=>[a(Y,null,{default:l(()=>[a(k,{cols:"2"},{default:l(()=>[nt]),_:1}),a(k,{cols:"5"},{default:l(()=>[t("div",null,[a(I,{flat:"",color:"#19bcc9",to:"/checkouts/UploadReferences",width:"100%"},{default:l(()=>[f(" Select interactive 3D model + AR ")]),_:1})])]),_:1}),a(k,{cols:"5"},{default:l(()=>[t("div",null,[a(I,{flat:"",color:"#19bcc9",to:"/checkouts/UploadReferences",width:"100%",class:"mr-4"},{default:l(()=>[f(" Select interactive 3D model + AR ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}const it=P(dt,[["render",rt]]),ut=q({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:c,attrs:d}){const n=G(!1);return H(()=>{n.value=!0}),s=>{var i;if(n.value)return(i=c.default)==null?void 0:i.call(c);const r=c.fallback||c.placeholder;if(r)return r();const o=s.fallback||s.placeholder||"",u=s.fallbackTag||s.placeholderTag||"span";return b(u,d,o)}}}),mt=t("h1",null,"Ho thanh nghia",-1),ht=q({__name:"chatMessenger",setup(e){const c={pageId:"100055007491335",locale:"th_TH",themeColor:"#E04040"};return(d,n)=>{const s=Te,r=ut;return _(),b("div",null,[a(r,null,{default:l(()=>[a(s,{options:c}),mt]),_:1})])}}}),_t={name:"IndexCheckouts",data(){return{}},methods:{chatMessenger(){console.log("acb"),this.$router.push("/checkouts/Chat")}}};function vt(e,c,d,n,s,r){const o=te,u=se,i=He,m=st,v=it,h=ht,g=Ee;return _(),x(K,null,{default:l(()=>[t("div",null,[t("button",{onClick:c[0]||(c[0]=y=>r.chatMessenger())},"Chat"),a(o),a(u),a(i),a(m)]),a(v),a(h),a(g)]),_:1})}const Dt=P(_t,[["render",vt]]);export{Dt as default};