(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3caa0afc","chunk-572b6c86","chunk-e504afd4"],{"19bf":function(e,t,n){"use strict";n.r(t);var r=function(e,t){var n=t._c;return t.props.sectionIs?n("section",{staticClass:"form-section",class:new t.parent.$String(t.parent.$options.name).urlTo()},[n("div",{staticClass:"text-container"},[n("h1",{staticClass:"title",domProps:{innerHTML:t._s(new t.parent.$String(t.parent.text.title).htmlParse())}}),n(t.props.components.FormContainer,{tag:"component"})],1)]):n(t.props.components.FormContainer,{tag:"component",class:new t.parent.$String(t.parent.$options.name).urlTo()})},s=[],a=n("9ddd"),o={name:"FormSection",props:{components:{type:Object,default(){return{FormContainer:a["default"]}}},sectionIs:{default:!0,type:Boolean}}},i=o,l=(n("e8af"),n("2877")),p=Object(l["a"])(i,r,s,!0,null,"30c16355",null);t["default"]=p.exports},2281:function(e,t,n){},"5fc0":function(e,t,n){},"73f1":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form-section")},s=[],a=(n("ddb0"),n("9ab4")),o=n("60a3"),i=n("2fe1"),l=n("e14e"),p=n("eade"),c=n("8aed"),u=n("19bf");let d=class extends(Object(i["c"])(c["a"],p["a"],l["a"])){constructor(){super(...arguments),this.tableName="users",this.alertTypesActive=["empty","short","long","invalid","notFound"],this.url="passwordReset"}responseOn(e){e.ok||"Password reset token invalid"===e.body.message&&this.alertShow({alertType:"passwordResetTokenInvalid",state:"failed"})}created(){this.elements=this.elementsCreate({passwordNew:{order:0,type:"password"}}),this.elementsExtra=this.elementsCreate({email:{type:"email",value:this.$route.query.email},passwordResetToken:{type:"password",value:this.$route.query.passwordResetToken}})}};d=Object(a["a"])([Object(o["a"])({components:{FormSection:u["default"]},name:"PasswordReset"})],d);var m=d,f=m,b=n("2877"),h=Object(b["a"])(f,r,s,!1,null,"1a61b929",null);t["default"]=h.exports},8119:function(e,t,n){"use strict";var r=n("2281"),s=n.n(r);s.a},"9ddd":function(e,t,n){"use strict";n.r(t);var r=function(e,t){var n=t._c;return n("div",{staticClass:"form-container"},[t.parent.text.instructions?n("p",{staticClass:"instructions",domProps:{innerHTML:t._s(t.parent.text.instructions)}}):t._e(),n("form",{attrs:{action:t.parent.urlFullGet(),method:"post"},on:{submit:function(e){return e.preventDefault(),t.parent.submitOn(e)}}},[t._l(t.parent.elementsEntries,(function(e){var r,s=e[0],a=e[1];return[a.labelTop?n("label",{key:s+"-labelTop",staticClass:"label-top",domProps:{innerHTML:t._s(a.labelTop+":")}}):t._e(),n("div",{key:s+"-element",staticClass:"element",class:(r={},r["error-show"]=a.errorShow,r)},[n("label",{attrs:{for:t.parent.idGet({elementName:s})},domProps:{innerHTML:t._s(new t.parent.$String(t.parent.texts.dictionary[s]).capitalize()+":"+(a.required?"*":""))}}),n("input",{key:s+"-input",style:{color:a.color},attrs:{id:t.parent.idGet({elementName:s}),autocomplete:a.autocomplete,minlength:a.length.min,maxlength:a.length.max,type:a.input},domProps:{value:a.value},on:{blur:function(e){return t.parent.blurOn({element:a})},focus:function(e){return t.parent.focusOn({element:a})},input:function(e){return t.parent.propertiesUpdate({element:a,props:{value:e.target.value}})}}}),a.errorShow?n("div",{staticClass:"input-alert",domProps:{innerHTML:t._s(t.parent.alertHtmlGet(Object.assign({},a,{targetType:a.name})))}}):t._e()])]})),n("p",{staticClass:"required-fields-legend",domProps:{innerHTML:t._s(t.parent.texts.form.requiredFields)}}),n("button",{staticClass:"bordered-button",domProps:{innerHTML:t._s(t.parent.text.submit||t.parent.texts.form.submit)}})],2)])},s=[],a={name:"FormContainer"},o=a,i=(n("8119"),n("2877")),l=Object(i["a"])(o,r,s,!0,null,"11e74040",null);t["default"]=l.exports},e14e:function(e,t,n){"use strict";n("25f0"),n("ddb0");var r=n("9ab4"),s=n("2fe1"),a=n("60a3"),o=n("8aed"),i=n("eade");let l=class extends(Object(s["c"])(o["a"],i["a"])){focusOn({element:e}){"transparent"===e.color&&this.propertiesUpdate({element:e,props:{color:"",value:""}})}validityGet({element:{required:e,taken:t,type:n,validateRegex:r,validLength:s,value:a,valueDefault:o}}){return(r.test(a)||!a&&!e)&&(!t||a===o||"password"===n)&&s}get elementsEntries(){return Object.entries(this.elements).sort(([,e],[,t])=>e.order-t.order)}get text(){return this.texts[new this.$String(this.$options.name).decapitalize().toString()]}created(){Object.values(this.elements).forEach(e=>{e.valueDefault||this.propertiesUpdate({element:e,props:{color:"transparent",value:" "}}),this.$set(e,"asterisk",e.required?"*":"")})}};l=Object(r["a"])([Object(a["a"])({name:"FormSectionMixin"})],l),t["a"]=l},e8af:function(e,t,n){"use strict";var r=n("5fc0"),s=n.n(r);s.a}}]);
//# sourceMappingURL=chunk-3caa0afc.10cbd51f.js.map