(this["webpackJsonpcomjs-tw2-01"]=this["webpackJsonpcomjs-tw2-01"]||[]).push([[0],{57:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(16),n=c.n(a),r=c(4),i=c.n(r),o=c(17),j=c(3),l=c(0);var d=function(){var e="h-5";return Object(l.jsxs)("div",{className:"w-72",children:[Object(l.jsx)("h3",{className:"text-sm uppercase tracking-wider",children:"Colours"}),Object(l.jsxs)("div",{className:"grid grid-cols-10 gap-2",children:[Object(l.jsx)("div",{className:"".concat(e," bg-gray-500")}),Object(l.jsx)("div",{className:"".concat(e," bg-gray-100")}),Object(l.jsx)("div",{className:"".concat(e," bg-blue-500")}),Object(l.jsx)("div",{className:"".concat(e," bg-blue-300")}),Object(l.jsx)("div",{className:"".concat(e," bg-green-500")}),Object(l.jsx)("div",{className:"".concat(e," bg-green-300")}),Object(l.jsx)("div",{className:"".concat(e," bg-red-500")}),Object(l.jsx)("div",{className:"".concat(e," bg-red-300")})]})]})};var b=function(e){var t=e.src,c=e.alt,a=e.cssClass,n=e.width,r=e.height,i=Object(s.useState)(!1),o=Object(j.a)(i,2),d=o[0],b=o[1],h=Object(s.useState)("hidden"),u=Object(j.a)(h,2),g=(u[0],u[1]),O=Object(s.useState)(""),m=Object(j.a)(O,2),x=m[0],p=m[1];return Object(s.useEffect)((function(){d&&g(""),p(t)}),[t,d]),Object(l.jsx)("img",{width:n,height:r,className:a,onLoad:function(){return b(!0)},onError:function(){return b(!1)},src:x,alt:c})};var h=function(e){var t=e.image,c=e.price,s=e.name,a=e.width,n=e.height;return Object(l.jsxs)("div",{className:"p-5",children:[Object(l.jsx)("p",{children:"Product Item"}),Object(l.jsxs)("div",{className:"border border-gray-300 w-80 h-98 p-3",children:[Object(l.jsx)(b,{width:a,height:n,cssClass:"w-80 h-96 object-cover",src:t,alt:"T-Shirt"}),Object(l.jsx)("p",{className:"font-extralight tracking-wide",children:s}),Object(l.jsx)("p",{className:"font-sm",children:c}),Object(l.jsx)("p",{className:"text-xs font-extralight",children:"Availble colours"}),Object(l.jsx)(d,{})]})]})},u=c(18),g=new(c.n(u).a)("pk_test_341214f78db9cfb40e8494d5679997d9a7e243743b7a5",!0);var O=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];function n(){return(n=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.products.list().then((function(e){a(e.data)})).catch((function(e){console.log("There was an error fetching the products",e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){n.apply(this,arguments)}()}),[]),console.log(c),console.log(c.length),console.log(c),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Product page"}),c.length>0?c.map((function(e){var t=e.image,c=t.url,s=t.image_dimensions,a=s.width,n=s.height,r=e.name,i=e.price.formated_with_symbol;return Object(l.jsx)("div",{children:Object(l.jsx)(h,{image:c,price:i,name:r,width:a,height:n})})})):"loading...."]})};var m=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Comerce Js"}),Object(l.jsx)(O,{})]})};n.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.09656d49.chunk.js.map