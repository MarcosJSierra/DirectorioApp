(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78fc4534"],{"0fd9":function(t,e,n){"use strict";n("4b85");var a=n("2b0e"),r=n("d9f7"),s=n("80d2");const i=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return i.reduce((n,a)=>(n[t+Object(s["G"])(a)]=e(),n),{})}const c=t=>[...o,"baseline","stretch"].includes(t),u=l("align",()=>({type:String,default:null,validator:c})),d=t=>[...o,"space-between","space-around"].includes(t),f=l("justify",()=>({type:String,default:null,validator:d})),g=t=>[...o,"space-between","space-around","stretch"].includes(t),p=l("alignContent",()=>({type:String,default:null,validator:g})),b={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(p)},y={align:"align",justify:"justify",alignContent:"align-content"};function h(t,e,n){let a=y[t];if(null!=n){if(e){const n=e.replace(t,"");a+="-"+n}return a+="-"+n,a.toLowerCase()}}const v=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:g},...p},render(t,{props:e,data:n,children:a}){let s="";for(const r in e)s+=String(e[r]);let i=v.get(s);if(!i){let t;for(t in i=[],b)b[t].forEach(n=>{const a=e[n],r=h(t,n,a);r&&i.push(r)});i.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),v.set(s,i)}return t(e.tag,Object(r["a"])(n,{staticClass:"row",class:i}),a)}})},"4b85":function(t,e,n){},"51fe":function(t,e,n){t.exports=n.p+"img/hero-img.2c40da12.jpg"},"62ad":function(t,e,n){"use strict";n("4b85");var a=n("2b0e"),r=n("d9f7"),s=n("80d2");const i=["sm","md","lg","xl"],o=(()=>i.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>i.reduce((t,e)=>(t["offset"+Object(s["G"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>i.reduce((t,e)=>(t["order"+Object(s["G"])(e)]={type:[String,Number],default:null},t),{}))(),u={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,n){let a=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");a+="-"+n}return"col"!==t||""!==n&&!0!==n?(a+="-"+n,a.toLowerCase()):a.toLowerCase()}}const f=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:a,parent:s}){let i="";for(const r in e)i+=String(e[r]);let o=f.get(i);if(!o){let t;for(t in o=[],u)u[t].forEach(n=>{const a=e[n],r=d(t,n,a);r&&o.push(r)});const n=o.some(t=>t.startsWith("col-"));o.push({col:!n||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),f.set(i,o)}return t(e.tag,Object(r["a"])(n,{class:o}),a)}})},a523:function(t,e,n){"use strict";n("20f6"),n("4b85");var a=n("e8f2"),r=n("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:a}){let s;const{attrs:i}=n;return i&&(n.attrs={},s=Object.keys(i).filter(t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,Object(r["a"])(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),a)}})},a8db:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{attrs:{height:"880"}},[a("v-img",{attrs:{width:"100%","min-height":"768px","max-height":"840",src:n("51fe"),alt:""}},[a("v-sheet",{attrs:{height:"880",color:"rgba(0, 0, 0, 0.32)"}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-row",{attrs:{align:"center",justify:"start"}},[a("v-col",{staticClass:"mx-13"},[a("h2",{staticClass:"intro-text"},[t._v("La innovación a tu alcance")]),a("p",{staticClass:"description-hero"},[t._v("\n              Las últimas novedades y noticias de tus tecnologías en un solo lugar.\n            ")]),a("v-btn",{attrs:{color:"grey darken-4",dark:"","x-large":"",to:"/register"}},[t._v("¡Suscribete ya!")])],1)],1)],1)],1)],1)],1)},r=[],s={name:"Hero"},i=s,o=(n("d734"),n("2877")),l=n("6544"),c=n.n(l),u=n("8336"),d=n("62ad"),f=n("a523"),g=n("adda"),p=n("0fd9"),b=n("8dd9"),y=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=y.exports;c()(y,{VBtn:u["a"],VCol:d["a"],VContainer:f["a"],VImg:g["a"],VRow:p["a"],VSheet:b["a"]})},d734:function(t,e,n){"use strict";n("eecb")},e8f2:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("2b0e");function r(t){return a["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:a,children:r}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:s}=a;if(s){a.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(a.staticClass+=" "+t.join(" "))}return n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),e(n.tag,a,r)}})}},eecb:function(t,e,n){}}]);
//# sourceMappingURL=chunk-78fc4534.075221c7.js.map