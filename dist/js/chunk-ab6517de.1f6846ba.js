(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab6517de","chunk-070b0364"],{"0a64":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-container"},[t._l(t.tabs,(function(e){var s,i=e[0],n=e[1];return[n.disabled?a("a",{key:i,staticClass:"tab disabled"},[a("p",[a("span",{staticClass:"tab-name",domProps:{innerHTML:t._s(new t.$String(n.name).htmlParse())}}),a("span",{staticClass:"soon",domProps:{innerHTML:t._s(new t.$String(t.text.soon).htmlParse())}})])]):a("router-link",{key:i,staticClass:"tab",attrs:{to:{name:t.tabsNames[i],params:t.$store.getters.params}}},[a("p",{class:(s={},s["general-count"]=n.special,s)},[n.special?t._t("special"):t._e(),n.component?a(n.component.name,t._b({tag:"component"},"component",n.component.props,!1)):a("span",{staticClass:"tab-name",domProps:{innerHTML:t._s(new t.$String(n.name).htmlParse())}})],2),t.updatable&&0!==parseInt(i)?a("span",{staticClass:"tab-delete",domProps:{innerHTML:t._s("✕")},on:{click:function(e){return e.preventDefault(),t.tabDelete({tabId:i})}}}):t._e()])]})),t.updatable&&t.$store.state.userLogged.loggedIn?a("div",{staticClass:"tab-add",class:{clicked:t.tabAddClicked}},[t.$scopedSlots.add&&t.tabAddClicked?t._t("add"):a("p",{on:{click:t.tabAddClickOn}},[t._v("+")])],2):t._e()],2)},i=[],n=(a("ddb0"),a("9ab4")),c=a("2fe1"),r=a("60a3"),o=a("4b14"),b=a("8aed");let d=class extends(Object(c["c"])(b["a"])){constructor(){super(...arguments),this.tabAddClicked=!1}tabAddClickOn(){this.tabAddClicked=!0,this.$emit("tab-add-click")}tabDelete({tabId:t}){this.$emit("delete",{tabId:t})}};Object(n["a"])([Object(r["b"])({type:String})],d.prototype,"tableName",void 0),Object(n["a"])([Object(r["b"])({required:!0,type:Array})],d.prototype,"tabs",void 0),Object(n["a"])([Object(r["b"])({required:!0,type:[Number,String]})],d.prototype,"tabsActive",void 0),Object(n["a"])([Object(r["b"])({required:!0,type:Object})],d.prototype,"tabsNames",void 0),Object(n["a"])([Object(r["b"])({required:!0,type:Object})],d.prototype,"text",void 0),Object(n["a"])([Object(r["b"])({default:!1,type:Boolean})],d.prototype,"updatable",void 0),d=Object(n["a"])([Object(r["a"])({components:{UsernameContainer:o["default"]},name:"TabContainer"})],d);var l=d,u=l,h=(a("35e7"),a("2877")),v=Object(h["a"])(u,s,i,!1,null,"4495b7b2",null);e["default"]=v.exports},"182f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("loading-container",{attrs:{condition:t.dataLoaded}},[a("div",{staticClass:"select-container"},t._l(["leagueSeasons","divisions"],(function(e){return a("div",{key:e},[a("label",{attrs:{for:"league-select-"+new t.$String(new t.$String(e).urlTo()).urlTo()},domProps:{innerHTML:t._s(new t.$String(t.texts.dictionary[t.$store.state[e].param]).capitalize()+":")}}),a("select",{key:new t.$String(e).urlTo()+"-select",attrs:{id:"league-select-"+new t.$String(e).urlTo()},on:{change:function(a){return t.changeOn({tableName:e,$event:a})}}},t._l(t.selects[e],(function(s,i){return a("option",{key:i,domProps:{value:i,selected:parseInt(i)===t.$store.state[e].active,innerHTML:t._s(new t.$String(t.$store.state[e].htmlGet(s,Object.assign({},t.$store,{divisionShow:!1}))).capitalize())}})})),0)])})),0),a("tab-container",{attrs:{tabs:t.tabs,"tabs-active":t.tabsActive,"tabs-names":t.tabsNames,text:t.text}}),a("router-view",{staticClass:"subsection"})],1)],1)},i=[],n=(a("ddb0"),a("5530")),c=a("9ab4"),r=a("2fe1"),o=a("60a3"),b=a("0a64"),d=a("97a2"),l=a("d6ef"),u=a("8aed");let h=class extends(Object(r["c"])(u["a"],l["a"],d["a"])){constructor(){super(...arguments),this.sectionName="league",this.tabsTableName="leagueTabs"}async changeOn({tableName:t,$event:e}){const{commit:a,dispatch:s,getters:i,state:c}=this.$store,r=c[t].categoryHas?c[t].value[this.categoriesActive]:c[t].value,o=new this.$String(c[t].htmlGet(r[e.target.value],{divisionShow:!0})).urlTo();this.$router.push({params:Object(n["a"])({},i.params,{[c[t].param]:o})}).catch(t=>{}),await s("".concat(t,"ActiveSet"),Number(e.target.value)).catch(t=>{}),setTimeout(()=>{a("dataLoadedSet",{nestedValues:[this.categoriesActive,this.$store.state.leagueSeasons.active,this.$store.state.divisions.active]})},50)}get divisions(){var t,e;const{divisions:a,leagueSeasons:s}=this.$store.state;return this.$Tomwork.emptyIs(null===(t=s.value[s.active])||void 0===t?void 0:t.divisions[this.categoriesActive])?{null:{categoryId:0,index:0,level:0,matchTypeId:0}}:((null===(e=s.value[s.active])||void 0===e?void 0:e.divisions[this.categoriesActive])||[]).reduce((t,e)=>{var s;return t[e]=(null===(s=a.value[this.categoriesActive])||void 0===s?void 0:s[e])||{categoryId:0,index:0,level:0,matchTypeId:0},t},{})}get leagueSeasons(){const{leagueSeasons:t}=this.$store.state;return this.$Tomwork.emptyIs(t.value)?{}:t.value}get selects(){return{divisions:this.divisions,leagueSeasons:this.leagueSeasons}}get tabs(){return Object.entries(this.$store.state.leagueTabs.value).sort(([,t],[,e])=>t.order-e.order).map(([t,e])=>[t,Object(n["a"])({name:this.text.tabs[t]},e)])}get tabsEnabled(){return this.tabs.filter(([,t])=>!t.disabled)}};h=Object(c["a"])([Object(o["a"])({components:{TabContainer:b["default"]},name:"League"})],h);var v=h,p=v,m=(a("c659"),a("2877")),g=Object(m["a"])(p,s,i,!1,null,"7679f64f",null);e["default"]=g.exports},"35e7":function(t,e,a){"use strict";var s=a("a9a1"),i=a.n(s);i.a},"8fd1":function(t,e,a){},"97a2":function(t,e,a){"use strict";a("25f0"),a("ddb0");var s=a("5530"),i=a("9ab4"),n=a("2fe1"),c=a("60a3"),r=a("8aed");let o=class extends(Object(n["c"])(r["a"])){keydownOn(t){var e;if("ArrowLeft"!==t.key&&"ArrowRight"!==t.key||"INPUT"===(null===(e=document.activeElement)||void 0===e?void 0:e.tagName))return;const a=Object.values(this.tabs).filter(([,t])=>!t.disabled).map(([t])=>t),s=a.findIndex(t=>t===this.$store.state[this.tabsTableName].active),i=a[new this.$Range(0,a.length-1).incorporate(s+("ArrowLeft"===t.key?-1:1))];this.$router.push({name:this.tabsNames[i],params:this.$store.getters.params}).catch(t=>{})}tabAddClickOn(){this.$nextTick(()=>this.$refs.tabAddInput.focus())}async tabDeleteOn({tabId:t}){const e=this.tabs.findIndex(([e])=>e===t),a=this.tabs.filter(([e])=>e!==t);return await this.$store.dispatch("tabsActiveSet",{tabId:a[Math.min(e,a.length-1)][0],tabsTableName:this.tabsTableName}).catch(t=>{}),this.$store.dispatch("tabDelete",{categoryId:this.categoriesActive,tabsTableName:this.tabsTableName,tabId:t}).catch(t=>{})}async tabsActiveCheck(){if(!this.$Tomwork.emptyIs(this.tabs))if(this.$route.meta.tabId&&this.$route.meta.tabId!==this.tabsActive)this.$store.dispatch("tabsActiveSet",{tabId:this.$route.meta.tabId,tabsTableName:this.tabsTableName}).catch(t=>{});else if(!this.tabsActive&&!this.tabs.some(([t])=>this.tabsActive===t)){const[t]=this.tabs.find(([,t])=>0===t.order)||[];if("undefined"===typeof t)return;return this.$store.dispatch("tabsActiveSet",{tabId:t,tabsTableName:this.tabsTableName}).catch(t=>{})}}get tabsActive(){return this.$store.state[this.tabsTableName].active}get tabsNames(){return this.tabs.reduce((t,[e,a])=>{const i=this.$store.state[this.sectionName].categoryHas&&0!==parseInt(e)?new this.$String(this.$store.state.categories.value[this.categoriesActive].name).capitalize().toString():"",n=new this.$String(a.href).capitalize().toString(),c=0===parseInt(e)?"":new this.$String(e).capitalize().toString();return Object(s["a"])({},t,{[e]:"".concat(this.sectionName).concat(n).concat(c).concat(i)})},{})}categoriesActiveChangeOn(){this.tabsActiveCheck().catch((function(){}))}$routeChangeOn(){this.tabsActiveCheck().catch((function(){}))}tabsActiveChangeOn(){this.categoriesActive&&this.$router.push({name:this.tabsNames[this.tabsActive],params:this.$store.getters.params}).catch(t=>{})}created(){this.tabsActiveCheck().catch((function(){})),window.addEventListener("dataLoad",this.tabsActiveCheck)}destroyed(){window.removeEventListener("dataLoad",this.tabsActiveCheck)}};Object(i["a"])([Object(c["c"])("categoriesActive")],o.prototype,"categoriesActiveChangeOn",null),Object(i["a"])([Object(c["c"])("$route",{deep:!0})],o.prototype,"$routeChangeOn",null),Object(i["a"])([Object(c["c"])("tabsActive")],o.prototype,"tabsActiveChangeOn",null),o=Object(i["a"])([Object(c["a"])({name:"TabContainerContainerMixin"})],o),e["a"]=o},a9a1:function(t,e,a){},c659:function(t,e,a){"use strict";var s=a("8fd1"),i=a.n(s);i.a},d6ef:function(t,e,a){"use strict";a("25f0");var s=a("9ab4"),i=a("2fe1"),n=a("60a3"),c=a("8aed");let r=class extends(Object(i["c"])(c["a"])){get active(){return this.sectionsActive===new this.$String(this.$options.name).decapitalize().toString()}};Object(s["a"])([Object(n["b"])({required:!0,type:Object})],r.prototype,"text",void 0),r=Object(s["a"])([Object(n["a"])({name:"SectionMixin"})],r),e["a"]=r}}]);
//# sourceMappingURL=chunk-ab6517de.1f6846ba.js.map