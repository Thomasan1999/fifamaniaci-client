(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dddbf3e"],{"4ddd":function(e,t,a){"use strict";var s=a("da44"),_=a.n(s);_.a},"9e35":function(e,t,a){"use strict";a.r(t);var s=function(){var e,t=this,a=t.$createElement,s=t._self._c||a;return t.$store.state.userLogged.loggedIn?s("form",{attrs:{action:"https://api."+t.hostname+"/messages",autocomplete:"disabled",method:"post"},on:{submit:function(e){return e.preventDefault(),t.submitOn(e)}}},[s("div",{class:(e={},e["error-show"]=t.element.errorShow&&t.submitted,e)},[s("input",{attrs:{maxlength:t.element.length.max,type:t.element.input},domProps:{value:t.element.value},on:{blur:function(e){return t.blurOn({element:t.element})},input:t.inputOn}})]),s("button",{staticClass:"bordered-button",domProps:{innerHTML:t._s(t.texts.form.submit)}})]):t._e()},_=[],r=(a("ddb0"),a("9ab4")),i=a("60a3"),n=a("2fe1"),l=a("8aed"),o=a("f6bb");let u=class extends(Object(n["c"])(l["a"],o["a"])){constructor(){super(...arguments),this.tableName="messages",this.submitted=!1}inputOn(e){this.propertiesUpdate({element:this.element,props:{value:e.target.value}})}submitOn(){if(this.submitted=!0,this.valid)this.$store.dispatch("tableUpdate",{categoryId:this.$store.state.categories.active,lastUpdate:!1,res:{body:{[Object.keys(this.$store.state.messages.value[this.categoriesActive][this.tabId]).length+1e3]:{addressee:null,categoryId:this.$store.state.categories.active,created:this.$dayjs().format(),createdById:this.$store.state.userLogged.id,message:this.formData.message}},ok:!0},tableName:this.tableName}).catch(e=>{}),this.submitted=!1,Object.values(this.elements).forEach(e=>{this.propertiesUpdate({element:e,props:{value:""}})});else{this.computedPropertiesUpdate({element:this.element});const{alertType:e,length:t,validateRegex:a}=this.element;this.alertShow({alertType:e,length:t,state:"failed",targetType:"message",validateRegex:a})}}validityGet({element:{name:e,required:t,validateRegex:a,validLength:s}}){var _;return(a.test(this.formData[e])&&(null===(_=this.formData[e])||void 0===_?void 0:_.trim())&&t||!this.formData[e]&&!t)&&s}get element(){return this.elements.message}created(){this.elements=this.elementsCreate({message:{type:"message"}}),this.elementsExtra=this.elementsCreate({addresseeId:{required:!1,value:-1===this.addresseeId?void 0:this.addresseeId}})}};Object(r["a"])([Object(i["b"])({type:Number})],u.prototype,"addresseeId",void 0),Object(r["a"])([Object(i["b"])({required:!0,type:Number})],u.prototype,"tabId",void 0),Object(r["a"])([Object(i["b"])({required:!0,type:Object})],u.prototype,"text",void 0),u=Object(r["a"])([Object(i["a"])({name:"MessagesFormAdd"})],u);var m=u,d=m,c=(a("4ddd"),a("2877")),p=Object(c["a"])(d,s,_,!1,null,"4b61af3c",null);t["default"]=p.exports},da44:function(e,t,a){},f6bb:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("25f0"),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2532"),core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("466d"),core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("5319"),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("ddb0"),core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__),C_Users_tomas_WebStormProjects_fifamaniaci_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("5530"),tslib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("9ab4"),vue_class_component__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("2fe1"),vue_property_decorator__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("60a3"),_mixins_Main__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("8aed");let FormMixin=class FormMixin extends(Object(vue_class_component__WEBPACK_IMPORTED_MODULE_7__["c"])(_mixins_Main__WEBPACK_IMPORTED_MODULE_9__["a"])){constructor(){super(...arguments),this.alertTypes={empty(e){return e.required&&e.emptyIs()},invalid({validateRegex:e,value:t}){return!e.test(t)},long({length:e,value:t}){return t.length>e.max},notFound({taken:e}){return!e},short(e){return!(!e.required&&e.emptyIs())&&e.value.length<e.length.min},taken({taken:e,type:t,valueDefault:a,value:s}){return e&&"password"!==t&&s!==a}},this.alertTypesActive=["short","long","invalid","empty"],this.elements={},this.elementsExtra={},this.formData={},this.method="post"}alertShowSuccessful(){this.alertShow({alertType:"successful",state:"successful",targetType:this.$options.name})}alertTypeGet({element:e}){return this.alertTypesActive.find(t=>this.alertTypes[t](e))||""}blurOn({element:e}){e.inputting=!1,e.alertType=this.alertTypeGet({element:e}),this.errorShowUpdate({element:e})}computedPropertiesUpdate({element:e}){this.formDataUpdate({element:e}),e.validLength=this.lengthValidityGet({element:e}),e.valid=this.validityGet({element:e}),e.alertType=this.alertTypeGet({element:e}),this.errorShowUpdate({element:e})}errorShowUpdate({element:e}){e.errorShow=(e.required||!e.emptyIs())&&!e.valid&&!e.inputting&&!e.checking}formDataUpdate({element:e}){if(!e.sendable||"span"===e.tag)return;if(e.emptyIs()&&!e.required||e.reference&&e.valueDefault===e.value)return void delete this.formData[e.name];const t=(()=>{switch(e.type){case"id":case"idUsername":return e.id||null;case"date":return e.value||this.$dayjs().format();case"float":return parseFloat(e.value)||e.min;case"integer":return parseInt(e.value)||e.min;case"boolean":return e.value;default:return" "===e.value?null:e.value||null}})();this.$set(this.formData,e.name,t)}async formSubmit({alertSuccessful:e=!0,categoryInclude:t=!1,auth:a=!1,tableName:s=this.tableName,url:_=this.url}={}){var r;if(this.validate(),this.valid)return e&&this.alertShowSuccessful(),Object.values(this.elements).forEach(e=>{this.propertiesUpdate({element:e,props:Object(C_Users_tomas_WebStormProjects_fifamaniaci_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["a"])({},e.reference?{valueDefault:e.value}:{value:"span"===e.tag?e.value:""})})}),null===(r=this.responseOn)||void 0===r||r.call(this,{body:{},headers:{},ok:!0,status:400}),{body:{},headers:{},ok:!0,status:400};this.invalidOn()}idGet({elementName:e}){return"".concat(new this.$String(this.$options.name).caseTrainTo(),"-").concat(new this.$String(e).caseTrainTo()).concat("undefined"!==typeof this.id?"-".concat(this.id):"")}invalidOn(){this.alertShow({alertType:"invalid",state:"failed"})}lengthValidityGet({element:{length:e,value:t}}){return new this.$Range(e.min,e.max).includes(t.toString().length)}propertiesUpdate({element:e,inputting:t=!0,props:a}){Object.entries(a).forEach(([a,s])=>{e.inputting=t,e[a]=s,this.computedPropertiesUpdate({element:e})})}responseOn(e){}submitOn(){this.formSubmit({auth:Boolean(this.auth),categoryInclude:Boolean(this.categoryInclude)}).catch((function(){}))}urlFullGet({tableName:e=this.tableName,url:t=this.url}={}){return"https://api.".concat(this.hostname,"/").concat(e).concat(t?"/".concat(t):"")}validityGet({}){return!0}validate(){Object.values(this.elements).forEach(e=>{e.inputting=!1,this.computedPropertiesUpdate({element:e})})}get elementsAll(){return Object(C_Users_tomas_WebStormProjects_fifamaniaci_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["a"])({},this.elements,{},this.elementsExtra)}get valid(){return!Object.entries(this.elementsAll).filter(([,e])=>e.required).some(([e,t])=>!t.valid&&"password"!==e)}elementsCreate(elements){const defaults={alertType:"",autocomplete:{default:"off",email:"email",password:"password"},checking:!1,emptyIs(){return""===this.value||" "===this.value},errorShow:!1,input:{boolean:"checkbox",default:"text",email:"email",float:"number",integer:"number",password:"password"},inputting:!1,length:{default:{min:0,max:128},email:{min:0,max:64},fbLink:{min:25,max:256},message:{min:0,max:1024},password:{min:6,max:64},username:{min:0,max:32},usernamesInGamePs:{min:3,max:16},usernamesInGamePc:{min:4,max:16},usernamesInGameXbox:{min:3,max:16}},prefix:{default:"",fbLink:"https://facebook.com/"},required:!0,sendable:!0,tag:"input",taken:{default:!1,password:!0},type:"any",valid:"${!element.required}",validLength:!0,validateRegex:{id:/^([-]?\d|NaN)+$/,idUsername:/^([-]?\d|NaN)+$/,alphabetical:/^([a-z]| )+$/i,alphabeticalExtended:/^([\u0041-\u005a]|[\u00c0-\u024f]| )+$/i,alphanumerical:/^(\w+| )$/i,alphanumericalExtended:/^(\d|[\u0041-\u005a]|[\u00c0-\u024f]| )+$/i,any:/^(.*)$/,boolean:/^(true|false)$/,default:/^(.*)$/,email:/^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,fbLink:/^((http|https):\/\/)(www\.)?(facebook\.com)(\/)?([^\W_]|\.){5,}$/,float:/^([-]?\d[.\d+]?|NaN)+$/,hexadecimal:/[0-9a-f]+/i,integer:/^([-]?\d|NaN)+$/,username:/^(\d|[\u0041-\u005a]|[\u00c0-\u024f]| |_|-)+$/i,usernamesInGamePc:/^(\w|-|_)+$/i,usernamesInGamePs:/^(\w|-|_)+$/i,usernamesInGameXbox:/^(.*)+$/i},value:{boolean:!1,default:""},visibility:!0};return Object.entries(elements).forEach(([elementName,element])=>{this.$set(element,"name",elementName),Object.entries(defaults).filter(([e,t])=>!/^\${(.*)}$/.test(t)&&"undefined"===typeof element[e]).forEach(([e,t])=>{"object"!==typeof t?this.$set(element,e,t):this.$set(element,e,Object.keys(t).includes(element.type)?t[element.type]:t.default)}),this.formDataUpdate({element:element}),Object.entries(defaults).filter(([,e])=>/^\${(.*)}$/.test(e)).forEach(([prop,defaultValue])=>{const valueNew=(()=>{var _defaultValue$replace;return"valid"===prop?!element.required||this.validityGet({element:element}):eval((null===(_defaultValue$replace=defaultValue.replace("${","").match(/(.*)(?=})/))||void 0===_defaultValue$replace?void 0:_defaultValue$replace[0])||"")})();this.$set(element,prop,valueNew)})}),elements}};FormMixin=Object(tslib__WEBPACK_IMPORTED_MODULE_6__["a"])([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_8__["a"])({name:"FormMixin"})],FormMixin),__webpack_exports__["a"]=FormMixin}}]);
//# sourceMappingURL=chunk-2dddbf3e.ac7a9fe3.js.map