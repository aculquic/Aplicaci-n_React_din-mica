(this.webpackJsonpmobilefirst=this.webpackJsonpmobilefirst||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(28),r=s.n(n),i=s(9),o=s(2),l=s(13),m=s(29),b=s.n(m).a.create({baseURL:" https://three-points.herokuapp.com/api",withCredentials:!0});b.interceptors.response.use((function(e){return e.data}),(function(e){401===(null===e||void 0===e?void 0:e.response.status)&&window.location.replace("/login")}));var d=s(0);var j=function(){var e=JSON.parse(localStorage.getItem("id")),t=Object(c.useState)([]),s=Object(l.a)(t,2),a=s[0],n=s[1];return Object(c.useEffect)((function(){(function(e){return b.get("/users/"+e)})(e).then((function(e){n(e)}))}),[]),Object(d.jsxs)("div",{className:"card container me-2 row mt-3",style:{textAlign:"center",marginTop:"10%"},children:[Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("img",{src:a.avatar,className:"card-img-top"}),Object(d.jsxs)("div",{className:"row col-12",children:[Object(d.jsxs)("p",{className:"card-text fw-bold",children:["@",a.username]}),Object(d.jsx)("p",{className:"card-text fw-bold",children:a.bio})]},a.id)]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)(i.b,{to:"/login",children:"Salir"})})]})};var h=function(){return Object(d.jsx)("nav",{className:"navbar-dark bg-primary",children:Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsxs)("a",{style:{paddingLeft:13,textDecoration:"none"},href:"/",children:[Object(d.jsx)("img",{src:"https://img.icons8.com/material-rounded/24/000000/lightning-bolt--v1.png",width:"18",height:"20"}),Object(d.jsx)("span",{className:"navbar-brand mb-0 h1",children:"three pics"})]}),Object(d.jsx)("a",{className:"navbar-brand",href:"/profile",children:Object(d.jsx)("img",{type:"submit",align:"right",src:"https://img.icons8.com/metro/26/000000/user-female-circle.png",width:"12",height:"14"})})]})})};s(26);var p=function(e){var t=e.posts;return Object(d.jsxs)("div",{className:"card",children:[t.map((function(e){return Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("img",{src:e.image,className:"card-img-top"}),Object(d.jsxs)("div",{className:"row col-12",children:[Object(d.jsx)("p",{className:"card-title col-9",children:e.createdAt}),Object(d.jsxs)("p",{className:"card-title col-2",children:[Object(d.jsx)("br",{}),Object(d.jsxs)("button",{className:"btn btn-danger btn-sm",type:"button",children:[Object(d.jsx)("img",{align:"left",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAABFElEQVQ4Ec3BvUpbAQAG0C9wBckmOKmbYlwcougmtIO0g8/g4HMUwVdwcLkOopvi5hMIPoFdxTY4tVsSGl08VehN6l9003PygZlRusSF0mzumFW6wKXSTB6ypmvgxoYNNwa61jJgWhdHmkbN28WtW+yaN6rpCF3TqShxmD7f3NtMn0OUqWihmT6FdetG0qeJViquUc8Q6rhORQuNDKGBVir2sZUhbGE/FStom8wLTGpjJQOOcarIMxROcZz/GXeFPbU8omYPV8bzkEUdbOcR2+hYyFNW9bCjln/U7KBnNc/zVQ8HitxROMAfX/Iyn3Vwoq7uBG2fMpxlv3HmDL8s5XXm/HTvh0bexpTvzk3k7YwZyzv5C0keGneYKeowAAAAAElFTkSuQmCC",width:"13",height:"15"}),Object(d.jsxs)("i",{className:"bi bi-heart-fill",children:[e.likes," K"]})]})," "]})]},e.id),Object(d.jsxs)("p",{className:"card-text fw-bold",children:["@",e.author.username]}),Object(d.jsx)("p",{className:"card-text",children:e.text}),Object(d.jsxs)("a",{className:"text-muted text-decoration-none",children:[Object(d.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/comments.png",width:"15",height:"18"}),Object(d.jsxs)("i",{className:"bi -bi-chat-right",children:["Comentarios(",e.comments.length,")"]})]})]})})),Object(d.jsx)("br",{})]})},x=s(32),u=s(33),O=s(35),g=s(34);var f=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){b.get("/posts").then((function(e){a(e)})).catch((function(e){var t;401===(null===(t=error)||void 0===t?void 0:t.response.status)&&Swal.fire(e)}))}),[]),Object(d.jsx)("div",{className:"Postlist container me-2 row mt-3",style:{textAlign:"justify",marginTop:"10%",fontSize:"2.5rem"},children:s.length?Object(d.jsx)(p,{posts:s}):"Loading....."})};a.a.Component;var v=function(e){return Object(d.jsx)("div",{className:"Login container col-12 col-sm-6 d-flex",children:Object(d.jsxs)("form",{onSubmit:function(t){var s,c;t.preventDefault(),(s=t.target.username.value,c=t.target.password.value,b.post("/login",{username:s,password:c})).then((function(t){void 0===t?Swal.fire("Upssss"):(console.log("response",t.id),localStorage.setItem("id",JSON.stringify(t.id)),console.log("login_1",JSON.parse(localStorage.getItem("id"))),e.history.replace("/"))}))},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{for:"exampleInputEmail1",class:"form-label",children:"Username "}),Object(d.jsx)("input",{type:"text",className:"form-control",name:"username","aria-describedby":"emailHelp"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{for:"exampleInputPassword1",class:"form-label",children:"Password"}),Object(d.jsx)("input",{type:"password",class:"form-control",name:"password"})]}),Object(d.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Login"})]})})};s(27);var N=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{}),Object(d.jsx)("main",{className:"container-fluix container me-2 row mt-3",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",component:f,exact:!0}),Object(d.jsx)(o.a,{path:"/login",component:v,exact:!0}),Object(d.jsx)(o.a,{path:"/profile",component:j,exact:!0})]})})]})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(N,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.408b9c44.chunk.js.map