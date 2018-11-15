(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(296)},136:function(e,t,a){},296:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(121),s=a.n(c);a(136),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(8),l=a(9),i=a(12),u=a(10),m=a(13),p=a(297),d=a(11),h=a(5),b=a.n(h),v=a(16),f=a(51),E=a.n(f),g="https://auth-demo-app.herokuapp.com/",y=function(e,t){return function(){var a=Object(v.a)(b.a.mark(function a(n){var r,c,s,o;return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r="in"===t?"/auth/local":"/users",a.next=4,E.a.post("".concat(g,"api").concat(r),e);case 4:return c=a.sent,s=c.headers["x-auth-token"],n({type:"SET_AUTH",token:s}),localStorage.setItem("token",s),localStorage.setItem("profile",JSON.stringify(c.data)),n({type:"SET_USER",payload:c.data}),a.abrupt("return",Promise.resolve());case 13:return a.prev=13,a.t0=a.catch(0),o=a.t0.response,a.abrupt("return",Promise.reject(o.data));case 17:case"end":return a.stop()}},a,this,[[0,13]])}));return function(e){return a.apply(this,arguments)}}()},S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).singOutClickHandler=function(){a.props.signOut()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{style:{marginBottom:"20px"},className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(p.a,{to:"/",className:"navbar-brand"},"Auth test app"),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/dashboard",className:"nav-link"},"Dashboard"))),r.a.createElement("ul",{className:"nav navbar-nav ml-auto"},!this.props.isAuthenticated&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/signup",className:"nav-link"},"Sign Up")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/signin",className:"nav-link"},"Sign In"))),this.props.isAuthenticated&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item text-info",style:{alignSelf:"center"}},this.props.userEmail),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{onClick:this.singOutClickHandler,to:"/",className:"nav-link"},"Sign Out"))))))}}]),t}(n.Component),w=Object(d.b)(function(e){var t=e.auth,a=e.user;return{isAuthenticated:t.isAuthenticated,userEmail:a.email}},{signOut:function(){return function(e){localStorage.removeItem("token"),localStorage.removeItem("profile"),e({type:"SIGN_OUT"}),e({type:"UNSET_SET_USER"})}}})(S),O=a(298),k=a(299),j=a(300),N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"HOME PAGE"))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center pb-5"},"DASHBOARD PAGE"),this.props.isAuth&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card m-auto",style:{width:"18rem"}},r.a.createElement("img",{className:"card-img-top",src:this.props.picture,alt:"profile"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-center"},this.props.email)))))}}]),t}(n.Component),A=Object(d.b)(function(e){var t=e.auth,a=e.user;return{isAuth:t.isAuthenticated,email:a.email,picture:a.picture}})(x),T=a(17),U=a(20),R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).validationSchema=function(){return U.object().shape({email:U.string().email().required(),password:U.string().min(3).required()})},a.onSubmitHandler=function(){var e=Object(v.a)(b.a.mark(function e(t,n){var r,c,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setSubmitting,c=n.resetForm,s=n.setErrors,e.prev=1,e.next=4,a.props.signLocal(t,"in");case 4:alert("success"),a.props.history.push("/dashboard"),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),c(),s({server:e.t0}),r(!1);case 13:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.isAuthenticated?r.a.createElement("h2",{style:{textAlign:"center"}}," Already Singed in"):r.a.createElement(T.c,{initialValues:{email:"",password:""},onSubmit:this.onSubmitHandler,validationSchema:this.validationSchema},function(t){var a=t.values,n=t.touched,c=t.errors,s=t.dirty,o=t.isSubmitting,l=t.handleReset;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron my-form"},r.a.createElement("h3",{style:{textAlign:"center"}},"Sign In"),c.server&&r.a.createElement("div",{style:{textAlign:"center"},className:"alert-danger"},c.server),r.a.createElement(T.b,null,r.a.createElement("h1",null,console.log(c.server)),console.log(e.props),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(T.a,{name:"email",className:"form-control ".concat(n.email&&c.email&&"is-invalid"," ").concat(n.email&&!c.email&&"is-valid"),type:"text",placeholder:"enter ur email"}),c.email&&n.email&&r.a.createElement("div",{className:"text-danger"},c.email)),r.a.createElement("div",{className:"form-group",style:{marginBottom:"3rem"}},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(T.a,{className:"form-control ".concat(n.password&&c.password&&"is-invalid"," ").concat(n.password&&!c.password&&"is-valid"),name:"password",type:"password",placeholder:"enter ur password"}),c.password&&n.password&&r.a.createElement("div",{className:"text-danger"},c.password)),r.a.createElement("div",{className:"form-group d-flex justify-content-center "},r.a.createElement("button",{type:"button",className:"btn  btn-secondary mr-3  pr-5 pl-5 ",onClick:l,disabled:!s||o},"Reset"),r.a.createElement("button",{className:"btn btn-primary ml-3 pr-5 pl-5 ",type:"submit",disabled:o||!a.email&&!a.password||c.password||c.email},"submit")))))})}}]),t}(n.Component),I=Object(d.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}},{signLocal:y})(R),_=a(125),F=a.n(_),H=a(126),C=a.n(H),P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).googleResponse=function(){var e=Object(v.a)(b.a.mark(function e(t){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.accessToken,!t.error){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,a.props.googleSign(n);case 6:a.props.history.push("/dashboard"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[3,9]])}));return function(t){return e.apply(this,arguments)}}(),a.facebookResponse=function(){var e=Object(v.a)(b.a.mark(function e(t){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.accessToken){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,a.props.facebookSign(n);case 6:a.props.history.push("/dashboard"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[3,9]])}));return function(t){return e.apply(this,arguments)}}(),a.validationSchema=function(){return U.object().shape({email:U.string().email().required(),password:U.string().min(3).required()})},a.onSubmitHandler=function(){var e=Object(v.a)(b.a.mark(function e(t,n){var r,c,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setSubmitting,c=n.resetForm,s=n.setErrors,e.prev=1,e.next=4,a.props.signLocal(t,"up");case 4:alert("success"),a.props.history.push("/dashboard"),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),c(),s({server:e.t0}),r(!1);case 13:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.isAuthenticated?r.a.createElement("h2",{style:{textAlign:"center"}}," Already Singed in"):r.a.createElement(T.c,{initialValues:{email:"",password:""},onSubmit:this.onSubmitHandler,validationSchema:this.validationSchema},function(t){var a=t.values,n=t.touched,c=t.errors,s=t.dirty,o=t.isSubmitting,l=t.handleReset;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron my-form"},r.a.createElement("h3",{style:{textAlign:"center"}},"Sign Up"),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"m-3 "},r.a.createElement(F.a,{clientId:"539492742685-hb4d1j9u17f5curru38e06b1aa8v1h97.apps.googleusercontent.com",buttonText:"Google",onSuccess:e.googleResponse,onFailure:e.googleResponse,className:"btn btn-outline-danger"})),r.a.createElement("div",{className:"m-3 "},r.a.createElement(C.a,{appId:"710987649285731",textButton:"Facebook",fields:"email,picture",callback:e.facebookResponse,cssClass:"btn btn-outline-primary"}))),r.a.createElement("hr",null),c.server&&r.a.createElement("div",{style:{textAlign:"center"},className:"alert-danger"},c.server),r.a.createElement(T.b,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(T.a,{name:"email",className:"form-control ".concat(n.email&&c.email&&"is-invalid"," ").concat(n.email&&!c.email&&"is-valid"),type:"text",placeholder:"enter ur email"}),c.email&&n.email&&r.a.createElement("div",{className:"text-danger"},c.email)),r.a.createElement("div",{className:"form-group",style:{marginBottom:"3rem"}},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(T.a,{className:"form-control ".concat(n.password&&c.password&&"is-invalid"," ").concat(n.password&&!c.password&&"is-valid"),name:"password",type:"password",placeholder:"enter ur password"}),c.password&&n.password&&r.a.createElement("div",{className:"text-danger"},c.password)),r.a.createElement("div",{className:"form-group d-flex justify-content-center "},r.a.createElement("button",{type:"button",className:"btn  btn-secondary mr-3  pr-5 pl-5 ",onClick:l,disabled:!s||o},"Reset"),r.a.createElement("button",{className:"btn btn-primary ml-3 pr-5 pl-5 ",type:"submit",disabled:o||!a.email&&!a.password||c.password||c.email},"submit")))))})}}]),t}(n.Component),B=Object(d.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}},{signLocal:y,facebookSign:function(e){return function(){var t=Object(v.a)(b.a.mark(function t(a){var n,r,c;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("".concat(g,"api/auth/facebook"),{accessToken:e});case 3:return n=t.sent,r=n.headers["x-auth-token"],a({type:"SET_AUTH",token:r}),localStorage.setItem("token",r),localStorage.setItem("profile",JSON.stringify(n.data)),a({type:"SET_USER",payload:n.data}),t.abrupt("return",Promise.resolve());case 12:return t.prev=12,t.t0=t.catch(0),c=t.t0.response,console.log(c),t.abrupt("return",Promise.reject(c.data));case 17:case"end":return t.stop()}},t,this,[[0,12]])}));return function(e){return t.apply(this,arguments)}}()},googleSign:function(e){return function(){var t=Object(v.a)(b.a.mark(function t(a){var n,r,c;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("".concat(g,"api/auth/google"),{accessToken:e});case 3:return n=t.sent,r=n.headers["x-auth-token"],a({type:"SET_AUTH",token:r}),localStorage.setItem("token",r),localStorage.setItem("profile",JSON.stringify(n.data)),a({type:"SET_USER",payload:n.data}),t.abrupt("return",Promise.resolve());case 12:return t.prev=12,t.t0=t.catch(0),c=t.t0.response,console.log(c),t.abrupt("return",Promise.reject(c.data));case 17:case"end":return t.stop()}},t,this,[[0,12]])}));return function(e){return t.apply(this,arguments)}}()}})(P);function D(){return r.a.createElement("h1",{className:"text-center"},"404 PAGE NOT FOUND")}function G(){return r.a.createElement("h1",{className:"text-center"},"Access Denied")}var J=function(){return function(e){var t=localStorage.getItem("token");if(t){var a=localStorage.getItem("profile");try{a=JSON.parse(a)}catch(n){return}e({type:"SET_AUTH",token:t}),e({type:"SET_USER",payload:a})}}},q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentWillMount=function(){a.props.startup()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(k.a,null,r.a.createElement(j.a,{path:"/",exact:!0,component:N}),r.a.createElement(j.a,{path:"/signup",component:this.props.isAuthenticated?G:B}),r.a.createElement(j.a,{path:"/signin",component:this.props.isAuthenticated?G:I}),r.a.createElement(j.a,{path:"/dashboard",component:A}),r.a.createElement(j.a,{path:"*",component:D}))))}}]),t}(n.Component),L=Object(d.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}},{startup:J})(q),W=a(25),M=a(128),V=a(129),$=a(50),z={isAuthenticated:!1,token:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.token;switch(a){case"SIGN_OUT":return z;case"SET_AUTH":return Object($.a)({},e,{token:n,isAuthenticated:!0});default:return e}},Q={email:"",picture:""},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_USER":return Object($.a)({},e,n);case"UNSET_SET_USER":return Q;default:return e}};s.a.render(r.a.createElement(function(e){var t=e.children,a=Object(W.createStore)(Object(W.combineReducers)({auth:K,user:X}),Object(M.composeWithDevTools)(Object(W.applyMiddleware)(V.a)));return r.a.createElement(d.a,{store:a},t)},null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,2,1]]]);
//# sourceMappingURL=main.70cffa9f.chunk.js.map