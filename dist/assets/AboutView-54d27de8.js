import{u as d,c as r,o as s,a as t,b as n,F as u,r as a,t as l}from"./index-dd985adb.js";const m={class:"main"},p=n("h1",{class:"title"},"About",-1),h={class:"users"},g={class:"users__list"},v={class:"users__list"},b={class:"users__list"},B={__name:"AboutView",setup(A){const o=d(),_=r(()=>o.getAdmins),c=r(()=>o.getUsers),i=r(()=>o.getMederator);return(f,x)=>(s(),t("main",m,[p,n("div",h,[n("ul",g,[(s(!0),t(u,null,a(_.value,e=>(s(),t("li",null,l(e.name)+" | "+l(e.role),1))),256))]),n("ul",v,[(s(!0),t(u,null,a(c.value,e=>(s(),t("li",null,l(e.name)+" | "+l(e.role),1))),256))]),n("ul",b,[(s(!0),t(u,null,a(i.value,e=>(s(),t("li",null,l(e.name)+" | "+l(e.role),1))),256))])])]))}};export{B as default};
