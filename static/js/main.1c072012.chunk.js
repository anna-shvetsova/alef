(this.webpackJsonpalef=this.webpackJsonpalef||[]).push([[0],{74:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(10),r=n.n(a),i=n(13),j=n(109),l=n(110),o=n(54),b=n(35),d=n(11),u=function(e,t){var n=t.id,c=t.name,a=t.age;return Object(d.a)(Object(d.a)({},e),{},{form:Object(d.a)(Object(d.a)({},e.form),{},{children:[].concat(Object(b.a)(e.form.children),[{id:n,name:c,age:a}])})})},s=function(e,t){var n=t.id,c=t.field,a=t.value;if(!n)return e;var r=e.form.children.findIndex((function(e){return e.id===n})),i=e.form.children[r],j=Object(d.a)({},i);return j[c]=a,Object(d.a)(Object(d.a)({},e),{},{form:Object(d.a)(Object(d.a)({},e.form),{},{children:[].concat(Object(b.a)(e.form.children.slice(0,r)),[j],Object(b.a)(e.form.children.slice(r+1)))})})},O=function(e,t){if(!t)return e;var n=e.form.children.findIndex((function(e){return e.id===t}));return Object(d.a)(Object(d.a)({},e),{},{form:Object(d.a)(Object(d.a)({},e.form),{},{children:[].concat(Object(b.a)(e.form.children.slice(0,n)),Object(b.a)(e.form.children.slice(n+1)))})})},f=function(e,t){var n=t.field,c=t.value,a=Object(d.a)({},e.form.parent);return a[n]=c,Object(d.a)(Object(d.a)({},e),{},{form:Object(d.a)(Object(d.a)({},e.form),{},{parent:a})})},m=function(e){var t,n=e.form,c=e.preview,a=function(e){var t=e.name,n=e.age;return"".concat(t,", ").concat(function(e){var t=e.trim();switch(parseInt(e.slice(-1))){case 1:return"".concat(t," \u0433\u043e\u0434");case 2:case 3:case 4:return"".concat(t," \u0433\u043e\u0434\u0430");default:return"".concat(t," \u043b\u0435\u0442")}}(n))};return Object(d.a)(Object(d.a)({},e),{},{preview:Object(d.a)(Object(d.a)({},c),{},{parent:a(n.parent),children:(t=n.children,t.map((function(e){return{id:e.id,child:a(e)}})))})})},h=function(e,t){if(!e)return{curTabIndex:0,form:{parent:{name:"",age:""},children:[]},preview:{parent:"",children:[]}};switch(t.type){case"ADD_CHILD":return u(e,t.payload);case"UPDATE_CHILD":return s(e,t.payload);case"REMOVE_CHILD":return O(e,t.payload);case"UPDATE_PARENT":return f(e,t.payload);case"SAVE_FORM":return m(e);case"CHANGE_TAB_INDEX":return Object(d.a)(Object(d.a)({},e),{},{curTabIndex:t.payload});default:return e}},p=Object(o.a)(h),x=n(107),v=n(114),g=n(108),y=function(e){return{type:"CHANGE_TAB_INDEX",payload:e}},C=n(27),T=n(113),E=n(105),I={name:{label:"\u0418\u043c\u044f",errorText:"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u043e",validate:function(e){return e.trim().length>0}},age:{label:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",errorText:"\u0426\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 0",validate:function(e){return e=e.trim(),parseInt(e).toString().length===e.length&&parseInt(e)>=0}}},D=n(104),A=n(106),_=n(111),w=n(4),k=function(e){var t=e.id,n=e.fieldType,a=e.value,r=Object(i.b)(),j=Object(c.useState)(!1),l=Object(C.a)(j,2),o=l[0],b=l[1],d=Object(c.useState)(""),u=Object(C.a)(d,2),s=u[0],O=u[1],f=Object(c.useCallback)((function(e){var c=e.target.value,a=I[n].validate(c);b(!a),O(a?"":I[n].errorText),r(""===t?{type:"UPDATE_PARENT",payload:{field:n,value:c.trim()}}:{type:"UPDATE_CHILD",payload:{id:t,field:n,value:c.trim()}})}),[r,t,n]);return t||(t=""),Object(w.jsx)(_.a,{id:"".concat(n).concat(t),label:I[n].label,variant:"outlined",size:"small",onChange:f,value:a,error:o,helperText:s,margin:"normal"})},H=Object(c.memo)(k),S=function(e){var t=e.id,n=e.name,a=e.age,r=Object(i.b)(),j=Object(c.useCallback)((function(){r(function(e){return{type:"REMOVE_CHILD",payload:e}}(t))}),[r,t]);return Object(w.jsxs)(D.a,{container:!0,direction:"row",justifyContent:"space-between",children:[Object(w.jsx)(H,{id:t,fieldType:"name",value:n}),Object(w.jsx)(H,{id:t,fieldType:"age",value:a}),Object(w.jsx)(E.a,{onClick:j,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},F=Object(c.memo)(S),L=function(){var e=Object(c.useState)(!0),t=Object(C.a)(e,2),n=t[0],a=t[1],r=Object(i.c)((function(e){return e.form.children})),j=Object(i.b)();Object(c.useEffect)((function(){a(r.length<5)}),[r.length]);var l=Object(c.useCallback)((function(){j(function(e){var t=e.name,n=e.age;return{type:"ADD_CHILD",payload:{id:Date.now().toString(),name:t,age:n}}}({name:"",age:""}))}),[j]);return Object(w.jsxs)(T.a,{pt:3,pb:.5,children:[Object(w.jsxs)(D.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(w.jsx)(A.a,{component:"h2",children:Object(w.jsx)(T.a,{sx:{fontWeight:"bold"},children:"\u0414\u0435\u0442\u0438 (\u043c\u0430\u043a\u0441. 5)"})}),n&&Object(w.jsx)(E.a,{onClick:l,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0431\u0435\u043d\u043a\u0430"})]}),r.map((function(e){var t=e.id,n=e.name,c=e.age;return Object(w.jsx)(F,{id:t,name:n,age:c},t)}))]})},N=Object(c.memo)(L),P=function(){var e=Object(i.c)((function(e){return e.form.parent}));return Object(w.jsxs)(T.a,{pt:3,pb:.5,children:[Object(w.jsx)(A.a,{component:"h2",children:Object(w.jsx)(T.a,{sx:{fontWeight:"bold"},children:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"})}),Object(w.jsxs)(D.a,{container:!0,direction:"column",children:[Object(w.jsx)(H,{fieldType:"name",value:e.name}),Object(w.jsx)(H,{fieldType:"age",value:e.age})]})]})},R=Object(c.memo)(P),W=function(){var e=Object(i.c)((function(e){return e.form})),t=Object(c.useState)(!0),n=Object(C.a)(t,2),a=n[0],r=n[1],j=Object(i.b)();Object(c.useEffect)((function(){r(!function(e){var t=e.parent,n=e.children,c=t.name,a=t.age;return I.name.validate(c)&&I.age.validate(a)&&n.every((function(e){var t=e.name,n=e.age;return I.name.validate(t)&&I.age.validate(n)}))}(e))}),[e]);var l=Object(c.useCallback)((function(){j({type:"SAVE_FORM"}),j(y(1))}),[j]);return Object(w.jsxs)(c.Fragment,{children:[Object(w.jsx)(R,{}),Object(w.jsx)(N,{}),Object(w.jsx)(T.a,{pt:3,pb:.5,children:Object(w.jsx)(E.a,{disabled:a,color:"primary",onClick:l,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})},M=Object(c.memo)(W),U=function(){var e=Object(i.c)((function(e){return e.preview})),t=e.parent,n=e.children;return Object(w.jsxs)(c.Fragment,{children:[Object(w.jsxs)(T.a,{pt:3,pb:.5,children:[Object(w.jsx)(A.a,{component:"h2",children:Object(w.jsx)(T.a,{sx:{fontWeight:"bold"},children:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"})}),Object(w.jsx)(A.a,{component:"p",children:t})]}),Object(w.jsxs)(T.a,{pt:3,pb:.5,children:[Object(w.jsx)(A.a,{component:"h2",children:Object(w.jsx)(T.a,{sx:{fontWeight:"bold"},children:"\u0414\u0435\u0442\u0438"})}),n.map((function(e){var t=e.id,n=e.child;return Object(w.jsx)(A.a,{component:"p",children:n},t)}))]})]})},V=Object(c.memo)(U),B=function(){var e=Object(i.c)((function(e){return e.curTabIndex})),t=Object(i.b)(),n=Object(c.useCallback)((function(e,n){t(y(n))}),[t]);return Object(w.jsxs)(c.Fragment,{children:[Object(w.jsx)(x.a,{position:"static",children:Object(w.jsxs)(v.a,{value:e,onChange:n,centered:!0,children:[Object(w.jsx)(g.a,{label:"\u0424\u043e\u0440\u043c\u0430"}),Object(w.jsx)(g.a,{label:"\u041f\u0440\u0435\u0432\u044c\u044e"})]})}),Object(w.jsx)(G,{value:e,index:0,children:Object(w.jsx)(M,{})}),Object(w.jsx)(G,{value:e,index:1,children:Object(w.jsx)(V,{})})]})},G=function(e){var t=e.children,n=e.value,c=e.index;return Object(w.jsx)("div",{hidden:n!==c,children:t})},J=Object(c.memo)(B);r.a.render(Object(w.jsxs)(c.Fragment,{children:[Object(w.jsx)(j.a,{}),Object(w.jsx)(l.a,{maxWidth:"sm",children:Object(w.jsx)(i.a,{store:p,children:Object(w.jsx)(J,{})})})]}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.1c072012.chunk.js.map