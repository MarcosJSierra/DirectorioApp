(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ccb2c42a"],{"0fd9":function(e,t,n){"use strict";n("4b85");var a=n("2b0e"),s=n("d9f7"),o=n("80d2");const r=["sm","md","lg","xl"],l=["start","end","center"];function i(e,t){return r.reduce((n,a)=>(n[e+Object(o["G"])(a)]=t(),n),{})}const c=e=>[...l,"baseline","stretch"].includes(e),u=i("align",()=>({type:String,default:null,validator:c})),d=e=>[...l,"space-between","space-around"].includes(e),f=i("justify",()=>({type:String,default:null,validator:d})),p=e=>[...l,"space-between","space-around","stretch"].includes(e),g=i("alignContent",()=>({type:String,default:null,validator:p})),m={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(g)},v={align:"align",justify:"justify",alignContent:"align-content"};function y(e,t,n){let a=v[e];if(null!=n){if(t){const n=t.replace(e,"");a+="-"+n}return a+="-"+n,a.toLowerCase()}}const h=new Map;t["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:p},...g},render(e,{props:t,data:n,children:a}){let o="";for(const s in t)o+=String(t[s]);let r=h.get(o);if(!r){let e;for(e in r=[],m)m[e].forEach(n=>{const a=t[n],s=y(e,n,a);s&&r.push(s)});r.push({"no-gutters":t.noGutters,"row--dense":t.dense,["align-"+t.align]:t.align,["justify-"+t.justify]:t.justify,["align-content-"+t.alignContent]:t.alignContent}),h.set(o,r)}return e(t.tag,Object(s["a"])(n,{staticClass:"row",class:r}),a)}})},"16b7":function(e,t,n){"use strict";var a=n("2b0e");t["a"]=a["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(e,t){this.clearDelay();const n=parseInt(this[e+"Delay"],10);this[e+"Timeout"]=setTimeout(t||(()=>{this.isActive={open:!0,close:!1}[e]}),n)}}})},"1f85":function(e,t,n){e.exports=n.p+"img/worker.63a1b496.jpg"},3475:function(e,t,n){e.exports=n.p+"img/team.cc5038bd.jpg"},"4b85":function(e,t,n){},"51fe":function(e,t,n){e.exports=n.p+"img/hero-img.2c40da12.jpg"},5587:function(e,t,n){"use strict";n("e25b")},"62ad":function(e,t,n){"use strict";n("4b85");var a=n("2b0e"),s=n("d9f7"),o=n("80d2");const r=["sm","md","lg","xl"],l=(()=>r.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),i=(()=>r.reduce((e,t)=>(e["offset"+Object(o["G"])(t)]={type:[String,Number],default:null},e),{}))(),c=(()=>r.reduce((e,t)=>(e["order"+Object(o["G"])(t)]={type:[String,Number],default:null},e),{}))(),u={col:Object.keys(l),offset:Object.keys(i),order:Object.keys(c)};function d(e,t,n){let a=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");a+="-"+n}return"col"!==e||""!==n&&!0!==n?(a+="-"+n,a.toLowerCase()):a.toLowerCase()}}const f=new Map;t["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:a,parent:o}){let r="";for(const s in t)r+=String(t[s]);let l=f.get(r);if(!l){let e;for(e in l=[],u)u[e].forEach(n=>{const a=t[n],s=d(e,n,a);s&&l.push(s)});const n=l.some(e=>e.startsWith("col-"));l.push({col:!n||!t.cols,["col-"+t.cols]:t.cols,["offset-"+t.offset]:t.offset,["order-"+t.order]:t.order,["align-self-"+t.alignSelf]:t.alignSelf}),f.set(r,l)}return e(t.tag,Object(s["a"])(n,{class:l}),a)}})},"710a":function(e,t,n){var a={"./contact.jpg":"a53d","./fan.jpg":"e22d","./hero-img.jpg":"51fe","./login.jpg":"d0cf","./student.jpg":"f0cc","./team.jpg":"3475","./worker.jpg":"1f85"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=o,e.exports=s,s.id="710a"},a53d:function(e,t,n){e.exports=n.p+"img/contact.30107d81.jpg"},c7f7:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{staticClass:"pa-12 mx-14 my-10"},[a("h2",{staticClass:"section-title text-center pa-6"},[e._v("Nuestro Equipo")]),a("v-row",{staticClass:"py-6",attrs:{justify:"space-around"}},e._l(e.values,(function(t,s){return a("v-col",{key:s},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(s){var o=s.hover;return[a("div",{staticClass:"mx-auto pa-4 transition-swing",class:"elevation-"+(o?24:0)},[a("v-sheet",{staticClass:"pa-8",attrs:{"min-width":"20vh"}},[a("v-row",{attrs:{align:"center",justify:"start"}},[a("v-col",{attrs:{lg:"6",md:"6",sx:"4"}},[a("h2",{staticClass:"text-left big-title pa-6"},[e._v(e._s(t.title))]),a("p",{staticClass:"text-left format px-2"},[e._v(e._s(t.text))])]),a("v-col",{attrs:{lg:"6",md:"6",sx:"4"}},[a("v-img",{attrs:{src:n("710a")("./"+t.img+".jpg")}})],1)],1)],1)],1)]}}],null,!0)})],1)})),1)],1)},s=[],o={name:"Team",data(){return{values:[{title:"Más de 50 ...",img:"team",text:"personas de distintas partes del mundo; trabajadores informáticos que comparten la pasión por la tecnología que buscan plasmar sus conocimientos, ideas y experiencias con las tendencias más actuales del mercado."}]}}},r=o,l=(n("5587"),n("2877")),i=n("6544"),c=n.n(i),u=n("62ad"),d=n("ce87"),f=n("adda"),p=n("0fd9"),g=n("8dd9"),m=Object(l["a"])(r,a,s,!1,null,null,null);t["default"]=m.exports;c()(m,{VCol:u["a"],VHover:d["a"],VImg:f["a"],VRow:p["a"],VSheet:g["a"]})},ce87:function(e,t,n){"use strict";var a=n("16b7"),s=n("f2e7"),o=n("58df"),r=n("d9bd");t["a"]=Object(o["a"])(a["a"],s["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(r["c"])("v-hover is missing a default scopedSlot or bound value",this),null;let e;return this.$scopedSlots.default&&(e=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(r["c"])("v-hover should only contain a single element",this),e)}})},d0cf:function(e,t,n){e.exports=n.p+"img/login.6c1c6fa7.jpg"},e22d:function(e,t,n){e.exports=n.p+"img/fan.c52ee286.jpg"},e25b:function(e,t,n){},f0cc:function(e,t,n){e.exports=n.p+"img/student.b6c5a490.jpg"}}]);
//# sourceMappingURL=chunk-ccb2c42a.e4ae7c1a.js.map