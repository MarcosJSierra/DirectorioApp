(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56c23c4e"],{"0fd9":function(e,t,a){"use strict";a("4b85");var n=a("2b0e"),o=a("d9f7"),l=a("80d2");const s=["sm","md","lg","xl"],i=["start","end","center"];function r(e,t){return s.reduce((a,n)=>(a[e+Object(l["G"])(n)]=t(),a),{})}const c=e=>[...i,"baseline","stretch"].includes(e),u=r("align",()=>({type:String,default:null,validator:c})),d=e=>[...i,"space-between","space-around"].includes(e),f=r("justify",()=>({type:String,default:null,validator:d})),p=e=>[...i,"space-between","space-around","stretch"].includes(e),g=r("alignContent",()=>({type:String,default:null,validator:p})),v={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function m(e,t,a){let n=y[e];if(null!=a){if(t){const a=t.replace(e,"");n+="-"+a}return n+="-"+a,n.toLowerCase()}}const h=new Map;t["a"]=n["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:p},...g},render(e,{props:t,data:a,children:n}){let l="";for(const o in t)l+=String(t[o]);let s=h.get(l);if(!s){let e;for(e in s=[],v)v[e].forEach(a=>{const n=t[a],o=m(e,a,n);o&&s.push(o)});s.push({"no-gutters":t.noGutters,"row--dense":t.dense,["align-"+t.align]:t.align,["justify-"+t.justify]:t.justify,["align-content-"+t.alignContent]:t.alignContent}),h.set(l,s)}return e(t.tag,Object(o["a"])(a,{staticClass:"row",class:s}),n)}})},"16b7":function(e,t,a){"use strict";var n=a("2b0e");t["a"]=n["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(e,t){this.clearDelay();const a=parseInt(this[e+"Delay"],10);this[e+"Timeout"]=setTimeout(t||(()=>{this.isActive={open:!0,close:!1}[e]}),a)}}})},"4b85":function(e,t,a){},"62ad":function(e,t,a){"use strict";a("4b85");var n=a("2b0e"),o=a("d9f7"),l=a("80d2");const s=["sm","md","lg","xl"],i=(()=>s.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),r=(()=>s.reduce((e,t)=>(e["offset"+Object(l["G"])(t)]={type:[String,Number],default:null},e),{}))(),c=(()=>s.reduce((e,t)=>(e["order"+Object(l["G"])(t)]={type:[String,Number],default:null},e),{}))(),u={col:Object.keys(i),offset:Object.keys(r),order:Object.keys(c)};function d(e,t,a){let n=e;if(null!=a&&!1!==a){if(t){const a=t.replace(e,"");n+="-"+a}return"col"!==e||""!==a&&!0!==a?(n+="-"+a,n.toLowerCase()):n.toLowerCase()}}const f=new Map;t["a"]=n["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...r,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:a,children:n,parent:l}){let s="";for(const o in t)s+=String(t[o]);let i=f.get(s);if(!i){let e;for(e in i=[],u)u[e].forEach(a=>{const n=t[a],o=d(e,a,n);o&&i.push(o)});const a=i.some(e=>e.startsWith("col-"));i.push({col:!a||!t.cols,["col-"+t.cols]:t.cols,["offset-"+t.offset]:t.offset,["order-"+t.order]:t.order,["align-self-"+t.alignSelf]:t.alignSelf}),f.set(s,i)}return e(t.tag,Object(o["a"])(a,{class:i}),n)}})},ce87:function(e,t,a){"use strict";var n=a("16b7"),o=a("f2e7"),l=a("58df"),s=a("d9bd");t["a"]=Object(l["a"])(n["a"],o["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(s["c"])("v-hover is missing a default scopedSlot or bound value",this),null;let e;return this.$scopedSlots.default&&(e=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(s["c"])("v-hover should only contain a single element",this),e)}})},d563:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{staticClass:"pa-12 mx-14 my-10"},[a("h2",{staticClass:"about-title text-center pa-6"},[e._v("Tecnologías")]),a("p",{staticClass:"description text-center my-12"},[e._v("\n    El proyecto Radiance cuenta con una gran lista de tecnologías por las que esta al pendiente\n    para poder brindarte la información que como Radianacer necesitas, en el momento adecuado. Una muestra\n    de las tecnologías con las que trabajamos para mantenerte al tanto son:\n  ")]),a("v-spacer"),a("v-row",{attrs:{justify:"center"}},e._l(e.values,(function(t,n){return a("v-col",{key:n,staticClass:"px-12",attrs:{lg:"3",md:"4",sx:"12"}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var o=n.hover;return[a("div",{staticClass:"mx-auto transition-swing",class:"elevation-"+(o?24:0)},[a("v-sheet",{staticClass:"pa-10",attrs:{color:t.color,height:"300","min-width":"20vh"}},[a("v-row",{staticClass:"pa-3",attrs:{justify:"center"}},[a("v-icon",{attrs:{size:"150",color:"grey-darken-4"}},[e._v(e._s(t.icon))])],1),a("v-row",{staticClass:"py-3",attrs:{justify:"center"}},[a("h3",{staticClass:"text-center item-title"},[e._v(e._s(t.title))])])],1)],1)]}}],null,!0)})],1)})),1),a("p",{staticClass:"description color text-center pt-8"},[e._v("... y muchas más!")])],1)},o=[],l={name:"Tecnologies",data(){return{values:[{title:"Python",icon:"mdi-language-python",color:"#D9FFC7"},{title:"Java",icon:"mdi-language-java",color:"#F1DBDB"},{title:"R",icon:"mdi-language-r",color:"#BAD7D9"},{title:"Javascript",icon:"mdi-language-javascript",color:"#E9DD9D"},{title:"Swift",icon:"mdi-language-swift",color:"#FFD0A5"},{title:"Php",icon:"mdi-language-php",color:"#DFD2FB"},{title:"Ruby",icon:"mdi-language-ruby",color:"#E89898"},{title:"Vue.js",icon:"mdi-vuejs",color:"#B8D6BD"},{title:"Typescript",icon:"mdi-language-typescript",color:"#A7DFF0"},{title:"Angular",icon:"mdi-angular",color:"#FF8585"},{title:"React",icon:"mdi-react",color:"#C7F9F9"},{title:"Kotlin",icon:"mdi-language-kotlin",color:"#FFD39F"}]}}},s=l,i=a("2877"),r=a("6544"),c=a.n(r),u=a("62ad"),d=a("ce87"),f=a("132d"),p=a("0fd9"),g=a("8dd9"),v=a("2fa4"),y=Object(i["a"])(s,n,o,!1,null,null,null);t["default"]=y.exports;c()(y,{VCol:u["a"],VHover:d["a"],VIcon:f["a"],VRow:p["a"],VSheet:g["a"],VSpacer:v["a"]})}}]);
//# sourceMappingURL=chunk-56c23c4e.2f634a15.js.map