"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[124],{8124:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(4942),s=n(1413),r=n(9439),c=n(2791),i={name:"",phone:""},l="contactForm_name__DB6rE",o="contactForm_number__JiMyA",u="contactForm_form__3ay0L",m="contactForm_button__JixDz",d="contactForm_input__wCtae",_=n(9434),h=n(8465),f=n(184),p=function(){var e=(0,c.useState)((0,s.Z)({},i)),t=(0,r.Z)(e,2),n=t[0],p=t[1],x=n.name,b=n.phone,j=(0,_.I0)(),v=(0,_.v9)((function(e){return e.contacts.items})),N=function(e){var t=e.target,n=t.name,r=t.value;p((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,a.Z)({},n,r))}))};return(0,f.jsxs)("form",{className:u,onSubmit:function(e){if(e.preventDefault(),v.find((function(e){return e.name===x})))alert("".concat(n.name," is already in contacts"));else{var t=(0,h.uK)({name:x,number:b});j(t),p((0,s.Z)({},i))}},children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{className:l,children:"Name"}),(0,f.jsx)("input",{className:d,type:"text",name:"name",value:x,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:N})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{className:o,children:"Number"}),(0,f.jsx)("input",{className:d,type:"tel",name:"phone",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:N})]}),(0,f.jsx)("button",{className:m,type:"submit",children:"Add contact"})]})},x={list:"contactList_list__R0BG5",listItems:"contactList_listItems__+-d-2",name:"contactList_name__40JWK",number:"contactList_number__hb7Yk",button:"contactList_button__twtQb"},b=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLowerCase();return t.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},j=function(e){return e.contacts.isLoading},v=function(){var e=(0,_.I0)(),t=(0,_.v9)(b),n=(0,_.v9)(j);return(0,c.useEffect)((function(){e((0,h.K2)())}),[e]),(0,f.jsx)("ul",{className:x.list,children:n?(0,f.jsx)("h2",{children:"...Loading"}):t.map((function(t){var n=t.id,a=t.name,s=t.number;return(0,f.jsxs)("li",{className:x.listItems,children:[(0,f.jsx)("p",{className:x.name,children:a}),(0,f.jsx)("p",{className:x.phone,children:s}),(0,f.jsx)("button",{className:x.button,onClick:function(){return e((0,h.GK)(n))},children:"Delete"})]},n)}))})},N="filter_label__nHxuJ",C="filter_title__k4Z+2",g="filter_input__sX944",y=function(e){return e.filter},L=n(5653),Z=function(){var e=(0,_.v9)(y),t=(0,_.I0)();return(0,f.jsxs)("label",{className:N,children:[(0,f.jsx)("span",{className:C,children:"Find contacts by name"}),(0,f.jsx)("input",{className:g,type:"text",value:e,onChange:function(e){var n=e.target;t((0,L.T)(n.value))}})]})},k=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{}),(0,f.jsx)("h2",{children:"Contact"}),(0,f.jsx)(Z,{}),(0,f.jsx)(v,{})]})}}}]);
//# sourceMappingURL=124.507315a2.chunk.js.map