import{G as _,b as N,c as W,d as S,u as P,a as V,o as f,W as M,U as m,r as y,f as c,g as l,e as h,w as g,C as v,ar as k,V as C,M as b,X as w,h as T,T as $,_ as H,j as I}from"./index-90d5e45e.js";import{c as R}from"./el-input-e2e2f195.js";let u;const A=s=>{var a;if(!_)return 0;if(u!==void 0)return u;const o=document.createElement("div");o.className=`${s}-scrollbar__wrap`,o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const n=o.offsetWidth;o.style.overflow="scroll";const e=document.createElement("div");e.style.width="100%",o.appendChild(e);const i=e.offsetWidth;return(a=o.parentNode)==null||a.removeChild(o),u=n-i,u};function D(s,a){if(!_)return;if(!a){s.scrollTop=0;return}const o=[];let n=a.offsetParent;for(;n!==null&&s!==n&&s.contains(n);)o.push(n),n=n.offsetParent;const e=a.offsetTop+o.reduce((t,d)=>t+d.offsetTop,0),i=e+a.offsetHeight,r=s.scrollTop,p=r+s.clientHeight;e<r?s.scrollTop=e:i>p&&(s.scrollTop=i-s.clientHeight)}const j=N({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:W},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),F={close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},G=S({name:"ElTag"}),K=S({...G,props:j,emits:F,setup(s,{emit:a}){const o=s,n=R(),e=P("tag"),i=V(()=>{const{type:t,hit:d,effect:B,closable:E,round:z}=o;return[e.b(),e.is("closable",E),e.m(t||"primary"),e.m(n.value),e.m(B),e.is("hit",d),e.is("round",z)]}),r=t=>{a("close",t)},p=t=>{a("click",t)};return(t,d)=>t.disableTransitions?(f(),M("span",{key:0,class:c(l(i)),style:T({backgroundColor:t.color}),onClick:p},[m("span",{class:c(l(e).e("content"))},[y(t.$slots,"default")],2),t.closable?(f(),h(l(b),{key:0,class:c(l(e).e("close")),onClick:C(r,["stop"])},{default:g(()=>[v(l(k))]),_:1},8,["class","onClick"])):w("v-if",!0)],6)):(f(),h($,{key:1,name:`${l(e).namespace.value}-zoom-in-center`,appear:""},{default:g(()=>[m("span",{class:c(l(i)),style:T({backgroundColor:t.color}),onClick:p},[m("span",{class:c(l(e).e("content"))},[y(t.$slots,"default")],2),t.closable?(f(),h(l(b),{key:0,class:c(l(e).e("close")),onClick:C(r,["stop"])},{default:g(()=>[v(l(k))]),_:1},8,["class","onClick"])):w("v-if",!0)],6)]),_:3},8,["name"]))}});var U=H(K,[["__file","tag.vue"]]);const J=I(U);export{J as E,A as g,D as s,j as t};
