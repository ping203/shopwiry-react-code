(this.webpackJsonpshopwiry=this.webpackJsonpshopwiry||[]).push([[1],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=function(e){return r.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"},r.a.createElement("div",{className:"checkoutOrderSummaryWrapper checkoutBgWhite"},r.a.createElement("div",{className:"checkoutOrderSummaryContentWrapper"},r.a.createElement("div",{className:"checkoutOrderSummarTextWrapper"},r.a.createElement("span",null,"Order Summary"),r.a.createElement("span",null,"1 item in cart")),r.a.createElement("div",{className:"checkoutAllProductWrapper"},r.a.createElement("div",{className:"checkoutProductDetailWrapper checkoutProDetialDisplayTable"},r.a.createElement("span",{className:"checkoutProDetialDisplayTableCell"},r.a.createElement("div",{className:"checkoutProductImgWrapper"},r.a.createElement("img",{src:"https://via.placeholder.com/106x108.png",className:"img-fluid",alt:"product"}))),r.a.createElement("span",{className:"checkoutProDetialDisplayTableCell"},r.a.createElement("div",{className:"checkoutProductTitle"},r.a.createElement("span",{title:"MEN'S ADIDAS SHOES"},"MEN'S ADIDAS SHOES"),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"}))),r.a.createElement("div",{className:"checkoutProductPrice"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-usd","aria-hidden":"true"})),r.a.createElement("span",null,"3500")),r.a.createElement("div",{className:"checkoutProductQtyWrapper"},r.a.createElement("select",{className:"form-control checkoutProductQty",name:"checkoutProductQty",id:"checkoutProductQty"},r.a.createElement("option",{value:""},"1")))))),r.a.createElement("div",{className:"checkoutPaymentSummaryWrapper"},r.a.createElement("div",{className:"checkoutSubTotalWrapper checkoutPaymentSummaryDisplayTable"},r.a.createElement("span",null,"Subtotal"),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-usd","aria-hidden":"true"}),"3500")),r.a.createElement("div",{className:"checkoutTaxTotalWrapper checkoutPaymentSummaryDisplayTable"},r.a.createElement("span",null,"Taxes"),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-usd","aria-hidden":"true"}),"250")),r.a.createElement("div",{className:"checkoutTotalAmtWrapper checkoutPaymentSummaryDisplayTable"},r.a.createElement("span",null,"Total"),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-usd","aria-hidden":"true"}),"3750"))),r.a.createElement("div",{className:"checkoutPromoCodeWrapper"},r.a.createElement("div",{className:"checkoutPromoCodeText"},"Have a Promocode?")))))},c=a(84),u=a.n(c),i=function(e){return r.a.createElement("div",{className:"col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12"},r.a.createElement("div",{className:"checkoutFrmMainWrapper checkoutBgWhite"},r.a.createElement("div",{className:"checkoutCustomerInfoText"},"Customer Information"),r.a.createElement("div",{className:"checkoutFrmContentWrapper"},r.a.createElement(u.a,{className:"checkoutFrm",onSubmit:function(e,t,a){return function(e,t,a){console.log(e,t,a);var n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)};fetch("https://httpbin.org/post",n).then((function(e){if(e.ok)return e.json();throw new Error("Response Error, Status Code : ".concat(e.status))})).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}(e,t,a)}},r.a.createElement("div",{className:"checkoutFrmRowWrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"user_email"},"Email"),r.a.createElement("input",{className:"form-control",type:"email",placeholder:"Email Address",id:"user_email",name:"user_email",defaultValue:"",autoComplete:"off",required:!0}),r.a.createElement("div",{className:"customInfoMsg"},r.a.createElement("span",null,"Already have an account? "),r.a.createElement("span",null,r.a.createElement(l.c,{to:"/"},"Sign in here"))))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"user_first_name"},"First Name"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"First Name",id:"user_first_name",name:"user_first_name",defaultValue:"",autoComplete:"off",required:!0}))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"user_last_name"},"Last Name"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Last Name",id:"user_last_name",name:"user_last_name",defaultValue:"",autoComplete:"off",required:!0}))),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"user_city"},"City"),r.a.createElement("select",{className:"form-control",name:"user_city",id:"user_city",required:!0},r.a.createElement("option",{value:""},"Select City")))),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"user_phone_number"},"Phone Number"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Phone Number",id:"user_phone_number",name:"user_phone_number",defaultValue:"",autoComplete:"off",required:!0}))),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"user_address"},"Address"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Address",id:"user_address",name:"user_address",defaultValue:"",autoComplete:"off",required:!0}))),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"user_post_code"},"Post Code"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Post Code",id:"user_post_code",name:"user_post_code",defaultValue:"",autoComplete:"off",required:!0}))),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"checkoutSaveAndContinueBtnWrapper"},r.a.createElement("button",{type:"submit"},"Save & Continue")))))))))};a(89),t.default=function(e){return r.a.createElement("div",{className:"checkoutWrapper"},r.a.createElement("div",{className:"checkoutSubWrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"checkoutContinueShopRowWrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},r.a.createElement("div",{className:"checkoutContinueShopBtnWrapper"},r.a.createElement(l.c,{to:"all-products"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-angle-left","aria-hidden":"true"})),r.a.createElement("span",null,"Continue shopping")))))),r.a.createElement("div",{className:"checkoutFormRowWrapper"},r.a.createElement("div",{className:"row"},r.a.createElement(o,null),r.a.createElement(i,null))))))}},84:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var a={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=n?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}}a.default=e,t&&t.set(e,a);return a}(a(0)),r=u(a(1)),l=u(a(85)),o=u(a(86)),c=u(a(87));function u(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a(88);var N=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=E(this,b(t).call(this,e))).state={form:{}},a.formRef=n.default.createRef(),a.formElements=[],a}var a,r,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){this.setDefaultValue()}},{key:"componentDidUpdate",value:function(e){var t=e.data,a=this.props.data;JSON.stringify(t)!==JSON.stringify(a)&&this.setDefaultValue()}},{key:"onChange",value:function(e){var t=e.target,a=this.props.onChange;if(l.default.formFields(t.tagName)){var n="checkbox"!==t.type||t.checked?t.value:"";this.setState((function(e){return{form:p({},e.form,h({},t.name,n))}}))}a&&a(e)}},{key:"onSubmit",value:function(e){e.preventDefault(),this.formElements=l.default.elements(this.formRef);var t=!0,a=this.state.form;this.formElements.forEach((function(e){var n=a[e.name],r=l.default.validation(e,c.default,o.default);Object.keys(r).forEach((function(a){var o=r[a];if(!o.valid(n,o.value))return l.default.invalid(e,o.warning(o.value)),t&&e.focus(),void(t=!1);l.default.valid(e)}))}));var n=this.props,r=n.onSubmit,u=n.novalid,i=n.nosubmit,s=n.fetch;return r&&(u||!u&&t)&&r(e.target,a,t),!i&&t&&(s||e.target.submit()),!1}},{key:"setDefaultValue",value:function(){this.formElements=l.default.elements(this.formRef);var e=this.props.data,t={};this.formElements.forEach((function(a){t[a.name]=e[a.name],document.getElementById("".concat(a.id)).value=e[a.name]||""})),this.setState({form:t})}},{key:"render",value:function(){var e=this,t=this.props,a=(t.onSubmit,t.onChange,t.ref,t.children),r=(t.novalid,t.nosubmit,f(t,["onSubmit","onChange","ref","children","novalid","nosubmit"]));return n.default.createElement("form",m({},r,{noValidate:!0,ref:this.formRef,onChange:function(t){return e.onChange(t)},onSubmit:function(t){return e.onSubmit(t)}}),a)}}])&&v(a.prototype,r),u&&v(a,u),t}(n.Component);t.default=N,N.propTypes={novalid:r.default.bool,nosubmit:r.default.bool,onSubmit:r.default.func,onChange:r.default.func,ref:r.default.any,children:r.default.node,method:r.default.string,fetch:r.default.bool,data:r.default.object},N.defaultProps={onSubmit:null,onChange:null,novalid:!1,nosubmit:!1,ref:null,children:null,method:"",fetch:!1,data:{}}},85:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={invalid:"invalid-field",field:"invalid-field-warning"},r={formFields:function(e){return["INPUT","SELECT","TEXTAREA"].includes(e)},elements:function(e){return Array.from(e.current.elements).filter((function(e){return r.formFields(e.tagName)}))},validation:function(e,t,a){return e.attributes.setNamedItem(document.createAttribute(e.type)),Object.values(e.attributes).filter((function(e){return t.keys().includes(e.name.toLowerCase())})).map((function(e){return{name:e.name,value:e.value,valid:t[e.name],warning:a[e.name]}}))},invalid:function(e,t){var a=document.getElementById("".concat(e.name,"-invalid-field"));a||((a=document.createElement("span")).id="".concat(e.name,"-invalid-field"),a.className=n.field),a.innerHTML=t,e.insertAdjacentElement("afterend",a),e.classList.add(n.invalid)},valid:function(e){var t=document.getElementById("".concat(e.name,"-invalid-field"));t&&e.parentNode.removeChild(t),e.classList.remove(n.invalid)}},l=r;t.default=l},86:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={required:function(){return"This field is required."},number:function(){return"This field must be numeric."},alphanumeric:function(){return"This field must be alphanumeric."},letters:function(){return"This field must be only letters."},min:function(e){return"The minimum value of this field can be ".concat(e,".")},max:function(e){return"The maximum value of this field can be ".concat(e,".")},minlength:function(e){return"This field must be at least ".concat(e," characters.")},maxlength:function(e){return"This field must not exceed ".concat(e," characters.")},email:function(){return"Enter a valid email address."},url:function(){return"Enter a valid web address."},confirm:function(){return"This field has the same value as the confirm field."},regexp:function(){return"This field must match the pattern."}};t.default=n},87:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={required:function(e){return null!==e&&void 0!==e&&""!==e},number:function(e){return!Number.isNaN(parseFloat(e))},alphanumeric:function(e){return/^[a-z\u015f\u015e\u011f\u011e\xfc\xdc\xe7\xc7\xf6\xd6\u0131\u01300-9]+$/i.test(String(e).toLowerCase())},letters:function(e){return/^[a-z\u015f\u015e\u011f\u011e\xfc\xdc\xe7\xc7\xf6\xd6\u0131\u0130]+$/i.test(String(e).toLowerCase())},min:function(e,t){return null!=e&&Number(e)>=t},max:function(e,t){return null!=e&&Number(e)<=t},minlength:function(e,t){return null!=e&&e.toString().length>=t},maxlength:function(e,t){return null!=e&&e.toString().length<=t},email:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},url:function(e){return/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g.test(String(e).toLowerCase())},confirm:function(e,t){var a=document.getElementById(t);return!!a&&a.value===e},regexp:function(e,t){return new RegExp(t).test(String(e).toLowerCase())},keys:function(){return Object.keys(n).map((function(e){return e.toLowerCase()}))}},r=n;t.default=r},88:function(e,t,a){},89:function(e,t,a){}}]);
//# sourceMappingURL=checkout.b69e0119.chunk.js.map