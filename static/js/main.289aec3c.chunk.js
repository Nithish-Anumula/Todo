(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(7),r=n.n(o),i=n(6),l=n(8),u=(n(5),n(0));function d(e){var t=e.todo,n=e.toggleTodo;return Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",checked:t.complete,onChange:function(){n(t.id)}}),t.name]})})}function s(e){var t=e.todos,n=e.toggleTodo;return t.map((function(e){return Object(u.jsx)(d,{toggleTodo:n,todo:e},e.id)}))}var a=n(16),j="todoApp.todos";var f=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],r=Object(c.useRef)();return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(j));e&&o(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem(j,JSON.stringify(n))}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s,{todos:n,toggleTodo:function(e){var t=Object(i.a)(n),c=t.find((function(t){return t.id===e}));c.complete=!c.complete,o(t)}}),Object(u.jsx)("input",{ref:r,type:"text",placeholder:"Enter Text here"}),Object(u.jsx)("button",{onClick:function(e){var t=r.current.value;""!==t&&(o((function(e){return[].concat(Object(i.a)(e),[{id:Object(a.a)(),name:t,complete:!1}])})),r.current.value=null)},id:"styleTodo",children:"Add Todo"}),Object(u.jsx)("button",{onClick:function(){var e=n.filter((function(e){return!e.complete}));o(e)},id:"styleDelete",children:"Delete Checked"}),Object(u.jsx)("div",{className:"title",children:Object(u.jsxs)("h3",{children:[n.filter((function(e){return!e.complete})).length," Todos Left "]})})]})};r.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))},5:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.289aec3c.chunk.js.map