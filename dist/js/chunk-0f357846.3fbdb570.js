(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f357846","chunk-539ca5d4","chunk-572b6c86","chunk-b3c9f214","chunk-e504afd4","chunk-269253bc","chunk-2d95bcea"],{"023a":function(e,t,a){"use strict";var s=a("9ab4"),r=a("60a3"),n=a("2fe1"),i=a("8aed"),l=a("631c");let o=class extends(Object(n["c"])(i["a"],l["a"])){rowsGet(e=this.tableName){const{categoryHas:t,nestedProps:a,value:s}=this.$store.state[e];return e&&this.$store.state.dataLoaded.value[this.categoriesActive]&&new this.$Object(t?s[this.categoriesActive]:s).findNested(this.nestedValues.slice(0,a.length)||[])||{}}get dataLoaded(){return Boolean(new this.$Object(this.$store.state.dataLoaded.value[this.categoriesActive]).findNested(this.nestedValues))}get divisionId(){return this.$store.state.divisions.active}get seasonId(){return this.$store.state.leagueSeasons.active}};Object(s["a"])([Object(r["b"])({required:!0,type:Object})],o.prototype,"text",void 0),o=Object(s["a"])([Object(r["a"])({name:"LeagueSectionMixin"})],o),t["a"]=o},"19bf":function(e,t,a){"use strict";a.r(t);var s=function(e,t){var a=t._c;return t.props.sectionIs?a("section",{staticClass:"form-section",class:new t.parent.$String(t.parent.$options.name).urlTo()},[a("div",{staticClass:"text-container"},[a("h1",{staticClass:"title",domProps:{innerHTML:t._s(new t.parent.$String(t.parent.text.title).htmlParse())}}),a(t.props.components.FormContainer,{tag:"component"})],1)]):a(t.props.components.FormContainer,{tag:"component",class:new t.parent.$String(t.parent.$options.name).urlTo()})},r=[],n=a("9ddd"),i={name:"FormSection",props:{components:{type:Object,default(){return{FormContainer:n["default"]}}},sectionIs:{default:!0,type:Boolean}}},l=i,o=(a("e8af"),a("2877")),c=Object(o["a"])(l,s,r,!0,null,"30c16355",null);t["default"]=c.exports},2281:function(e,t,a){},"2c18":function(e,t,a){"use strict";var s=a("65d3"),r=a.n(s);r.a},3181:function(e,t,a){"use strict";var s=a("8cbf"),r=a.n(s);r.a},"381c":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"scrollbar-container"},[e._t("default")],2)},r=[],n=a("9ab4"),i=a("60a3"),l=a("2fe1"),o=a("8aed");let c=class extends(Object(l["c"])(o["a"])){scrollMaxGet(){const{clientHeight:e,scrollHeight:t}=this.$el;return t-e}scrollOn(){this.$emit("scroll",this.$el.scrollTop)}mounted(){this.scroller=this.$scroll.createScroller(this.$el,1e3,30),this.$el.addEventListener("scroll",this.scrollOn)}destroyed(){this.$el.removeEventListener("scroll",this.scrollOn)}};c=Object(n["a"])([Object(i["a"])({name:"ScrollbarContainer"})],c);var u=c,_=u,d=(a("3181"),a("2877")),m=Object(d["a"])(_,s,r,!1,null,"51913f84",null);t["default"]=m.exports},"3ac0":function(e,t,a){"use strict";var s=a("d106"),r=a.n(s);r.a},"3fd1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form-section",{attrs:{"section-is":!e.leagueRegistration}})},r=[],n=(a("ddb0"),a("9ab4")),i=a("60a3"),l=a("2fe1"),o=a("e14e"),c=a("f6bb"),u=a("19bf"),_=a("8aed");let d=class extends(Object(l["c"])(_["a"],c["a"],o["a"])){constructor(){super(...arguments),this.alertSuccessful=!1,this.tableName="users",this.alertTypesActive=["empty","taken","short","long","invalid"]}responseOn(e){e.ok&&window.fbq("track","CompleteRegistration")}get categoryInclude(){return this.leagueRegistration}created(){this.elements=this.elementsCreate({email:{order:1,type:"email"},password:{order:2,type:"password"},username:{order:0,type:"username"}}),this.leagueRegistration&&(this.elementsExtra=this.elementsCreate({leagueRegistration:{value:!0}}))}};Object(n["a"])([Object(i["b"])({default:!1,type:Boolean})],d.prototype,"leagueRegistration",void 0),d=Object(n["a"])([Object(i["a"])({components:{FormSection:u["default"]},name:"Registration"})],d);var m=d,p=m,h=a("2877"),b=Object(h["a"])(p,s,r,!1,null,"2ae7ac52",null);t["default"]=b.exports},"5fc0":function(e,t,a){},"631c":function(e,t,a){"use strict";var s=a("9ab4"),r=a("60a3"),n=a("2fe1"),i=a("8aed");let l=class extends(Object(n["c"])(i["a"])){get nestedValues(){var e;return((null===(e=this.$store.state[this.tableName])||void 0===e?void 0:e.nestedProps)||[]).map(e=>this[e])}};l=Object(s["a"])([Object(r["a"])({name:"NestedValuesMixin"})],l),t["a"]=l},"65d3":function(e,t,a){},"67ff":function(e,t,a){"use strict";var s=a("8fa9"),r=a.n(s);r.a},"6db1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.visible&&e.text.title?a("div",{staticClass:"rule"},[e.text.title?a("h"+(e.text.level+1),{key:e.keyClone+"-title",tag:"component",staticClass:"h",domProps:{innerHTML:e._s(new e.$String(e.text.title).htmlParse())}}):e._e(),a("rule",{attrs:{"key-clone":e.keyClone+"-text",text:e.text.text}})],1):e.visible&&e.text.categories?a("rule",{key:e.keyClone+"-0",staticClass:"rule",attrs:{"key-clone":e.keyClone+"-0",text:e.text.text}}):e.visible&&e.text instanceof Array?a(e.topLevel?"div":"ul",{tag:"component",staticClass:"rule"},e._l(e.text,(function(t,s){return a("rule",{key:e.keyClone+"-"+s,attrs:{"key-clone":e.keyClone+"-"+s,text:t}})})),1):e.visible&&e.topLevel?a("p",{staticClass:"rule",style:{marginTop:"0"===e.keyClone.split("-")[1]?"0":"1.9em"},domProps:{innerHTML:e._s(new e.$String(e.text.text||e.text).htmlParse())}}):e.visible?a("li",{staticClass:"rule",domProps:{innerHTML:e._s(new e.$String(e.text).htmlParse())}}):e._e()},r=[],n=(a("1276"),a("ddb0"),a("9ab4")),i=a("2fe1"),l=a("60a3"),o=a("8aed");let c=class extends(Object(i["c"])(o["a"])){get topLevel(){return this.keyClone.split("-").length<=2}get visible(){return!(this.text.categories&&!this.text.categories.some(e=>Object.entries(this.$store.state.categories.value).find(([,t])=>t.name===e)[0]===this.categoriesActive))&&!(this.text.condition&&!this.text.condition(this))}};Object(n["a"])([Object(l["b"])({required:!0,type:String})],c.prototype,"keyClone",void 0),Object(n["a"])([Object(l["b"])({required:!0,type:[Array,Object,String]})],c.prototype,"text",void 0),c=Object(n["a"])([Object(l["a"])({name:"Rule"})],c);var u=c,_=u,d=(a("2c18"),a("2877")),m=Object(d["a"])(_,s,r,!1,null,"7db1bcaa",null);t["default"]=m.exports},8119:function(e,t,a){"use strict";var s=a("2281"),r=a.n(s);r.a},"8cbf":function(e,t,a){},"8fa9":function(e,t,a){},"9ddd":function(e,t,a){"use strict";a.r(t);var s=function(e,t){var a=t._c;return a("div",{staticClass:"form-container"},[t.parent.text.instructions?a("p",{staticClass:"instructions",domProps:{innerHTML:t._s(t.parent.text.instructions)}}):t._e(),a("form",{attrs:{action:t.parent.urlFullGet(),method:"post"},on:{submit:function(e){return e.preventDefault(),t.parent.submitOn(e)}}},[t._l(t.parent.elementsEntries,(function(e){var s,r=e[0],n=e[1];return[n.labelTop?a("label",{key:r+"-labelTop",staticClass:"label-top",domProps:{innerHTML:t._s(n.labelTop+":")}}):t._e(),a("div",{key:r+"-element",staticClass:"element",class:(s={},s["error-show"]=n.errorShow,s)},[a("label",{attrs:{for:t.parent.idGet({elementName:r})},domProps:{innerHTML:t._s(new t.parent.$String(t.parent.texts.dictionary[r]).capitalize()+":"+(n.required?"*":""))}}),a("input",{key:r+"-input",style:{color:n.color},attrs:{id:t.parent.idGet({elementName:r}),autocomplete:n.autocomplete,minlength:n.length.min,maxlength:n.length.max,type:n.input},domProps:{value:n.value},on:{blur:function(e){return t.parent.blurOn({element:n})},focus:function(e){return t.parent.focusOn({element:n})},input:function(e){return t.parent.propertiesUpdate({element:n,props:{value:e.target.value}})}}}),n.errorShow?a("div",{staticClass:"input-alert",domProps:{innerHTML:t._s(t.parent.alertHtmlGet(Object.assign({},n,{targetType:n.name})))}}):t._e()])]})),a("p",{staticClass:"required-fields-legend",domProps:{innerHTML:t._s(t.parent.texts.form.requiredFields)}}),a("button",{staticClass:"bordered-button",domProps:{innerHTML:t._s(t.parent.text.submit||t.parent.texts.form.submit)}})],2)])},r=[],n={name:"FormContainer"},i=n,l=(a("8119"),a("2877")),o=Object(l["a"])(i,s,r,!0,null,"11e74040",null);t["default"]=o.exports},d106:function(e,t,a){},dac7:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("loading-container",{attrs:{condition:e.dataLoaded&&!e.leagueRegistrationAwaiting}},[a("scrollbar-container",{ref:"scrollbarContainer"},[a("div",{staticClass:"text-container-container"},[a("div",{staticClass:"text-container"},[e.leagueSeasonLastIs?[a("h1",{domProps:{innerHTML:e._s(e.text.title)}}),a("div",{staticClass:"rules-content"},[a("rule",{attrs:{"key-clone":"leagueRegistrationRules",text:e.text.rules.text}})],1)]:e._e(),e.expired||e.registration?a("p",{domProps:{innerHTML:e._s(e.placeholder)}}):e._e(),e.registration&&!e.expired?a("league-registration-cancellation",{attrs:{text:e.text}}):e.$store.state.userLogged.loggedIn&&e.expired?e._e():a("div",{staticClass:"main"},[e.$store.state.userLogged.loggedIn?a("form",{attrs:{action:e.urlFullGet()},on:{submit:function(t){return t.preventDefault(),e.formSubmit({alertSuccessful:!1,auth:!0})}}},[a("button",{staticClass:"bordered-button",attrs:{type:"submit"},domProps:{innerHTML:e._s(new e.$String(e.text.button).htmlParse({category:e.category}))}})]):a("registration",{attrs:{"league-registration":!0}})],1)],2)])])],1)},r=[],n=(a("ddb0"),a("9ab4")),i=a("60a3"),l=a("2fe1"),o=a("3fd1"),c=a("6db1"),u=a("381c"),_=a("f364"),d=a("8aed"),m=a("023a"),p=a("f6bb");let h=class extends(Object(l["c"])(d["a"])){constructor(){super(...arguments),this.moneyAmount=parseFloat("10")}};h=Object(n["a"])([Object(i["a"])({name:"LeagueRegistrationFormMixin"})],h);var b=h;let f=class extends(Object(l["c"])(d["a"],m["a"],p["a"],b)){constructor(){super(...arguments),this.tableName="leagueRegistrations",this.elements={},this.leagueRegistrationAwaiting=!1}responseOn(e){e.ok?(!1===this.$store.state.userLogged.verified?this.alertShow({alertType:"notVerified",state:"successful",targetType:"leagueRegistration"}):this.alertShowSuccessful(),this.registration||(this.leagueRegistrationAwaiting=!0)):this.alertShow({alertType:"leagueRegistrationFailed",state:"failed",targetType:"leagueRegistration"})}get category(){if(!this.dataLoaded)return"";const{categories:e}=this.$store.state;return e.active?this.texts.categories[e.value[e.active].name]:""}get expired(){return!this.leagueSeasonLastIs||this.$dayjs(this.leagueSeasonLast[1].registrationTo).diff(this.$dayjs())<0}get leagueSeasonLast(){return this.$store.state.leagueSeasons.lastGet()}get leagueSeasonLastIs(){return parseInt(this.leagueSeasonLast[0])===this.seasonId}get placeholder(){return this.expired?this.text.expired:this.text[this.registration.valid?"completed":"notVerified"]}get registration(){return Object.values(this.rowsGet()).find(e=>e.userId===this.$store.state.userLogged.id)}registrationChangeOn(){this.leagueRegistrationAwaiting=!1}};Object(n["a"])([Object(i["c"])("registration")],f.prototype,"registrationChangeOn",null),f=Object(n["a"])([Object(i["a"])({components:{LeagueRegistrationCancellation:_["default"],Rule:c["default"],Registration:o["default"],ScrollbarContainer:u["default"]},name:"LeagueRegistration"})],f);var g=f,v=g,O=(a("3ac0"),a("2877")),x=Object(O["a"])(v,s,r,!1,null,"37a6bd3c",null);t["default"]=x.exports},e14e:function(e,t,a){"use strict";a("25f0"),a("ddb0");var s=a("9ab4"),r=a("2fe1"),n=a("60a3"),i=a("8aed"),l=a("eade");let o=class extends(Object(r["c"])(i["a"],l["a"])){focusOn({element:e}){"transparent"===e.color&&this.propertiesUpdate({element:e,props:{color:"",value:""}})}validityGet({element:{required:e,taken:t,type:a,validateRegex:s,validLength:r,value:n,valueDefault:i}}){return(s.test(n)||!n&&!e)&&(!t||n===i||"password"===a)&&r}get elementsEntries(){return Object.entries(this.elements).sort(([,e],[,t])=>e.order-t.order)}get text(){return this.texts[new this.$String(this.$options.name).decapitalize().toString()]}created(){Object.values(this.elements).forEach(e=>{e.valueDefault||this.propertiesUpdate({element:e,props:{color:"transparent",value:" "}}),this.$set(e,"asterisk",e.required?"*":"")})}};o=Object(s["a"])([Object(n["a"])({name:"FormSectionMixin"})],o),t["a"]=o},e8af:function(e,t,a){"use strict";var s=a("5fc0"),r=a.n(s);r.a},eade:function(e,t,a){"use strict";a("ddb0");var s=a("9ab4"),r=a("2fe1"),n=a("60a3"),i=a("8aed"),l=a("f6bb");let o=class extends(Object(r["c"])(i["a"],l["a"])){async availabilityCheck({element:e}){!1!==e.unique&&("password"===e.input||e.validateRegex.test(e.value)||(e.errorShow=!1),"password"!==e.input&&e.validateRegex.test(e.value)&&(e.checking=!0,new Promise((t,a)=>{const s=Object.entries(this.$store.state.users.value).find(([t,a])=>a[e.name]===e.value);return s?t():a()}).then(()=>{e.taken=!0}).catch(()=>{e.taken=!1}).finally(()=>{e.checking=!1,this.computedPropertiesUpdate({element:e})})))}blurOn({element:e}){this.availabilityCheck({element:e}).catch((function(){})),e.inputting=!1,e.alertType=this.alertTypeGet({element:e}),this.errorShowUpdate({element:e})}};o=Object(s["a"])([Object(n["a"])({name:"RegistrationLoginFormMixin"})],o),t["a"]=o},f364:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"league-registration-cancellation",attrs:{action:e.urlFullGet()},on:{submit:function(t){return t.preventDefault(),e.formSubmit({alertSuccessful:!1,auth:!0})}}},[a("button",{staticClass:"cancel",domProps:{innerHTML:e._s(e.text.cancel)}})])},r=[],n=(a("ddb0"),a("9ab4")),i=a("60a3"),l=a("2fe1"),o=a("f6bb"),c=a("8aed");let u=class extends(Object(l["c"])(c["a"],o["a"])){constructor(){super(...arguments),this.tableName="leagueRegistrations",this.elements={},this.method="delete"}responseOn(e){e.ok?this.alertShow({alertType:"leagueRegistrationCanceled",state:"successful",targetType:"leagueRegistration"}):this.alertShow({alertType:"leagueRegistrationCancellationFailed",state:"failed",targetType:"leagueRegistration"})}};Object(n["a"])([Object(i["b"])({required:!0,type:Object})],u.prototype,"text",void 0),u=Object(n["a"])([Object(i["a"])({name:"LeagueRegistrationCancellation"})],u);var _=u,d=_,m=(a("67ff"),a("2877")),p=Object(m["a"])(d,s,r,!1,null,"a993e4f4",null);t["default"]=p.exports},f6bb:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("25f0"),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2532"),core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("466d"),core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("5319"),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("ddb0"),core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__),C_Users_tomas_WebStormProjects_fifamaniaci_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("5530"),tslib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("9ab4"),vue_class_component__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("2fe1"),vue_property_decorator__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("60a3"),_mixins_Main__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("8aed");let FormMixin=class FormMixin extends(Object(vue_class_component__WEBPACK_IMPORTED_MODULE_7__["c"])(_mixins_Main__WEBPACK_IMPORTED_MODULE_9__["a"])){constructor(){super(...arguments),this.alertTypes={empty(e){return e.required&&e.emptyIs()},invalid({validateRegex:e,value:t}){return!e.test(t)},long({length:e,value:t}){return t.length>e.max},notFound({taken:e}){return!e},short(e){return!(!e.required&&e.emptyIs())&&e.value.length<e.length.min},taken({taken:e,type:t,valueDefault:a,value:s}){return e&&"password"!==t&&s!==a}},this.alertTypesActive=["short","long","invalid","empty"],this.elements={},this.elementsExtra={},this.formData={},this.method="post"}alertShowSuccessful(){this.alertShow({alertType:"successful",state:"successful",targetType:this.$options.name})}alertTypeGet({element:e}){return this.alertTypesActive.find(t=>this.alertTypes[t](e))||""}blurOn({element:e}){e.inputting=!1,e.alertType=this.alertTypeGet({element:e}),this.errorShowUpdate({element:e})}computedPropertiesUpdate({element:e}){this.formDataUpdate({element:e}),e.validLength=this.lengthValidityGet({element:e}),e.valid=this.validityGet({element:e}),e.alertType=this.alertTypeGet({element:e}),this.errorShowUpdate({element:e})}errorShowUpdate({element:e}){e.errorShow=(e.required||!e.emptyIs())&&!e.valid&&!e.inputting&&!e.checking}formDataUpdate({element:e}){if(!e.sendable||"span"===e.tag)return;if(e.emptyIs()&&!e.required||e.reference&&e.valueDefault===e.value)return void delete this.formData[e.name];const t=(()=>{switch(e.type){case"id":case"idUsername":return e.id||null;case"date":return e.value||this.$dayjs().format();case"float":return parseFloat(e.value)||e.min;case"integer":return parseInt(e.value)||e.min;case"boolean":return e.value;default:return" "===e.value?null:e.value||null}})();this.$set(this.formData,e.name,t)}async formSubmit({alertSuccessful:e=!0,categoryInclude:t=!1,auth:a=!1,tableName:s=this.tableName,url:r=this.url}={}){var n;if(this.validate(),this.valid)return e&&this.alertShowSuccessful(),Object.values(this.elements).forEach(e=>{this.propertiesUpdate({element:e,props:Object(C_Users_tomas_WebStormProjects_fifamaniaci_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["a"])({},e.reference?{valueDefault:e.value}:{value:"span"===e.tag?e.value:""})})}),null===(n=this.responseOn)||void 0===n||n.call(this,{body:{},headers:{},ok:!0,status:400}),{body:{},headers:{},ok:!0,status:400};this.invalidOn()}idGet({elementName:e}){return"".concat(new this.$String(this.$options.name).caseTrainTo(),"-").concat(new this.$String(e).caseTrainTo()).concat("undefined"!==typeof this.id?"-".concat(this.id):"")}invalidOn(){this.alertShow({alertType:"invalid",state:"failed"})}lengthValidityGet({element:{length:e,value:t}}){return new this.$Range(e.min,e.max).includes(t.toString().length)}propertiesUpdate({element:e,inputting:t=!0,props:a}){Object.entries(a).forEach(([a,s])=>{e.inputting=t,e[a]=s,this.computedPropertiesUpdate({element:e})})}responseOn(e){}submitOn(){this.formSubmit({auth:Boolean(this.auth),categoryInclude:Boolean(this.categoryInclude)}).catch((function(){}))}urlFullGet({tableName:e=this.tableName,url:t=this.url}={}){return"https://api.".concat(this.hostname,"/").concat(e).concat(t?"/".concat(t):"")}validityGet({}){return!0}validate(){Object.values(this.elements).forEach(e=>{e.inputting=!1,this.computedPropertiesUpdate({element:e})})}get elementsAll(){return Object(C_Users_tomas_WebStormProjects_fifamaniaci_client_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["a"])({},this.elements,{},this.elementsExtra)}get valid(){return!Object.entries(this.elementsAll).filter(([,e])=>e.required).some(([e,t])=>!t.valid&&"password"!==e)}elementsCreate(elements){const defaults={alertType:"",autocomplete:{default:"off",email:"email",password:"password"},checking:!1,emptyIs(){return""===this.value||" "===this.value},errorShow:!1,input:{boolean:"checkbox",default:"text",email:"email",float:"number",integer:"number",password:"password"},inputting:!1,length:{default:{min:0,max:128},email:{min:0,max:64},fbLink:{min:25,max:256},message:{min:0,max:1024},password:{min:6,max:64},username:{min:0,max:32},usernamesInGamePs:{min:3,max:16},usernamesInGamePc:{min:4,max:16},usernamesInGameXbox:{min:3,max:16}},prefix:{default:"",fbLink:"https://facebook.com/"},required:!0,sendable:!0,tag:"input",taken:{default:!1,password:!0},type:"any",valid:"${!element.required}",validLength:!0,validateRegex:{id:/^([-]?\d|NaN)+$/,idUsername:/^([-]?\d|NaN)+$/,alphabetical:/^([a-z]| )+$/i,alphabeticalExtended:/^([\u0041-\u005a]|[\u00c0-\u024f]| )+$/i,alphanumerical:/^(\w+| )$/i,alphanumericalExtended:/^(\d|[\u0041-\u005a]|[\u00c0-\u024f]| )+$/i,any:/^(.*)$/,boolean:/^(true|false)$/,default:/^(.*)$/,email:/^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,fbLink:/^((http|https):\/\/)(www\.)?(facebook\.com)(\/)?([^\W_]|\.){5,}$/,float:/^([-]?\d[.\d+]?|NaN)+$/,hexadecimal:/[0-9a-f]+/i,integer:/^([-]?\d|NaN)+$/,username:/^(\d|[\u0041-\u005a]|[\u00c0-\u024f]| |_|-)+$/i,usernamesInGamePc:/^(\w|-|_)+$/i,usernamesInGamePs:/^(\w|-|_)+$/i,usernamesInGameXbox:/^(.*)+$/i},value:{boolean:!1,default:""},visibility:!0};return Object.entries(elements).forEach(([elementName,element])=>{this.$set(element,"name",elementName),Object.entries(defaults).filter(([e,t])=>!/^\${(.*)}$/.test(t)&&"undefined"===typeof element[e]).forEach(([e,t])=>{"object"!==typeof t?this.$set(element,e,t):this.$set(element,e,Object.keys(t).includes(element.type)?t[element.type]:t.default)}),this.formDataUpdate({element:element}),Object.entries(defaults).filter(([,e])=>/^\${(.*)}$/.test(e)).forEach(([prop,defaultValue])=>{const valueNew=(()=>{var _defaultValue$replace;return"valid"===prop?!element.required||this.validityGet({element:element}):eval((null===(_defaultValue$replace=defaultValue.replace("${","").match(/(.*)(?=})/))||void 0===_defaultValue$replace?void 0:_defaultValue$replace[0])||"")})();this.$set(element,prop,valueNew)})}),elements}};FormMixin=Object(tslib__WEBPACK_IMPORTED_MODULE_6__["a"])([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_8__["a"])({name:"FormMixin"})],FormMixin),__webpack_exports__["a"]=FormMixin}}]);
//# sourceMappingURL=chunk-0f357846.3fbdb570.js.map