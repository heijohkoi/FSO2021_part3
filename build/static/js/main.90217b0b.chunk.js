(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(14),u=t.n(c),r=t(3),a=t(1),i=t(0),o=function(e){var n=e.filter,t=e.filterChange;return Object(i.jsx)("form",{children:Object(i.jsxs)("div",{children:["filter shown with:",Object(i.jsx)("input",{value:n,onChange:t})]})})},l=function(e){var n=e.addName,t=e.newName,c=e.nameHandler,u=e.newNumber,r=e.numberHandler;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:c})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:u,onChange:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},s=function(e){var n=e.id,t=e.name,c=e.number,u=e.deleteNumber;return Object(i.jsxs)("li",{children:[t," ",c," ",Object(i.jsx)("button",{onClick:function(){return u(n,t)},children:"delete"})]})},d=function(e){var n=e.persons,t=e.newFilter,c=e.deleteNumber,u=""===t?n:n.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())||e.number.includes(t)}));return Object(i.jsx)("ul",{children:u.map((function(e){return Object(i.jsx)(s,{id:e.id,name:e.name,number:e.number,deleteNumber:c},e.name)}))})},b=t(4),j=t.n(b),f="/api/persons",m=function(){return j.a.get(f).then((function(e){return e.data}))},h=function(e){return j.a.post(f,e).then((function(e){return e.data}))},O=function(e,n){return j.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return j.a.delete("".concat(f,"/").concat(e)).then((function(){return!0}))},x=function(e){var n=e.alert,t=e.attention;return null===n&&null===t?null:null!==n?Object(i.jsx)("div",{className:"alert",children:n}):null!==t?Object(i.jsx)("div",{className:"attention",children:t}):void 0},p=function(){var e=Object(a.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),s=Object(r.a)(u,2),b=s[0],j=s[1],f=Object(a.useState)(""),p=Object(r.a)(f,2),N=p[0],w=p[1],g=Object(a.useState)(""),C=Object(r.a)(g,2),S=C[0],y=C[1],T=Object(a.useState)(null),k=Object(r.a)(T,2),H=k[0],L=k[1],A=Object(a.useState)(null),D=Object(r.a)(A,2),E=D[0],F=D[1];Object(a.useEffect)((function(){m().then((function(e){c(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(x,{alert:H,attention:E}),Object(i.jsx)(o,{filter:b,filterChange:function(e){j(e.target.value)}}),Object(i.jsx)("h3",{children:"Add a new"}),Object(i.jsx)(l,{addName:function(e){if(e.preventDefault(),t.every((function(e){return e.name!==N})))h({name:N,number:S}).then((function(e){c(t.concat(e)),F("Added ".concat(N)),setTimeout((function(){F(null)}),5e3),w(""),y("")})).catch((function(e){L("Name can't be empty")})),setTimeout((function(){L(null)}),5e3);else{var n=t.find((function(e){return e.name===N})).id;O(n,{name:N,number:S}).then((function(e){c(t.map((function(t){return t.id!==n?t:e}))),F("Updated ".concat(N)),setTimeout((function(){F(null)}),5e3),w(""),y("")})).catch((function(e){L("Information of ".concat(N," has already been removed from server")),setTimeout((function(){L(null)}),5e3),c(t.filter((function(e){return e.name!==N}))),w(""),y("")}))}},newName:N,nameHandler:function(e){w(e.target.value)},newNumber:S,numberHandler:function(e){y(e.target.value)}}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(d,{persons:t,newFilter:b,deleteNumber:function(e,n){v(e).then((function(u){!0===u&&(c(t.filter((function(n){return n.id!==e}))),L("Deleted ".concat(n)),setTimeout((function(){L(null)}),5e3))}))}})]})};t(38);u.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.90217b0b.chunk.js.map