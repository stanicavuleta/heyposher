(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eb0da5b"],{"223c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toastification"},[a("div",{staticClass:"d-flex align-items-start"},[a("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[a("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),a("div",{staticClass:"d-flex flex-grow-1"},[a("div",[t.title?a("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?a("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),a("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():a("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},o=[],i=a("e8a3"),r={components:{BAvatar:i["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},s=r,l=(a("b549"),a("2877")),c=Object(l["a"])(s,n,o,!1,null,"55dd3057",null);e["a"]=c.exports},"4c05":function(t,e,a){"use strict";a("9874")},"616a":function(t,e,a){},"61e3":function(t,e,a){},"707c":function(t,e,a){t.exports=a.p+"img/banner.png"},"8d81":function(t,e,a){},"8f03":function(t,e,a){"use strict";a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return d})),a.d(e,"c",(function(){return p}));var n=a("7bb1"),o=a("4c93"),i=a("d4d7"),r=a("2593"),s=function(t){return t>=0},l=function(t){var e=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/,a=e.test(t);return a},c=function(t){var e=/^(?:3[47][0-9]{13})$/,a=e.test(t);return a},m=function(t){if(void 0===t||null===t||0===t.length)return!0;var e=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return e.test(t)},u=Object(n["c"])("required",o["l"]),d=Object(n["c"])("email",o["g"]),p=(Object(n["c"])("min",o["j"]),Object(n["c"])("confirmed",o["e"]),Object(n["c"])("regex",o["k"]),Object(n["c"])("between",o["d"]),Object(n["c"])("alpha",o["a"]),Object(n["c"])("integer",o["h"]),Object(n["c"])("digits",o["f"]),Object(n["c"])("alpha-dash",o["b"]),Object(n["c"])("alpha-num",o["c"]),Object(n["c"])("length",o["i"]),Object(n["c"])("positive",{validate:s,message:"Please enter positive number!"}),Object(n["c"])("credit-card",{validate:c,message:"It is not valid credit card!"}),Object(n["c"])("password",{validate:l,message:"Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit"}),Object(n["c"])("url",{validate:m,message:"URL is invalid"}));Object(n["d"])({en:{messages:r.messages,names:{email:"Email",password:"Password"},fields:{password:{min:"{_field_} is too short, you want to get hacked?"}}},ar:{messages:i.messages,names:{email:"البريد الإلكتروني",password:"كلمة السر"},fields:{password:{min:"كلمة السر قصيرة جداً سيتم اختراقك"}}}})},"96d2":function(t,e,a){"use strict";a("61e3")},9874:function(t,e,a){},b30b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"mail-title",attrs:{id:"faq-search-filter"}},[n("b-card",{staticClass:"faq-search",style:{backgroundImage:"url("+a("707c")+")"},attrs:{"no-body":""}},[n("b-card-body",{staticClass:"text-center"},[n("h2",{staticClass:"text-primary"},[t._v(" Let's answer some questions ")]),n("b-card-text",[t._v(" or choose a category to quickly find the help you need ")])],1)],1)],1),n("section",{attrs:{id:"faq-tabs"}},[n("b-row",[n("b-col",{staticClass:"px-3",attrs:{cols:"12"}},[n("div",[n("form-wizard",{staticClass:"steps-transparent mb-3",attrs:{color:"#7367F0",title:null,subtitle:null,"finish-button-text":"Save","back-button-text":"Previous"},on:{"on-complete":t.saveMailSettings}},[n("tab-content",{attrs:{title:"Personal Info",icon:"feather icon-user","before-change":t.validationForm}},[n("validation-observer",{ref:"personelRules",attrs:{tag:"form"}},[n("b-row",[n("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[n("h5",{staticClass:"mb-0"},[t._v(" Account Details ")]),n("small",{staticClass:"text-muted"},[t._v(" Enter Your Account Details. ")])]),n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"First Name","label-for":"i-username"}},[n("validation-provider",{attrs:{name:"first_name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[n("b-form-input",{attrs:{id:"i-username",placeholder:"John",state:!(a.length>0)&&null},model:{value:t.first_name,callback:function(e){t.first_name=e},expression:"first_name"}}),a.length>0?n("small",{staticClass:"text-danger"},[t._v("First name is required")]):t._e()]}}])})],1)],1),n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"Last Name","label-for":"i-email"}},[n("validation-provider",{attrs:{name:"last_name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[n("b-form-input",{attrs:{id:"i-email",placeholder:"Doe",state:!(a.length>0)&&null},model:{value:t.last_name,callback:function(e){t.last_name=e},expression:"last_name"}}),a.length>0?n("small",{staticClass:"text-danger"},[t._v("Last name is required")]):t._e()]}}])})],1)],1)],1)],1)],1),n("tab-content",{attrs:{title:"Contact Info",icon:"feather icon-phone","before-change":t.validationContactForm}},[n("validation-observer",{ref:"contactRules",attrs:{tag:"form"}},[n("b-row",[n("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[n("h5",{staticClass:"mb-0"},[t._v(" Contact Details ")]),n("small",{staticClass:"text-muted"},[t._v(" Enter Your Contact Details. ")])]),n("b-col",{attrs:{md:"4"}},[n("b-form-group",{attrs:{label:"Poshmark store","label-for":"i-password"}},[n("validation-provider",{attrs:{name:"poshmark_store",rules:"required|url"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[n("b-form-input",{attrs:{id:"i-password",placeholder:"https://poshmark.com/closet/yomra",state:!(a.length>0)&&null},model:{value:t.poshmark_store,callback:function(e){t.poshmark_store=e},expression:"poshmark_store"}}),a.length>0?n("small",{staticClass:"text-danger"},[t._v("Poshmark store is required and must be url")]):t._e()]}}])})],1)],1),n("b-col",{attrs:{md:"4"}},[n("b-form-group",{attrs:{label:"Web Site","label-for":"i-c-password"}},[n("b-form-input",{attrs:{id:"i-c-password",placeholder:"www.yomra.com"},model:{value:t.web_site,callback:function(e){t.web_site=e},expression:"web_site"}})],1)],1),n("b-col",{attrs:{md:"4"}},[n("b-form-group",{attrs:{label:"E-Mail","label-for":"i-c-password"}},[n("b-form-input",{attrs:{id:"i-c-password",placeholder:"yomra@hotmail.com"},model:{value:t.mail,callback:function(e){t.mail=e},expression:"mail"}})],1)],1)],1)],1)],1),n("tab-content",{attrs:{title:"Social Links",icon:"feather icon-link"}},[n("b-row",[n("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[n("h5",{staticClass:"mb-0"},[t._v(" Social Links ")]),n("small",{staticClass:"text-muted"},[t._v("Enter Your Social Links")])]),n("b-col",{attrs:{md:"12"}},[n("b-form-group",{attrs:{label:"Twitter","label-for":"i-twitter"}},[n("b-form-input",{attrs:{id:"i-twitter",placeholder:"https://twitter.com/abc"},model:{value:t.twitter_url,callback:function(e){t.twitter_url=e},expression:"twitter_url"}})],1)],1),n("b-col",{attrs:{md:"12"}},[n("b-form-group",{attrs:{label:"Facebook","label-for":"i-facebook"}},[n("b-form-input",{attrs:{id:"i-facebook",placeholder:"https://facebook.com/abc"},model:{value:t.facebook_url,callback:function(e){t.facebook_url=e},expression:"facebook_url"}})],1)],1),n("b-col",{attrs:{md:"12"}},[n("b-form-group",{attrs:{label:"Instagram","label-for":"i-google-plus"}},[n("b-form-input",{attrs:{id:"i-google-plus",placeholder:"https://instagram.com/abc"},model:{value:t.instagram_url,callback:function(e){t.instagram_url=e},expression:"instagram_url"}})],1)],1)],1)],1),n("tab-content",{attrs:{title:"Mail Template",icon:"feather icon-file-text"}},[n("b-row",[n("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[n("h5",{staticClass:"mb-0"},[t._v(" Mail Template ")]),n("small",{staticClass:"text-muted"},[t._v("Enter Your Personal Info.")])]),n("b-col",{attrs:{md:"3"}}),n("b-col",{attrs:{md:"6"}},[n("body",{staticStyle:{margin:"0",padding:"0",width:"100%","word-break":"break-word","-webkit-font-smoothing":"antialiased","--bg-opacity":"1","background-color":"rgba(236, 239, 241, var(--bg-opacity))"}},[n("div",{staticStyle:{display:"none"}},[t._v("Your account on PixInvent is deactivated.")]),n("div",{attrs:{role:"article","aria-roledescription":"email","aria-label":"Account Deactivated 😔",lang:"en"}},[n("table",{staticStyle:{"font-family":"Montserrat, -apple-system, 'Segoe UI', sans-serif",width:"100%"},attrs:{width:"100%",cellpadding:"0",cellspacing:"0",role:"presentation"}},[n("tr",[n("td",{staticStyle:{"--bg-opacity":"1","background-color":"rgba(236, 239, 241, var(--bg-opacity))","font-family":"Montserrat, -apple-system, 'Segoe UI', sans-serif"},attrs:{align:"center",bgcolor:"rgba(236, 239, 241, var(--bg-opacity))"}},[n("table",{staticClass:"sm-w-full",staticStyle:{"font-family":"'Montserrat',Arial,sans-serif",width:"600px"},attrs:{width:"600",cellpadding:"0",cellspacing:"0",role:"presentation"}},[n("tr",[n("td",{staticClass:"sm-py-32 sm-px-24",staticStyle:{"font-family":"Montserrat, -apple-system, 'Segoe UI', sans-serif",padding:"48px","text-align":"center"},attrs:{align:"center"}},[n("a",{attrs:{href:"https://1.envato.market/vuexy_admin"}},[n("img",{staticStyle:{border:"0","max-width":"100%","line-height":"100%","vertical-align":"middle"},attrs:{src:"https://d2gjrq7hs8he14.cloudfront.net/webpack4/logo@2x-8d56700bf4acf5930388f3bea97c0260.png",width:"155",alt:"Vuexy Admin"}})])])]),n("tr",[n("td",{staticClass:"sm-px-24",staticStyle:{"font-family":"'Montserrat',Arial,sans-serif"},attrs:{align:"center"}},[n("table",{staticStyle:{"font-family":"'Montserrat',Arial,sans-serif",width:"100%"},attrs:{width:"100%",cellpadding:"0",cellspacing:"0",role:"presentation"}},[n("tr",[n("td",{staticClass:"sm-px-24",staticStyle:{"--bg-opacity":"1","background-color":"rgba(255, 255, 255, var(--bg-opacity))","border-radius":"4px","font-family":"Montserrat, -apple-system, 'Segoe UI', sans-serif","font-size":"14px","line-height":"24px",padding:"48px","text-align":"left","--text-opacity":"1",color:"rgba(98, 98, 98, var(--text-opacity))"},attrs:{bgcolor:"rgba(255, 255, 255, var(--bg-opacity))",align:"left"}},[n("p",{staticStyle:{"font-weight":"600","font-size":"18px","margin-bottom":"0"}},[t._v("Hey")]),n("p",{staticStyle:{"font-weight":"700","font-size":"20px","margin-top":"0","--text-opacity":"1",color:"rgba(255, 88, 80, var(--text-opacity))"}},[t._v("John Doe!")]),n("p",{staticClass:"sm-leading-32",staticStyle:{"font-weight":"600","font-size":"20px",margin:"0 0 16px","--text-opacity":"1",color:"rgba(38, 50, 56, var(--text-opacity))"}},[t._v(" Your account is deactivated! 😔 ")]),n("p",[t._v("Your account is deactivated due to one of the following reason:")]),n("ul",{style:null!=t.mail&&""!=t.mail?"margin-bottom: 24px;":""},[n("li",[t._v("You have deactivated your account yourself.")]),n("li",[t._v("PixInvent staff deactivated your account due to policy violation.")])]),null!=t.mail&&""!=t.mail?n("p",{staticStyle:{margin:"0"}},[t._v(" If you did not intend to deactivate your account or need our help keeping the account, please contact us at "),n("a",{staticClass:"hover-underline",staticStyle:{"--text-opacity":"1",color:"rgba(115, 103, 240, var(--text-opacity))","text-decoration":"none"},attrs:{href:"mailto:"+t.mail}},[t._v(t._s(t.mail))])]):t._e(),n("table",{staticStyle:{"font-family":"'Montserrat',Arial,sans-serif",width:"100%"},attrs:{width:"100%",cellpadding:"0",cellspacing:"0",role:"presentation"}},[n("tr",[n("td",{staticStyle:{"font-family":"'Montserrat',Arial,sans-serif","padding-top":"32px","padding-bottom":"32px"}},[n("div",{staticStyle:{"--bg-opacity":"1","background-color":"rgba(236, 239, 241, var(--bg-opacity))",height:"1px","line-height":"1px"}},[t._v("‌")])])])]),n("p",{staticStyle:{margin:"0 0 16px"}},[t._v(" Please visit my poshmark "),n("a",{staticClass:"hover-underline",staticStyle:{"--text-opacity":"1",color:"rgba(115, 103, 240, var(--text-opacity))","text-decoration":"none"},attrs:{href:t.poshmark_store}},[t._v("here")]),t._v(". ")]),n("p",{staticStyle:{margin:"0 0 16px"}},[t._v("Thanks, "),n("br"),t._v(t._s(t.first_name+" "+t.last_name))])])]),n("tr",[n("td",{staticStyle:{"font-family":"'Montserrat',Arial,sans-serif",height:"20px"},attrs:{height:"20"}})]),n("tr",[n("td",{staticStyle:{"font-family":"Montserrat, -apple-system, 'Segoe UI', sans-serif","font-size":"12px","padding-left":"48px","padding-right":"48px","--text-opacity":"1",color:"rgba(236, 239, 241, var(--text-opacity))"}},[n("p",{staticStyle:{cursor:"default","margin-bottom":"16px"},attrs:{align:"center"}},[n("a",{staticStyle:{"--text-opacity":"1",color:"rgba(38, 50, 56, var(--text-opacity))","text-decoration":"none"},attrs:{href:t.facebook_url}},[n("img",{staticStyle:{border:"0","max-width":"100%","line-height":"100%","vertical-align":"middle","margin-right":"12px"},attrs:{src:"https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png",width:"17",alt:"Facebook"}})]),t._v(" • "),n("a",{staticStyle:{"--text-opacity":"1",color:"rgba(38, 50, 56, var(--text-opacity))","text-decoration":"none"},attrs:{href:t.twitter_url}},[n("img",{staticStyle:{border:"0","max-width":"100%","line-height":"100%","vertical-align":"middle","margin-right":"12px"},attrs:{src:"https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png",width:"17",alt:"Twitter"}})]),t._v(" • "),n("a",{staticStyle:{"--text-opacity":"1",color:"rgba(38, 50, 56, var(--text-opacity))","text-decoration":"none"},attrs:{href:t.instagram_url}},[n("img",{staticStyle:{border:"0","max-width":"100%","line-height":"100%","vertical-align":"middle","margin-right":"12px"},attrs:{src:"https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-04-512.png",width:"17",alt:"Instagram"}})])])])]),n("tr",[n("td",{staticStyle:{"font-family":"'Montserrat',Arial,sans-serif",height:"16px"},attrs:{height:"16"}})])])])])])])])])])])]),n("b-col",{attrs:{md:"3"}})],1)],1)],1)],1)])],1)],1)])},o=[],i=(a("d3b7"),a("2ee4")),r=a("4a7a"),s=a.n(r),l=a("223c"),c=(a("da93"),a("7bb1")),m=a("a15b7"),u=a("b28b"),d=a("8226"),p=a("4797"),b=a("6197"),f=a("d6e4"),g=a("205f"),h=a("3010"),v='\n<template>\n  <form-wizard\n    color="#5A8DEE"\n    :title="null"\n    :subtitle="null"\n    finish-button-text="Submit"\n    @on-complete="formSubmitted"\n   >\n    <tab-content\n      title="BASIC DETAILS"\n      icon="bx bx-user"\n    >\n      <b-row>\n        <b-col cols="12">\n          <h6 class="py-50">\n            Basic Details\n          </h6>\n        </b-col>\n        <b-col md="6">\n          <b-form-group>\n            <label>First Name</label>\n            <b-form-input placeholder="Enter Your First Name" />\n          </b-form-group>\n        </b-col>\n        <b-col md="6">\n          <b-form-group>\n            <label>Last Name</label>\n            <b-form-input placeholder="Enter Your Last Name" />\n          </b-form-group>\n        </b-col>\n        <b-col md="6">\n          <b-form-group>\n            <label>Email</label>\n            <b-form-input\n              type="email"\n              placeholder="Enter Your Email"\n            />\n          </b-form-group>\n        </b-col>\n        <b-col md="6">\n          <b-form-group>\n            <label>Password</label>\n            <b-form-input\n              type="password"\n              placeholder="Enter Your Password"\n            />\n          </b-form-group>\n        </b-col>\n      </b-row>\n      <hr>\n      <b-row>\n        <b-col cols="12">\n          <h6 class="py-50">\n            Contact Details\n          </h6>\n        </b-col>\n        <b-col md="4">\n          <b-form-group>\n            <label>Address Line 1</label>\n            <b-form-input placeholder="Enter Your House no./ Flate no." />\n          </b-form-group>\n        </b-col>\n        <b-col md="4">\n          <b-form-group>\n            <label>Address Line 2</label>\n            <b-form-input placeholder="Enter Your Society name / Area name" />\n          </b-form-group>\n        </b-col>\n        <b-col md="4">\n          <b-form-group>\n            <label>Landmark</label>\n            <b-form-input placeholder="Enter a Landmark" />\n          </b-form-group>\n        </b-col>\n        <b-col md="4">\n          <b-form-group>\n            <label>City</label>\n            <b-form-input placeholder="Enter Your City" />\n          </b-form-group>\n        </b-col>\n        <b-col md="4">\n          <b-form-group>\n            <label>State</label>\n            <b-form-input placeholder="Enter Your State" />\n          </b-form-group>\n        </b-col>\n        <b-col md="4">\n          <b-form-group>\n            <label>Country</label>\n            <b-form-input placeholder="Enter Your Country" />\n          </b-form-group>\n        </b-col>\n        <b-col md="4">\n          <b-form-group>\n            <label>Age</label>\n            <b-form-input\n              type="number"\n              placeholder="Enter Your Current Age"\n            />\n          </b-form-group>\n        </b-col>\n        <b-col md="4">\n          <b-form-group>\n            <label>Phone</label>\n            <b-form-input\n              type="number"\n              placeholder="+123456789"\n            />\n          </b-form-group>\n        </b-col>\n        <b-col md="4">\n          <b-form-group>\n            <label>Gender</label>\n            <div class="radio">\n              <b-form-radio\n                v-model="gender"\n                class="p-0"\n                name="some-radios"\n                value="A"\n                plain\n                inline\n              >\n                Male\n              </b-form-radio>\n              <b-form-radio\n                v-model="gender"\n                name="some-radios"\n                value="B"\n                plain\n                inline\n              >\n                Female\n              </b-form-radio>\n            </div>\n          </b-form-group>\n        </b-col>\n      </b-row>\n      <hr>\n      <b-row>\n        <b-col cols="12">\n          <h6 class="py-50">\n            Id Proof\n          </h6>\n        </b-col>\n        <b-col md="3">\n          <b-form-group>\n            <label>Passport</label>\n            <b-form-file placeholder="Choose File" />\n          </b-form-group>\n        </b-col>\n        <b-col md="3">\n          <b-form-group>\n            <label>National ID</label>\n            <b-form-file placeholder="Choose File" />\n          </b-form-group>\n        </b-col>\n        <b-col md="3">\n          <b-form-group>\n            <label>BIRTH CERTIFICATE </label>\n            <b-form-file placeholder="Choose File" />\n          </b-form-group>\n        </b-col>\n        <b-col md="3">\n          <b-form-group>\n            <label>DRIVING LICENCE </label>\n            <b-form-file placeholder="Choose File" />\n          </b-form-group>\n        </b-col>\n      </b-row>\n    </tab-content>\n    <tab-content\n      title="TERM AND CONDITIONS"\n      icon="bx bx-briefcase"\n    >\n      <b-row>\n        <b-col cols="12">\n          <h6 class="py-50">\n            Terms and conditions\n          </h6>\n        </b-col>\n        <b-col cols="12">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum culpa repellendus laborum maxime\n            dignissimos dolor excepturi iusto nemo aspernatur? Qui modi inventore reprehenderit, nostrum quaerat\n            libero maiores consequuntur illo veritatis.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, culpa obcaecati. Qui accusantium sit\n            error, dolorem alias incidunt est. Laborum, atque ipsum debitis obcaecati dolor illo magni provident harum\n            vitae?\n          </p>\n          <p>\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit omnis, doloribus autem, non quam\n            quibusdam harum accusamus voluptatem in perspiciatis consequuntur sint nam debitis sapiente ex, optio\n            totam delectus quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis placeat in quisquam\n            dolorum numquam, rerum expedita corporis eveniet quas nostrum, quia veritatis neque quos sint sit\n            exercitationem obcaecati perferendis magnam!\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequatur laudantium voluptatibus\n            impedit unde. Error eius consequuntur tenetur unde molestias esse doloribus animi, temporibus placeat\n            eaque laborum, maiores, ex quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,\n            suscipit placeat accusamus voluptas odio est ea accusantium dignissimos et officia, cupiditate aperiam\n            atque facilis? Adipisci earum fuga illo odit reiciendis. Lorem ipsum dolor sit amet consectetur\n            adipisicing elit. Asperiores nihil necessitatibus sequi placeat tenetur, perspiciatis, excepturi dolor,\n            consectetur assumenda amet accusantium velit fuga numquam tempore repellendus voluptatem vitae.\n            Voluptatem, hic.\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis vero, reprehenderit beatae\n            necessitatibus dignissimos animi distinctio illo porro fuga maxime nemo voluptate aspernatur tempore?\n            Incidunt consectetur dignissimos blanditiis. Corporis. Lorem ipsum dolor sit amet consectetur, adipisicing\n            elit. At, dolore omnis! Architecto dolorem non, earum pariatur, molestias voluptatem saepe voluptatibus\n            praesentium expedita cum quae et assumenda. Voluptas debitis praesentium quis. Lorem ipsum dolor sit amet\n            consectetur adipisicing elit. Cumque veniam ipsa saepe sint necessitatibus incidunt nihil totam delectus,\n            dolor omnis itaque libero sed molestiae assumenda non repellat, rerum, eius quia. lorem\n          </p>\n          <strong>Read all term and conditions carefully.</strong>\n        </b-col>\n        <b-col cols="12">\n          <b-form-group>\n            <b-form-radio\n              name="terms"\n              stacked\n            >\n              <span class="text-success">I read all term and conditions and i Agree.</span>\n            </b-form-radio>\n            <b-form-radio\n              name="terms"\n              stacked\n            >\n              <span class="text-danger">I am not Agree with it.</span>\n            </b-form-radio>\n          </b-form-group>\n        </b-col>\n      </b-row>\n    </tab-content>\n    <tab-content\n      title="NOMINEE"\n      icon="bx bx-group"\n    >\n      <b-row>\n        <b-col cols="12">\n          <h6 class="py-50">\n            Enter Nominate Details\n          </h6>\n        </b-col>\n        <b-col cols="12">\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad, consectetur animi magni magnam nihil\n            error, quaerat pariatur dolores unde quod sequi modi temporibus libero eos consequuntur ab maxime alias!\n          </p>\n        </b-col>\n        <b-col md="3">\n          <b-form-group>\n            <label>NOMINATION NAME</label>\n            <b-form-input placeholder="Nomination Name" />\n          </b-form-group>\n        </b-col>\n        <b-col md="3">\n          <b-form-group>\n            <label>NOMINEE\'S RELATION</label>\n            <b-form-input placeholder="Relation" />\n          </b-form-group>\n        </b-col>\n        <b-col md="3">\n          <b-form-group>\n            <label>Nominee Age</label>\n            <b-form-input placeholder="Age" />\n          </b-form-group>\n        </b-col>\n        <b-col md="3">\n          <b-form-group>\n            <label>Nominee Documents</label>\n            <b-form-file placeholder="Choose File" />\n          </b-form-group>\n        </b-col>\n        <b-col cols="12">\n          <h6 class="py-50">\n            Terms and conditions for nominee\n          </h6>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit sunt facilis, exercitationem\n            placeat in maiores, ullam doloribus aperiam sint culpa, quo ducimus tempore perferendis ipsum laborum\n            officia ut dignissimos!\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae quibusdam enim neque animi fugiat harum\n            tempora ipsum excepturi, cupiditate illum hic dignissimos, quaerat dolore! Minus rem sed accusamus\n            corrupti?\n          </p>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae quibusdam enim neque animi fugiat harum\n            tempora ipsum excepturi, cupiditate illum hic dignissimos, quaerat dolore! Minus rem sed accusamus\n            corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit sunt facilis,\n            exercitationem placeat in maiores, ullam doloribus aperiam sint culpa, quo ducimus tempore perferendis\n            ipsum laborum officia ut dignissimos!\n          </p>\n        </b-col>\n      </b-row>\n    </tab-content>\n  </form-wizard>\n</template>\n\n<script>\nimport AppCard from \'@core/components/app-card/AppCard.vue\'\nimport { FormWizard, TabContent } from \'vue-form-wizard\'\nimport \'vue-form-wizard/dist/vue-form-wizard.min.css\'\nimport {\n  BRow, BCol, BFormGroup, BFormInput, BFormRadio, BFormFile,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    FormWizard,\n    TabContent,\n    AppCard,\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormInput,\n    BFormRadio,\n    BFormFile,\n  },\n  data: () => ({\n    gender: \'A\',\n  }),\n  methods: {\n    formSubmitted() {\n      // eslint-disable-next-line\n      alert(\'Form submitted!\')\n    },\n  },\n}\n<\/script>\n',x=a("8f03"),y={props:["username"],components:{FormWizard:i["FormWizard"],TabContent:i["TabContent"],BRow:m["a"],BCol:u["a"],BFormGroup:d["a"],BFormInput:p["a"],vSelect:s.a,ToastificationContent:l["a"],BCardBody:b["a"],BCardText:f["a"],BCard:g["a"],ValidationProvider:c["b"],ValidationObserver:c["a"],BFormInvalidFeedback:h["a"]},data:function(){return{mail:"",required:x["b"],url:x["c"],first_name:"",last_name:"",poshmark_store:"",web_site:"",twitter_url:"",facebook_url:"",instagram_url:"",selectedContry:"select_value",selectedLanguage:"nothing_selected",codeIconInfo:v,countryName:[{value:"select_value",text:"Select Value"},{value:"Russia",text:"Russia"},{value:"Canada",text:"Canada"},{value:"China",text:"China"},{value:"United States",text:"United States"},{value:"Brazil",text:"Brazil"},{value:"Australia",text:"Australia"},{value:"India",text:"India"}],languageName:[{value:"nothing_selected",text:"Nothing Selected"},{value:"English",text:"English"},{value:"Chinese",text:"Mandarin Chinese"},{value:"Hindi",text:"Hindi"},{value:"Spanish",text:"Spanish"},{value:"Arabic",text:"Arabic"},{value:"Malay",text:"Malay"},{value:"Russian",text:"Russian"}]}},methods:{saveMailSettings:function(){var t=this,e={username:this.username,template:{first_name:this.first_name,last_name:this.last_name,poshmark_store:this.poshmark_store,mail:this.mail,web_site:this.web_site,twitter_url:this.twitter_url,facebook_url:this.facebook_url,instagram_url:this.instagram_url}};this.$http.post("/api/save_user_email_template",e).then((function(e){200===e.status&&t.$toast({component:l["a"],props:{title:"Save Success",icon:"EditIcon",variant:"success"}})})).catch((function(e){console.log(e),t.$toast({component:l["a"],props:{title:"Save Failed",icon:"EditIcon",variant:"danger"}})}))},validationForm:function(){var t=this;return new Promise((function(e,a){t.$refs.personelRules.validate().then((function(t){t?e(!0):a()}))}))},validationContactForm:function(){var t=this;return new Promise((function(e,a){t.$refs.contactRules.validate().then((function(t){t?e(!0):a()}))}))}},created:function(){var t=this,e={username:this.username};this.$http.post("/api/user_email_template",e).then((function(e){var a=e.data;200===e.status&&null!=a&&(t.first_name=a.first_name,t.last_name=a.last_name,t.poshmark_store=a.poshmark_store,t.mail=a.mail,t.web_site=a.web_site,t.twitter_url=a.twitter_url,t.facebook_url=a.facebook_url,t.instagram_url=a.instagram_url)})).catch((function(t){console.log(t)}))}},_=y,w=(a("96d2"),a("4c05"),a("c41d"),a("2877")),C=Object(w["a"])(_,n,o,!1,null,"422cb482",null);e["default"]=C.exports},b549:function(t,e,a){"use strict";a("8d81")},c41d:function(t,e,a){"use strict";a("616a")}}]);