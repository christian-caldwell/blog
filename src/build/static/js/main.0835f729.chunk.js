(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);n(19);var c=n(1),s=n.n(c),i=n(17),a=n.n(i),r=(n(24),n(10)),u=n(2),l=(n(25),n(0)),o=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Hello, welcome to my blog!"}),Object(l.jsx)("p",{children:"Welcome to my blog! Proin congue ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod."}),Object(l.jsx)("p",{children:"Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"}),Object(l.jsx)("p",{children:"Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"})]})},j=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"About me"}),Object(l.jsx)("p",{children:"Welcome to my blog! Proin congue ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod."}),Object(l.jsx)("p",{children:"Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"}),Object(l.jsx)("p",{children:"Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"})]})},d=n(4),m=n.n(d),b=n(8),p=n(9),h=function(e){var t=e.articles;return Object(l.jsx)(l.Fragment,{children:t.map((function(e,t){return Object(l.jsxs)(r.b,{className:"article-list-item",to:"/article/".concat(e.name),children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsxs)("p",{children:[e.content.substring(0,150),"..."]})]},t)}))})},x=function(e){var t=e.setArticles,n=Object(c.useState)(""),s=Object(p.a)(n,2),i=s[0],a=s[1],r=Object(c.useState)(""),u=Object(p.a)(r,2),o=u[0],j=u[1],d=function(){var e=Object(b.a)(m.a.mark((function e(){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(i),{method:"post",body:JSON.stringify({content:o}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,t(c),a(""),j("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"add-comment-form",children:[Object(l.jsx)("h3",{children:"Write an Post:"}),Object(l.jsxs)("label",{children:["Title:",Object(l.jsx)("input",{type:"text",value:i,onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("label",{children:["Content:",Object(l.jsx)("textarea",{rows:"4",cols:"50",value:o,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsx)("button",{onClick:function(){return d()},children:"Post Your Message"})]})},O=function(){var e=Object(c.useState)({articles:[]}),t=Object(p.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),s(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Posts:"}),Object(l.jsx)("h3",{children:"Please Only Use The Following Characters For Titles:"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Uppercase or Lowercase Letters"}),Object(l.jsx)("li",{children:"Numbers"})]}),Object(l.jsx)(h,{articles:n.articles}),Object(l.jsx)(x,{setArticles:s})]})},f=function(){return Object(l.jsx)("h1",{children:" 404: Page Not Found"})},v=function(e){var t=e.comments;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Comments:"}),t.map((function(e,t){return Object(l.jsxs)("div",{className:"comment",children:[Object(l.jsx)("h4",{children:e.username}),Object(l.jsx)("p",{children:e.text})]},t)}))]})},g=function(e){var t=e.articleName,n=e.upvotes,c=e.setArticleInfo,s=function(){var e=Object(b.a)(m.a.mark((function e(){var n,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,c(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"upvote-section",children:[Object(l.jsx)("button",{onClick:function(){return s()},children:"Add Upvote"}),Object(l.jsxs)("p",{children:["This post hase been upvoted ",n," times"]})]})},N=function(e){var t=e.articleName,n=e.setArticleInfo,s=Object(c.useState)(""),i=Object(p.a)(s,2),a=i[0],r=i[1],u=Object(c.useState)(""),o=Object(p.a)(u,2),j=o[0],d=o[1],h=function(){var e=Object(b.a)(m.a.mark((function e(){var c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:a,text:j}),headers:{"Content-Type":"application/json"}});case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,n(s),r(""),d("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"add-comment-form",children:[Object(l.jsx)("h3",{children:"Add a Comment"}),Object(l.jsxs)("label",{children:["Name:",Object(l.jsx)("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)}})]}),Object(l.jsxs)("label",{children:["Comment:",Object(l.jsx)("textarea",{rows:"4",cols:"50",value:j,onChange:function(e){return d(e.target.value)}})]}),Object(l.jsx)("button",{onClick:function(){return h()},children:"Add Comment"})]})},q=function(e){var t=e.match.params.name,n=Object(c.useState)({content:void 0,upvotes:0,comments:[]}),s=Object(p.a)(n,2),i=s[0],a=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(m.a.mark((function e(){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),null===i.content||void 0===i.content?Object(l.jsx)(f,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)(g,{articleName:t,upvotes:i.upvotes,setArticleInfo:a}),Object(l.jsx)("p",{children:i.content}),Object(l.jsx)(v,{comments:i.comments}),Object(l.jsx)(N,{articleName:t,setArticleInfo:a})]})},y=function(){return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/about",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/articles-list",children:"Articles"})})]})})};var A=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(y,{}),Object(l.jsx)("div",{id:"page-body",children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/",component:o,exact:!0}),Object(l.jsx)(u.a,{path:"/about",component:j}),Object(l.jsx)(u.a,{path:"/articles-list",component:O}),Object(l.jsx)(u.a,{path:"/article/:name",component:q}),Object(l.jsx)(u.a,{component:f})]})})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root")),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.0835f729.chunk.js.map