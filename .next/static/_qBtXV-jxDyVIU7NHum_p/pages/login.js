(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{O2ls:function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSG",(function(){return C}));var n=t("wx14"),s=t("o0o1"),i=t.n(s),o=t("HaE+"),l=t("1OyB"),r=t("vuIU"),c=t("JX7q"),u=t("Ji7U"),d=t("md7G"),g=t("foSv"),p=t("rePB"),m=t("q1tI"),v=t.n(m),h=t("OhSk"),f=t.n(h),w=t("YFqc"),_=t.n(w),b=t("nOHt"),y=t.n(b),k=t("8Kt/"),N=t.n(k),O=t("b0oO"),j=t("p46w"),S=t.n(j),L=v.a.createElement;function E(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(g.a)(e);if(a){var s=Object(g.a)(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return Object(d.a)(this,t)}}var x=function(e){Object(u.a)(t,e);var a=E(t);function t(e){var n;return Object(l.a)(this,t),n=a.call(this,e),Object(p.a)(Object(c.a)(n),"_handleEscape",(function(e){27==e.which&&n.props.toggle()})),Object(p.a)(Object(c.a)(n),"_handleClick",(function(e){e.preventDefault(),e.target.hasAttribute("data-close-modal")&&n.props.toggle()})),Object(p.a)(Object(c.a)(n),"_forgotPassword",(function(){n.props.toggle()})),Object(p.a)(Object(c.a)(n),"_processLogin",(function(){var e,a,t,s,i,o;return i=document.querySelector('input[name="email"]'),o=document.querySelector('input[name="pass"]'),i.checkValidity()?(i.classList.remove("invalid"),o.checkValidity()?(o.classList.remove("invalid"),e=document.querySelector(".js-login"),a=document.querySelector(".js-login-govevents"),s=Object(c.a)(n),"https://gwpadmin.codewrangler.io/api/gwp/v1/manual-user-login",t=JSON.stringify({email:n.state.email,pass:n.state.pass}),e.disabled=!0,a.disabled=!0,s.setState({working:!0}),void fetch("https://gwpadmin.codewrangler.io/api/gwp/v1/manual-user-login",{method:"post",body:t,headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){setTimeout((function(n){if(e.disabled=!1,a.disabled=!1,JSON.stringify(t).includes("error"))return s.setState({error:t.message,working:!1}),!1;S.a.set("user",JSON.stringify(t)),s.setState((function(){return{error:"",working:!1,email:"",pass:""}}),(function(){s.props.toggle(),window.location.reload()}))}),1e3)}))):(o.classList.add("invalid"),!1)):(i.classList.add("invalid"),!1)})),Object(p.a)(Object(c.a)(n),"_processGovEventsLogin",(function(){var e,a,t,s,i,o;return i=document.querySelector('input[name="email"]'),o=document.querySelector('input[name="pass"]'),i.checkValidity()?(i.classList.remove("invalid"),o.checkValidity()?(o.classList.remove("invalid"),e=document.querySelector(".js-login"),a=document.querySelector(".js-login-govevents"),s=Object(c.a)(n),"https://gwpadmin.codewrangler.io/api/gwp/v1/govevents-user-login",t=JSON.stringify({email:n.state.email,pass:n.state.pass}),e.disabled=!0,a.disabled=!0,s.setState({working:!0}),void fetch("https://gwpadmin.codewrangler.io/api/gwp/v1/govevents-user-login",{method:"post",body:t,headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),setTimeout((function(n){if(e.disabled=!1,a.disabled=!1,JSON.stringify(t).includes("error"))return s.setState({error:t.message,working:!1}),!1;S.a.set("user",JSON.stringify(t)),s.setState((function(){return{error:"",working:!1,email:"",pass:""}}),(function(){s.props.toggle(),window.location.reload()}))}),1e3)}))):(o.classList.add("invalid"),!1)):(i.classList.add("invalid"),!1)})),Object(p.a)(Object(c.a)(n),"_renderModalClass",(function(){return n.props.open?"".concat(f.a.wrap," ").concat(f.a.open):"".concat(f.a.wrap)})),n.state={email:"",pass:"",error:"",working:!1},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.user){e.next=3;break}return y.a.push("/"),e.abrupt("return",!1);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var a=e.target.getAttribute("name");this.setState(Object(p.a)({},a,e.target.value))}},{key:"componentDidUpdate",value:function(){var e=this.props.open,a=this.state.working,t=document.querySelector("html");e?(window.addEventListener("keydown",this._handleEscape),window.addEventListener("click",this._handleClick),t.classList.add("active-modal")):(window.removeEventListener("keydown",this._handleEscape),window.removeEventListener("click",this._handleClick),t.classList.remove("active-modal")),a?t.classList.add("working"):t.classList.remove("working")}},{key:"render",value:function(){var e=this.props.display_name,a=this.props.user,t=this.state;t.email,t.pass,t.error;return L(v.a.Fragment,null,L(N.a,null,L("title",{key:"page-title"},"Login"),L("meta",{charset:"utf-8"}),L("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),L("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),L("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),L("meta",{name:"msapplication-TileImage",content:"/favicon-270x270.png"}),L("meta",{name:"msapplication-TileColor",content:"#ffffff"}),L("link",{rel:"manifest",href:"/site.webmanifest"})),L(O.a,Object(n.a)({},a,{display_name:e})),L("div",{className:this._renderModalClass()},L("div",{className:"".concat(f.a.login)},L("div",{className:"row text-center"},L("div",{className:"small-12 columns"},L("h2",null,"Welcome"),L("img",{className:f.a.hr,src:"/images/sep.svg",alt:""}),L("p",null,"Sign in to access GovWhitePapers."))),L("div",{className:"".concat(f.a.form)},L("div",{className:"row"},L("div",{className:"small-12 columns"},L("form",null,L("label",null,"Email Address",L("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Type your email",required:!0})),L("label",null,"Password",L("input",{type:"password",name:"pass",onChange:this.handleChange,value:this.state.pass,placeholder:"Type your password",required:!0})),L("div",{className:f.a.error},L("span",null,this.state.error)),L(_.a,{href:"/password-reset"},L("a",{onClick:this._forgotPassword,className:f.a.forgot},"Forgot password?")),L("div",{className:"row ".concat(f.a.signin)},L("div",{className:"small-12 columns text-center"},L("input",{onClick:this._processLogin,type:"submit",className:"js-login button",value:"Log In"}))),L("div",{className:"row ".concat(f.a.signinGovEvents)},L("div",{className:"small-12 columns text-center"},L("button",{onClick:this._processGovEventsLogin,type:"submit",className:"js-login-govevents button"},L("img",{src:"/images/govevents-logo.png",alt:""})," ",L("span",null,"Log In with GovEvents")))))))),L("div",{className:"row ".concat(f.a.sep)},L("div",{className:"small-12 columns text-center"},L("img",{src:"/images/continue-with.png",alt:""}))),L("div",{className:"row ".concat(f.a.socialBlock)},L("div",{className:"small-12 columns text-center"},L("ul",null,L("li",null,L("a",{"data-close-modal":!0,className:f.a.google},L("img",{"data-close-modal":!0,className:f.a.social,src:"/images/login-google.png",alt:""}))),L("li",null,L("a",{"data-close-modal":!0,className:f.a.fb},L("img",{"data-close-modal":!0,className:f.a.social,src:"/images/login-fb.png",alt:""}))),L("li",null,L("a",{"data-close-modal":!0,className:f.a.linkedin},L("img",{"data-close-modal":!0,className:f.a.social,src:"/images/login-linkedin.png",alt:""})))))),L("div",{className:"row ".concat(f.a.signUp)},L("div",{className:"small-12 columns text-center"},L(_.a,{href:"/register"},L("h5",null,L("a",{"data-close-modal":!0},L("span",{"data-close-modal":!0},"Don't have an account?")," Sign Up ",L("img",{className:f.a.linkArrow,"data-close-modal":!0,src:"/images/right-arrow-blue.svg",alt:""})))))))))}}]),t}(v.a.Component),C=!0;a.default=x},OhSk:function(e,a,t){e.exports={wrap:"login_wrap__2mGH-",hr:"login_hr__1eh2f",login:"login_login__z2_4s",flex:"login_flex__3RuZu",button:"login_button__24y3N",form:"login_form__h2_sV",signin:"login_signin__22csc",signinGovEvents:"login_signinGovEvents__20Eug",forgot:"login_forgot__3Z7zG",sep:"login_sep__2QQ4W",socialBlock:"login_socialBlock__3EBU_",signUp:"login_signUp__2GrxE",error:"login_error__2bkXf"}},u6Hu:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t("O2ls")}])}},[["u6Hu",0,2,1,3,4]]]);