(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c9ce5d6","chunk-be96622a","chunk-2dccebe2"],{"0a64":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tab-container"},[e._l(e.tabs,(function(t){var a,i=t[0],n=t[1];return[n.disabled?s("a",{key:i,staticClass:"tab disabled"},[s("p",[s("span",{staticClass:"tab-name",domProps:{innerHTML:e._s(new e.$String(n.name).htmlParse())}}),s("span",{staticClass:"soon",domProps:{innerHTML:e._s(new e.$String(e.text.soon).htmlParse())}})])]):s("router-link",{key:i,staticClass:"tab",attrs:{to:{name:e.tabsNames[i],params:e.$store.getters.params}}},[s("p",{class:(a={},a["general-count"]=n.special,a)},[n.special?e._t("special"):e._e(),n.component?s(n.component.name,e._b({tag:"component"},"component",n.component.props,!1)):s("span",{staticClass:"tab-name",domProps:{innerHTML:e._s(new e.$String(n.name).htmlParse())}})],2),e.unseen?s("unseen-box-container",{attrs:{count:e.unseen[i]}}):e._e(),e.updatable&&0!==parseInt(i)?s("span",{staticClass:"tab-delete",domProps:{innerHTML:e._s("✕")},on:{click:function(t){return t.preventDefault(),e.tabDelete({tabId:i})}}}):e._e()],1)]})),e.updatable&&e.$store.state.userLogged.loggedIn?s("div",{staticClass:"tab-add",class:{clicked:e.tabAddClicked}},[e.$scopedSlots.add&&e.tabAddClicked?e._t("add"):s("p",{on:{click:e.tabAddClickOn}},[e._v("+")])],2):e._e()],2)},i=[],n=(s("ddb0"),s("9ab4")),r=s("2fe1"),o=s("60a3"),c=s("c23c"),d=s("4b14"),l=s("8aed");let b=class extends(Object(r["c"])(l["a"])){constructor(){super(...arguments),this.tabAddClicked=!1}tabAddClickOn(){this.tabAddClicked=!0,this.$emit("tab-add-click")}tabDelete({tabId:e}){this.$emit("delete",{tabId:e})}};Object(n["a"])([Object(o["b"])({type:String})],b.prototype,"tableName",void 0),Object(n["a"])([Object(o["b"])({required:!0,type:Array})],b.prototype,"tabs",void 0),Object(n["a"])([Object(o["b"])({required:!0,type:[Number,String]})],b.prototype,"tabsActive",void 0),Object(n["a"])([Object(o["b"])({required:!0,type:Object})],b.prototype,"tabsNames",void 0),Object(n["a"])([Object(o["b"])({required:!0,type:Object})],b.prototype,"text",void 0),Object(n["a"])([Object(o["b"])({default(){var e;return(null===(e=this.$store.state[this.tableName])||void 0===e?void 0:e.unseen[this.$store.state.categories.active])||{}},type:Object})],b.prototype,"unseen",void 0),Object(n["a"])([Object(o["b"])({default:!1,type:Boolean})],b.prototype,"updatable",void 0),b=Object(n["a"])([Object(o["a"])({components:{UnseenBoxContainer:c["default"],UsernameContainer:d["default"]},name:"TabContainer"})],b);var u=b,m=u,h=(s("51ee"),s("2877")),p=Object(h["a"])(m,a,i,!1,null,"5d159fa8",null);t["default"]=p.exports},1384:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("loading-container",{attrs:{condition:e.dataLoaded}},[s("tab-container",{ref:"tabContainer",attrs:{"table-name":e.tableName,tabs:e.tabs,"tabs-active":e.tabsActive,"tabs-names":e.tabsNames,text:e.text,updatable:!0},on:{delete:e.tabDeleteOn,"tab-add-click":e.tabAddClickOn},scopedSlots:e._u([{key:"special",fn:function(){return[s("span",{staticClass:"connectivity",class:{online:e.onlineCount,offline:!e.onlineCount}}),s("span",{domProps:{innerHTML:e._s(e.onlineCount)}}),s("font-awesome-icon",{staticClass:"users",attrs:{icon:["fas","users"],title:new e.$String(e.text.onlineCount).htmlParse().toString()}})]},proxy:!0},{key:"add",fn:function(){return[s("form",{on:{submit:function(t){return t.preventDefault(),e.submitOn(t)}}},[s("input",{ref:"tabAddInput",attrs:{maxlength:e.element.length.max,type:e.element.input},domProps:{value:e.element.value},on:{blur:e.blurOnCustom,focus:e.focusOn,input:e.inputOn}}),e.element.dropdown.visibility&&e.element.value?s("user-dropdown",{attrs:{"key-mode":e.keyMode,users:e.usersByStringGet()},on:{blur:function(t){return e.userBlurOn({element:e.element})},click:e.userClickOnCustom}}):e._e()],1)]},proxy:!0}])}),s("loading-container",{attrs:{condition:!e.loading}},[s("table-container",{ref:"tables",attrs:{"table-name":e.tableName,columns:e.columns,"nested-values":[e.tabId],placeholder:e.placeholder,rows:e.rows,"rows-sort-compare-fn":e.rowsSortCompareFn,text:e.text,"start-top-at":!1},scopedSlots:e._u([e.$store.state.userLogged.loggedIn?{key:"bottomRow",fn:function(){return[s("messages-form-add",{attrs:{"addressee-id":e.addresseeId,"tab-id":e.tabId,text:e.text}})]},proxy:!0}:null],null,!0)})],1)],1)],1)},i=[],n=(s("c1f9"),s("25f0"),s("2532"),s("2ca0"),s("ddb0"),s("9ab4")),r=s("2fe1"),o=s("60a3"),c=s("9e35"),d=s("0a64"),l=s("aa99"),b=s("e55a"),u=s("fa0d"),m=s("8aed"),h=s("d6ef"),p=s("f6bb"),v=s("97a2"),f=s("6c11");let g=class extends(Object(r["c"])(m["a"],h["a"],p["a"],v["a"],f["a"],b["a"])){constructor(){super(...arguments),this.columns={created:{format:{default:"d.m.yyyy h:mm:ss",["680"]:"d.m. h:mm"},order:0,tag:"time",type:"date"},createdById:{adminShow:!0,connectivityShow:!0,order:1,type:"id"},message:{order:2,type:"message"}},this.keyMode="section",this.sectionName="messages",this.submitted=!1,this.tabLoaded=!0,this.tableName="messages",this.tabsTableName="messagesTabs"}blurOnCustom(){this.blurOn({element:this.element}),this.keyMode="section"}clickOn(e){e.target.closest(".tab-add, .tab-add-add")||this.formEmpty()}focusOn(){this.keyMode="input",this.element.dropdown.visibility=!0}formEmpty(){const{element:e}=this;this.propertiesUpdate({element:e,props:{id:"",value:""}}),this.$refs.tabContainer&&(this.$refs.tabContainer.tabAddClicked=!1)}inputOn(e){this.focusOn(),this.propertiesUpdate({element:this.element,props:{value:e.target.value}})}responseOn(e){const{dispatch:t}=this.$store;if(this.submitted=!1,!e.ok)return;const[s]=Object.keys(e.body),{tableName:a}=this;t("tabCreate",{categoryId:this.categoriesActive,tableName:a,nestedValues:[Number(s)],res:e}).catch(e=>Promise.reject(e)),this.formEmpty(),t("tabsActiveSet",{tabId:s,tabsTableName:this.tabsTableName}).catch(e=>Promise.reject(e))}rowsSortCompareFn([,e],[,t]){return e.created.valueOf()-t.created.valueOf()}submitOn(){this.submitted||(this.element.id?(this.submitted=!0,this.formSubmit({alertSuccessful:!1,auth:!0,tableName:"messagesTabs"})):this.alertShow({alertType:"notFound",state:"failed",targetType:"username"}))}userClickOnCustom(e){this.userClickOn({element:this.element,user:e}),this.submitOn()}usersByStringGet(e=5){const{state:t}=this.$store;return this.element.value?Object.fromEntries(Object.entries(t.users.value).filter(([e,s])=>{const a=s.username.toLowerCase().startsWith(this.element.value.toLowerCase());return a&&Number(e)!==t.userLogged.id&&!Object.values(this.tabs).map(([,e])=>e.addresseeId).includes(e)}).slice(0,e)):{}}validityGet({element:{name:e,required:t,validateRegex:s}}){return s.test(this.formData[e])||!this.formData[e]&&!t}get addresseeId(){var e;return null===(e=this.$store.state.messagesTabs.value[this.categoriesActive])||void 0===e?void 0:e[this.tabId].addresseeId}get element(){return this.elements.addresseeId}get loading(){var e;return this.$Tomwork.emptyIs(this.rows)&&(null===(e=this.$store.state.messages.loading[this.categoriesActive])||void 0===e?void 0:e[this.tabId])}get onlineCount(){return Object.values(this.$store.state.users.value).filter(e=>{var t;return null===(t=e.online)||void 0===t?void 0:t.includes(this.categoriesActive)}).length}get placeholder(){const{state:e}=this.$store;if(this.$Tomwork.emptyIs(e.users.value)||!e.users.value[this.addresseeId])return"";const t=e.users.value[this.addresseeId].username;return new this.$String(this.text.placeholder[-1===this.nestedValues[0]?"general":"personal"]).htmlParse({addressee:t}).toString()}get rows(){var e;return(null===(e=this.$store.state.messages.value[this.categoriesActive])||void 0===e?void 0:e[this.tabId])||{}}get tabId(){return this.$route.meta.tabId}get tabs(){return Object.entries(this.$store.state.messagesTabs.value[this.categoriesActive]||{}).sort(([e],[t])=>-1===parseInt(e)?-1:-1===parseInt(t)?1:0)}created(){window.addEventListener("click",this.clickOn),this.elements=this.elementsCreate({addresseeId:{dropdown:{visibility:!1},type:"id"}})}destroyed(){window.removeEventListener("click",this.clickOn)}};g=Object(n["a"])([Object(o["a"])({components:{MessagesFormAdd:c["default"],TabContainer:d["default"],TableContainer:l["default"],UserDropdown:u["default"]},name:"Messages"})],g);var O=g,y=O,C=(s("1dfb"),s("2877")),j=Object(C["a"])(y,a,i,!1,null,"3b84c16b",null);t["default"]=j.exports},"1dfb":function(e,t,s){"use strict";var a=s("ba3a"),i=s.n(a);i.a},"51ee":function(e,t,s){"use strict";var a=s("933f"),i=s.n(a);i.a},"84d0":function(e,t,s){},"933f":function(e,t,s){},"97a2":function(e,t,s){"use strict";s("25f0"),s("ddb0");var a=s("5530"),i=s("9ab4"),n=s("2fe1"),r=s("60a3"),o=s("8aed");let c=class extends(Object(n["c"])(o["a"])){keydownOn(e){var t;if("ArrowLeft"!==e.key&&"ArrowRight"!==e.key||"INPUT"===(null===(t=document.activeElement)||void 0===t?void 0:t.tagName))return;const s=Object.values(this.tabs).filter(([,e])=>!e.disabled).map(([e])=>e),a=s.findIndex(e=>e===this.$store.state[this.tabsTableName].active),i=s[new this.$Range(0,s.length-1).incorporate(a+("ArrowLeft"===e.key?-1:1))];this.$router.push({name:this.tabsNames[i],params:this.$store.getters.params}).catch(e=>{})}tabAddClickOn(){this.$nextTick(()=>this.$refs.tabAddInput.focus())}async tabDeleteOn({tabId:e}){const t=this.tabs.findIndex(([t])=>t===e),s=this.tabs.filter(([t])=>t!==e);return await this.$store.dispatch("tabsActiveSet",{tabId:s[Math.min(t,s.length-1)][0],tabsTableName:this.tabsTableName}).catch(e=>{}),this.$store.dispatch("tabDelete",{categoryId:this.categoriesActive,tabsTableName:this.tabsTableName,tabId:e}).catch(e=>{})}async tabsActiveCheck(){if(!this.$Tomwork.emptyIs(this.tabs))if(this.$route.meta.tabId&&this.$route.meta.tabId!==this.tabsActive)this.$store.dispatch("tabsActiveSet",{tabId:this.$route.meta.tabId,tabsTableName:this.tabsTableName}).catch(e=>{});else if(!this.tabsActive&&!this.tabs.some(([e])=>this.tabsActive===e)){const[e]=this.tabs.find(([,e])=>0===e.order)||[];if("undefined"===typeof e)return;return this.$store.dispatch("tabsActiveSet",{tabId:e,tabsTableName:this.tabsTableName}).catch(e=>{})}}get tabsActive(){return this.$store.state[this.tabsTableName].active}get tabsNames(){return this.tabs.reduce((e,[t,s])=>{const i=this.$store.state[this.sectionName].categoryHas&&0!==parseInt(t)?new this.$String(this.$store.state.categories.value[this.categoriesActive].name).capitalize().toString():"",n=new this.$String(s.href).capitalize().toString(),r=0===parseInt(t)?"":new this.$String(t).capitalize().toString();return Object(a["a"])({},e,{[t]:"".concat(this.sectionName).concat(n).concat(r).concat(i)})},{})}categoriesActiveChangeOn(){this.tabsActiveCheck().catch((function(){}))}$routeChangeOn(){this.tabsActiveCheck().catch((function(){}))}tabsActiveChangeOn(){this.categoriesActive&&this.$router.push({name:this.tabsNames[this.tabsActive],params:this.$store.getters.params}).catch(e=>{})}created(){this.tabsActiveCheck().catch((function(){})),window.addEventListener("dataLoad",this.tabsActiveCheck)}destroyed(){window.removeEventListener("dataLoad",this.tabsActiveCheck)}};Object(i["a"])([Object(r["c"])("categoriesActive")],c.prototype,"categoriesActiveChangeOn",null),Object(i["a"])([Object(r["c"])("$route",{deep:!0})],c.prototype,"$routeChangeOn",null),Object(i["a"])([Object(r["c"])("tabsActive")],c.prototype,"tabsActiveChangeOn",null),c=Object(i["a"])([Object(r["a"])({name:"TabContainerContainerMixin"})],c),t["a"]=c},"9e35":function(e,t,s){"use strict";s.r(t);var a=function(){var e,t=this,s=t.$createElement,a=t._self._c||s;return t.$store.state.userLogged.loggedIn?a("form",{attrs:{action:"https://api."+t.hostname+"/messages",autocomplete:"disabled",method:"post"},on:{submit:function(e){return e.preventDefault(),t.submitOn(e)}}},[a("div",{class:(e={},e["error-show"]=t.element.errorShow&&t.submitted,e)},[a("input",{attrs:{maxlength:t.element.length.max,type:t.element.input},domProps:{value:t.element.value},on:{blur:function(e){return t.blurOn({element:t.element})},input:t.inputOn}})]),a("button",{staticClass:"bordered-button",domProps:{innerHTML:t._s(t.texts.form.submit)}})]):t._e()},i=[],n=(s("ddb0"),s("9ab4")),r=s("60a3"),o=s("2fe1"),c=s("8aed"),d=s("f6bb");let l=class extends(Object(o["c"])(c["a"],d["a"])){constructor(){super(...arguments),this.tableName="messages",this.submitted=!1,this.tabAddClicked=!1}inputOn(e){this.propertiesUpdate({element:this.element,props:{value:e.target.value}})}responseOn(e){if(!e.ok){const t=(()=>"Email address not verified"===e.body.message?"notVerified":"notAdded")();this.alertShow({alertType:t,state:"failed",targetType:"message"})}}submitOn(){if(this.submitted=!0,this.valid)this.$root.$emit("submit"),this.submitted=!1,this.formSubmit({auth:!0}),Object.values(this.elements).forEach(e=>{this.propertiesUpdate({element:e,props:{value:""}})});else{this.computedPropertiesUpdate({element:this.element});const{alertType:e,length:t,validateRegex:s}=this.element;this.alertShow({alertType:e,length:t,state:"failed",targetType:"message",validateRegex:s})}}validityGet({element:{name:e,required:t,validateRegex:s,validLength:a}}){var i;return(s.test(this.formData[e])&&(null===(i=this.formData[e])||void 0===i?void 0:i.trim())&&t||!this.formData[e]&&!t)&&a}get element(){return this.elements.message}created(){this.elements=this.elementsCreate({message:{type:"message"}}),this.elementsExtra=this.elementsCreate({addresseeId:{required:!1,value:-1===this.addresseeId?void 0:this.addresseeId}})}};Object(n["a"])([Object(r["b"])({type:Number})],l.prototype,"addresseeId",void 0),Object(n["a"])([Object(r["b"])({required:!0,type:Number})],l.prototype,"tabId",void 0),Object(n["a"])([Object(r["b"])({required:!0,type:Object})],l.prototype,"text",void 0),l=Object(n["a"])([Object(r["a"])({name:"MessagesFormAdd"})],l);var b=l,u=b,m=(s("c733"),s("2877")),h=Object(m["a"])(u,a,i,!1,null,"08877c83",null);t["default"]=h.exports},ba3a:function(e,t,s){},c733:function(e,t,s){"use strict";var a=s("84d0"),i=s.n(a);i.a},d6ef:function(e,t,s){"use strict";s("25f0");var a=s("9ab4"),i=s("2fe1"),n=s("60a3"),r=s("8aed");let o=class extends(Object(i["c"])(r["a"])){get active(){return this.sectionsActive===new this.$String(this.$options.name).decapitalize().toString()}};Object(a["a"])([Object(n["b"])({required:!0,type:Object})],o.prototype,"text",void 0),o=Object(a["a"])([Object(n["a"])({name:"SectionMixin"})],o),t["a"]=o}}]);
//# sourceMappingURL=chunk-7c9ce5d6.65ad024c.js.map