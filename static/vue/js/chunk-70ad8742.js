(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70ad8742"],{"0160":function(t,e,a){t.exports=a.p+"img/avatar-s-20.jpg"},"133c":function(t,e,a){t.exports=a.p+"img/poshmark.png"},"223c":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toastification"},[a("div",{staticClass:"d-flex align-items-start"},[a("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[a("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),a("div",{staticClass:"d-flex flex-grow-1"},[a("div",[t.title?a("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?a("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),a("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():a("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},r=[],i=a("e8a3"),o={components:{BAvatar:i["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},n=o,c=(a("b549"),a("2877")),l=Object(c["a"])(n,s,r,!1,null,"55dd3057",null);e["a"]=l.exports},"3ebc":function(t,e,a){t.exports=a.p+"img/normal-link.png"},6170:function(t,e,a){},6683:function(t,e,a){t.exports=a.p+"img/avatar-s-16.jpg"},"8d81":function(t,e,a){},"8f03":function(t,e,a){"use strict";a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return m})),a.d(e,"c",(function(){return b}));var s=a("7bb1"),r=a("4c93"),i=a("d4d7"),o=a("2593"),n=function(t){return t>=0},c=function(t){var e=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/,a=e.test(t);return a},l=function(t){var e=/^(?:3[47][0-9]{13})$/,a=e.test(t);return a},d=function(t){if(void 0===t||null===t||0===t.length)return!0;var e=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return e.test(t)},u=Object(s["c"])("required",r["l"]),m=Object(s["c"])("email",r["g"]),b=(Object(s["c"])("min",r["j"]),Object(s["c"])("confirmed",r["e"]),Object(s["c"])("regex",r["k"]),Object(s["c"])("between",r["d"]),Object(s["c"])("alpha",r["a"]),Object(s["c"])("integer",r["h"]),Object(s["c"])("digits",r["f"]),Object(s["c"])("alpha-dash",r["b"]),Object(s["c"])("alpha-num",r["c"]),Object(s["c"])("length",r["i"]),Object(s["c"])("positive",{validate:n,message:"Please enter positive number!"}),Object(s["c"])("credit-card",{validate:l,message:"It is not valid credit card!"}),Object(s["c"])("password",{validate:c,message:"Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit"}),Object(s["c"])("url",{validate:d,message:"URL is invalid"}));Object(s["d"])({en:{messages:o.messages,names:{email:"Email",password:"Password"},fields:{password:{min:"{_field_} is too short, you want to get hacked?"}}},ar:{messages:i.messages,names:{email:"البريد الإلكتروني",password:"كلمة السر"},fields:{password:{min:"كلمة السر قصيرة جداً سيتم اختراقك"}}}})},b549:function(t,e,a){"use strict";a("8d81")},b7fa:function(t,e,a){t.exports=a.p+"img/avatar-s-1.jpg"},be76:function(t,e,a){"use strict";a("6170")},ecc1:function(t,e,a){t.exports=a.p+"img/avatar-s-13.jpg"},f2be:function(t,e,a){t.exports=a.p+"img/avatar-s-9.jpg"},fccd:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loading?s("div",{staticClass:"d-flex justify-content-center",staticStyle:{"padding-top":"250px"}},[s("b-spinner",{staticStyle:{width:"150px",height:"150px"},attrs:{type:"grow"}})],1):s("div",[s("b-row",[s("b-col",{staticClass:"d-flex justify-content-center",staticStyle:{"padding-top":"40px"}},[s("b-avatar",{staticClass:"avatar-badge",attrs:{size:"100px",src:t.user.picture_url,badge:"1","badge-variant":"danger","badge-offset":"0.2em"}})],1)],1),s("b-row",[s("b-col",{staticClass:"d-flex justify-content-center"},[s("div",t._l(t.user.best_seller,(function(t){return s("b-img",{key:t,staticStyle:{width:"15px"},attrs:{src:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/badge.0fa134b5.svg",alt:"Medal Pic"}})})),1)])],1),t.editMode?[s("b-button",{staticClass:"save-btn setting-btn",attrs:{variant:"success",disabled:t.savingProfile},on:{click:t.saveProfile}},[t.savingProfile?s("b-spinner",{attrs:{small:""}}):s("feather-icon",{attrs:{icon:"CheckIcon"}})],1),s("b-button",{staticClass:"back-btn setting-btn",attrs:{variant:"danger"},on:{click:function(e){t.editMode=!1}}},[s("feather-icon",{attrs:{icon:"XIcon"}})],1)]:s("b-button",{staticClass:"edit-btn setting-btn",attrs:{variant:"outline-light"},on:{click:function(e){t.editMode=!0}}},[s("feather-icon",{attrs:{icon:"EditIcon"}})],1),t.editMode?s("a",{staticClass:"setting-btn",staticStyle:{position:"fixed",left:"20px",top:"20px",color:"#fff",cursor:"pointer"},attrs:{id:"popover-setting-background"}},[s("feather-icon",{attrs:{icon:"SettingsIcon"}}),s("b-popover",{attrs:{target:"popover-setting-background",triggers:"hover",placement:"right"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Background Color")]},proxy:!0}],null,!1,1351393870)},[s("color-picker",{attrs:{width:150,height:150},model:{value:t.backgroundColor,callback:function(e){t.backgroundColor=e},expression:"backgroundColor"}})],1)],1):t._e(),s("b-row",[s("b-col",{staticClass:"d-flex justify-content-center mt-1"},[s("h5",{staticStyle:{color:"#fff"}},[t._v(" "+t._s(t.user.full_name?t.user.full_name:t.username)+" ")])])],1),s("br"),s("div",{staticClass:"d-flex justify-content-center"},t._l(t.socials,(function(e){return s("a",{directives:[{name:"show",rawName:"v-show",value:null!=e.url&&""!=e.url,expression:"social.url != null && social.url != ''"}],key:e.name,attrs:{href:e.url}},[s("feather-icon",{staticClass:"pl-1 pr-1 social-icon",style:"color: "+t.iconColor,attrs:{icon:t.socialIcon(e.name)}})],1)})),0),s("div",{staticClass:"d-flex justify-content-center"},[t.editMode?s("a",{staticClass:"setting-btn",staticStyle:{color:"#fff",cursor:"pointer"},attrs:{id:"popover-setting-icon"}},[s("feather-icon",{attrs:{icon:"SettingsIcon"}}),s("b-popover",{attrs:{target:"popover-setting-icon",triggers:"hover",placement:"bottom"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Social Icon Settings")]},proxy:!0}],null,!1,1766069160)},[s("b-form-group",[s("div",{staticClass:"d-flex justify-content-center"},[s("color-picker",{staticClass:"mt-1",attrs:{width:175,height:175},model:{value:t.iconColor,callback:function(e){t.iconColor=e},expression:"iconColor"}})],1)]),s("hr"),s("b-row",{staticStyle:{height:"150px",overflow:"auto"}},t._l(t.socials,(function(e){return s("b-col",{key:e.name,staticClass:"social-row",attrs:{md:"6",sm:"12"}},[s("b-input-group",[s("b-input-group-prepend",{attrs:{"is-text":""}},[s("feather-icon",{attrs:{icon:t.socialIcon(e.name)}})],1),s("b-form-input",{attrs:{placeholder:t.socialTitle(e.name)},model:{value:e.url,callback:function(a){t.$set(e,"url",a)},expression:"social.url"}}),s("b-input-group-append",[s("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){e.url=""}}},[t._v("Clear")])],1)],1)],1)})),1)],1)],1):t._e()]),s("br"),s("br"),s("b-row",{staticClass:"d-flex justify-content-center mt-1 card-content"},[s("div",{staticClass:"mx-1",staticStyle:{width:"800px"}},[t.editMode?s("a",{staticClass:"setting-btn",staticStyle:{position:"relative",top:"-5px",color:"#fff",cursor:"pointer"},attrs:{id:"popover-setting-card"}},[s("feather-icon",{attrs:{icon:"SettingsIcon"}}),s("b-popover",{attrs:{target:"popover-setting-card",triggers:"hover",placement:"left"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Card Sections")]},proxy:!0}],null,!1,1097252467)},[s("b-form-group",{attrs:{label:"Card Color","label-for":"text-input"}},[s("color-picker",{staticClass:"mt-1",attrs:{width:175,height:175},model:{value:t.cardColor,callback:function(e){t.cardColor=e},expression:"cardColor"}})],1),s("hr"),s("b-form-group",{attrs:{label:"Text Color","label-for":"text-input"}},[s("color-picker",{staticClass:"mt-1",attrs:{width:175,height:175},model:{value:t.cardTextColor,callback:function(e){t.cardTextColor=e},expression:"cardTextColor"}})],1)],1)],1):t._e()])]),s("b-row",{staticClass:"d-flex justify-content-center card-content",staticStyle:{"margin-bottom":"0"}},[s("b-card",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.deactivateForm,expression:"deactivateForm"}],staticClass:"card-employee-task mb-1 card-section mx-1",class:{"card-active":t.isActive},staticStyle:{width:"800px",height:"75px","border-radius":"0"},style:t.backgroundStyle,attrs:{"no-body":""},on:{click:t.activateForm}},[s("b-card-body",{staticClass:"my-auto"},[t.isActive?s("div",{staticClass:"d-flex"},[s("validation-observer",{ref:"newsletterRules",staticStyle:{width:"100%"}},[s("b-form",[s("b-form-group",[s("validation-provider",{attrs:{name:"Email",rules:"required|email"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.emailValue,expression:"emailValue"}],ref:"newsletter",staticClass:"newsletter-input",style:"width: 100%; height: 100%; border: none; padding-left: 5px; padding-right: 5px; color: #fff; margin-top: 5px;background-color:"+t.backgroundColor,attrs:{placeholder:"Please enter your email"},domProps:{value:t.emailValue},on:{input:[function(e){e.target.composing||(t.emailValue=e.target.value)},t.checkNewsletter]}})])],1)],1)],1),s("div",[s("b-button",{staticClass:"d-flex",attrs:{variant:"outline-light",disabled:t.newsletterLoading||""==t.emailValue||!t.newsletterValidation},on:{click:t.sendForm}},[t.newsletterLoading?s("b-spinner",{attrs:{small:""}}):[t._v(" Submit"),s("em",{staticClass:"fa fa-paper-plane",staticStyle:{"margin-left":"5px"}})]],2)],1)],1):t._e(),s("div",{staticClass:"employee-task d-flex justify-content-center mt-1"},[s("b-media",{attrs:{"no-body":""}},[s("b-media-aside",{staticClass:"mr-75"}),s("b-media-body",[s("h5",{directives:[{name:"show",rawName:"v-show",value:!t.isActive,expression:"!isActive"}],style:"color: "+t.cardTextColor},[t._v(" Sign up for my newsletter ")])])],1)],1)])],1)],1),s("b-row",{staticClass:"d-flex justify-content-center card-content",staticStyle:{"margin-bottom":"0"}},[s("b-card",{staticClass:"card-employee-task mb-1 card-section mx-1",staticStyle:{width:"800px",height:"75px","border-radius":"0"},style:t.backgroundStyle,attrs:{"no-body":""},on:{click:function(e){return t.$router.push({path:"/seller/"+t.username+"/faqs"})}}},[s("b-card-body",{staticClass:"my-auto"},[s("div",{staticClass:"employee-task d-flex justify-content-center mt-1"},[s("b-media",{attrs:{"no-body":""}},[s("b-media-aside",{staticClass:"mr-75"}),s("b-media-body",[s("h5",{style:"color: "+t.cardTextColor},[t._v(" Go to Frequently Asked Questions ")])])],1)],1)])],1)],1),s("b-row",{staticClass:"d-flex justify-content-center card-content"},[s("a",{staticClass:"mx-1",staticStyle:{width:"800px"},attrs:{target:"blank"}},[s("b-card",{staticClass:"card-employee-task mb-1 card-section",staticStyle:{"border-radius":"0"},style:t.backgroundStyle,attrs:{"no-body":""}},[s("b-card-body",[s("div",{staticClass:"employee-task d-flex justify-content-between align-items-center"},[s("b-media",{attrs:{"no-body":""}},[s("b-media-aside",{staticClass:"mr-75"},[s("b-avatar",{attrs:{size:"70",src:t.user.picture_url}})],1),s("b-media-body",[s("h6",{staticClass:"mb-0",style:"color: "+t.cardTextColor},[t._v(" Salvatore Ferragamo "),s("b-badge",{staticClass:"best-badge",style:t.backgroundStyle},[t._v("Best product")])],1),s("small",{style:"color: "+t.cardTextColor},[t._v(" Salvatore Ferragamo Narny Leather Grommet Trim 9M ")])])],1),s("div",{staticClass:"d-flex align-items-center"},[s("b-avatar",{attrs:{size:"70",src:"https://di2ponv0v5otw.cloudfront.net/posts/2018/06/30/5b37b1f8f8637d8242a81795/s_5b37b1fcaa57195479a711ce.jpeg"}})],1)],1)])],1)],1)]),t._l(t.links,(function(e){return s("b-row",{key:e.username,staticClass:"d-flex justify-content-center card-content"},[t.editMode?s("a",{staticClass:"mx-1",staticStyle:{width:"800px"},attrs:{target:"blank"}},[s("b-card",{staticClass:"card-employee-task mb-1 card-section",staticStyle:{"border-radius":"0"},style:t.backgroundStyle,attrs:{"no-body":""}},[s("feather-icon",{staticStyle:{color:"red",position:"absolute",right:"5",top:"5"},attrs:{icon:"XCircleIcon",size:"20"},on:{click:function(a){return t.deleteCard(e)}}}),s("b-card-body",[s("div",{staticClass:"employee-task d-flex justify-content-between align-items-center"},[s("b-media",{attrs:{"no-body":""}},[s("b-media-aside",{staticClass:"mr-75"},[s("b-avatar",{attrs:{size:"70",src:e.username?a("133c"):a("3ebc")}})],1),s("b-media-body",[s("h6",{staticClass:"mb-0",style:"color: "+t.cardTextColor},[t._v(" "+t._s(e.username?"Poshmark link":"Normal link")+" ")]),e.username?s("small",{style:"color: "+t.cardTextColor},[t._v(t._s(t.capitalize(e.username))+"'s Closet (@"+t._s(e.username)+") | Poshmark")]):s("small",{style:"color: "+t.cardTextColor},[t._v(" "+t._s(e.url)+" ")])])],1)],1)])],1)],1):s("a",{staticClass:"mx-1",staticStyle:{width:"800px"},attrs:{href:e.url,target:"blank"}},[s("b-card",{staticClass:"card-employee-task mb-1 card-section",staticStyle:{"border-radius":"0"},style:t.backgroundStyle,attrs:{"no-body":""}},[s("b-card-body",[s("div",{staticClass:"employee-task d-flex justify-content-between align-items-center"},[s("b-media",{attrs:{"no-body":""}},[s("b-media-aside",{staticClass:"mr-75"},[s("b-avatar",{attrs:{size:"70",src:e.username?a("133c"):a("3ebc")}})],1),s("b-media-body",[s("h6",{staticClass:"mb-0",style:"color: "+t.cardTextColor},[t._v(" "+t._s(e.username?"Poshmark link":"Normal link")+" ")]),e.username?s("small",{style:"color: "+t.cardTextColor},[t._v(t._s(t.capitalize(e.username))+"'s Closet (@"+t._s(e.username)+") | Poshmark")]):s("small",{style:"color: "+t.cardTextColor},[t._v(t._s(e.url))])])],1)],1)])],1)],1)])})),t.editMode?s("b-row",{staticClass:"d-flex justify-content-center card-content",staticStyle:{"margin-bottom":"0"}},[s("b-card",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.deactivateLinkForm,expression:"deactivateLinkForm"}],staticClass:"card-employee-task mb-1 card-section mx-1",class:{"card-active":t.isLinkActive},staticStyle:{width:"800px",height:"75px","border-radius":"0"},style:t.backgroundStyle,attrs:{"no-body":""},on:{click:t.activateLinkForm}},[s("b-card-body",{staticClass:"my-auto"},[t.isLinkActive?s("div",{staticClass:"d-flex"},[s("div",{staticClass:"d-flex",style:""==t.link?"width: 100%":""},[s("div",{staticClass:"d-flex justify-content-center",staticStyle:{width:"50%"}},[s("b-button",{directives:[{name:"show",rawName:"v-show",value:""==t.link,expression:"link == ''"}],staticStyle:{width:"80%"},attrs:{variant:"outline-light"},on:{click:function(e){return t.activateLink("poshmark")}}},[t._v("Poshmark Link")])],1),s("div",{staticClass:"d-flex justify-content-center",staticStyle:{width:"50%"}},[s("b-button",{directives:[{name:"show",rawName:"v-show",value:""==t.link,expression:"link == ''"}],staticStyle:{width:"80%"},attrs:{variant:"outline-light"},on:{click:function(e){t.link="normal"}}},[t._v("Normal Link")])],1)]),"poshmark"==t.link?[s("input",{directives:[{name:"model",rawName:"v-model",value:t.poshmarkUsername,expression:"poshmarkUsername"}],ref:"linkform",staticClass:"newsletter-input",style:"width: 100%; height: 100%; border: none; padding-left: 5px; padding-right: 5px; color: #fff; margin-top: 5px;background-color:"+t.backgroundColor,attrs:{placeholder:"Poshmark Username"},domProps:{value:t.poshmarkUsername},on:{input:function(e){e.target.composing||(t.poshmarkUsername=e.target.value)}}}),s("div",[s("b-button",{staticClass:"d-flex",attrs:{variant:"outline-light",disabled:""==t.poshmarkUsername},on:{click:t.addPoshmarkLink}},[t._v("Add"),s("em",{staticClass:"fa fa-lg fa-plus-circle",staticStyle:{"margin-left":"5px"}})])],1)]:"normal"==t.link?[s("validation-observer",{ref:"urlRules",staticStyle:{width:"100%"}},[s("b-form",[s("b-form-group",[s("validation-provider",{attrs:{name:"Email",rules:"required|url"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.URL,expression:"URL"}],ref:"linkform",staticClass:"newsletter-input",style:"width: 100%; height: 100%; border: none; padding-left: 5px; padding-right: 5px; color: #fff; margin-top: 5px;background-color:"+t.backgroundColor,attrs:{placeholder:"URL Link"},domProps:{value:t.URL},on:{input:[function(e){e.target.composing||(t.URL=e.target.value)},t.checkURL]}})])],1)],1)],1),s("div",[s("b-button",{staticClass:"d-flex",attrs:{variant:"outline-light",disabled:""==t.URL||!t.urlValidation},on:{click:t.addUrlLink}},[t._v("Add"),s("em",{staticClass:"fa fa-lg fa-plus-circle",staticStyle:{"margin-left":"5px"}})])],1)]:t._e()],2):t._e(),s("div",{staticClass:"employee-task d-flex justify-content-center"},[s("b-media",{attrs:{"no-body":""}},[s("b-media-aside",{staticClass:"mr-75"}),s("b-media-body",[s("h5",{directives:[{name:"show",rawName:"v-show",value:!t.isLinkActive,expression:"!isLinkActive"}],style:"color: "+t.cardTextColor},[s("feather-icon",{attrs:{icon:"PlusCircleIcon",size:"45"}})],1)])],1)],1)])],1)],1):t._e()],2)},r=[],i=(a("4160"),a("caad"),a("c975"),a("a434"),a("b0c0"),a("b64b"),a("ac1f"),a("2532"),a("5319"),a("9911"),a("159b"),a("3828")),o=a("1947"),n=a("205f"),c=a("4968"),l=a("b885"),d=a("6197"),u=a("34b6"),m=a("7c32"),b=a("7fa6"),p=a("e8a3"),f=a("11de"),h=a("8226"),v=a("4797"),g=a("5e12"),k=a("3656"),y=a("ccc0"),C=a("a15b7"),x=a("b28b"),w=a("01e3"),_=a("4918"),S=a("e98b"),j=a("2616"),L=a("1321"),B=a.n(L),I=a("1dff"),P=a("0800"),O=a("e67d"),F=a.n(O),T=a("1e8a"),A=a("223c"),N=a("7bb1"),U=a("8f03"),R="#e9ecef",$={props:["username"],components:{ValidationProvider:N["b"],ValidationObserver:N["a"],BPopover:i["a"],BButton:o["a"],BCard:n["a"],BCardTitle:c["a"],BCardHeader:l["a"],BCardBody:d["a"],BMedia:u["a"],BMediaAside:m["a"],BMediaBody:b["a"],BAvatar:p["a"],BForm:f["a"],BFormGroup:h["a"],BFormInput:v["a"],BInputGroup:g["a"],BInputGroupPrepend:k["a"],BInputGroupAppend:y["a"],BRow:C["a"],BCol:x["a"],BSpinner:w["a"],ColorPicker:T["a"],VueApexCharts:B.a,FeatherIcon:P["a"],ToastificationContent:A["a"],BImg:_["a"],BBadge:S["a"]},watch:{backgroundColor:function(t){document.body.style.backgroundColor=t}},methods:{checkNewsletter:function(){var t=this;this.$refs.newsletterRules.validate().then((function(e){t.newsletterValidation=e}))},checkURL:function(){var t=this;this.$refs.urlRules.validate().then((function(e){t.urlValidation=e}))},activateLink:function(t){this.link=t},capitalize:function(t){return t.length<1?"":t.replace(/^./,t[0].toUpperCase())},notEmptyObject:function(t){return Object.keys(t).length},activateForm:function(){var t=this;this.isActive=!0,setTimeout((function(e){t.$refs.newsletter.focus()}),200)},activateLinkForm:function(){var t=this;this.isLinkActive=!0,setTimeout((function(e){t.$refs.linkform.focus()}),200)},deactivateLinkForm:function(){this.isLinkActive=!1,this.link=""},deactivateForm:function(){this.isActive=!1},sendForm:function(){var t=this;this.newsletterLoading=!0;var e={username:this.username,subscribe_email:this.emailValue};this.$http.post("/api/save_user_newsletter",e).then((function(e){switch(e.data.status){case 200:t.$toast({component:A["a"],props:{title:"Subscribing Successful",icon:"BellIcon",text:"Your registration to the newsletter has been successfully completed",variant:"success"}});break;case 409:t.$toast({component:A["a"],props:{title:"Already Subscribed",icon:"BellIcon",text:"You already have a newsletter subscription",variant:"info"}});break;default:break}t.newsletterLoading=!1})).catch((function(e){t.$toast({component:A["a"],props:{title:"Subscribing Failed",icon:"BellIcon",text:"Your registration to the newsletter could not be completed",variant:"danger"}}),t.newsletterLoading=!1}))},addPoshmarkLink:function(){var t={username:this.poshmarkUsername,url:"https://poshmark/closet/"+this.poshmarkUsername};this.links.push(t),this.poshmarkUsername=""},addUrlLink:function(){var t={url:this.URL};this.links.push(t),this.URL=""},deleteCard:function(t){var e=this.links.indexOf(t);e>-1&&this.links.splice(e,1)},saveProfile:function(){var t=this;this.savingProfile=!0,this.user.background_color=this.backgroundColor,this.user.card_color=this.cardColor,this.user.card_text_color=this.cardTextColor,this.user.icon_color=this.iconColor,this.user.links=this.links,this.user.username=this.username,this.user.social_media.forEach((function(e){t.socials.forEach((function(t){t.name==e.name&&(e.url=t.url)}))})),this.$http.post("/api/save_user_profile",this.user).then((function(e){t.$toast({component:A["a"],props:{title:"Registration Successful",icon:"BellIcon",text:"Your profile has been successfully saved",variant:"success"}}),t.editMode=!1,t.savingProfile=!1})).catch((function(e){t.$toast({component:A["a"],props:{title:"Registration Fail",icon:"BellIcon",text:"Your profile could not be saved",variant:"danger"}}),t.savingProfile=!1}))},getSocials:function(){var t=[];return this.user.social_media.forEach((function(e){null!=e.url&&""!=e.url&&t.push(e)})),t},showToast:function(t){this.$toast({component:A["a"],props:{title:"Notification",icon:"BellIcon",text:"👋 Chocolate oat cake jelly oat cake candy jelly beans pastry.",variant:t}})}},computed:{backgroundStyle:function(){return{"--background-color":this.backgroundColor,"--card-color":this.cardColor}},socialIcon:function(){return function(t){var e="";switch(t){case"fb":e="FacebookIcon";break;case"tw":e="TwitterIcon";break;case"yt":e="YoutubeIcon";break;case"ig":e="InstagramIcon";break;default:break}return e}},socialTitle:function(){return function(t){var e="";switch(t){case"fb":e="Facebook account";break;case"tw":e="Twitter account";break;case"yt":e="Youtube account";break;case"ig":e="Instagram account";break;default:break}return e}}},data:function(){return{urlValidation:!1,newsletterValidation:!1,newsletterLoading:!1,required:U["b"],email:U["a"],url:U["c"],emailValue:"",URL:"",link:"",savingProfile:!1,loading:!0,user:{social_media:[],links:[]},links:[],socials:[],includedServices:["tw","fb","yt","ig"],backgroundColor:"#3d3b3c",cardColor:"#fff",cardTextColor:"#3d3b3c",iconColor:"#fff",editMode:!1,isActive:!1,isLinkActive:!1,chartData:[],chartColor:[I["b"].primary,I["b"].danger,I["b"].success,I["b"].secondary,I["b"].warning,I["b"].primary],chartSeries:[45,65,60,35,65,80],employeeData:[{avatar:a("f2be"),userFullName:"Ryan Harrington",designation:"iOS Developer",duration:"9hr 20m"},{avatar:a("0160"),userFullName:"Louisa Norton",designation:"UI Designer",duration:"4hr 17m"},{avatar:a("b7fa"),userFullName:"Jayden Duncan",designation:"Java Developer",duration:"12hr 8m"},{avatar:a("0160"),userFullName:"Cynthia Howell",designation:"Anguler Developer",duration:"3hr 19m"},{avatar:a("6683"),userFullName:"Helena Payne",designation:"Marketing",duration:"9hr 50m"},{avatar:a("ecc1"),userFullName:"Troy Jensen",designation:"iOS Developer",duration:"4hr 48m"}],chart:{series:[65],options:{grid:{show:!1,padding:{left:-15,right:-15,top:-12,bottom:-15}},colors:[I["b"].primary],plotOptions:{radialBar:{hollow:{size:"22%"},track:{background:R},dataLabels:{showOn:"always",name:{show:!1},value:{show:!1}}}},stroke:{lineCap:"round"}}}}},created:function(){var t=this;document.body.style.backgroundColor=this.backgroundColor;for(var e=0;e<this.employeeData.length;e+=1){var a=JSON.parse(JSON.stringify(this.chart));a.options.colors[0]=this.chartColor[e],a.series[0]=this.chartSeries[e],this.chartData.push(a)}var s={username:this.username};this.$http.post("https://n376smrwjb.execute-api.us-east-2.amazonaws.com/api/user_profile",s).then((function(e){t.notEmptyObject(e.data)&&(t.user=e.data,t.backgroundColor=t.user.background_color?t.user.background_color:"#3d3b3c",t.cardColor=t.user.card_color?t.user.card_color:"#fff",t.cardTextColor=t.user.card_text_color?t.user.card_text_color:"#3d3b3c",t.iconColor=t.user.icon_color?t.user.icon_color:"#fff",t.links=t.user.links?t.user.links:[],t.user.social_media.forEach((function(e){if(t.includedServices.includes(e.name)){if(null==e.url&&null!=e.username)switch(e.name){case"fb":e.url="https://www.facebook.com/"+e.username;break;case"tw":e.url="https://www.twitter.com/"+e.username;break;case"yt":e.url="https://www.youtube.com/"+e.username;break;case"in":e.url="https://www.linkedin.com/"+e.username;break;default:break}t.socials.push({name:e.name,url:e.url})}}))),t.loading=!1})).catch((function(e){console.log("Get User Profile Error",e),t.loading=!1}))},destroyed:function(){document.body.style.backgroundColor=""},directives:{ClickOutside:F.a,"b-tooltip":j["a"]}},z=$,M=(a("be76"),a("2877")),V=Object(M["a"])(z,s,r,!1,null,null,null);e["default"]=V.exports}}]);