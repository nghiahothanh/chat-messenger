import{b as x,c as V,V as _,j as h,k as Y,d as H,e as $,g as te,u as ae,h as G,i as ne,_ as se}from"./CheckoutSidebar.b6bfed67.js";import{_ as E,o as C,c as P,b as e,w as t,a,d as i,F as q,n as oe,M as N,a1 as L,a2 as U,s as A,p as le,e as ie,x as re,y as de,V as ce,z as ue,A as me,D as pe,r as F,G as J,h as z,Q as _e,a3 as fe,a4 as ve,O as ke}from"./entry.2a011047.js";import{a as c,V as f,w as be,x as ye,d as ge,f as we,y as xe,z as Ve,A as he,o as Ce,B as Pe,h as Te,g as Se}from"./index.5a3c4bb5.js";import{a as k,V as u}from"./VRow.09d4ce37.js";import{V as Q}from"./VSelect.4560bed5.js";import{V as D}from"./VSheet.fbbea7c5.js";import{a as We}from"./resizeObserver.d88eeb2f.js";import{_ as $e}from"./SupportMessenger.ae800862.js";import"./nuxt-link.52d99ed0.js";import"./tag.3e449ca7.js";import"./ssrBoot.bd3d7fc2.js";import"./layout.8d3ade11.js";/* empty css              */import"./VCheckboxBtn.1a883435.js";const Ne={name:"CardCardMember",data(){return{dialogMembers:!1,dialogEditinfo:!1,usernameValue:"abc"}},computed:{shouldAddClass(){return this.usernameValue!="abc"}}},m=l=>(le("data-v-87f8aa20"),l=l(),ie(),l),Ae={class:"mt-2 pa-12"},Ee={class:"d-flex justify-space-between mb-6"},Me=m(()=>a("h3",null,[i("duy "),a("span",null,"1 members")],-1)),Ie={class:"d-flex justify-space-between mb-6 mt-3"},je=m(()=>a("span",null,"Invite Members",-1)),Le={class:"my-3"},Ue=m(()=>a("input",{id:"workspace-id",type:"text",placeholder:"johnsmith@gmail.com"},null,-1)),De=m(()=>a("p",{class:"px-6"}," Username ",-1)),Re=m(()=>a("p",null,"Email",-1)),Be=m(()=>a("p",null,"Role",-1)),Oe=m(()=>a("p",null,[i("thaivduy01 "),a("i",null,"(You)")],-1)),Ge=m(()=>a("p",null,"thaivduy01@gmail.com",-1)),Fe={class:"d-flex justify-space-between mb-6 mt-3"},ze=m(()=>a("span",null,"Edit uer info",-1)),Qe={class:"my-3"},Ye=m(()=>a("label",{class:"label_caption"},"Email",-1)),He=m(()=>a("input",{id:"workspace-id",variant:"outlined",type:"text",value:"abc@gmail.com",readonly:""},null,-1)),qe=m(()=>a("label",{class:"label_caption"},"Username",-1));function Je(l,n,r,d,o,p){return C(),P("div",null,[e(D,{class:"settings_main",elevation:1},{default:t(()=>[a("div",Ae,[a("div",Ee,[Me,e(c,{class:"buttonPrimary","prepend-icon":"mdi-account-plus",variant:"tonal",onClick:n[0]||(n[0]=s=>o.dialogMembers=!0)},{default:t(()=>[i(" Invite Members ")]),_:1}),e(x,{modelValue:o.dialogMembers,"onUpdate:modelValue":n[3]||(n[3]=s=>o.dialogMembers=s)},{default:t(()=>[e(V,{class:"edit-user_content"},{default:t(()=>[a("div",Ie,[je,e(f,{block:"",onClick:n[1]||(n[1]=s=>o.dialogMembers=!1)},{default:t(()=>[i(" mdi-close ")]),_:1})]),e(_),a("div",Le,[(C(),P(q,null,oe(6,s=>e(k,{key:s},{default:t(()=>[e(u,{cols:"8"},{default:t(()=>[Ue]),_:1}),e(u,{cols:"4"},{default:t(()=>[e(Q,{variant:"outlined",type:"text",placeholder:"Observer",items:["Admin","QA","Observer","Vendor","External QA"]})]),_:1})]),_:2},1024)),64))]),e(_),e(h,{class:"justify-end"},{default:t(()=>[e(c,{variant:"outlined",onClick:n[2]||(n[2]=s=>o.dialogMembers=!1)},{default:t(()=>[i(" Cancel ")]),_:1}),e(c,{disabled:"",variant:"tonal"},{default:t(()=>[i(" Save changes ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),e(k,{"no-gutters":"",class:"pb-4"},{default:t(()=>[e(u,null,{default:t(()=>[De]),_:1}),e(u,null,{default:t(()=>[Re]),_:1}),e(u,null,{default:t(()=>[Be]),_:1})]),_:1}),e(k,{"no-gutters":"",style:{border:"1px solid #ccc","max-height":"80px"},class:"py-4 px-3 align-center"},{default:t(()=>[e(u,null,{default:t(()=>[Oe]),_:1}),e(u,null,{default:t(()=>[Ge]),_:1}),e(u,{class:"d-flex align-center"},{default:t(()=>[e(Q,{disabled:"",chips:"",label:"Admin",items:[""],variant:"outlined"}),e(Y,{transition:"scale-transition"},{activator:t(({props:s})=>[e(c,N({class:"mx-8",variant:"text",icon:"mdi-dots-vertical"},s),null,16)]),default:t(()=>[e(H,null,{default:t(()=>[e($,null,{default:t(()=>[e(c,{"prepend-icon":"mdi-pencil"},{default:t(()=>[i(" Edit user info ")]),_:1}),e(x,{modelValue:o.dialogEditinfo,"onUpdate:modelValue":n[7]||(n[7]=s=>o.dialogEditinfo=s),activator:"parent"},{default:t(()=>[e(V,{class:"edit-user_content"},{default:t(()=>[a("div",Fe,[ze,e(f,{block:"",onClick:n[4]||(n[4]=s=>o.dialogEditinfo=!1)},{default:t(()=>[i(" mdi-close ")]),_:1})]),e(_),a("div",Qe,[Ye,He,qe,L(a("input",{id:"workspace-id","onUpdate:modelValue":n[5]||(n[5]=s=>o.usernameValue=s),variant:"outlined",type:"text"},null,512),[[U,o.usernameValue]])]),e(_),e(h,{class:"justify-end"},{default:t(()=>[e(c,{variant:"outlined",onClick:n[6]||(n[6]=s=>o.dialogEditinfo=!1)},{default:t(()=>[i(" Cancel ")]),_:1}),e(c,{class:A({buttonPrimary:p.shouldAddClass}),variant:"tonal"},{default:t(()=>[i(" Save changes ")]),_:1},8,["class"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e($,null,{default:t(()=>[e(c,{disabled:"",variant:"plain","prepend-icon":"mdi-delete"},{default:t(()=>[i(" Delete ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})])}const Ke=E(Ne,[["render",Je],["__scopeId","data-v-87f8aa20"]]),Xe={name:"CardCardWorkspace",data(){return{dialogEditWorkspace:!1,dialogLeaveWorkspace:!1,dialogNewWordspace:!1,workspaceName:"",referenceCode:""}},computed:{isValid(){return this.workspaceName.trim()!==""||this.referenceCode.trim()!==""}}},Ze={class:"mt-2 pa-12"},et={class:"d-flex justify-space-between mb-6"},tt=a("h3",null,"Workspaces",-1),at={class:"d-flex justify-space-between mb-6 mt-3"},nt=a("span",null,"Create your workspace",-1),st={class:"my-3"},ot=a("p",null,"Enter your company details to create a workspace.",-1),lt=a("label",{class:"label_caption_title"},"Workspace name *",-1),it=a("label",{class:"label_caption_title"},"Reference code in external system (Optional)",-1),rt=a("p",{class:"mb-4"},[i(" You can find all of the workspaces you belong to listed here. Click on the "),a("b",null,"New Workspace"),i(" button to create a new company workspace. If you wish to join an existing workspace, contact the responsible person in the company and ask for an invite. ")],-1),dt=a("p",{class:"px-6"}," Workspace Name ",-1),ct=a("p",null,"Role",-1),ut=a("p",null,[i("duy "),a("i",null,"(Currently Active)")],-1),mt=a("span",null,"Admin",-1),pt={class:"d-flex justify-space-between mb-6 mt-3"},_t=a("span",null,"Edit workspace info",-1),ft=a("div",{class:"my-3"},[a("label",{class:"label_caption_title"},"Workspace name *"),a("input",{id:"workspace-id",variant:"outlined",type:"text",value:"abc"}),a("label",{class:"label_caption_title"},"Reference code in external system (Optional)"),a("input",{id:"workspace-id",variant:"outlined",type:"text",value:"dfdfdf"})],-1),vt={class:"d-flex justify-space-between mb-6 mt-3"},kt=a("span",null,"Do you want to leave duy workspace?",-1),bt=a("div",{class:"my-3"},[a("p",null,"Are you sure you want to do this? Please confirm your action.")],-1);function yt(l,n,r,d,o,p){return C(),P("div",null,[e(D,{class:"settings_main",elevation:1},{default:t(()=>[a("div",Ze,[a("div",et,[tt,e(c,{class:"buttonPrimary","prepend-icon":"mdi-plus",variant:"tonal",onClick:n[0]||(n[0]=s=>o.dialogNewWordspace=!0)},{default:t(()=>[i(" New Workspace ")]),_:1}),e(x,{modelValue:o.dialogNewWordspace,"onUpdate:modelValue":n[4]||(n[4]=s=>o.dialogNewWordspace=s)},{default:t(()=>[e(V,{class:"edit-user_content"},{default:t(()=>[a("div",at,[nt,e(f,{block:"",onClick:n[1]||(n[1]=s=>o.dialogNewWordspace=!1)},{default:t(()=>[i(" mdi-close ")]),_:1})]),e(_),a("div",st,[ot,lt,L(a("input",{id:"workspace-id","onUpdate:modelValue":n[2]||(n[2]=s=>o.workspaceName=s),variant:"outlined",placeholder:"abc"},null,512),[[U,o.workspaceName]]),it,L(a("input",{id:"workspace-id","onUpdate:modelValue":n[3]||(n[3]=s=>o.referenceCode=s),variant:"outlined",placeholder:"4fgfdgfd"},null,512),[[U,o.referenceCode]])]),e(_),e(h,{class:"justify-end"},{default:t(()=>[e(c,{class:A({buttonPrimary:p.isValid}),disabled:!p.isValid,variant:"tonal"},{default:t(()=>[i(" Create Workspace ")]),_:1},8,["class","disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),rt,e(k,{"no-gutters":"",class:"pb-4"},{default:t(()=>[e(u,null,{default:t(()=>[dt]),_:1}),e(u,null,{default:t(()=>[ct]),_:1})]),_:1}),e(k,{"no-gutters":"",style:{border:"1px solid #ccc","max-height":"80px"},class:"py-4 px-3 align-center"},{default:t(()=>[e(u,null,{default:t(()=>[ut]),_:1}),e(u,{class:"d-flex align-center justify-space-between"},{default:t(()=>[mt,e(Y,{transition:"scale-transition"},{activator:t(({props:s})=>[e(c,N({class:"mx-8",variant:"text",icon:"mdi-dots-vertical"},s),null,16)]),default:t(()=>[e(H,null,{default:t(()=>[e($,null,{default:t(()=>[e(c,{"prepend-icon":"mdi-pencil"},{default:t(()=>[i(" Edit workspace info ")]),_:1}),e(x,{modelValue:o.dialogEditWorkspace,"onUpdate:modelValue":n[7]||(n[7]=s=>o.dialogEditWorkspace=s),activator:"parent"},{default:t(()=>[e(V,{class:"edit-user_content"},{default:t(()=>[a("div",pt,[_t,e(f,{block:"",onClick:n[5]||(n[5]=s=>o.dialogEditWorkspace=!1)},{default:t(()=>[i(" mdi-close ")]),_:1})]),e(_),ft,e(_),e(h,{class:"justify-end"},{default:t(()=>[e(c,{variant:"outlined",onClick:n[6]||(n[6]=s=>o.dialogEditWorkspace=!1)},{default:t(()=>[i(" Cancel ")]),_:1}),e(c,{class:"buttonPrimary",variant:"tonal"},{default:t(()=>[i(" Save changes ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e($,null,{default:t(()=>[e(c,{"prepend-icon":"mdi-account-minus"},{default:t(()=>[i(" Leave workspace ")]),_:1})]),_:1}),e(x,{modelValue:o.dialogLeaveWorkspace,"onUpdate:modelValue":n[10]||(n[10]=s=>o.dialogLeaveWorkspace=s),activator:"parent"},{default:t(()=>[e(V,{class:"edit-user_content"},{default:t(()=>[a("div",vt,[kt,e(f,{block:"",onClick:n[8]||(n[8]=s=>o.dialogLeaveWorkspace=!1)},{default:t(()=>[i(" mdi-close ")]),_:1})]),e(_),bt,e(_),e(h,{class:"justify-end"},{default:t(()=>[e(c,{variant:"outlined",onClick:n[9]||(n[9]=s=>o.dialogLeaveWorkspace=!1)},{default:t(()=>[i(" Cancel ")]),_:1}),e(c,{class:"buttonPrimary",variant:"tonal"},{default:t(()=>[i(" Leave Workspace ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})])}const gt=E(Xe,[["render",yt]]);function wt(l){const n=J(l);let r=-1;function d(){clearInterval(r)}function o(){d(),ke(()=>n.value=l)}function p(s){const b=s?getComputedStyle(s):{transitionDuration:.2},v=parseFloat(b.transitionDuration)*1e3||200;if(d(),n.value<=0)return;const y=performance.now();r=window.setInterval(()=>{const g=performance.now()-y+v;n.value=Math.max(l-g,0),n.value<=0&&d()},v)}return ve(d),{clear:d,time:n,start:p,reset:o}}const xt=re({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...be({location:"bottom"}),...ye(),...ge(),...we(),...de(),...ce(te({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),Vt=ue()({name:"VSnackbar",props:xt(),emits:{"update:modelValue":l=>!0},setup(l,n){let{slots:r}=n;const d=me(l,"modelValue"),{locationStyles:o}=xe(l),{positionClasses:p}=Ve(l),{scopeId:s}=ae(),{themeClasses:b}=pe(l),{colorClasses:v,colorStyles:y,variantClasses:g}=he(l),{roundedClasses:K}=Ce(l),T=wt(Number(l.timeout)),R=F(),B=F(),M=J(!1);z(d,S),z(()=>l.timeout,S),_e(()=>{d.value&&S()});let I=-1;function S(){T.reset(),window.clearTimeout(I);const w=Number(l.timeout);if(!d.value||w===-1)return;const j=fe(B.value);T.start(j),I=window.setTimeout(()=>{d.value=!1},w)}function X(){T.reset(),window.clearTimeout(I)}function Z(){M.value=!0,X()}function ee(){M.value=!1,S()}return We(()=>{const w=G.filterProps(l),j=!!(r.default||r.text||l.text);return e(G,N({ref:R,class:["v-snackbar",{"v-snackbar--active":d.value,"v-snackbar--multi-line":l.multiLine&&!l.vertical,"v-snackbar--timer":!!l.timer,"v-snackbar--vertical":l.vertical},p.value,l.class],style:l.style},w,{modelValue:d.value,"onUpdate:modelValue":W=>d.value=W,contentProps:N({class:["v-snackbar__wrapper",b.value,v.value,K.value,g.value],style:[o.value,y.value],onPointerenter:Z,onPointerleave:ee},w.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},s),{default:()=>{var W,O;return[Pe(!1,"v-snackbar"),l.timer&&e("div",{key:"timer",class:"v-snackbar__timer"},[e(Te,{ref:B,active:!M.value,color:typeof l.timer=="string"?l.timer:"info",max:l.timeout,"model-value":T.time.value},null)]),j&&e("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((W=r.text)==null?void 0:W.call(r))??l.text,(O=r.default)==null?void 0:O.call(r)]),r.actions&&e(Se,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[e("div",{class:"v-snackbar__actions"},[r.actions()])]})]},activator:r.activator})}),ne({},R)}}),ht={name:"CardCardGenerateToken",data(){return{isButtonPrimary:!0,generatedToken:"",CopyToken:!1}},methods:{generateNewToken(){const l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let r=0;r<24;r++){const d=Math.floor(Math.random()*l.length);n+=l.charAt(d)}this.generatedToken=n}}},Ct={class:"mt-2 pa-12"},Pt={class:"d-flex justify-space-between mb-6"},Tt=a("h3",null,"API Token",-1),St=a("p",null,"Workspace Name",-1),Wt=a("input",{id:"workspace-id",type:"text",readonly:"",value:"11486"},null,-1),$t=a("p",null,"API Token",-1),Nt=["value"],At={class:"mt-2"},Et={style:{color:"#19bcc9"},target:"_bank"};function Mt(l,n,r,d,o,p){return C(),P("div",null,[e(D,{class:"settings_main",elevation:1},{default:t(()=>[a("div",Ct,[a("div",Pt,[Tt,e(c,{class:A({buttonPrimary:!o.generatedToken}),"prepend-icon":"mdi-database-outline",variant:"outlined",onClick:p.generateNewToken},{default:t(()=>[i(" Generate New Token ")]),_:1},8,["class","onClick"])]),e(k,{"no-gutters":"",class:"pb-4 align-center justify-space-between"},{default:t(()=>[e(u,{style:{"max-width":"20%","margin-left":"20px"}},{default:t(()=>[St,Wt]),_:1}),e(u,{style:{"max-width":"60%","margin-left":"20px"}},{default:t(()=>[$t,a("input",{id:"workspace-id",type:"text",readonly:"",value:o.generatedToken,placeholder:"Generated API token"},null,8,Nt)]),_:1}),e(c,{class:A(["mt-6 ml-4",{buttonPrimary:o.generatedToken}]),variant:"outlined",disabled:!o.generatedToken,onClick:n[0]||(n[0]=s=>o.CopyToken=!0)},{default:t(()=>[i(" Copy Token ")]),_:1},8,["class","disabled"]),e(Vt,{modelValue:o.CopyToken,"onUpdate:modelValue":n[2]||(n[2]=s=>o.CopyToken=s)},{actions:t(()=>[e(f,{onClick:n[1]||(n[1]=s=>o.CopyToken=!1)},{default:t(()=>[i(" mdi-close ")]),_:1})]),default:t(()=>[i(" API Token is copied! ")]),_:1},8,["modelValue"])]),_:1}),e(_),a("div",At,[a("a",Et,[e(f,{color:"#19bcc9"},{default:t(()=>[i("mdi-database-outline")]),_:1}),i(" API Documentation")])])])]),_:1})])}const It=E(ht,[["render",Mt]]),jt={name:"SettingPage",data(){return{}}},Lt={class:"px-8 py-10"};function Ut(l,n,r,d,o,p){const s=se,b=Ke,v=gt,y=It,g=$e;return C(),P(q,null,[a("div",Lt,[e(s),e(b),e(v),e(y)]),e(g)],64)}const Zt=E(jt,[["render",Ut]]);export{Zt as default};