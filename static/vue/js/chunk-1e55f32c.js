(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e55f32c"],{"0160":function(a,t,e){a.exports=e.p+"img/avatar-s-20.jpg"},3988:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("b-card",{staticClass:"card-profile",staticStyle:{height:"85vh"},attrs:{"img-src":"https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/banner-12.3bf1dcd0.jpg","img-alt":"Profile Cover Photo","img-top":""}},[e("div",{staticClass:"profile-image-wrapper"},[e("div",{staticClass:"profile-image p-0"},[e("b-avatar",{attrs:{size:"114",variant:"light",src:"https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/avatar-s-9.e2785e7a.jpg"}})],1)]),e("h3",[a._v(a._s(a.user.first_name+" "+a.user.last_name))]),e("h6",{staticClass:"text-muted"},[a._v(" "+a._s(a.user.username)+" ")]),e("b-badge",{staticClass:"profile-badge",attrs:{variant:"light-primary"}},[a._v(" Seller ")]),e("br"),e("hr"),e("b-media",{attrs:{"no-body":""}},[e("b-media-aside",{staticClass:"mr-1"},[e("b-avatar",{attrs:{rounded:"",variant:"light-primary",size:"34"}},[e("feather-icon",{attrs:{icon:"EmailIcon",size:"18"}})],1)],1),e("b-media-aside",[e("h6",{staticClass:"mt-1"},[a._v(" "+a._s(a.user.email)+" ")])])],1),e("b-media",{attrs:{"no-body":""}},[e("b-media-aside",{staticClass:"mr-1"},[e("b-avatar",{attrs:{rounded:"",variant:"light-primary",size:"34"}},[e("feather-icon",{attrs:{icon:"PhoneIcon",size:"18"}})],1)],1),e("b-media-aside",[e("h6",{staticClass:"mt-1"},[a._v(" "+a._s(a.user.phone)+" ")])])],1),e("hr",{staticClass:"mb-2"}),e("div",{staticClass:"justify-content-between align-items-center"},[e("div",[e("h6",{staticClass:"text-muted font-weight-bolder"},[a._v(" Total Price ")]),e("h3",{staticClass:"mb-0"},[a._v(" 10.3k ")])]),e("hr"),e("div",[e("h6",{staticClass:"text-muted font-weight-bolder"},[a._v(" Total number of products ")]),e("h3",{staticClass:"mb-0"},[a._v(" 156 ")])]),e("hr"),e("div",[e("h6",{staticClass:"text-muted font-weight-bolder"},[a._v(" Poshmark score ")]),e("h3",{staticClass:"mb-0"},[a._v(" 23 ")])]),e("hr")])],1)],1),e("b-col",{attrs:{cols:"6"}},[e("b-card",{staticClass:"card-transaction",staticStyle:{height:"85vh",overflow:"auto"},attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",[a._v("Products")]),e("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"MoreVerticalIcon",size:"18"}})],1),e("b-card-body",a._l(a.transactionData,(function(t,r){return e("div",{key:r,staticClass:"transaction-item"},[e("b-media",{attrs:{"no-body":""}},[e("b-media-aside",[e("b-avatar",{attrs:{rounded:"",size:"42",variant:t.avatarVariant}},[e("feather-icon",{attrs:{size:"18",icon:t.avatar}})],1)],1),e("b-media-body",[e("h6",{staticClass:"transaction-title"},[a._v(" "+a._s(t.mode)+" ")]),e("small",[a._v(a._s(t.types))])])],1),e("div",{staticClass:"font-weight-bolder",class:t.deduction?"text-danger":"text-success"},[a._v(" "+a._s(t.payment)+" ")])],1)})),0)],1)],1),e("b-col",{attrs:{cols:"3"}},[e("b-card",{staticClass:"card-employee-task",staticStyle:{height:"85vh",overflow:"auto"},attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",[a._v("Buyers")]),e("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"MoreVerticalIcon",size:"18"}})],1),e("b-card-body",a._l(a.employeeData,(function(t,r){return e("div",{key:t.userFullName,staticClass:"employee-task d-flex justify-content-between align-items-center"},[e("b-media",{attrs:{"no-body":""}},[e("b-media-aside",{staticClass:"mr-75"},[e("b-avatar",{attrs:{rounded:"",size:"42",src:t.avatar}})],1),e("b-media-body",{staticClass:"my-auto"},[e("h6",{staticClass:"mb-0"},[a._v(" "+a._s(t.userFullName)+" ")]),e("small",[a._v(a._s(t.designation))])])],1),e("div",{staticClass:"d-flex align-items-center"},[e("small",{staticClass:"text-muted mr-75"},[a._v(a._s(t.duration))]),e("vue-apex-charts",{attrs:{type:"radialBar",height:"30",width:"30",options:a.chartData[r].options,series:a.chartData[r].series}})],1)],1)})),0)],1)],1)],1)},s=[],i=(e("99af"),e("205f")),n=e("e98b"),o=e("e8a3"),d=e("a15b7"),c=e("b28b"),l=e("b885"),m=e("4968"),p=e("6197"),u=e("7fa6"),h=e("34b6"),v=e("7c32"),b=e("bc3a"),y=e.n(b),g=e("4360"),f=e("1dff"),C=e("1321"),_=e.n(C),w="#e9ecef",k={props:["username"],components:{BCard:i["a"],BBadge:n["a"],BAvatar:o["a"],BRow:d["a"],BCol:c["a"],BCardHeader:l["a"],BCardTitle:m["a"],BCardBody:p["a"],BMediaBody:u["a"],BMedia:h["a"],BMediaAside:v["a"],VueApexCharts:_.a},data:function(){return{chartColor:[f["b"].primary,f["b"].danger,f["b"].success,f["b"].secondary,f["b"].warning,f["b"].primary],chartSeries:[45,65,60,35,65,80],chart:{series:[65],options:{grid:{show:!1,padding:{left:-15,right:-15,top:-12,bottom:-15}},colors:[f["b"].primary],plotOptions:{radialBar:{hollow:{size:"22%"},track:{background:w},dataLabels:{showOn:"always",name:{show:!1},value:{show:!1}}}},stroke:{lineCap:"round"}}},chartData:[],employeeData:[{avatar:e("f2be"),userFullName:"Ryan Harrington",designation:"iOS Developer",duration:"9hr 20m"},{avatar:e("0160"),userFullName:"Louisa Norton",designation:"UI Designer",duration:"4hr 17m"},{avatar:e("b7fa"),userFullName:"Jayden Duncan",designation:"Java Developer",duration:"12hr 8m"},{avatar:e("0160"),userFullName:"Cynthia Howell",designation:"Anguler Developer",duration:"3hr 19m"},{avatar:e("6683"),userFullName:"Helena Payne",designation:"Marketing",duration:"9hr 50m"},{avatar:e("ecc1"),userFullName:"Troy Jensen",designation:"iOS Developer",duration:"4hr 48m"}],user:{},transactionData:[{mode:"Wallet",types:"Starbucks",avatar:"PocketIcon",avatarVariant:"light-primary",payment:"-$74",deduction:!0},{mode:"Bank Transfer",types:"Add Money",avatar:"CheckIcon",avatarVariant:"light-success",payment:"+$480",deduction:!1},{mode:"Paypal",types:"Add Money",avatar:"DollarSignIcon",avatarVariant:"light-danger",payment:"+$480",deduction:!1},{mode:"Mastercard",types:"Ordered Food",avatar:"CreditCardIcon",avatarVariant:"light-warning",payment:"-$23",deduction:!0},{mode:"Transfer",types:"Refund",avatar:"TrendingUpIcon",avatarVariant:"light-info",payment:"+$98",deduction:!1},{mode:"Wallet",types:"Starbucks",avatar:"PocketIcon",avatarVariant:"light-primary",payment:"-$74",deduction:!0},{mode:"Bank Transfer",types:"Add Money",avatar:"CheckIcon",avatarVariant:"light-success",payment:"+$480",deduction:!1},{mode:"Paypal",types:"Add Money",avatar:"DollarSignIcon",avatarVariant:"light-danger",payment:"+$480",deduction:!1},{mode:"Mastercard",types:"Ordered Food",avatar:"CreditCardIcon",avatarVariant:"light-warning",payment:"-$23",deduction:!0},{mode:"Transfer",types:"Refund",avatar:"TrendingUpIcon",avatarVariant:"light-info",payment:"+$98",deduction:!1},{mode:"Wallet",types:"Starbucks",avatar:"PocketIcon",avatarVariant:"light-primary",payment:"-$74",deduction:!0},{mode:"Bank Transfer",types:"Add Money",avatar:"CheckIcon",avatarVariant:"light-success",payment:"+$480",deduction:!1},{mode:"Paypal",types:"Add Money",avatar:"DollarSignIcon",avatarVariant:"light-danger",payment:"+$480",deduction:!1},{mode:"Mastercard",types:"Ordered Food",avatar:"CreditCardIcon",avatarVariant:"light-warning",payment:"-$23",deduction:!0},{mode:"Transfer",types:"Refund",avatar:"TrendingUpIcon",avatarVariant:"light-info",payment:"+$98",deduction:!1}]}},created:function(){var a=this;y.a.get("".concat(this.$store.state.app.apiURL,"/api/seller/").concat(this.username)).then((function(t){a.user=t.data,g["a"].commit("app/UPDATE_USER",a.user)})).catch((function(a){console.log(a)}));for(var t=0;t<this.employeeData.length;t+=1){var e=JSON.parse(JSON.stringify(this.chart));e.options.colors[0]=this.chartColor[t],e.series[0]=this.chartSeries[t],this.chartData.push(e)}}},x=k,B=e("2877"),I=Object(B["a"])(x,r,s,!1,null,null,null);t["default"]=I.exports},6683:function(a,t,e){a.exports=e.p+"img/avatar-s-16.jpg"},b7fa:function(a,t,e){a.exports=e.p+"img/avatar-s-1.jpg"},ecc1:function(a,t,e){a.exports=e.p+"img/avatar-s-13.jpg"},f2be:function(a,t,e){a.exports=e.p+"img/avatar-s-9.jpg"}}]);