(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n(4),r=n.n(s),i=n(14),a=n.n(i),o=(n(61),n(23)),l=n.n(o),j=n(42),d=n(18);n(63);var u=function(){return Object(c.jsx)("h3",{className:"currenttasks",children:"Your todos:"})};var b=function(e){var t=Object(s.useRef)(null);return Object(c.jsxs)("div",{className:"usecontainer",children:[Object(c.jsx)("input",{type:"text",placeholder:"user",ref:t}),Object(c.jsx)("button",{id:"add",onClick:function(){var n=t.current.value;console.log(n),e.setUsername(n)},children:" submit name"})]})},O=n(52);function h(e){for(var t="0123456789abcdefghijklmnopqrstuvwxyz",n="",c=0;c<e;++c)n+=t[Math.floor(Math.random()*t.length)];return n}var x=n(53),f=n.n(x),p=(n(64),n(25)),v=n.n(p),m=new O.a("todos");m.version(1).stores({todos:"id,title,date,creator,assignee,description,dueDate"});var g=function(){var e=new Date;e.setSeconds(null),e.setMinutes(null);var t=Object(s.useState)([]),n=Object(d.a)(t,2),r=n[0],i=n[1],a=Object(s.useState)("user"),o=Object(d.a)(a,2),O=o[0],x=o[1],p=Object(s.useState)(e),g=Object(d.a)(p,2),C=g[0],D=g[1],k=Object(s.useState)(!1),N=Object(d.a)(k,2),T=N[0],w=N[1],y=Object(s.useState)(!1),S=Object(d.a)(y,2),R=S[0],L=S[1],M=Object(s.useRef)(null),E=Object(s.useRef)(null),F=Object(s.useRef)(null),A=Object(s.useRef)(null);function B(){m.todos.toCollection().sortBy("finished").then((function(e){i(e)}))}function P(){return(P=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h(20),e.next=3,m.todos.put({id:t,title:M.current.value,date:Date.now(),finished:!1,creator:E.current.value,assignee:F.current.value,description:A.current.value,dueDate:C});case 3:B(),M.current.value="",A.current.value="",E.current.value="",F.current.value="";case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.todos.delete(t);case 2:B();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useRef)(null),Object(s.useRef)(null),Object(s.useRef)(null),Object(s.useEffect)((function(){B()}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("h1",{id:"hello",children:["Hello, ",O,"!"]}),Object(c.jsx)(b,{setUsername:function(e){x(e)}}),Object(c.jsxs)("div",{className:"grid",onClick:function(){w(!T),L(!R)},children:[Object(c.jsxs)("div",{className:"linecontainer",children:[Object(c.jsx)("div",{className:"line"}),Object(c.jsx)("div",{className:v()("line2",{shifted:T})})]}),Object(c.jsx)("h2",{className:"createnew",children:"Create New Task"})]}),Object(c.jsxs)("div",{className:v()("taskcreate",{expand:R}),children:[Object(c.jsx)("label",{children:"Todo Title: "}),Object(c.jsx)("input",{type:"text",placeholder:"Todo Title",ref:M}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Creator's Name: "}),Object(c.jsx)("input",{type:"text",placeholder:"Todo Creator",ref:E}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Task Description: "}),Object(c.jsx)("textarea",{type:"text",placeholder:"Todo Description",ref:A,children:"Place description here."}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Assign your task: "}),Object(c.jsxs)("select",{id:"optionList",ref:F,children:[Object(c.jsx)("option",{value:"Mom",children:"Mom"}),Object(c.jsx)("option",{value:"Dad",children:"Dad"}),Object(c.jsx)("option",{value:"Child",children:"Child"}),Object(c.jsx)("option",{value:O,children:O})]}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Due Date: "}),Object(c.jsx)(f.a,{selected:C,onChange:function(e){D(e)}}),Object(c.jsx)("div",{id:"demo"}),Object(c.jsx)("button",{onClick:function(){return P.apply(this,arguments)},children:"Create Todo"})]}),Object(c.jsx)(u,{}),r.map((function(e){return Object(c.jsxs)("div",{className:["todoContainer",e.finished?"finished":null].join(" "),children:[e.finished?Object(c.jsx)("div",{className:"strike todoTitle",children:e.title}):Object(c.jsx)("div",{className:"todoTitle",children:e.title}),Object(c.jsxs)("b",{children:[Object(c.jsxs)("span",{children:["Assigned to: ",e.assignee]}),Object(c.jsx)("br",{})]}),Object(c.jsxs)("span",{children:["Creator: ",e.creator]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["Description: ",e.description]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["Created Date: ",new Date(e.date).toLocaleString()]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["Due: ",e.dueDate.toLocaleString()]}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:["Finished: ",e.finished?"yes":"no"]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){return t=e.id,console.log("should finish",t),m.todos.update(t,{finished:!0}),void B();var t},children:"Done!"})," ",Object(c.jsx)("button",{onClick:function(){return function(e){return I.apply(this,arguments)}(e.id)},children:"DELETE"}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"lineborder"})]},e.id)}))]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),C()},61:function(e,t,n){},63:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.a885d918.chunk.js.map