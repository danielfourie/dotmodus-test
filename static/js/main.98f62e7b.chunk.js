(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{78:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var a=c(6),n=c(0),r=c(18),s=c.n(r),i=c(16),j=c.n(i),b=c(12),o=c(22),u=c(17),l=c(15),O=c(9),d=c(38),h=function(e){var t=e.title,c=e.author,n=e.urlToImage,r=e.content,s=e.url,i=e.publishedAt;return Object(a.jsxs)(l.a,{className:"article-list-item",children:[Object(a.jsxs)(O.a,{md:3,children:[Object(a.jsx)("img",{src:n})," "]}),Object(a.jsxs)(O.a,{md:9,children:[Object(a.jsx)("h4",{className:"title",children:t}),Object(a.jsxs)("div",{className:"author",children:[c," | ",i]}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:r}),Object(a.jsx)(d.a,{href:s,variant:"primary",target:"_blank",children:"Read"})]}),Object(a.jsx)(O.a,{md:12,children:Object(a.jsx)("hr",{})})]})},p=c(36),m={apiKey:"333c6550c2f94265978a490a46441c10"},x=c.n(p).a.create({baseURL:"http://newsapi.org/v2"}),f=c(23),v=c.n(f),g=c(37),y=c(25),w=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)("politics"),i=Object(u.a)(s,2),d=i[0],p=i[1],f=Object(n.useState)(new Date),w=Object(u.a)(f,2),S=w[0],k=w[1],R=Object(n.useState)(new Date),C=Object(u.a)(R,2),E=C[0],I=C[1];Object(n.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/top-headlines",{params:Object(b.a)(Object(b.a)({},m),{},{country:"za"})});case 2:t=e.sent,r(t.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var M=function(){var e=Object(o.a)(j.a.mark((function e(t,c,a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/everything",{params:Object(b.a)(Object(b.a)({},m),{},{q:t,from:c&&c.toISOString().split("T")[0],to:a&&a.toISOString().split("T")[0]})});case 2:n=e.sent,r(n.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(t,c,a){return e.apply(this,arguments)}}(),N=Object(n.useRef)(!0);Object(n.useEffect)((function(){N.current?N.current=!1:M(d,S,E)}),[S,E]);var T=c.map((function(e,t){return Object(n.createElement)(h,Object(b.a)(Object(b.a)({},e),{},{key:t}))}));return Object(a.jsxs)(g.a,{children:[Object(a.jsx)(l.a,{children:Object(a.jsx)(O.a,{children:Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),M(d)},children:Object(a.jsx)(y.a.Group,{children:Object(a.jsx)("div",{className:"search-bar-container",children:Object(a.jsx)(y.a.Control,{size:"lg",type:"text",placeholder:"Search",onChange:function(e){return p(e.target.value)}})})})})})}),Object(a.jsxs)(l.a,{children:[Object(a.jsx)(O.a,{md:3,children:Object(a.jsxs)("div",{style:{marginBottom:"1rem"},children:[Object(a.jsx)("span",{style:{marginRight:"0.5rem"},children:"From"}),Object(a.jsx)(v.a,{onChange:k,value:S,format:"y-MM-dd"})]})}),Object(a.jsx)(O.a,{md:3,children:Object(a.jsxs)("div",{style:{marginBottom:"1rem"},children:[Object(a.jsx)("span",{style:{marginRight:"0.5rem"},children:"To"}),Object(a.jsx)(v.a,{onChange:I,value:E,format:"y-MM-dd"})]})})]}),T]})},S=function(){return Object(a.jsx)(w,{})};c(78);s.a.render(Object(a.jsx)(S,{}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.98f62e7b.chunk.js.map