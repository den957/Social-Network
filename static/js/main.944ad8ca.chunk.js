(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{127:function(e,t,n){},13:function(e,t,n){e.exports={aside__item:"Aside_aside__item__3Bvsn",aside__icon:"Aside_aside__icon__2T1yJ",aside__name:"Aside_aside__name__1RnR9",iconAside__profile:"Aside_iconAside__profile__2QoIj",iconAside__messages:"Aside_iconAside__messages__Rl3Bq",iconAside__users:"Aside_iconAside__users__3r658",iconAside__settings:"Aside_iconAside__settings__Saj_9"}},131:function(e,t,n){e.exports={input__validate:"FormControls_input__validate__2WsIs"}},134:function(e,t,n){e.exports={preloader__img:"Preloader_preloader__img__2qj1u"}},14:function(e,t,n){e.exports={loader:"PreloaderLine_loader__2c8OV",loader__item:"PreloaderLine_loader__item__3MKhs",loading:"PreloaderLine_loading__2sbhr",loaderOne:"PreloaderLine_loaderOne__3aifi",loaderTwo:"PreloaderLine_loaderTwo__3ryue",loaderThree:"PreloaderLine_loaderThree__30el7",loaderFour:"PreloaderLine_loaderFour__2Qrxh",loaderFive:"PreloaderLine_loaderFive__2Gaeh",loaderSix:"PreloaderLine_loaderSix__heavn","loader-Seven":"PreloaderLine_loader-Seven__2ZHdR","loader-Eight":"PreloaderLine_loader-Eight__2iwgD"}},144:function(e,t,n){},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s}));var a=n(133),i=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f2f743b9-9231-4544-9bd3-51aae1b3e9f4"}}),o={me:function(){return i.get("auth/me").then((function(e){return e.data}))},logIn:function(e,t,n,a){return i.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logOut:function(){return i.delete("auth/login").then((function(e){return e.data}))},getCaptcha:function(){return i.get("/security/get-captcha-url").then((function(e){return e.data}))}},r={getUsers:function(e,t,n){return i.get("/users?count=".concat(e,"&page=").concat(t,"&friend=").concat(n)).then((function(e){return e.data}))},unfollow:function(e){return i.delete("/follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return i.post("/follow/".concat(e)).then((function(e){return e.data}))}},s={getProfile:function(e){return i.get("/profile/".concat(e)).then((function(e){return e.data}))},setImage:function(e){var t=new FormData;return t.append("image",e),i.post("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},getStatus:function(e){return i.get("/profile/status/".concat(e))},setStatus:function(e){return i.put("/profile/status",{status:e}).then((function(e){return e.data}))},setContactInfo:function(e,t,n,a,o,r,s,c){return i.put("/profile",{fullName:e,aboutMe:t,lookingForAJobDescription:n,lookingForAJob:a,contacts:{youtube:o,website:r,facebook:s,github:c}}).then((function(e){return e.data}))}}},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return r}));var a=function(e){return e?void 0:"Require filed"},i=function(e){return function(t){if(t&&t.length>e)return"Field is too long"}},o=function(){return function(e){if(!0!==/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/.test(e))return"Invalid url address"}},r=function(){return function(e){if(!0!==/^(\d{1,2})[\s\.\/-](\d{1,2})[\s\.\/-](\d{4})$/.test(e))return"Invalid date"}}},265:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),o=n.n(i),r=n(63),s=n.n(r),c=(n(144),n(28)),l=n(29),u=n.n(l),d=n(13),_=n.n(d),b=n(15),j=n.n(b),f=n(20),m=n(30),p=n(31),h=function(){return Object(a.jsxs)("div",{className:_.a.aside__menu,children:[Object(a.jsxs)(f.b,{className:_.a.aside__item,to:"/profile",children:[Object(a.jsx)(m.a,{icon:p.i,className:j()(_.a.aside__icon,_.a.iconAside__profile)})," ",Object(a.jsx)("span",{className:_.a.aside__name,children:"Profile"})]}),Object(a.jsxs)(f.b,{className:_.a.aside__item,to:"/messages",children:[Object(a.jsx)(m.a,{icon:p.f,className:j()(_.a.aside__icon,_.a.iconAside__messages)}),Object(a.jsx)("span",{className:_.a.aside__name,children:"Messages"})]}),Object(a.jsxs)(f.b,{className:_.a.aside__item,to:"/users",children:[Object(a.jsx)(m.a,{icon:p.l,className:j()(_.a.aside__icon,_.a.iconAside__users)}),Object(a.jsx)("span",{className:_.a.aside__name,children:"Users"})]}),Object(a.jsxs)(f.b,{className:_.a.aside__item,to:"/settings",children:[Object(a.jsx)(m.a,{icon:p.e,className:j()(_.a.aside__icon,_.a.iconAside__settings)}),Object(a.jsx)("span",{className:_.a.aside__name,children:"Settings"})]})]})},O=n(127),g=n.n(O),F=n(4),x=n(128),S=n(129),v=n(137),N=n(136),C=n(10),y=n(12),w=function(e){return{isAuth:e.auth.isAuth}},A=function(e){var t=function(t){Object(v.a)(i,t);var n=Object(N.a)(i);function i(){return Object(x.a)(this,i),n.apply(this,arguments)}return Object(S.a)(i,[{key:"render",value:function(){return!1===this.props.isAuth?Object(a.jsx)(C.a,{to:"/login"}):Object(a.jsx)(e,Object(F.a)({},this.props))}}]),i}(o.a.Component);return Object(y.b)(w)(t)},E=Object(y.b)((function(e){return{}}),(function(e){return{}}))(A((function(){return Object(a.jsx)("div",{className:g.a.messages,children:"Messages"})}))),I=n(67),H=n.n(I),D=n(5),T=n.n(D),k=n(267),P=n(266),M=n(25),L=n(36),U=Object(M.a)(8),B=Object(M.d)(),R=Object(M.c)(),K=Object(P.a)({form:"settings"})((function(e){var t=Object(i.useState)("".concat(T.a.bodySettings__checkbox)),n=Object(c.a)(t,2),o=n[0],r=n[1],s=Object(i.useState)(!1),l=Object(c.a)(s,2),u=l[0],d=l[1];return Object(a.jsxs)("form",{className:T.a.settings__form,onSubmit:e.handleSubmit,children:[Object(a.jsxs)("div",{className:T.a.settings__main,children:[Object(a.jsx)("div",{className:T.a.settings__title,children:Object(a.jsxs)("div",{className:T.a.titleSettings__row,children:[Object(a.jsx)("div",{className:T.a.titleSettings__title,children:"Main"}),Object(a.jsx)("div",{className:T.a.titleSettings__line})]})}),Object(a.jsx)("div",{className:T.a.settings__body,children:Object(a.jsxs)("div",{className:T.a.bodySettings__row,children:[Object(a.jsx)("div",{className:T.a.bodySettings__span,children:"Name:"}),Object(a.jsx)("div",{className:T.a.bodySettings__input,children:Object(a.jsx)(k.a,{className:T.a.bodySettings__el,component:L.a,type:"text",name:"fullName",validate:[M.b,U]})}),Object(a.jsx)("div",{className:T.a.bodySettings__span,children:"Birthday:"}),Object(a.jsx)("div",{className:T.a.bodySettings__input,children:Object(a.jsx)(k.a,{className:T.a.bodySettings__el,component:L.a,type:"text",name:"aboutMe",placeholder:"dd.mm.yyyy",validate:[M.b,R]})}),Object(a.jsx)("div",{className:T.a.bodySettings__span,children:"Town:"}),Object(a.jsx)("div",{className:T.a.bodySettings__input,children:Object(a.jsx)(k.a,{className:T.a.bodySettings__el,component:L.a,type:"text",name:"lookingForAJobDescription",validate:[M.b]})}),Object(a.jsx)("div",{className:T.a.bodySettings__span,children:"Married:"}),Object(a.jsx)("div",{className:T.a.bodySettings__input,children:u?Object(a.jsxs)("label",{children:[Object(a.jsx)("div",{onClick:function(){r("".concat(T.a.bodySettings__checkbox)),d(!1)},className:o}),Object(a.jsx)(k.a,{className:T.a.bodySettings__elCheckbox,component:"input",type:"checkbox",name:"married",checked:u})]}):Object(a.jsxs)("label",{children:[Object(a.jsx)("div",{onClick:function(){r("".concat(T.a.bodySettings__checkbox," ").concat(T.a.bodySettings__checkboxActive)),d(!0)},className:o}),Object(a.jsx)(k.a,{className:T.a.bodySettings__elCheckbox,component:"input",type:"checkbox",name:"married",checked:u})]})})]})})]}),Object(a.jsxs)("div",{className:T.a.settings__main,children:[Object(a.jsx)("div",{className:T.a.settings__title,children:Object(a.jsxs)("div",{className:T.a.titleSettings__row,children:[Object(a.jsx)("div",{className:T.a.titleSettings__title,children:"Contacts"}),Object(a.jsx)("div",{className:T.a.titleSettings__line})]})}),Object(a.jsx)("div",{className:T.a.settings__body,children:Object(a.jsxs)("div",{className:T.a.bodySettings__row,children:[Object(a.jsx)("div",{className:T.a.bodySettings__span,children:"Facebook:"}),Object(a.jsx)("div",{className:T.a.bodySettings__input,children:Object(a.jsx)(k.a,{className:T.a.bodySettings__el,component:L.a,type:"text",name:"facebook",placeholder:"https://www.",validate:[M.b,B]})}),Object(a.jsx)("div",{className:T.a.bodySettings__span,children:"Linkedin:"}),Object(a.jsx)("div",{className:T.a.bodySettings__input,children:Object(a.jsx)(k.a,{className:T.a.bodySettings__el,component:L.a,type:"text",name:"website",placeholder:"https://www.",validate:[M.b,B]})}),Object(a.jsx)("div",{className:T.a.bodySettings__span,children:"GitHub:"}),Object(a.jsx)("div",{className:T.a.bodySettings__input,children:Object(a.jsx)(k.a,{className:T.a.bodySettings__el,component:L.a,type:"text",name:"github",placeholder:"https://www.",validate:[M.b,B]})}),Object(a.jsx)("div",{className:T.a.bodySettings__span,children:"YouTube:"}),Object(a.jsx)("div",{className:T.a.bodySettings__input,children:Object(a.jsx)(k.a,{className:T.a.bodySettings__el,component:L.a,type:"text",name:"youtube",placeholder:"https://www.",validate:[M.b,B]})})]})}),Object(a.jsx)("div",{className:T.a.settings__line})]}),Object(a.jsx)("div",{className:T.a.settings__button,children:Object(a.jsx)("button",{type:"submit",children:"Save"})})]})})),z=n(33),J=Object(y.b)((function(e){return{userId:e.auth.id,isProfileMeInfo:e.profile.isProfileMeInfo}}),(function(e){return{setProfileContactInfo:function(t,n,a,i,o,r,s,c,l){e(Object(z.g)(t,n,a,i,o,r,s,c,l))}}}))(A((function(e){var t=Object(i.useState)(!1),n=Object(c.a)(t,2),o=n[0],r=n[1];return o?Object(a.jsx)(C.a,{to:"/profile"}):Object(a.jsxs)("div",{className:H.a.settings,children:[Object(a.jsx)("div",{className:H.a.settings__title,children:"Settings"}),Object(a.jsx)("div",{className:H.a.settings__body,children:Object(a.jsx)(K,{onSubmit:function(t){var n=[t.fullName,t.aboutMe,t.lookingForAJobDescription,t.married,t.youtube,t.facebook,t.github,t.website,e.userId],a=n[0],i=n[1],o=n[2],s=n[3],c=n[4],l=n[5],u=n[6],d=n[7],_=n[8];e.setProfileContactInfo(a,i,o,s,c,d,l,u,_),r(!0)}})})]})}))),G=n(42),Q="INITIALIZE_SUCCESS",V={initializer:!1},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(F.a)(Object(F.a)({},e),{},{initializer:!0});default:return e}},Y=function(){return function(e){var t=e(Object(G.b)());Promise.all([t]).then((function(t){e({type:Q})}))}},q=n(62),Z=n(65),X=n(91),$=n.n(X),ee=n(69),te=n.n(ee),ne=Object(P.a)({form:"profileStatus"})((function(e){return Object(a.jsxs)("form",{className:te.a.form__modalStatus,onSubmit:e.handleSubmit,children:[Object(a.jsx)(k.a,{autoFocus:!0,initialValue:e.profileStatus,className:te.a.modalStatus__input,component:"input",type:"text",name:"status"}),Object(a.jsx)("button",{className:te.a.modalStatus__button,type:"submit",children:"Save"})]})})),ae=Object(y.b)((function(e){return{profileStatus:e.profile.profileStatus}}),(function(e){return{setProfileStatus:function(t){e(Object(z.i)(t))}}}))((function(e){return Object(a.jsx)("div",{className:$.a.modalStatus,onClick:function(){return e.editModalStatus(!1)},children:Object(a.jsx)("div",{className:$.a.modalStatus__window,onClick:function(e){return e.stopPropagation()},children:Object(a.jsx)(ne,Object(Z.a)({profileStatus:e.profileStatus,onSubmit:function(t){var n=t.status;e.setProfileStatus(n),e.editModalStatus(!1)}},"profileStatus",e.profileStatus))})})})),ie=n(7),oe=n.n(ie),re=function(e){var t=Object(i.useState)(!1),n=Object(c.a)(t,2),o=n[0],r=n[1];return Object(a.jsx)("div",{className:oe.a.header,children:Object(a.jsxs)("div",{className:oe.a.header__container,children:[Object(a.jsxs)("div",{className:oe.a.header__row,children:[Object(a.jsx)("div",{className:j()(oe.a.header__logo,oe.a.logoHeader),children:Object(a.jsxs)("div",{className:oe.a.logoHeader__row,children:[Object(a.jsx)("div",{className:oe.a.logoHeader__img,children:Object(a.jsx)("img",{src:"data:image/png;base64,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"})}),Object(a.jsx)("div",{className:oe.a.logoHeader__name,children:"vkontakte"})]})}),e.isAuth?Object(a.jsx)(a.Fragment,{children:o?Object(a.jsx)("div",{className:(oe.a.header__body,oe.a.bodyHeader),onClick:function(){return r(!1)},children:Object(a.jsxs)("div",{className:oe.a.bodyHeader__row,children:[Object(a.jsx)("div",{className:oe.a.bodyHeader__fullName,children:e.isAuth&&e.profileMeInfo.fullName}),Object(a.jsx)("div",{className:oe.a.bodyHeader__logo,children:e.isAuth&&Object(a.jsx)("img",{src:e.profileMeInfo.photos.small})}),Object(a.jsx)("div",{className:oe.a.bodyHeader__arrow,children:Object(a.jsx)(m.a,{icon:p.b})})]})}):Object(a.jsx)("div",{className:j()(oe.a.header__body,oe.a.bodyHeader),onClick:function(){return r(!0)},children:Object(a.jsxs)("div",{className:oe.a.bodyHeader__row,children:[Object(a.jsx)("div",{className:oe.a.bodyHeader__fullName,children:e.isAuth&&e.profileMeInfo.fullName}),Object(a.jsx)("div",{className:oe.a.bodyHeader__logo,children:e.isAuth&&Object(a.jsx)("img",{src:e.profileMeInfo.photos.small})}),Object(a.jsx)("div",{className:oe.a.bodyHeader__arrow,children:Object(a.jsx)(m.a,{icon:p.b})})]})})}):Object(a.jsx)("div",{className:oe.a.header__login,children:Object(a.jsx)(f.b,{className:oe.a.loginHeader__link,to:"/login",children:"Login"})})]}),o&&Object(a.jsxs)("div",{className:oe.a.header__modal,children:[Object(a.jsx)("div",{className:oe.a.modalHeader__item,onClick:function(){return r(!1)},children:Object(a.jsx)(f.b,{to:"/settings",className:oe.a.modalHeader__link,children:"Settings"})}),Object(a.jsx)("div",{className:oe.a.modalHeader__line}),Object(a.jsx)("div",{className:oe.a.modalHeader__link,onClick:function(){e.logOutServerTC(),r(!1)},children:Object(a.jsx)("span",{children:"Log Out"})})]})]})})},se=Object(y.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.id,profileMeInfo:e.profile.profileMeInfo,profileImage:e.profile.profileImage}}),(function(e){return{logOutServerTC:function(){e(Object(G.d)())},getProfileMeInfo:function(t){e(Object(z.d)(t))}}}))((function(e){return Object(i.useEffect)((function(){e.isAuth&&e.getProfileMeInfo(e.userId)}),[e.isAuth]),e.isAuth&&!e.profileMeInfo?Object(a.jsx)("div",{className:oe.a.preloader__headerWrapper,children:Object(a.jsx)("div",{className:oe.a.preloader__headerBlock,children:Object(a.jsx)(q.a,{})})}):Object(a.jsx)(re,{profileMeInfo:e.profileMeInfo,userId:e.userId,login:e.login,isAuth:e.isAuth,logOutServerTC:e.logOutServerTC,getProfileMeInfo:e.getProfileMeInfo})})),ce=n(94),le=function(e){return function(t){return Object(a.jsx)(o.a.Suspense,{fallback:Object(a.jsx)(ce.a,{}),children:Object(a.jsx)(e,Object(F.a)({},t))})}},ue=o.a.lazy((function(){return n.e(3).then(n.bind(null,280))})),de=o.a.lazy((function(){return n.e(4).then(n.bind(null,281))})),_e=o.a.lazy((function(){return n.e(5).then(n.bind(null,282))})),be=o.a.lazy((function(){return n.e(6).then(n.bind(null,278))})),je=Object(y.b)((function(e){return{initializer:e.app.initializer}}),(function(e){return{initializeTC:function(){e(Y())}}}))((function(e){Object(i.useEffect)((function(){e.initializeTC()}));var t=Object(i.useState)(!1),n=Object(c.a)(t,2),o=n[0],r=n[1];return e.initializer?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:u.a.wrapper,children:[Object(a.jsx)(se,{}),Object(a.jsx)("div",{className:u.a.main,children:Object(a.jsx)("div",{className:u.a.container,children:Object(a.jsxs)("div",{className:u.a.main__row,children:[Object(a.jsx)("div",{className:u.a.main__aside,children:Object(a.jsx)(h,{})}),Object(a.jsxs)("div",{className:u.a.main__content,children:[Object(a.jsx)(C.b,{path:"/profile/:userId?",render:le((function(){return Object(a.jsx)(ue,{editModalStatus:r,modalStatus:o})}))}),Object(a.jsx)(C.b,{path:"/messages",render:function(){return Object(a.jsx)(E,{})}}),Object(a.jsx)(C.b,{exact:!0,path:"/users",render:le(de)}),Object(a.jsx)(C.b,{path:"/settings",render:function(){return Object(a.jsx)(J,{})}}),Object(a.jsx)(C.b,{path:"/login",render:le(_e)}),Object(a.jsx)(C.b,{path:"/users/all",render:le(be)})]})]})})})]}),o&&Object(a.jsx)(ae,{modalStatus:o,editModalStatus:r})]}):Object(a.jsx)("div",{className:u.a.preloader__AppWrapper,children:Object(a.jsx)("div",{className:u.a.preloader__AppBlock,children:Object(a.jsx)(q.a,{})})})})),fe=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,279)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),o(e),r(e)}))},me=n(11),pe=n(135),he=n(268),Oe=n(95),ge=n(52),Fe=Object(me.c)({auth:G.a,users:Oe.a,profile:z.b,app:W,form:he.a.plugin({login:ge.a})}),xe=Object(me.d)(Fe,Object(me.a)(pe.a)),Se=xe;window.store=xe,s.a.render(Object(a.jsx)(f.a,{children:Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(y.a,{store:Se,children:Object(a.jsx)(je,{})})})}),document.getElementById("root")),fe()},29:function(e,t,n){e.exports={wrapper:"App_wrapper__2vLVp",main:"App_main__1Mf5Q",main__row:"App_main__row__GCJj1",container:"App_container__1pseU",main__content:"App_main__content__2ETN3",main__aside:"App_main__aside__2ADjm",preloader__AppWrapper:"App_preloader__AppWrapper__1Zlum",preloader__AppBlock:"App_preloader__AppBlock__d91vR"}},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"f",(function(){return j})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"h",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"i",(function(){return O})),n.d(t,"g",(function(){return g}));var a=n(4),i=n(16),o="GET_PROFILE_INFO_SUCCESS",r="SET_PROFILE_IMAGE_SUCCESS",s="GET_PROFILE_STATUS_SUCCESS",c="GET_PROFILE_ME_INFO_SUCCESS",l="ADD_PROFILE_POST_TYPE",u="REMOVE_PROFILE_POST_TYPE",d={profileMeInfo:null,profileInfo:null,profileImage:null,profileStatus:null,profilePosts:[]};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(a.a)(Object(a.a)({},e),{},{profileInfo:t.data});case r:return Object(a.a)(Object(a.a)({},e),{},{profileImage:t.img});case s:return Object(a.a)(Object(a.a)({},e),{},{profileStatus:t.status});case c:return Object(a.a)(Object(a.a)({},e),{},{profileMeInfo:t.dataMe});case l:return Object(a.a)(Object(a.a)({},e),e.profilePosts.push(t.dataPost));case u:return Object(a.a)(Object(a.a)({},e),{},{profilePosts:e.profilePosts.filter((function(e){if(e.id!==t.id)return!0}))});default:return e}};var _=function(e){return{type:s,status:e}},b=function(e){return{type:l,dataPost:e}},j=function(e){return{type:u,id:e}},f=function(e){return function(t){return i.b.getProfile(e).then((function(e){t(function(e){return{type:o,data:e}}(e))}))}},m=function(e){return function(t){return i.b.getProfile(e).then((function(e){t({type:c,dataMe:e})}))}},p=function(e){return function(t){i.b.setImage(e).then((function(e){if(0===e.resultCode){var n=e.data.photos.small;t(function(e){return{type:r,img:e}}(n))}}))}},h=function(e){return function(t){i.b.getStatus(e).then((function(e){e.data||t(_(e.data)),t(_(e.data))}))}},O=function(e){return function(t){i.b.setStatus(e).then((function(n){console.log(n),0===n.resultCode&&t(_(e))}))}},g=function(e,t,n,a,o,r,s,c,l){return function(u){i.b.setContactInfo(e,t,n,a,o,r,s,c).then((function(e){0===e.resultCode&&(u(m(l)),u(f(l)))}))}}},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),i=n(4),o=n(126),r=(n(1),n(131)),s=n.n(r),c=function(e){var t=e.input,n=e.meta,r=Object(o.a)(e,["input","meta"]);return Object(a.jsxs)("div",{className:n.touched&&n.error?s.a.input__validate:"",children:[Object(a.jsx)("input",Object(i.a)(Object(i.a)({},t),r)),n.touched&&n.error?Object(a.jsx)("span",{children:n.error}):""]})}},42:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return b}));var a=n(4),i=n(16),o=n(52),r="SET_IS_AUTH_TYPE",s="GET_CAPTCHA_SUCCESS",c={isAuth:!1,login:null,id:null,email:null,isCaptcha:!1,urlCaptcha:null},l=function(e,t,n,a){return{type:r,data:{login:e,id:t,email:n,isAuth:a}}},u=function(e,t){return{type:s,urlCaptcha:e,isCaptcha:t}},d=function(){return function(e){return i.a.me().then((function(t){if(0===t.resultCode){var n=[t.data.login,t.data.id,t.data.email,!0],a=n[1];return e(l(n[0],a,n[2],n[3])),a}}))}},_=function(e,t,n,a){return function(r){i.a.logIn(e,t,n,a).then((function(e){0===e.resultCode?(r(d()),r(u(null,!1))):10===e.resultCode?(r(j()),r(Object(o.b)())):r(Object(o.b)())}))}},b=function(){return function(e){i.a.logOut().then((function(t){0===t.resultCode&&e(l(null,null,null,!1))}))}},j=function(){return function(e){i.a.getCaptcha().then((function(t){var n=t.url;e(u(n,!0))}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return Object(a.a)(Object(a.a)({},e),t.data);case s:return Object(a.a)(Object(a.a)({},e),{},{urlCaptcha:t.urlCaptcha,isCaptcha:t.isCaptcha});default:return e}}},5:function(e,t,n){e.exports={settings__form:"SettingsContactForm_settings__form__2pKkj",settings__title:"SettingsContactForm_settings__title__3OMTI",titleSettings__row:"SettingsContactForm_titleSettings__row__3xpq_",titleSettings__title:"SettingsContactForm_titleSettings__title__1vtEU",titleSettings__line:"SettingsContactForm_titleSettings__line__3Q4vu",settings__body:"SettingsContactForm_settings__body__2ZS4s",bodySettings__row:"SettingsContactForm_bodySettings__row__17Y-a",bodySettings__span:"SettingsContactForm_bodySettings__span__27g8y",bodySettings__input:"SettingsContactForm_bodySettings__input__BRPkW",bodySettings__el:"SettingsContactForm_bodySettings__el__3LsH9",bodySettings__checkbox:"SettingsContactForm_bodySettings__checkbox__3xqMb",bodySettings__checkboxActive:"SettingsContactForm_bodySettings__checkboxActive__15ivs",bodySettings__elCheckbox:"SettingsContactForm_bodySettings__elCheckbox__2VVIL",settings__button:"SettingsContactForm_settings__button__iaJtY"}},52:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(4),i="AUTH_LOGIN_FAIL";t.a=function(e,t){switch(t.type){case i:return Object(a.a)(Object(a.a)({},e),{},{values:Object(a.a)(Object(a.a)({},e.values),{},{email:void 0,password:void 0,captcha:void 0})});default:return e}};var o=function(){return{type:i}}},62:function(e,t,n){"use strict";var a=n(0),i=(n(1),n.p+"static/media/loading.e7077cf5.svg"),o=n(134),r=n.n(o);t.a=function(e){return Object(a.jsx)("img",{src:i,className:r.a.preloader__img})}},67:function(e,t,n){e.exports={settings:"SettingsContact_settings__w1Qjp",settings__title:"SettingsContact_settings__title__vWr4H"}},69:function(e,t,n){e.exports={form__modalStatus:"ModalStatusForm_form__modalStatus__cd1-J",modalStatus__input:"ModalStatusForm_modalStatus__input__CnEmG",modalStatus__button:"ModalStatusForm_modalStatus__button__2rkWv"}},7:function(e,t,n){e.exports={header:"Header_header__obbSz",header__container:"Header_header__container__3VJg-",header__row:"Header_header__row__1ISnF",header__logo:"Header_header__logo__-RWJs",logoHeader__row:"Header_logoHeader__row__2TeaN",logoHeader__img:"Header_logoHeader__img__Jl8kd",logoHeader__name:"Header_logoHeader__name__3cGm5",header__body:"Header_header__body__1Tnn4",bodyHeader:"Header_bodyHeader__x62Uf",bodyHeader__row:"Header_bodyHeader__row__2yduv",bodyHeader__fullName:"Header_bodyHeader__fullName__3XRJZ",bodyHeader__logo:"Header_bodyHeader__logo__1hw40",bodyHeader__arrow:"Header_bodyHeader__arrow__1BOSg",loginHeader__link:"Header_loginHeader__link__38sz0",header__modal:"Header_header__modal__1C8fk",modalHeader__item:"Header_modalHeader__item__1meRi",modalHeader__link:"Header_modalHeader__link__1eyMV",modalHeader__line:"Header_modalHeader__line__1mBG4",preloader__headerWrapper:"Header_preloader__headerWrapper__1UzDM",preloader__headerBlock:"Header_preloader__headerBlock__2m5GE"}},91:function(e,t,n){e.exports={modalStatus:"ModalStatus_modalStatus__2a2LN",modalStatus__window:"ModalStatus_modalStatus__window__1sA_C"}},94:function(e,t,n){"use strict";var a=n(0),i=n(14),o=n.n(i),r=n(15),s=n.n(r);n(1);t.a=function(){return Object(a.jsxs)("div",{className:o.a.loader,children:[Object(a.jsx)("div",{className:s()(o.a.loaderOne,o.a.loader__item)}),Object(a.jsx)("div",{className:s()(o.a.loaderTwo,o.a.loader__item)}),Object(a.jsx)("div",{className:s()(o.a.loaderThree,o.a.loader__item)}),Object(a.jsx)("div",{className:s()(o.a.loaderFour,o.a.loader__item)}),Object(a.jsx)("div",{className:s()(o.a.loaderFive,o.a.loader__item)}),Object(a.jsx)("div",{className:s()(o.a.loaderSix,o.a.loader__item)}),Object(a.jsx)("div",{className:s()(o.a.loaderSeven,o.a.loader__item)}),Object(a.jsx)("div",{className:s()(o.a.loaderEight,o.a.loader__item)})]})}},95:function(e,t,n){"use strict";n.d(t,"f",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return O})),n.d(t,"b",(function(){return g}));var a=n(92),i=n(4),o=n(16),r="GET_USERS_FOLLOWED__SUCCESS",s="GET_USERS_UNFOLLOWED__SUCCESS",c="GET_ONCE_UNFOLLOWED__SUCCESS",l="UNFOLLOW_USER_SUCCESS_TYPE",u="FOLLOW_USER_SUCCESS_TYPE",d="SET_READY_TOGGLE",_="IS_FETCHING_USERS",b={countFollowed:5,countUnfollowed:24,pageFollowed:1,usersFollowed:null,usersUnfollowed:null,pageUnfollowed:1,totalCount:null,isReadyPage:!1,isReadyToggle:[],isFetching:!1};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return Object(i.a)(Object(i.a)({},e),{},{usersFollowed:t.usersFollowed,pageFollowed:t.pageFollowed,isReadyPage:!0,totalCount:t.totalCount});case s:var n;return Object(i.a)(Object(i.a)(Object(i.a)({},e),(n=e.usersUnfollowed).push.apply(n,Object(a.a)(t.usersUnfollowed))),{},{pageUnfollowed:t.pageUnfollowed,totalCount:t.totalCount});case c:return Object(i.a)(Object(i.a)({},e),{},{usersUnfollowed:[],pageUnfollowed:1});case l:return Object(i.a)(Object(i.a)(Object(i.a)({},e),e.users),{},{usersFollowed:e.usersFollowed.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case u:return Object(i.a)(Object(i.a)(Object(i.a)({},e),e.users),{},{usersUnfollowed:e.usersUnfollowed.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case d:return Object(i.a)(Object(i.a)({},e),{},{isReadyToggle:t.value?[].concat(Object(a.a)(e.isReadyToggle),[t.userId]):e.isReadyToggle.filter((function(e){return e!==t.userId}))});case _:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.bool});default:return e}};var j=function(e,t){return{type:d,value:e,userId:t}},f=function(e){return{type:_,bool:e}},m=function(e,t,n){return function(a){o.c.getUsers(e,t,n).then((function(e){var i=e.items,o=e.totalCount;a(function(e,t,n,a){return{type:r,usersFollowed:e,totalCount:t,pageFollowed:n,follower:a}}(i,o,t,n))}))}},p=function(e,t,n){return function(a){o.c.getUsers(e,t,n).then((function(e){var i=e.items,o=e.totalCount;t++,a(function(e,t,n,a){return{type:s,usersUnfollowed:e,totalCount:t,pageUnfollowed:n,follower:a}}(i,o,t,n))})).finally((function(){a(f(!1))}))}},h=function(){return function(e){e({type:c}),e(f(!0))}},O=function(e){return function(t){t(j(!0,e)),o.c.unfollow(e).then((function(n){0===n.resultCode&&(t(function(e){return{type:l,userId:e}}(e)),t(j(!1,e)))}))}},g=function(e){return function(t){t(j(!0,e)),o.c.follow(e).then((function(n){0===n.resultCode&&(t(function(e){return{type:u,userId:e}}(e)),t(j(!1,e)))}))}}}},[[265,1,2]]]);
//# sourceMappingURL=main.944ad8ca.chunk.js.map