(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),o=a(2),r=a(4),s=a(7),c=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function d(e){return l.find((function(t){return t.id===e}))||null}a(15);var m=a(0),u=function(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(o.a)(a,2),i=n[0],r=n[1],s=Object(c.useState)(0),u=Object(o.a)(s,2),j=u[0],b=u[1],h=Object(c.useState)(!1),f=Object(o.a)(h,2),O=f[0],p=f[1],_=Object(c.useState)(!1),x=Object(o.a)(_,2),N=x[0],v=x[1];return Object(m.jsxs)("form",{className:"todo-form",action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault();var a=i.trim();p(!a),v(0===j),a&&j>0&&(t({id:0,title:i,userId:j,completed:!1,user:d(j)}),r(""),b(0))},children:[Object(m.jsxs)("div",{className:"todo-form__field",children:[Object(m.jsx)("label",{className:"todo-form__label",htmlFor:"title",children:"Title: "}),Object(m.jsx)("input",{className:"todo-form__input",id:"title",type:"text",value:i,placeholder:"Enter a title",onChange:function(e){r(e.target.value),p(!1)},"data-cy":"titleInput"}),O&&Object(m.jsx)("span",{className:"todo-form__error",children:"Please enter a title*"})]}),Object(m.jsxs)("div",{className:"todo-form__field",children:[Object(m.jsx)("label",{className:"todo-form__label",htmlFor:"userSelect",children:"User: "}),Object(m.jsxs)("select",{className:"todo-form__select",id:"userSelect","data-cy":"userSelect",value:j,onChange:function(e){b(+e.target.value),v(!1)},children:[Object(m.jsx)("option",{className:"todo-form__option",value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e,t){return Object(m.jsx)("option",{className:"todo-form__option",value:t+1,children:e.name},e.id)}))]},j),N&&Object(m.jsx)("span",{className:"todo-form__error",children:"Please choose a user*"})]}),Object(m.jsx)("button",{className:"todo-form__btn",type:"submit","data-cy":"submitButton",children:"Add"})]})},j=a(9),b=a.n(j),h=(a(17),function(e){var t=e.user;return Object(m.jsx)("a",{className:"user-info",href:"mailto:".concat(t.email),children:t.name})}),f=(a(18),function(e){var t=e.todo;return Object(m.jsxs)("article",{className:b()("todo-info",{"todo-info--completed":t.completed}),"data-id":t.id,children:[Object(m.jsx)("h2",{className:"todo-info__title",children:t.title}),t.user&&Object(m.jsx)(h,{user:t.user})]})}),O=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"todo-list",children:t.map((function(e){return Object(m.jsx)(f,{todo:e},e.id)}))})};function p(e){return Math.max.apply(Math,Object(s.a)(e.map((function(e){return e.id}))))+1}var _=[{id:1,title:"Delectus aut autem",completed:!0,userId:1},{id:15,title:"Some other todo",completed:!1,userId:1},{id:2,title:"Quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(r.a)(Object(r.a)({},e),{},{user:d(e.userId)})})),x=function(){var e=Object(c.useState)(_),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"title",children:"Todo"}),Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h2",{className:"subtitle",children:"Add Todo:"}),Object(m.jsx)(u,{onSubmit:function(e){var t=Object(r.a)(Object(r.a)({},e),{},{id:p(a)});n((function(e){return[].concat(Object(s.a)(e),[t])}))}})]}),Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h2",{className:"subtitle",children:"Todo List:"}),Object(m.jsx)(O,{todos:a})]})]})};i.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4757f10f.chunk.js.map