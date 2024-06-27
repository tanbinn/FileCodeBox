import{T as Ge,t as de,E as Je,b as Qe}from"./el-input-e2e2f195.js";import{E as Xe,a as Ye}from"./el-form-item-b826ca33.js";import"./el-tooltip-4ed993c7.js";import{E as Te,C as Ze}from"./el-popper-3f9104f8.js";import{d as y,u as $,o as w,e as Y,w as S,r as T,aB as Pe,a$ as Ke,g,T as Oe,_ as W,aQ as et,a as v,W as z,f as V,h as ye,j as Ne,aj as U,E as A,J as ue,F as fe,aH as tt,b as Ie,aJ as ne,l as me,t as x,b0 as nt,b1 as ot,v as Ce,P as ie,p as be,Q as Ee,R as Be,A as C,H as Z,M as Ae,B as ze,D as at,a9 as pe,aO as we,aP as xe,k as _e,m as st,b2 as lt,aF as ut,b3 as it,s as rt,al as $e,n as ct,az as dt,S as He,U as Me,$ as oe,Y as ae,aU as mt,aW as pt,aX as ft,a6 as vt,a8 as ht,ad as gt,aE as ke,C as F,aa as bt}from"./index-90d5e45e.js";import{t as re}from"./aria-bc8e8b0f.js";import{f as _t}from"./vnode-9ccf448a.js";import"./_baseClone-c0ab70f7.js";const Mt=y({name:"ElCollapseTransition"}),yt=y({...Mt,setup(e){const o=$("collapse-transition"),n=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},s={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height&&(t.dataset.elExistsHeight=t.style.height),t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){requestAnimationFrame(()=>{t.dataset.oldOverflow=t.style.overflow,t.dataset.elExistsHeight?t.style.maxHeight=t.dataset.elExistsHeight:t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"})},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){n(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){n(t)},leaveCancelled(t){n(t)}};return(t,d)=>(w(),Y(Oe,Pe({name:g(o).b()},Ke(s)),{default:S(()=>[T(t.$slots,"default")]),_:3},16,["name"]))}});var ce=W(yt,[["__file","collapse-transition.vue"]]);ce.install=e=>{e.component(ce.name,ce)};const It=ce,Ct=y({name:"ElContainer"}),Et=y({...Ct,props:{direction:{type:String}},setup(e){const o=e,n=et(),s=$("container"),t=v(()=>o.direction==="vertical"?!0:o.direction==="horizontal"?!1:n&&n.default?n.default().some(m=>{const h=m.type.name;return h==="ElHeader"||h==="ElFooter"}):!1);return(d,m)=>(w(),z("section",{class:V([g(s).b(),g(s).is("vertical",g(t))])},[T(d.$slots,"default")],2))}});var wt=W(Et,[["__file","container.vue"]]);const St=y({name:"ElAside"}),xt=y({...St,props:{width:{type:String,default:null}},setup(e){const o=e,n=$("aside"),s=v(()=>o.width?n.cssVarBlock({width:o.width}):{});return(t,d)=>(w(),z("aside",{class:V(g(n).b()),style:ye(g(s))},[T(t.$slots,"default")],6))}});var Le=W(xt,[["__file","aside.vue"]]);const $t=y({name:"ElFooter"}),kt=y({...$t,props:{height:{type:String,default:null}},setup(e){const o=e,n=$("footer"),s=v(()=>o.height?n.cssVarBlock({height:o.height}):{});return(t,d)=>(w(),z("footer",{class:V(g(n).b()),style:ye(g(s))},[T(t.$slots,"default")],6))}});var De=W(kt,[["__file","footer.vue"]]);const Tt=y({name:"ElHeader"}),Pt=y({...Tt,props:{height:{type:String,default:null}},setup(e){const o=e,n=$("header"),s=v(()=>o.height?n.cssVarBlock({height:o.height}):{});return(t,d)=>(w(),z("header",{class:V(g(n).b()),style:ye(g(s))},[T(t.$slots,"default")],6))}});var Fe=W(Pt,[["__file","header.vue"]]);const Ot=y({name:"ElMain"}),Nt=y({...Ot,setup(e){const o=$("main");return(n,s)=>(w(),z("main",{class:V(g(o).b())},[T(n.$slots,"default")],2))}});var Ve=W(Nt,[["__file","main.vue"]]);const Bt=Ne(wt,{Aside:Le,Footer:De,Header:Fe,Main:Ve});U(Le);U(De);const At=U(Fe),zt=U(Ve);let Ht=class{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",s=>{let t=!1;switch(s.code){case A.down:{this.gotoSubIndex(this.subIndex+1),t=!0;break}case A.up:{this.gotoSubIndex(this.subIndex-1),t=!0;break}case A.tab:{re(o,"mouseleave");break}case A.enter:case A.space:{t=!0,s.currentTarget.click();break}}return t&&(s.preventDefault(),s.stopPropagation()),!1})})}},Lt=class{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new Ht(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case A.down:{re(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case A.up:{re(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case A.tab:{re(o.currentTarget,"mouseleave");break}case A.enter:case A.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}},Dt=class{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(s=>{s.nodeType===1&&new Lt(s,o)})}};const Ft=y({name:"ElMenuCollapseTransition",setup(){const e=$("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,s){ue(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",s()},onAfterEnter(n){fe(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),tt(n,e.m("collapse"))?(fe(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),ue(n,e.m("collapse"))):(ue(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),fe(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){ue(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function Vt(e,o,n,s,t,d){return w(),Y(Oe,Pe({mode:"out-in"},e.listeners),{default:S(()=>[T(e.$slots,"default")]),_:3},16)}var Wt=W(Ft,[["render",Vt],["__file","menu-collapse-transition.vue"]]);function We(e,o){const n=v(()=>{let t=e.parent;const d=[o.value];for(;t.type.name!=="ElMenu";)t.props.index&&d.unshift(t.props.index),t=t.parent;return d});return{parentMenu:v(()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t}),indexPath:n}}function Rt(e){return v(()=>{const n=e.backgroundColor;return n?new Ge(n).shade(20).toString():""})}const Re=(e,o)=>{const n=$("menu");return v(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":Rt(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},jt=Ie({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:ne},expandOpenIcon:{type:ne},collapseCloseIcon:{type:ne},collapseOpenIcon:{type:ne}}),ve="ElSubMenu";var Se=y({name:ve,props:jt,setup(e,{slots:o,expose:n}){const s=we(),{indexPath:t,parentMenu:d}=We(s,v(()=>e.index)),m=$("menu"),h=$("sub-menu"),u=me("rootMenu");u||de(ve,"can not inject root menu");const p=me(`subMenu:${d.value.uid}`);p||de(ve,"can not inject sub menu");const c=x({}),_=x({});let E;const P=x(!1),K=x(),G=x(null),H=v(()=>q.value==="horizontal"&&L.value?"bottom-start":"right-start"),R=v(()=>q.value==="horizontal"&&L.value||q.value==="vertical"&&!u.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?N.value?e.expandOpenIcon:e.expandCloseIcon:nt:e.collapseCloseIcon&&e.collapseOpenIcon?N.value?e.collapseOpenIcon:e.collapseCloseIcon:ot),L=v(()=>p.level===0),j=v(()=>{const i=e.teleported;return i===void 0?L.value:i}),ee=v(()=>u.props.collapse?`${m.namespace.value}-zoom-in-left`:`${m.namespace.value}-zoom-in-top`),O=v(()=>q.value==="horizontal"&&L.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),N=v(()=>u.openedMenus.includes(e.index)),J=v(()=>{let i=!1;return Object.values(c.value).forEach(f=>{f.active&&(i=!0)}),Object.values(_.value).forEach(f=>{f.active&&(i=!0)}),i}),q=v(()=>u.props.mode),Q=Ce({index:e.index,indexPath:t,active:J}),te=Re(u.props,p.level+1),se=v(()=>{var i;return(i=e.popperOffset)!=null?i:u.props.popperOffset}),X=v(()=>{var i;return(i=e.popperClass)!=null?i:u.props.popperClass}),le=v(()=>{var i;return(i=e.showTimeout)!=null?i:u.props.showTimeout}),a=v(()=>{var i;return(i=e.hideTimeout)!=null?i:u.props.hideTimeout}),l=()=>{var i,f,I;return(I=(f=(i=G.value)==null?void 0:i.popperRef)==null?void 0:f.popperInstanceRef)==null?void 0:I.destroy()},r=i=>{i||l()},M=()=>{u.props.menuTrigger==="hover"&&u.props.mode==="horizontal"||u.props.collapse&&u.props.mode==="vertical"||e.disabled||u.handleSubMenuClick({index:e.index,indexPath:t.value,active:J.value})},b=(i,f=le.value)=>{var I;if(i.type!=="focus"){if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"||e.disabled){p.mouseInChild.value=!0;return}p.mouseInChild.value=!0,E==null||E(),{stop:E}=xe(()=>{u.openMenu(e.index,t.value)},f),j.value&&((I=d.value.vnode.el)==null||I.dispatchEvent(new MouseEvent("mouseenter")))}},B=(i=!1)=>{var f;if(u.props.menuTrigger==="click"&&u.props.mode==="horizontal"||!u.props.collapse&&u.props.mode==="vertical"){p.mouseInChild.value=!1;return}E==null||E(),p.mouseInChild.value=!1,{stop:E}=xe(()=>!P.value&&u.closeMenu(e.index,t.value),a.value),j.value&&i&&((f=p.handleMouseleave)==null||f.call(p,!0))};ie(()=>u.props.collapse,i=>r(!!i));{const i=I=>{_.value[I.index]=I},f=I=>{delete _.value[I.index]};be(`subMenu:${s.uid}`,{addSubMenu:i,removeSubMenu:f,handleMouseleave:B,mouseInChild:P,level:p.level+1})}return n({opened:N}),Ee(()=>{u.addSubMenu(Q),p.addSubMenu(Q)}),Be(()=>{p.removeSubMenu(Q),u.removeSubMenu(Q)}),()=>{var i;const f=[(i=o.title)==null?void 0:i.call(o),C(Ae,{class:h.e("icon-arrow"),style:{transform:N.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&u.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>Z(R.value)?C(s.appContext.components[R.value]):C(R.value)})],I=u.isMenuPopup?C(Te,{ref:G,visible:N.value,effect:"light",pure:!0,offset:se.value,showArrow:!1,persistent:!0,popperClass:X.value,placement:H.value,teleported:j.value,fallbackPlacements:O.value,transition:ee.value,gpuAcceleration:!1},{content:()=>{var k;return C("div",{class:[m.m(q.value),m.m("popup-container"),X.value],onMouseenter:D=>b(D,100),onMouseleave:()=>B(!0),onFocus:D=>b(D,100)},[C("ul",{class:[m.b(),m.m("popup"),m.m(`popup-${H.value}`)],style:te.value},[(k=o.default)==null?void 0:k.call(o)])])},default:()=>C("div",{class:h.e("title"),onClick:M},f)}):C(pe,{},[C("div",{class:h.e("title"),ref:K,onClick:M},f),C(It,{},{default:()=>{var k;return ze(C("ul",{role:"menu",class:[m.b(),m.m("inline")],style:te.value},[(k=o.default)==null?void 0:k.call(o)]),[[at,N.value]])}})]);return C("li",{class:[h.b(),h.is("active",J.value),h.is("opened",N.value),h.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:N.value,onMouseenter:b,onMouseleave:()=>B(),onFocus:b},[I])}}});const qt=Ie({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:_e(Array),default:()=>st([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:ne,default:()=>lt},popperEffect:{type:String,values:["dark","light"],default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),he=e=>Array.isArray(e)&&e.every(o=>Z(o)),Ut={close:(e,o)=>Z(e)&&he(o),open:(e,o)=>Z(e)&&he(o),select:(e,o,n,s)=>Z(e)&&he(o)&&rt(n)&&(s===void 0||s instanceof Promise)};var Gt=y({name:"ElMenu",props:qt,emits:Ut,setup(e,{emit:o,slots:n,expose:s}){const t=we(),d=t.appContext.config.globalProperties.$router,m=x(),h=$("menu"),u=$("sub-menu"),p=x(-1),c=x(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),_=x(e.defaultActive),E=x({}),P=x({}),K=v(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),G=()=>{const a=_.value&&E.value[_.value];if(!a||e.mode==="horizontal"||e.collapse)return;a.indexPath.forEach(r=>{const M=P.value[r];M&&H(r,M.indexPath)})},H=(a,l)=>{c.value.includes(a)||(e.uniqueOpened&&(c.value=c.value.filter(r=>l.includes(r))),c.value.push(a),o("open",a,l))},R=a=>{const l=c.value.indexOf(a);l!==-1&&c.value.splice(l,1)},L=(a,l)=>{R(a),o("close",a,l)},j=({index:a,indexPath:l})=>{c.value.includes(a)?L(a,l):H(a,l)},ee=a=>{(e.mode==="horizontal"||e.collapse)&&(c.value=[]);const{index:l,indexPath:r}=a;if(!($e(l)||$e(r)))if(e.router&&d){const M=a.route||l,b=d.push(M).then(B=>(B||(_.value=l),B));o("select",l,r,{index:l,indexPath:r,route:M},b)}else _.value=l,o("select",l,r,{index:l,indexPath:r})},O=a=>{const l=E.value,r=l[a]||_.value&&l[_.value]||l[e.defaultActive];r?_.value=r.index:_.value=a},N=a=>{const l=getComputedStyle(a),r=Number.parseInt(l.marginLeft,10),M=Number.parseInt(l.marginRight,10);return a.offsetWidth+r+M||0},J=()=>{var a,l;if(!m.value)return-1;const r=Array.from((l=(a=m.value)==null?void 0:a.childNodes)!=null?l:[]).filter(D=>D.nodeName!=="#comment"&&(D.nodeName!=="#text"||D.nodeValue)),M=64,b=getComputedStyle(m.value),B=Number.parseInt(b.paddingLeft,10),i=Number.parseInt(b.paddingRight,10),f=m.value.clientWidth-B-i;let I=0,k=0;return r.forEach((D,Ue)=>{I+=N(D),I<=f-M&&(k=Ue+1)}),k===r.length?-1:k},q=a=>P.value[a].indexPath,Q=(a,l=33.34)=>{let r;return()=>{r&&clearTimeout(r),r=setTimeout(()=>{a()},l)}};let te=!0;const se=()=>{if(p.value===J())return;const a=()=>{p.value=-1,ct(()=>{p.value=J()})};te?a():Q(a)(),te=!1};ie(()=>e.defaultActive,a=>{E.value[a]||(_.value=""),O(a)}),ie(()=>e.collapse,a=>{a&&(c.value=[])}),ie(E.value,G);let X;ut(()=>{e.mode==="horizontal"&&e.ellipsis?X=it(m,se).stop:X==null||X()});const le=x(!1);{const a=b=>{P.value[b.index]=b},l=b=>{delete P.value[b.index]};be("rootMenu",Ce({props:e,openedMenus:c,items:E,subMenus:P,activeIndex:_,isMenuPopup:K,addMenuItem:b=>{E.value[b.index]=b},removeMenuItem:b=>{delete E.value[b.index]},addSubMenu:a,removeSubMenu:l,openMenu:H,closeMenu:L,handleMenuItemClick:ee,handleSubMenuClick:j})),be(`subMenu:${t.uid}`,{addSubMenu:a,removeSubMenu:l,mouseInChild:le,level:0})}return Ee(()=>{e.mode==="horizontal"&&new Dt(t.vnode.el,h.namespace.value)}),s({open:l=>{const{indexPath:r}=P.value[l];r.forEach(M=>H(M,r))},close:R,handleResize:se}),()=>{var a,l;let r=(l=(a=n.default)==null?void 0:a.call(n))!=null?l:[];const M=[];if(e.mode==="horizontal"&&m.value){const f=_t(r),I=p.value===-1?f:f.slice(0,p.value),k=p.value===-1?[]:f.slice(p.value);k!=null&&k.length&&e.ellipsis&&(r=I,M.push(C(Se,{index:"sub-menu-more",class:u.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>C(Ae,{class:u.e("icon-more")},{default:()=>C(e.ellipsisIcon)}),default:()=>k})))}const b=Re(e,0),B=e.closeOnClickOutside?[[Ze,()=>{c.value.length&&(le.value||(c.value.forEach(f=>o("close",f,q(f))),c.value=[]))}]]:[],i=ze(C("ul",{key:String(e.collapse),role:"menubar",ref:m,style:b.value,class:{[h.b()]:!0,[h.m(e.mode)]:!0,[h.m("collapse")]:e.collapse}},[...r,...M]),B);return e.collapseTransition&&e.mode==="vertical"?C(Wt,()=>i):i}}});const Jt=Ie({index:{type:_e([String,null]),default:null},route:{type:_e([String,Object])},disabled:Boolean}),Qt={click:e=>Z(e.index)&&Array.isArray(e.indexPath)},ge="ElMenuItem",Xt=y({name:ge,components:{ElTooltip:Te},props:Jt,emits:Qt,setup(e,{emit:o}){const n=we(),s=me("rootMenu"),t=$("menu"),d=$("menu-item");s||de(ge,"can not inject root menu");const{parentMenu:m,indexPath:h}=We(n,dt(e,"index")),u=me(`subMenu:${m.value.uid}`);u||de(ge,"can not inject sub menu");const p=v(()=>e.index===s.activeIndex),c=Ce({index:e.index,indexPath:h,active:p}),_=()=>{e.disabled||(s.handleMenuItemClick({index:e.index,indexPath:h.value,route:e.route}),o("click",c))};return Ee(()=>{u.addSubMenu(c),s.addMenuItem(c)}),Be(()=>{u.removeSubMenu(c),s.removeMenuItem(c)}),{parentMenu:m,rootMenu:s,active:p,nsMenu:t,nsMenuItem:d,handleClick:_}}});function Yt(e,o,n,s,t,d){const m=He("el-tooltip");return w(),z("li",{class:V([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...h)=>e.handleClick&&e.handleClick(...h))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(w(),Y(m,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:S(()=>[T(e.$slots,"title")]),default:S(()=>[Me("div",{class:V(e.nsMenu.be("tooltip","trigger"))},[T(e.$slots,"default")],2)]),_:3},8,["effect"])):(w(),z(pe,{key:1},[T(e.$slots,"default"),T(e.$slots,"title")],64))],2)}var je=W(Xt,[["render",Yt],["__file","menu-item.vue"]]);const Zt={title:String},Kt="ElMenuItemGroup",en=y({name:Kt,props:Zt,setup(){return{ns:$("menu-item-group")}}});function tn(e,o,n,s,t,d){return w(),z("li",{class:V(e.ns.b())},[Me("div",{class:V(e.ns.e("title"))},[e.$slots.title?T(e.$slots,"title",{key:1}):(w(),z(pe,{key:0},[oe(ae(e.title),1)],64))],2),Me("ul",null,[T(e.$slots,"default")])],2)}var qe=W(en,[["render",tn],["__file","menu-item-group.vue"]]);const nn=Ne(Gt,{MenuItem:je,MenuItemGroup:qe,SubMenu:Se}),on=U(je);U(qe);U(Se);const an=mt("adminData",()=>{const e=x(localStorage.getItem("adminPassword")||"");function o(n){e.value=n,localStorage.setItem("adminPassword",n)}return{adminPassword:e,updateAdminPwd:o}}),gn=y({__name:"AdminView",setup(e){const o=pt(),n=x(!1),s=ft(o),{t}=vt(),d=an(),m=ht(),h=x([{name:t("admin.menu.fileManage"),path:"/admin"},{name:t("admin.menu.systemSetting"),path:"/admin/setting"},{name:t("admin.menu.about"),path:"/admin/about"},{name:t("admin.menu.send"),path:"/#/send"},{name:t("admin.menu.receive"),path:"/#/"}]),u=()=>{d.updateAdminPwd(d.adminPassword),gt({url:"/admin/login",method:"post"}).then(p=>{p.code===200?(n.value=!0,ke.success(t("admin.login.loginSuccess"))):ke.error(t("admin.login.loginError"))})};return d.adminPassword!==""&&u(),(p,c)=>{const _=on,E=nn,P=At,K=He("router-view"),G=zt,H=Bt,R=Je,L=Qe,j=Ye,ee=Xe;return n.value?(w(),Y(H,{key:0,style:{height:"100vh",width:"100vw",position:"relative","user-select":"none"}},{default:S(()=>[F(P,null,{default:S(()=>[F(E,{mode:"horizontal",router:"","default-active":g(m).path},{default:S(()=>[(w(!0),z(pe,null,bt(h.value,O=>(w(),Y(_,{index:O.path,key:O.path},{default:S(()=>[oe(ae(O.name),1)]),_:2},1032,["index"]))),128)),F(_,{style:{float:"right"},onClick:c[0]||(c[0]=O=>g(s)(!g(o)))},{default:S(()=>[oe(ae(g(t)("admin.menu.color")),1)]),_:1}),F(_,{style:{float:"right"},onClick:c[1]||(c[1]=O=>{g(d).updateAdminPwd(""),n.value=!1})},{default:S(()=>[oe(ae(g(t)("admin.menu.signout")),1)]),_:1})]),_:1},8,["default-active"])]),_:1}),F(G,null,{default:S(()=>[F(K)]),_:1})]),_:1})):(w(),Y(ee,{key:1,size:"large"},{default:S(()=>[F(j,{label:g(t)("admin.login.managePassword")},{default:S(()=>[F(L,{modelValue:g(d).adminPassword,"onUpdate:modelValue":c[2]||(c[2]=O=>g(d).adminPassword=O),placeholder:g(t)("admin.login.passwordNotEmpty"),type:"password"},{append:S(()=>[F(R,{onClick:u},{default:S(()=>[oe(ae(g(t)("admin.login.login")),1)]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}))}}});export{gn as default};
