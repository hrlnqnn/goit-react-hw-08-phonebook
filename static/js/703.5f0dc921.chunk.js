"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[703],{703:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var a=t(942),r=t(413),s=t(439),o={button:"ContactForm_button__eSwX9",form:"ContactForm_form__dhl+T",lable:"ContactForm_lable__W7bCm"},c=t(791),u=t(434),i=t(52),l=function(e){return e.contacts.contacts.items},m=function(e){return e.contacts.filter},d=function(e){return e.contacts.contacts.isLoading},b=function(e){return e.contacts.contacts.error},h=t(184),f=function(){var e=(0,c.useState)({name:"",number:""}),n=(0,s.Z)(e,2),t=n[0],m=n[1],d=(0,u.I0)(),b=(0,u.v9)(l),f=function(e){var n=e.currentTarget,t=n.name,s=n.value;m((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},t,s))}))};return(0,h.jsx)("div",{children:(0,h.jsxs)("form",{className:o.form,onSubmit:function(e){e.preventDefault(),b.find((function(e){return e.name.toLowerCase()===t.name.toLocaleLowerCase()}))?alert("".concat(t.name," is already in contacts.")):d((0,i.uK)({name:t.name,number:t.number})),m({name:"",number:""})},children:[(0,h.jsxs)("label",{className:o.lable,children:["Name",(0,h.jsx)("input",{className:o.inputContact,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t.name,onChange:f})]}),(0,h.jsxs)("label",{className:o.lable,children:["Number",(0,h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:t.number,onChange:f})]}),(0,h.jsx)("button",{type:"submit",className:o.button,children:"Add contact"})]})})},_="ContactList_list__csErn",p="ContactList_item__EZYHO",v="ContactList_remove__eupmf",x=function(){var e=(0,u.I0)(),n=(0,u.v9)(l),t=(0,u.v9)(m),a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,h.jsx)("ul",{className:_,children:a.map((function(n){var t=n.id,a=n.name,r=n.number;return(0,h.jsxs)("li",{className:p,children:[a+": "+r,(0,h.jsx)("button",{type:"button",className:v,onClick:function(){return e((0,i.GK)(t))},children:"Delete"})]},t)}))})},C="Filter_label__vEd1E",j=t(538),w=function(){var e=(0,u.I0)();return(0,h.jsxs)("label",{className:C,children:["Find contacts by name",(0,h.jsx)("input",{type:"text",onChange:function(n){var t=n.currentTarget.value.toLowerCase();e((0,j.sO)(t))}})]})},N=function(){var e=(0,u.I0)(),n=(0,u.v9)(d),t=(0,u.v9)(b);return(0,c.useEffect)((function(){e((0,i.yF)())}),[e]),(0,h.jsxs)("div",{style:{margin:"0 auto",width:"333px"},children:[(0,h.jsx)("h2",{children:"Phonebook"}),(0,h.jsx)(f,{}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(w,{}),!n&&!t&&(0,h.jsx)(x,{})]})}}}]);
//# sourceMappingURL=703.5f0dc921.chunk.js.map