(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd25e970","chunk-be96622a"],{"0a64":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-container"},[t._l(t.tabs,(function(e){var s,i=e[0],n=e[1];return[n.disabled?a("a",{key:i,staticClass:"tab disabled"},[a("p",[a("span",{staticClass:"tab-name",domProps:{innerHTML:t._s(new t.$String(n.name).htmlParse())}}),a("span",{staticClass:"soon",domProps:{innerHTML:t._s(new t.$String(t.text.soon).htmlParse())}})])]):a("router-link",{key:i,staticClass:"tab",attrs:{to:{name:t.tabsNames[i],params:t.$store.getters.params}}},[a("p",{class:(s={},s["general-count"]=n.special,s)},[n.special?t._t("special"):t._e(),n.component?a(n.component.name,t._b({tag:"component"},"component",n.component.props,!1)):a("span",{staticClass:"tab-name",domProps:{innerHTML:t._s(new t.$String(n.name).htmlParse())}})],2),t.unseen?a("unseen-box-container",{attrs:{count:t.unseen[i]}}):t._e(),t.updatable&&0!==parseInt(i)?a("span",{staticClass:"tab-delete",domProps:{innerHTML:t._s("✕")},on:{click:function(e){return e.preventDefault(),t.tabDelete({tabId:i})}}}):t._e()],1)]})),t.updatable&&t.$store.state.userLogged.loggedIn?a("div",{staticClass:"tab-add",class:{clicked:t.tabAddClicked}},[t.$scopedSlots.add&&t.tabAddClicked?t._t("add"):a("p",{on:{click:t.tabAddClickOn}},[t._v("+")])],2):t._e()],2)},i=[],n=(a("ddb0"),a("9ab4")),c=a("2fe1"),r=a("60a3"),o=a("c23c"),b=a("4b14"),d=a("8aed");let l=class extends(Object(c["c"])(d["a"])){constructor(){super(...arguments),this.tabAddClicked=!1}tabAddClickOn(){this.tabAddClicked=!0,this.$emit("tab-add-click")}tabDelete({tabId:t}){this.$emit("delete",{tabId:t})}};Object(n["a"])([Object(r["b"])({type:String})],l.prototype,"tableName",void 0),Object(n["a"])([Object(r["b"])({required:!0,type:Array})],l.prototype,"tabs",void 0),Object(n["a"])([Object(r["b"])({required:!0,type:[Number,String]})],l.prototype,"tabsActive",void 0),Object(n["a"])([Object(r["b"])({required:!0,type:Object})],l.prototype,"tabsNames",void 0),Object(n["a"])([Object(r["b"])({required:!0,type:Object})],l.prototype,"text",void 0),Object(n["a"])([Object(r["b"])({default(){var t;return(null===(t=this.$store.state[this.tableName])||void 0===t?void 0:t.unseen[this.$store.state.categories.active])||{}},type:Object})],l.prototype,"unseen",void 0),Object(n["a"])([Object(r["b"])({default:!1,type:Boolean})],l.prototype,"updatable",void 0),l=Object(n["a"])([Object(r["a"])({components:{UnseenBoxContainer:o["default"],UsernameContainer:b["default"]},name:"TabContainer"})],l);var u=l,h=u,p=(a("51ee"),a("2877")),v=Object(p["a"])(h,s,i,!1,null,"5d159fa8",null);e["default"]=v.exports},"182f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("loading-container",{attrs:{condition:t.dataLoaded}},[a("div",{staticClass:"select-container"},t._l(["leagueSeasons","divisions"],(function(e){return a("div",{key:e},[a("label",{attrs:{for:"league-select-"+new t.$String(new t.$String(e).urlTo()).urlTo()},domProps:{innerHTML:t._s(new t.$String(t.texts.dictionary[t.$store.state[e].param]).capitalize()+":")}}),a("select",{key:new t.$String(e).urlTo()+"-select",attrs:{id:"league-select-"+new t.$String(e).urlTo()},on:{change:function(a){return t.changeOn({tableName:e,$event:a})}}},t._l(t.selects[e],(function(s,i){return a("option",{key:i,domProps:{value:i,selected:parseInt(i)===t.$store.state[e].active,innerHTML:t._s(new t.$String(t.$store.state[e].htmlGet(s,Object.assign({},t.$store,{divisionShow:!1}))).capitalize())}})})),0)])})),0),a("tab-container",{attrs:{tabs:t.tabs,"tabs-active":t.tabsActive,"tabs-names":t.tabsNames,text:t.text,unseen:t.unseen}}),a("router-view",{staticClass:"subsection",attrs:{unseen:t.unseen[t.tabsActive]}})],1)],1)},i=[],n=(a("ddb0"),a("5530")),c=a("9ab4"),r=a("2fe1"),o=a("60a3"),b=a("0a64"),d=a("97a2"),l=a("d6ef"),u=a("8aed");let h=class extends(Object(r["c"])(u["a"],l["a"],d["a"])){constructor(){super(...arguments),this.sectionName="league",this.tabsTableName="leagueTabs"}async changeOn({tableName:t,$event:e}){const{dispatch:a,getters:s,state:i}=this.$store,c=i[t].categoryHas?i[t].value[this.categoriesActive]:i[t].value,r=new this.$String(i[t].htmlGet(c[e.target.value],{divisionShow:!0})).urlTo();this.$router.push({params:Object(n["a"])(Object(n["a"])({},s.params),{},{[i[t].param]:r})}).catch(t=>{}),await a(t+"ActiveSet",Number(e.target.value)).catch(t=>{}),await a("unseenTitleUpdate").catch(t=>{})}get divisions(){var t,e;const{divisions:a,leagueSeasons:s}=this.$store.state;return this.$Tomwork.emptyIs(null===(t=s.value[s.active])||void 0===t?void 0:t.divisions[this.categoriesActive])?{null:{categoryId:0,index:0,level:0,matchTypeId:0}}:((null===(e=s.value[s.active])||void 0===e?void 0:e.divisions[this.categoriesActive])||[]).reduce((t,e)=>{var s;return t[e]=(null===(s=a.value[this.categoriesActive])||void 0===s?void 0:s[e])||{categoryId:0,index:0,level:0,matchTypeId:0},t},{})}get leagueSeasons(){const{leagueSeasons:t}=this.$store.state;return this.$Tomwork.emptyIs(t.value)?{}:t.value}get selects(){return{divisions:this.divisions,leagueSeasons:this.leagueSeasons}}get tabs(){return Object.entries(this.$store.state.leagueTabs.value).sort(([,t],[,e])=>t.order-e.order).map(([t,e])=>[t,Object(n["a"])({name:this.text.tabs[t]},e)])}get tabsEnabled(){return this.tabs.filter(([,t])=>!t.disabled)}get unseen(){return this.$store.getters.leagueUnseen}};h=Object(c["a"])([Object(o["a"])({components:{TabContainer:b["default"]},name:"League"})],h);var p=h,v=p,m=(a("fc79"),a("2877")),g=Object(m["a"])(v,s,i,!1,null,"324df76a",null);e["default"]=g.exports},"51ee":function(t,e,a){"use strict";var s=a("933f"),i=a.n(s);i.a},"933f":function(t,e,a){},"97a2":function(t,e,a){"use strict";a("25f0"),a("ddb0");var s=a("5530"),i=a("9ab4"),n=a("2fe1"),c=a("60a3"),r=a("8aed");let o=class extends(Object(n["c"])(r["a"])){keydownOn(t){var e;if("ArrowLeft"!==t.key&&"ArrowRight"!==t.key||"INPUT"===(null===(e=document.activeElement)||void 0===e?void 0:e.tagName))return;const a=Object.values(this.tabs).filter(([,t])=>!t.disabled).map(([t])=>t),s=a.findIndex(t=>t===this.$store.state[this.tabsTableName].active),i=a[new this.$Range(0,a.length-1).incorporate(s+("ArrowLeft"===t.key?-1:1))];this.$router.push({name:this.tabsNames[i],params:this.$store.getters.params}).catch(t=>{})}tabAddClickOn(){this.$nextTick(()=>this.$refs.tabAddInput.focus())}async tabDeleteOn({tabId:t}){const e=this.tabs.findIndex(([e])=>e===t),a=this.tabs.filter(([e])=>e!==t);return await this.$store.dispatch("tabsActiveSet",{tabId:a[Math.min(e,a.length-1)][0],tabsTableName:this.tabsTableName}).catch(t=>{}),this.$store.dispatch("tabDelete",{categoryId:this.categoriesActive,tabsTableName:this.tabsTableName,tabId:t}).catch(t=>{})}async tabsActiveCheck(){if(!this.$Tomwork.emptyIs(this.tabs))if(this.$route.meta.tabId&&this.$route.meta.tabId!==this.tabsActive)this.$store.dispatch("tabsActiveSet",{tabId:this.$route.meta.tabId,tabsTableName:this.tabsTableName}).catch(t=>{});else if(!this.tabsActive&&!this.tabs.some(([t])=>this.tabsActive===t)){const[t]=this.tabs.find(([,t])=>0===t.order)||[];if("undefined"===typeof t)return;return this.$store.dispatch("tabsActiveSet",{tabId:t,tabsTableName:this.tabsTableName}).catch(t=>{})}}get tabsActive(){return this.$store.state[this.tabsTableName].active}get tabsNames(){return this.tabs.reduce((t,[e,a])=>{const i=this.$store.state[this.sectionName].categoryHas&&0!==parseInt(e)?new this.$String(this.$store.state.categories.value[this.categoriesActive].name).capitalize().toString():"",n=new this.$String(a.href).capitalize().toString(),c=0===parseInt(e)?"":new this.$String(e).capitalize().toString();return Object(s["a"])(Object(s["a"])({},t),{},{[e]:`${this.sectionName}${n}${c}${i}`})},{})}categoriesActiveChangeOn(){this.tabsActiveCheck().catch((function(){}))}$routeChangeOn(){this.tabsActiveCheck().catch((function(){}))}tabsActiveChangeOn(){this.categoriesActive&&this.$router.push({name:this.tabsNames[this.tabsActive],params:this.$store.getters.params}).catch(t=>{})}created(){this.tabsActiveCheck().catch((function(){})),window.addEventListener("dataLoad",this.tabsActiveCheck)}destroyed(){window.removeEventListener("dataLoad",this.tabsActiveCheck)}};Object(i["a"])([Object(c["c"])("categoriesActive")],o.prototype,"categoriesActiveChangeOn",null),Object(i["a"])([Object(c["c"])("$route",{deep:!0})],o.prototype,"$routeChangeOn",null),Object(i["a"])([Object(c["c"])("tabsActive")],o.prototype,"tabsActiveChangeOn",null),o=Object(i["a"])([Object(c["a"])({name:"TabContainerContainerMixin"})],o),e["a"]=o},c89e:function(t,e,a){},d6ef:function(t,e,a){"use strict";a("25f0");var s=a("9ab4"),i=a("2fe1"),n=a("60a3"),c=a("8aed");let r=class extends(Object(i["c"])(c["a"])){get active(){return this.sectionsActive===new this.$String(this.$options.name).decapitalize().toString()}};Object(s["a"])([Object(n["b"])({required:!0,type:Object})],r.prototype,"text",void 0),r=Object(s["a"])([Object(n["a"])({name:"SectionMixin"})],r),e["a"]=r},fc79:function(t,e,a){"use strict";var s=a("c89e"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-cd25e970.867357ad.js.map