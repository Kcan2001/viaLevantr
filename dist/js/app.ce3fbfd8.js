(function(t){function a(a){for(var s,n,o=a[0],l=a[1],c=a[2],m=0,u=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(u.length)u.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==r[l]&&(s=!1)}s&&(i.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},r={app:0},i=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"02ce":function(t,a,e){},"2fe3":function(t,a,e){"use strict";var s=e("02ce"),r=e.n(s);r.a},"344a":function(t,a,e){t.exports=e.p+"img/adventure_4.b2074a50.jpg"},"4eca":function(t,a,e){t.exports=e.p+"img/dining_2.e8c3e565.jpg"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Header",{directives:[{name:"show",rawName:"v-show",value:t.user.loggedIn,expression:"user.loggedIn"}]}),e("SideMenu",{directives:[{name:"show",rawName:"v-show",value:t.user.loggedIn,expression:"user.loggedIn"}]}),e("router-view"),e("Footer")],1)},i=[],n=(e("a4d3"),e("4de4"),e("4160"),e("1d1c"),e("7a82"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("ade3")),o=e("2f62"),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-menu menu-fixed menu-light menu-accordion menu-shadow",attrs:{"data-scroll-to-active":"true"}},[e("div",{staticClass:"navbar-header"},[e("ul",{staticClass:"nav navbar-nav flex-row"},[e("li",{staticClass:"nav-item mr-auto"},[e("router-link",{attrs:{to:"/"}},[e("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[e("div",{staticClass:"brand-logo"}),e("h2",{staticClass:"brand-text mb-0"},[t._v("Levantr")])])])],1),t._m(0)])]),e("div",{staticClass:"shadow-bottom"}),e("div",{staticClass:"main-menu-content"},[e("ul",{staticClass:"navigation navigation-main",attrs:{id:"main-menu-navigation","data-menu":"menu-navigation","data-icon-style":""}},[e("li",{staticClass:" nav-item"},[e("router-link",{attrs:{to:"/dashboard"}},[e("i",{staticClass:"bx bx-home-alt"}),e("span",{staticClass:"menu-title",attrs:{"data-i18n":"Home"}},[t._v("Home")])])],1),e("li",{staticClass:" nav-item"},[e("router-link",{attrs:{to:"/map"}},[e("i",{staticClass:"bx bx-globe"}),e("span",{staticClass:"menu-title",attrs:{"data-i18n":"Google Maps"}},[t._v("Google Maps")])])],1),e("li",{staticClass:" nav-item"},[e("router-link",{attrs:{to:"/calendar"}},[e("i",{staticClass:"ficon bx bx-calendar-alt"}),e("span",{staticClass:"menu-title",attrs:{"data-i18n":"Calendar"}},[t._v("Calendar")])])],1)])])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item nav-toggle"},[e("a",{staticClass:"nav-link modern-nav-toggle pr-0",attrs:{"data-toggle":"collapse"}},[e("i",{staticClass:"bx bx-x d-block d-xl-none font-medium-4 primary toggle-icon"}),e("i",{staticClass:"toggle-icon bx bx-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary",attrs:{"data-ticon":"bx-disc"}})])])}];function d(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function m(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?d(Object(e),!0).forEach((function(a){Object(n["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var u={name:"SideMenu",computed:m({},Object(o["b"])({user:"user"}))},p=u,v=e("2877"),b=Object(v["a"])(p,l,c,!1,null,null,null),f=b.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"header-navbar-shadow"}),e("nav",{staticClass:"header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top"},[e("div",{staticClass:"navbar-wrapper"},[e("div",{staticClass:"navbar-container content"},[e("div",{staticClass:"navbar-collapse",attrs:{id:"navbar-mobile"}},[t._m(0),t.user.loggedIn?e("ul",{staticClass:"nav navbar-nav float-right"},[e("li",{staticClass:"dropdown dropdown-user nav-item"},[e("a",{staticClass:"dropdown-toggle nav-link dropdown-user-link",attrs:{href:"#","data-toggle":"dropdown"}},[e("div",{staticClass:"user-nav d-sm-flex d-none"},[e("span",{staticClass:"user-name"},[t._v(t._s(t._f("capitalize")(t.user.data.displayName)))])]),t._m(1)]),e("div",{staticClass:"dropdown-menu dropdown-menu-right pb-0",on:{click:function(a){return a.preventDefault(),t.signOut(a)}}},[t._m(2)])])]):t._e()])])])])])},C=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mr-auto float-left bookmark-wrapper d-flex align-items-center"},[e("ul",{staticClass:"nav navbar-nav"},[e("li",{staticClass:"nav-item mobile-menu d-xl-none mr-auto"},[e("a",{staticClass:"nav-link nav-menu-main menu-toggle hidden-xs",attrs:{href:"#"}},[e("i",{staticClass:"ficon bx bx-menu"})])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[s("img",{staticClass:"round",attrs:{src:e("92f6"),alt:"avatar",height:"40",width:"40"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dropdown-item"},[e("i",{staticClass:"bx bx-power-off mr-50"}),t._v(" Logout ")])}],h=(e("ac1f"),e("5319"),e("8aa5")),w=e.n(h);function x(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function _(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?x(Object(e),!0).forEach((function(a){Object(n["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):x(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var y={name:"Navbar",computed:_({},Object(o["b"])({user:"user"})),methods:{signOut:function(){var t=this;w.a.auth().signOut().then((function(){t.$router.replace({name:"Login"})}))}}},O=y,k=Object(v["a"])(O,g,C,!1,null,null,null),j=k.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer footer-static footer-light"})},P=[],N={},S=Object(v["a"])(N,E,P,!1,null,null,null),$=S.exports;function D(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function I(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?D(Object(e),!0).forEach((function(a){Object(n["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):D(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var T={name:"App",components:{Header:j,SideMenu:f,Footer:$},computed:I({},Object(o["b"])({user:"user"}))},L=T,M=Object(v["a"])(L,r,i,!1,null,null,null),A=M.exports;s["a"].use(o["a"]);var q=new o["a"].Store({state:{user:{loggedIn:!1,data:null},month:[]},getters:{user:function(t){return t.user},month:function(t){return t.month}},mutations:{SET_LOGGED_IN:function(t,a){t.user.loggedIn=a},SET_USER:function(t,a){t.user.data=a},SET_MONTH:function(t,a){t.month.push=a}},actions:{fetchUser:function(t,a){var e=t.commit;e("SET_LOGGED_IN",null!==a),e("SET_USER",a?{displayName:a.displayName,email:a.email}:null)},fetchMonth:function(t,a){var e=t.commit;e("SET_MONTH",a)}}}),U=e("8c4f"),G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-content content"},[e("div",{staticClass:"content-overlay"}),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"content-header row"}),e("div",{staticClass:"content-body"},[e("section",{staticClass:"row flexbox-container",attrs:{id:"auth-login"}},[e("div",{staticClass:"col-xl-8 col-xl-12"},[e("div",{staticClass:"card bg-authentication mb-0"},[e("div",{staticClass:"row m-0"},[e("div",{staticClass:"col-md-6 col-12 px-0"},[e("div",{staticClass:"card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center"},[t._m(0),e("div",{staticClass:"card-content"},[e("div",{staticClass:"card-body"},[t.error?e("div",{staticClass:"alert alert-danger"},[t._v(" "+t._s(t.error)+" ")]):t._e(),e("div",{staticClass:"divider"}),e("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[e("div",{staticClass:"form-group mb-50"},[e("label",{staticClass:"text-bold-600",attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"exampleInputEmail1",type:"email",placeholder:"Email address",name:"email",value:"",required:"",autofocus:""},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"text-bold-600",attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"exampleInputPassword1",type:"password",placeholder:"Password",name:"password",required:""},domProps:{value:t.form.password},on:{input:function(a){a.target.composing||t.$set(t.form,"password",a.target.value)}}})]),t._m(1),t._m(2)]),e("hr"),e("div",{staticClass:"text-center"},[e("small",{staticClass:"mr-25"},[t._v("Don't have an account?")]),e("router-link",{attrs:{to:"/register"}},[e("small",[t._v("Sign up")])])],1)])])])]),t._m(3)])])])]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v(" Login ")])])]),e("router-link",{staticClass:"nav-link",attrs:{to:"register"}},[t._v(" Register ")])],1)},z=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header pb-1"},[e("div",{staticClass:"card-title"},[e("h4",{staticClass:"text-center mb-2"},[t._v(" Welcome Back ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-group d-flex flex-md-row flex-column justify-content-between align-items-center"},[e("div",{staticClass:"text-left"},[e("div",{staticClass:"checkbox checkbox-sm"},[e("input",{staticClass:"form-check-input",attrs:{id:"exampleCheck1",type:"checkbox"}}),e("label",{staticClass:"checkboxsmall",attrs:{for:"exampleCheck1"}},[e("small",[t._v("Keep me logged in")])])])]),e("div",{staticClass:"text-right"},[e("a",{staticClass:"card-link",attrs:{href:"auth-forgot-password.html"}},[e("small",[t._v("Forgot Password?")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn btn-primary glow w-100 position-relative",attrs:{type:"submit"}},[t._v(" Login"),e("i",{staticClass:"bx bx-right-arrow-alt",attrs:{id:"icon-arrow"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6 d-md-block d-none text-center align-self-center p-3"},[s("div",{staticClass:"card-content"},[s("img",{staticClass:"img-fluid",attrs:{src:e("5a2c"),alt:"branding logo"}})])])}],H={data:function(){return{form:{email:"",password:""},data:"",error:null}},methods:{submit:function(){var t=this;w.a.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then((function(a){t.data=a,t.$router.replace({name:"Dashboard"})}))["catch"]((function(a){t.error=a.message}))}}},R=H,W=Object(v["a"])(R,G,z,!1,null,null,null),F=W.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-content content"},[e("div",{staticClass:"content-overlay"}),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"content-header row"}),e("div",{staticClass:"content-body"},[e("section",{staticClass:"row flexbox-container"},[e("div",{staticClass:"col-xl-8 col-xl-12"},[e("div",{staticClass:"card bg-authentication mb-0"},[e("div",{staticClass:"row m-0"},[e("div",{staticClass:"col-md-6 col-12 px-0"},[e("div",{staticClass:"card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center"},[t._m(0),e("div",{staticClass:"text-center"},[t._m(1),t.error?e("div",{staticClass:"alert alert-danger"},[t._v(" "+t._s(t.error)+" ")]):t._e()]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"card-body"},[e("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6 mb-50"},[e("label",{attrs:{for:"inputfirstname4"}},[t._v("first name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.firstName,expression:"form.firstName"}],staticClass:"form-control",attrs:{id:"firstName",name:"firstName",type:"text",placeholder:"First name",value:"",required:"",autofocus:""},domProps:{value:t.form.firstName},on:{input:function(a){a.target.composing||t.$set(t.form,"firstName",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6 mb-50"},[e("label",{attrs:{for:"inputlastname4"}},[t._v("last name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lastName,expression:"form.lastName"}],staticClass:"form-control",attrs:{id:"lastName",name:"lastName",type:"text",placeholder:"Last name",value:"",required:"",autofocus:""},domProps:{value:t.form.lastName},on:{input:function(a){a.target.composing||t.$set(t.form,"lastName",a.target.value)}}})])]),e("div",{staticClass:"form-group mb-50"},[e("label",{staticClass:"text-bold-600",attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"exampleInputEmail1",type:"email",placeholder:"Email address",name:"email",value:"",required:"",autofocus:""},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}})]),e("div",{staticClass:"form-group mb-2"},[e("label",{staticClass:"text-bold-600",attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"exampleInputPassword1",type:"password",placeholder:"Password",name:"password",required:""},domProps:{value:t.form.password},on:{input:function(a){a.target.composing||t.$set(t.form,"password",a.target.value)}}})]),t._m(2)]),e("hr"),t._m(3)])])])]),t._m(4)])])])])])])])},K=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header pb-1"},[e("div",{staticClass:"card-title"},[e("h4",{staticClass:"text-center mb-2"},[t._v(" Sign Up ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("small",[t._v(" Please enter your details to sign up and be part of our great community")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn btn-primary glow position-relative w-100",attrs:{type:"submit"}},[t._v(" SIGN UP"),e("i",{staticClass:"bx bx-right-arrow-alt",attrs:{id:"icon-arrow"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center"},[e("small",{staticClass:"mr-25"},[t._v("Already have an account?")]),e("a",{attrs:{href:"auth-login.html"}},[e("small",[t._v("Sign in")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6 d-md-block d-none text-center align-self-center p-3"},[s("img",{staticClass:"img-fluid",attrs:{src:e("9669"),alt:"branding logo"}})])}],J={data:function(){return{form:{firstName:"",lastNAme:"",email:"",password:""},error:null}},methods:{submit:function(){var t=this;w.a.auth().createUserWithEmailAndPassword(this.form.email,this.form.password).then((function(a){a.user.updateProfile({displayName:t.form.firstName+" "+t.form.lastName}).then((function(){})),t.$router.replace({name:"Dashboard"})}))["catch"]((function(a){t.error=a.message}))}}},Q=J,V=Object(v["a"])(Q,B,K,!1,null,null,null),Y=V.exports,X=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-content content"},[e("div",{staticClass:"content-overlay"}),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"content-header row"}),e("div",{staticClass:"content-body"},[e("div",{staticClass:"calendar-wrapper position-relative"},[e("div",{staticClass:"app-content-overlay"}),e("div",{staticClass:"sidebar",attrs:{id:"sidebar"}},[e("div",{staticClass:"sidebar-new-schedule"},[e("button",{staticClass:"btn btn-primary btn-block sidebar-new-schedule-btn",attrs:{id:"btn-new-schedule",type:"button"}},[t._v(" New schedule ")])]),e("div",{staticClass:"sidebar-calendars",attrs:{id:"sidebar-calendars"}},[e("div",[e("div",{staticClass:"sidebar-calendars-item"},[e("div",{staticClass:"checkbox"},[e("input",{staticClass:"checkbox-input tui-full-calendar-checkbox-square",attrs:{id:"checkbox1",type:"checkbox",value:"all",checked:""}}),e("label",{attrs:{for:"checkbox1"}},[t._v("View all")])])])]),e("div",{staticClass:"sidebar-calendars-d1",attrs:{id:"calendarList"}})])]),e("div",{staticClass:"calendar-view"},[e("div",{staticClass:"calendar-action d-flex align-items-center flex-wrap"},[e("button",{staticClass:"btn btn-icon sidebar-toggle-btn"},[e("i",{staticClass:"bx bx-menu font-large-1"})]),e("div",{staticClass:"dropdown d-inline mr-75"},[e("button",{staticClass:"btn btn-action dropdown-toggle",attrs:{id:"dropdownMenu-calendarType",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"}},[e("i",{staticClass:"bx bx-calendar-alt",attrs:{id:"calendarTypeIcon"}}),e("span",{attrs:{id:"calendarTypeName"}},[t._v("Dropdown")])]),e("ul",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{role:"menu","aria-labelledby":"dropdownMenu-calendarType"}},[e("li",{attrs:{role:"presentation"}},[e("a",{staticClass:"dropdown-menu-title dropdown-item",attrs:{role:"menuitem","data-action":"toggle-daily"}},[e("i",{staticClass:"bx bx-calendar-alt mr-50"}),e("span",[t._v("Daily")])])]),e("li",{attrs:{role:"presentation"}},[e("a",{staticClass:"dropdown-menu-title dropdown-item",attrs:{role:"menuitem","data-action":"toggle-weekly"}},[e("i",{staticClass:"bx bx-calendar-event mr-50"}),e("span",[t._v("Weekly")])])]),e("li",{attrs:{role:"presentation"}},[e("a",{staticClass:"dropdown-menu-title dropdown-item",attrs:{role:"menuitem","data-action":"toggle-monthly"}},[e("i",{staticClass:"bx bx-calendar mr-50"}),e("span",[t._v("Month")])])]),e("li",{attrs:{role:"presentation"}},[e("a",{staticClass:"dropdown-menu-title dropdown-item",attrs:{role:"menuitem","data-action":"toggle-weeks2"}},[e("i",{staticClass:"bx bx-calendar-check mr-50"}),e("span",[t._v("2 weeks")])])]),e("li",{attrs:{role:"presentation"}},[e("a",{staticClass:"dropdown-menu-title dropdown-item",attrs:{role:"menuitem","data-action":"toggle-weeks3"}},[e("i",{staticClass:"bx bx-calendar-check mr-50"}),e("span",[t._v("3 weeks")])])]),e("li",{staticClass:"dropdown-divider",attrs:{role:"presentation"}}),e("li",{attrs:{role:"presentation"}},[e("div",{staticClass:"dropdown-item",attrs:{role:"menuitem","data-action":"toggle-workweek"}},[e("input",{staticClass:"tui-full-calendar-checkbox-square",attrs:{type:"checkbox",value:"toggle-workweek",checked:""}}),e("span",{staticClass:"checkbox-title bg-primary"}),e("span",[t._v("Show weekends")])])]),e("li",{attrs:{role:"presentation"}},[e("div",{staticClass:"dropdown-item",attrs:{role:"menuitem","data-action":"toggle-start-day-1"}},[e("input",{staticClass:"tui-full-calendar-checkbox-square",attrs:{type:"checkbox",value:"toggle-start-day-1"}}),e("span",{staticClass:"checkbox-title"}),e("span",[t._v("Start Week on Monday")])])]),e("li",{attrs:{role:"presentation"}},[e("div",{staticClass:"dropdown-item",attrs:{role:"menuitem","data-action":"toggle-narrow-weekend"}},[e("input",{staticClass:"tui-full-calendar-checkbox-square",attrs:{type:"checkbox",value:"toggle-narrow-weekend"}}),e("span",{staticClass:"checkbox-title"}),e("span",[t._v("Narrower than weekdays")])])])])]),e("span",{staticClass:"menu-navigation",attrs:{id:"menu-navi"}},[e("button",{staticClass:"btn btn-action move-today mr-50 px-75",attrs:{type:"button","data-action":"move-today"}},[t._v("Today")]),e("button",{staticClass:"btn btn-icon btn-action move-day mr-50 px-50",attrs:{type:"button","data-action":"move-prev"}},[e("i",{staticClass:"bx bx-chevron-left",attrs:{"data-action":"move-prev"}})]),e("button",{staticClass:"btn btn-icon btn-action move-day mr-50 px-50",attrs:{type:"button","data-action":"move-next"}},[e("i",{staticClass:"bx bx-chevron-right",attrs:{"data-action":"move-next"}})])]),e("span",{staticClass:"render-range",attrs:{id:"renderRange"}})]),e("div",{staticClass:"calendar-content",attrs:{id:"calendar"}})])])])])])}],tt={beforeMount:function(){var t=document.createElement("script");t.setAttribute("src","./app-assets/js/scripts/extensions/calendar/schedules.js"),document.head.appendChild(t)},mounted:function(){var t=document.createElement("script");t.setAttribute("src","./app-assets/js/scripts/extensions/calendar/app-calendar.js"),document.head.appendChild(t)}},at=tt,et=Object(v["a"])(at,X,Z,!1,null,"5ceb35ea",null),st=et.exports,rt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"app-content content"},[s("div",{staticClass:"content-overlay"}),s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"content-header row"}),s("div",{staticClass:"content-body"},[s("section",{attrs:{id:"decks"}},[s("div",{staticClass:"row match-height"},[s("div",{staticClass:"col-12 mt-3 mb-1"},[s("h4",{staticClass:"text-uppercase"},[t._v(" Adventure ")])])]),s("div",{staticClass:"row match-height"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card-deck-wrapper"},[s("div",{staticClass:"card-deck"},[s("div",{staticClass:"row no-gutters horizonScroll"},[s("div",{staticClass:"col-md-3 col-sm-6 mb-sm-1"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:e("bdf4"),alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(" Card title ")]),s("p",{staticClass:"card-text"},[t._v(" This card has supporting text below as a natural lead-in to additional content. ")]),s("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])])]),s("div",{staticClass:"col-md-3 col-sm-6 mb-sm-1"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:e("c007"),alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(" Card title ")]),s("p",{staticClass:"card-text"},[t._v(" This card has supporting text below as a natural lead-in to additional content. ")]),s("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])])]),s("div",{staticClass:"col-md-3 col-sm-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:e("5a26"),alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(" Card title ")]),s("p",{staticClass:"card-text"},[t._v(" This card has supporting text below as a natural lead-in to additional content. ")]),s("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])])]),s("div",{staticClass:"col-md-3 col-sm-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:e("344a"),alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(" Card title ")]),s("p",{staticClass:"card-text"},[t._v(" This card has supporting text below as a natural lead-in to additional content. ")]),s("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])])])])])])])])]),s("section",{attrs:{id:"decks"}},[s("div",{staticClass:"row match-height"},[s("div",{staticClass:"col-12 mt-3 mb-1"},[s("h4",{staticClass:"text-uppercase"},[t._v(" Dining ")])])]),s("div",{staticClass:"row match-height"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card-deck-wrapper"},[s("div",{staticClass:"card-deck"},[s("div",{staticClass:"row no-gutters horizonScroll"},[s("div",{staticClass:"col-md-3 col-sm-6 mb-sm-1"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:e("c9a4"),alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(" Card title ")]),s("p",{staticClass:"card-text"},[t._v(" This card has supporting text below as a natural lead-in to additional content. ")]),s("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])])]),s("div",{staticClass:"col-md-3 col-sm-6 mb-sm-1"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:e("4eca"),alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(" Card title ")]),s("p",{staticClass:"card-text"},[t._v(" This card has supporting text below as a natural lead-in to additional content. ")]),s("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])])]),s("div",{staticClass:"col-md-3 col-sm-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:e("64c6"),alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(" Card title ")]),s("p",{staticClass:"card-text"},[t._v(" This card has supporting text below as a natural lead-in to additional content. ")]),s("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])])]),s("div",{staticClass:"col-md-3 col-sm-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:e("7abd"),alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(" Card title ")]),s("p",{staticClass:"card-text"},[t._v(" This card has supporting text below as a natural lead-in to additional content. ")]),s("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])])])])])])])])])])])])}],nt={},ot=nt,lt=(e("2fe3"),Object(v["a"])(ot,rt,it,!1,null,null,null)),ct=lt.exports;s["a"].use(U["a"]);var dt=new U["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Login",component:F},{path:"/login",name:"Login",component:F},{path:"/register",name:"Register",component:Y},{path:"/calendar",name:"Calendar",component:st,meta:{requiresAuth:!0}},{path:"/dashboard",name:"Dashboard",component:ct,meta:{requiresAuth:!0}}]}),mt=dt;e("fb6a"),e("0d03"),e("d3b7"),e("25f0"),e("1276");s["a"].filter("capitalize",(function(t){return t?(t=t.toString(),t.split(" ").length>0?(t=t.split(" ")[0],t.charAt(0).toUpperCase()+t.slice(1)):t.charAt(0).toUpperCase()+t.slice(1)):""})),s["a"].config.productionTip=!1,s["a"].use(e("2ead"));var ut={apiKey:"AIzaSyBFMbdyaUDSYLQBtzEmrSU23Ai1nwDrNWg",authDomain:"bookit-ddac6.firebaseapp.com",databaseURL:"https://bookit-ddac6.firebaseio.com",projectId:"bookit-ddac6",storageBucket:"bookit-ddac6.appspot.com",messagingSenderId:"984021608008",appId:"1:984021608008:web:e29a7b31acae3aa9765a7d",measurementId:"G-499GS7N2DK"};h["initializeApp"](ut),h["auth"]().onAuthStateChanged((function(t){q.dispatch("fetchUser",t)})),new s["a"]({router:mt,store:q,render:function(t){return t(A)}}).$mount("#app")},"5a26":function(t,a,e){t.exports=e.p+"img/adventure_3.e63daa0e.jpg"},"5a2c":function(t,a,e){t.exports=e.p+"img/login.9c165301.png"},"64c6":function(t,a,e){t.exports=e.p+"img/dining_3.00a9a5a2.jpg"},"7abd":function(t,a,e){t.exports=e.p+"img/dining_4.754efe8a.jpg"},"92f6":function(t,a,e){t.exports=e.p+"img/avatar-s-11.f7dd6b8f.jpg"},9669:function(t,a,e){t.exports=e.p+"img/register.98f1ba7c.png"},bdf4:function(t,a,e){t.exports=e.p+"img/adventure_1.837fa060.jpg"},c007:function(t,a,e){t.exports=e.p+"img/adventure_2.9841ed2f.jpg"},c9a4:function(t,a,e){t.exports=e.p+"img/dining_1.a8398298.jpg"}});
//# sourceMappingURL=app.ce3fbfd8.js.map