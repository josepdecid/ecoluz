var ae=Object.defineProperty,ne=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var B=(e,a,s)=>a in e?ae(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,g=(e,a)=>{for(var s in a||(a={}))re.call(a,s)&&B(e,s,a[s]);if(U)for(var s of U(a))oe.call(a,s)&&B(e,s,a[s]);return e},p=(e,a)=>ne(e,se(a));import{i as ce,a as le,c as ie,u as de,b as ue,j as t,C as me,d as f,e as c,r as T,T as A,P as Ee,A as he,f as ge,L as pe,g as fe,E as Te,F as H,h as Ne,R as y,k as xe,X as Ae,l as Ce,m as Se,n as ye}from"./vendor.b2593c85.js";const Ie=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}};Ie();const _e="",Re={EXTREME_EXPENSIVE:"",EXTREME_CHEAP:"",MEAN_PRICE:""},Le={TITLE:"",SELECT_LOCATION:"",SELECT_LANGUAGE:"",SELECT_TIME_FORMAT:""},be={PENINSULA_CANARIAS_BALEARES:"",CEUTA_MELILLA:""},ve={BY_HOUR:"",BY_PRICE:""};var Oe={APP_NAME:_e,TEXT:Re,SETTINGS:Le,LOCATION:be,SORT:ve};const Pe="EcoLlum",we={EXTREME_EXPENSIVE:"L'hora m\xE9s cara",EXTREME_CHEAP:"L'hora m\xE9s barata",MEAN_PRICE:"Preu mitj\xE0"},Me={TITLE:"Configuraci\xF3",SELECT_LOCATION:"La teva ubicaci\xF3",SELECT_LANGUAGE:"Idioma de l'aplicaci\xF3",SELECT_TIME_FORMAT:"Format de l'hora"},De={PENINSULA_CANARIAS_BALEARES:"Pen\xEDnsula Canaries i Balears",CEUTA_MELILLA:"Ceuta i Melilla"},Fe={BY_HOUR:"Per hora",BY_PRICE:"Per preu"};var Ge={APP_NAME:Pe,TEXT:we,SETTINGS:Me,LOCATION:De,SORT:Fe};const Ue="EcoLuz",Be={EXTREME_EXPENSIVE:"La hora m\xE1s cara",EXTREME_CHEAP:"La hora m\xE1s barata",MEAN_PRICE:"Precio medio"},He={TITLE:"Configuraci\xF3n",SELECT_LOCATION:"Tu ubicaci\xF3n",SELECT_LANGUAGE:"Idioma de la aplicaci\xF3n",SELECT_TIME_FORMAT:"Formato de la hora"},$e={PENINSULA_CANARIAS_BALEARES:" Pen\xEDnsula Canarias y Baleares",CEUTA_MELILLA:" Ceuta y Melilla"},ke={BY_HOUR:"Por hora",BY_PRICE:" Por precio"};var Xe={APP_NAME:Ue,TEXT:Be,SETTINGS:He,LOCATION:$e,SORT:ke};const Ye="",je={EXTREME_EXPENSIVE:"",EXTREME_CHEAP:"",MEAN_PRICE:""},Ve={TITLE:"",SELECT_LOCATION:"",SELECT_LANGUAGE:"",SELECT_TIME_FORMAT:""},We={PENINSULA_CANARIAS_BALEARES:"",CEUTA_MELILLA:""},ze={BY_HOUR:"",BY_PRICE:""};var Je={APP_NAME:Ye,TEXT:je,SETTINGS:Ve,LOCATION:We,SORT:ze};const qe={ba:{translation:Oe},ca:{translation:Ge},es:{translation:Xe},ga:{translation:Je}};ce.use(le).init({resources:qe,fallbackLng:"es",debug:!0,interpolation:{escapeValue:!1}});const $="SET_LANGUAGE",k="SET_LOCATION",X="SET_TIME_FORMAT",Y="TOGGLE_SETTINGS_DRAWER",j="LOAD_SAVED_SETTINGS";function Ke(e){return localStorage.setItem("@location",e),{type:k,locationCode:e}}function Qe(e){return localStorage.setItem("@language",e),{type:$,languageCode:e}}function Ze(e){return localStorage.setItem("@timeFormat",e),{type:X,timeFormat:e}}function L(){return{type:Y}}function et(){const e=localStorage.getItem("@language"),a=localStorage.getItem("@location"),s=localStorage.getItem("@timeFormat");return{type:j,languageCode:e,locationCode:a,timeFormat:s}}const V="UPDATE_PRICES_DATA",W="UPDATE_CURRENT_HOUR",z="UPDATE_CURRENT_DAY";function J(e){return{type:V,priceSlots:e}}function tt(e){return{type:W,currentHour:e}}function at(e){return{type:z,currentDay:e}}const nt={slots:[],currentHour:new Date().getHours(),currentDay:new Date().getDate()},st=(e=nt,a)=>{switch(a.type){case V:return p(g({},e),{slots:a.priceSlots});case W:return p(g({},e),{currentHour:a.currentHour});case z:return p(g({},e),{currentDay:a.currentDay});default:return e}};var b;(function(e){e.PCB="PCB",e.CYM="CYM"})(b||(b={}));var v;(function(e){e.ba="ba",e.ca="ca",e.es="es",e.ga="ga"})(v||(v={}));var O;(function(e){e["24h"]="24h",e["12h"]="12h"})(O||(O={}));var C;(function(e){e.Red="red",e.Yellow="yellow",e.Green="green"})(C||(C={}));function P(...e){return e.filter(Boolean).join(" ")}const q={location:b.PCB,language:v.es,timeFormat:O["24h"],settingsOpen:!1},w=(e,a)=>e===null?q[a]:e,rt=(e=q,a)=>{switch(a.type){case k:return p(g({},e),{location:a.locationCode});case $:return p(g({},e),{language:a.languageCode});case X:return p(g({},e),{timeFormat:a.timeFormat});case Y:return p(g({},e),{settingsOpen:!e.settingsOpen});case j:return p(g({},e),{language:w(a.languageCode,"language"),location:w(a.locationCode,"location"),timeFormat:w(a.timeFormat,"timeFormat")});default:return e}},K=ie({reducer:{rates:st,settings:rt}});K.dispatch(et());const S=()=>de(),h=ue;function ot(){const e=S();return t("a",{children:t(me,{onClick:()=>e(L()),className:"w-8 h-8 text-white cursor-pointer"})})}function ct(){const{t:e}=f("translation");return c("nav",{className:"fixed z-10 flex items-center justify-between w-full p-3 bg-teal-500",children:[c("div",{className:"flex items-center flex-shrink-0 mr-6 text-white",children:[t("img",{src:"/ecoluz/favicon.ico",alt:`${e("APP_NAME")} logo`,className:"w-10 h-10 mr-1"}),t("span",{className:"text-2xl font-bold",children:e("APP_NAME")})]}),t("div",{className:"lg:flex lg:items-center lg:w-auto",children:t(ot,{})})]})}const I=(e,a,s="24h")=>{e%=24;const r=a<10?"0":"";if(s==="24h")return(e<10?"0":"")+e+(a>=0?":"+r+a:"h");{const n=e<12?"am":"pm";return e%=12,e==0&&(e=12),(e<10?"0":"")+e+(a>=0?":"+r+a+n:"h")}},M=e=>e<8?C.Green:e<16?C.Yellow:C.Red;let D=null;function lt(){const e=S(),a=h(({rates:u,settings:E})=>({hourlyRates:u.slots,currentHour:u.currentHour,currentDay:u.currentDay,locationCode:E.location,timeFormat:E.timeFormat})),s=[...a.hourlyRates].sort((u,E)=>u.price[a.locationCode]>E.price[a.locationCode]?1:-1),r=()=>{const u=new Date;return I(u.getHours(),u.getMinutes(),a.timeFormat)},n=()=>{const u=new Date;return s.find(E=>E.hour===u.getHours())},[o,l]=T.exports.useState(r()),[d,i]=T.exports.useState(n());T.exports.useEffect(()=>{D!==null&&clearInterval(D),D=setInterval(()=>{l(r()),i(n());const u=new Date,E=u.getHours();E!==a.currentHour&&e(tt(E));const N=u.getDate();N!==a.currentDay&&e(at(N))},1e3)},[a]);const m=M(s.indexOf(d));return c("div",{className:`p-6 rounded-lg shadow-2xl bg-${m}-500`,children:[t("div",{className:"float-left p-4 bg-white border border-white rounded-lg w-max",children:t("span",{className:"text-2xl font-bold lg:text-4xl",children:o})}),c("div",{className:"p-4 mt-4 text-right bg-white border border-white rounded-lg",children:[t("span",{className:"text-5xl font-bold lg:text-8xl",children:d.price[a.locationCode].toFixed(4)}),t("span",{className:"text-2xl lg:text-4xl align-right",children:"\u20AC/kWh"})]})]})}function _(e){const{extreme:a}=e,{t:s}=f(),r=h(({rates:i})=>i.slots),n=h(({settings:i})=>({location:i.location,timeFormat:i.timeFormat})),o=r.reduce((i,m)=>a==="max"?i.price[n.location]>m.price[n.location]?i:m:i.price[n.location]>m.price[n.location]?m:i,r[0]);let l,d;return a==="max"?(l="text-red-500",d="TEXT.EXTREME_EXPENSIVE"):(l="text-green-500",d="TEXT.EXTREME_CHEAP"),c("div",{className:"space-y-2 text-center divide-y divide-gray divide-opacity-50",children:[c("span",{className:"pb-2 text-lg font-bold uppercase",children:[s(d),":"]}),c("div",{className:"pt-6",children:[c("span",{className:"text-4xl font-bold text-teal-500",children:[I(o.hour,-1,n.timeFormat),"\xA0-\xA0",I(o.hour+1,-1,n.timeFormat)]}),c("div",{className:`mt-3 ${l}`,children:[t("span",{className:"text-3xl font-bold",children:o.price[n.location].toFixed(4)}),t("span",{className:"text-2xl",children:"\u20AC/kWh"})]})]})]})}function Q(){const{t:e}=f(),a=h(({rates:o})=>o.slots),s=h(({settings:o})=>({location:o.location,timeFormat:o.timeFormat})),n=a.reduce((o,l)=>o+l.price[s.location],0)/a.length;return c("div",{className:"space-y-2 text-center divide-y divide-gray divide-opacity-50",children:[c("span",{className:"pb-2 text-lg font-bold uppercase",children:[e("TEXT.MEAN_PRICE"),":"]}),t("div",{className:"pt-6",children:c("div",{className:"text-teal-500",children:[t("span",{className:"text-4xl font-bold",children:n.toFixed(4)}),t("span",{className:"text-3xl",children:"\u20AC/kWh"})]})})]})}function Z(e){const{tabs:a}=e;return t("div",{className:"shadow-2xl rounded-xl",children:c(A.Group,{children:[t(A.List,{className:"flex p-2 space-x-1 bg-teal-500 rounded-t-xl",children:a.map(({title:s,key:r})=>t(A,{className:({selected:n})=>P("w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg",n?"bg-white shadow text-teal-500":"text-teal-300 hover:bg-white-100 hover:text-white"),children:s},r))}),t(A.Panels,{className:"mt-2",children:a.map(({key:s,content:r})=>t(A.Panel,{className:P("bg-white rounded-xl p-3","focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"),children:r},s))})]})})}function it(){return c("div",{className:"lg:flex lg:space-x-6",children:[t("div",{className:"flex-2",children:t(lt,{})}),t("div",{className:"mt-4 md:hidden",children:t(Z,{tabs:[{key:"mean",title:t(Ee,{className:"w-8 h-8 mx-auto"}),content:t(Q,{})},{key:"min",title:t(he,{className:"w-8 h-8 mx-auto"}),content:t(_,{extreme:"min"})},{key:"max",title:t(ge,{className:"w-8 h-8 mx-auto"}),content:t(_,{extreme:"max"})}]})}),c("div",{className:"flex-1 hidden space-x-4 md:flex",children:[t("div",{className:"flex-1 mt-10",children:t(Q,{})}),t("div",{className:"flex-1 mt-10",children:t(_,{extreme:"min"})}),t("div",{className:"flex-1 mt-10",children:t(_,{extreme:"max"})})]})]})}function ee(){const e=h(({rates:i,settings:m})=>({hourlyRates:i.slots,locationCode:m.location})),a=Array.from(Array(24).keys()),s=e.hourlyRates.map(i=>i.price[e.locationCode]),r={red:{500:"#ff4c30"},yellow:{500:"#fde69c"},green:{500:"#70ad46"}},n=[...e.hourlyRates].sort((i,m)=>i.price[e.locationCode]>m.price[e.locationCode]?1:-1),o=e.hourlyRates.map(i=>{const m=M(n.indexOf(i));return r[m][500]});return t(pe,{data:{labels:a,datasets:[{data:s,fill:!1,backgroundColor:o,borderColor:"black",tension:.2}]},options:{scales:{x:{ticks:{callback:function(i,m,u){return(i<10?"0":"")+i.toString()+"h"}}},y:{title:{display:!0,text:"\u20AC/kWh"}}},plugins:{legend:{display:!1},tooltip:{enabled:!1}}}})}function R(e){const{rates:a,thresholds:s}=e,r=h(({settings:o})=>o.timeFormat),n=h(({rates:o})=>o.currentHour);return c("div",{children:[a.map(({hour:o,price:l,color:d})=>{const i=l>=s.max,m=l<=s.min,u=o===n;return t("div",{className:P("py-0.5 pr-3 m-0.5 bg-red-500 rounded-md",u?"border-4 border-black":"",i?"border-2 border-red-700":"",m?"border-2 border-green-700":"",n>o?"opacity-30":"",d==="red"?"bg-red-500":d==="yellow"?"bg-yellow-500":"bg-green-500"),children:c("div",{className:"flex justify-between px-2 align-center",children:[c("div",{className:"flex items-center flex-shrink-0 rounded-md",children:[t("span",{className:"px-1 text-xl font-bold",children:I(o,0,r)}),c("div",{className:"w-6 mx-0.5 text-black",children:[m&&t(fe,{className:"w-18 h-18"}),i&&t(Te,{className:"w-18 h-18"})]})]}),c("div",{className:"flex-between align-end",children:[t("span",{className:`text-lg flex-start ${u?"text-bold":""}`,children:l.toFixed(4)}),t("span",{className:u?"text-bold":"",children:"\xA0\u20AC/kWh"})]})]})},o)}),t("div",{className:"mt-5 md:hidden",children:t(ee,{})})]})}function dt(){const{t:e}=f(),a=h(({rates:l,settings:d})=>({hourlyRates:l.slots,locationCode:d.location}));let r=[...a.hourlyRates.map(({hour:l,price:d})=>({hour:l,price:d[a.locationCode]}))].sort((l,d)=>l.price>d.price?1:-1);r=r.map(l=>{const d=M(r.indexOf(l));return p(g({},l),{color:d})});const n=[...r].sort((l,d)=>l.hour>d.hour?1:-1),o={min:r[2].price,max:r[r.length-3].price};return c(H,{children:[t("div",{className:"mt-4 md:hidden",children:t(Z,{tabs:[{key:"hours",title:t("span",{children:e("SORT.BY_HOUR")}),content:t(R,{rates:n,thresholds:o})},{key:"prices",title:t("span",{children:e("SORT.BY_PRICE")}),content:t(R,{rates:r,thresholds:o})}]})}),c("div",{className:`
                    items-center hidden w-full grid-cols-2 mt-4 md:grid place-items-center
            `,children:[c("div",{className:"space-y-2 text-center divide-y divide-gray divide-opacity-50",children:[c("span",{className:"pb-2 text-lg font-bold uppercase",children:[e("SORT.BY_HOUR"),":"]}),t(R,{rates:n,thresholds:o})]}),c("div",{className:"space-y-2 text-center divide-y divide-gray divide-opacity-50",children:[c("span",{className:"pb-2 text-lg font-bold uppercase",children:[e("SORT.BY_PRICE"),":"]}),t(R,{rates:r,thresholds:o})]})]}),t("div",{className:"hidden md:flex",children:t(ee,{})})]})}function ut(){const[e,a]=T.exports.useState(!1),s=S(),r=h(({rates:n})=>n.currentDay);return T.exports.useEffect(()=>{const n=new Date,o=n.getDate(),l=o<10?"0":"",d=n.getMonth()+1,i=d<10?"0":"",m=n.getFullYear(),u="https://raw.githubusercontent.com/josepdecid/ecoluz/main/data/processed",E=`${l}${o}_${i}${d}_${m}`,N=`${u}/${E}.json`,te=localStorage.getItem("ratesDay");if(E===te){console.log("Rates for today fetched previously. Not necessary to download the data again.");const x=JSON.parse(localStorage.getItem("rates"));s(J(x)),a(!0)}else console.log("Rates are not stored locally, downloading from "+N),Ne.get(N).then(x=>{const G=x.data;localStorage.setItem("rates",JSON.stringify(G)),localStorage.setItem("ratesDay",E),s(J(G)),a(!0)}).catch(x=>{console.log(x)})},[r]),e?c("div",{className:"w-screen px-4 pt-20 pb-4",children:[t(it,{}),t(dt,{})]}):t("span",{className:"animate-spin",children:"Loading"})}function mt({children:e,isOpen:a,setIsOpen:s}){return c("main",{className:" fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out "+(a?" transition-opacity opacity-100 duration-500 translate-x-0  ":" transition-all delay-500 opacity-0 translate-x-full  "),children:[t("section",{className:" w-screen max-w-lg right-0 absolute bg-white h-full shadow-2xl delay-400 duration-500 ease-in-out transition-all transform  "+(a?" translate-x-0 ":" translate-x-full "),children:t("article",{className:"relative flex flex-col w-screen h-full max-w-lg pb-10 space-y-6 overflow-y-scroll",children:e})}),t("section",{className:"w-screen h-full cursor-pointer ",onClick:()=>{s(!1)}})]})}const Et=[{name:"Castellano",code:"es"},{name:"Catal\xE0",code:"ca"},{name:"Euskara",code:"ba"},{name:"Galego",code:"ga"}],ht=[{name:"LOCATION.PENINSULA_CANARIAS_BALEARES",code:"PCB"},{name:"LOCATION.CEUTA_MELILLA",code:"CYM"}],gt=[{name:"24h (11:07pm)",code:"24h"},{name:"12h (23:07)",code:"12h"}];function F(e){const{title:a,translate:s,items:r,value:n,onChange:o}=e,{t:l}=f();return c(y,{value:n,onChange:o,children:[t(y.Label,{children:l(a)}),t("div",{className:"space-y-2",children:r.map(({name:d,code:i})=>t(y.Option,{value:i,className:({active:m,checked:u})=>`${u?"bg-teal-500 bg-opacity-75 text-white":"bg-white"}
                            relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`,children:({active:m,checked:u})=>c("div",{className:"flex items-center justify-between w-full",children:[t("div",{className:"flex items-center",children:t("div",{className:"text-sm",children:t(y.Label,{as:"p",className:`font-medium  ${u?"text-white":"text-gray-900"}`,children:s?l(d):d})})}),u&&t("div",{className:"flex-shrink-0 text-white bg-teal-400",children:t(xe,{className:"w-6 h-6"})})]})},i))})]})}function pt(){const{t:e}=f("translation"),a=S(),s=h(({settings:r})=>({location:r.location,language:r.language,timeFormat:r.timeFormat}));return c("div",{children:[c("div",{className:"fixed z-10 flex items-center justify-between w-full px-5 py-4 bg-teal-500 shadow-2xl",children:[t("span",{className:"text-2xl font-bold text-white",children:e("SETTINGS.TITLE")}),t(Ae,{className:"w-8 h-8 ml-2 text-white cursor-pointer",onClick:()=>a(L())})]}),c("div",{className:"mx-4 mt-20 divide-y-2",children:[t("div",{className:"py-4",children:t(F,{title:"SETTINGS.SELECT_LOCATION",translate:!0,items:ht,value:s.location,onChange:r=>a(Ke(r))})}),t("div",{className:"py-4",children:t(F,{title:"SETTINGS.SELECT_LANGUAGE",translate:!0,items:Et,value:s.language,onChange:r=>a(Qe(r))})}),t("div",{className:"py-4",children:t(F,{title:"SETTINGS.SELECT_TIME_FORMAT",items:gt,value:s.timeFormat,onChange:r=>a(Ze(r))})})]})]})}function ft(){const{i18n:e}=f(),a=S(),s=h(({settings:n})=>({settingsOpen:n.settingsOpen,language:n.language}));T.exports.useEffect(()=>{e.changeLanguage(s.language)},[s.language]);const r=s.settingsOpen?"filter blur-sm":"";return c(H,{children:[c("div",{className:r,children:[t(ct,{}),t(ut,{})]}),t(mt,{isOpen:s.settingsOpen,setIsOpen:()=>a(L()),children:t(pt,{})})]})}Ce.render(t(Se.StrictMode,{children:t(ye,{store:K,children:t(ft,{})})}),document.getElementById("root"));
