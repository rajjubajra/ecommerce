(this["webpackJsonpshopify-tw2-01"]=this["webpackJsonpshopify-tw2-01"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(3),r=c.n(n),i=(c(10),c(5)),o=c(4),l=c.n(o),a=c(0);var d=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){var e=l.a.buildClient({domain:"yw-t-shirt.myshopify.com",storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0"});e.product.fetchAll().then((function(e){console.log(e),n(e)})),e.collection.fetchAllWithProducts().then((function(e){console.log(e),console.log(e[0].products)}))}),[]),console.log("Product State",c),Object(a.jsxs)("div",{className:"w-full md:max-w-screen-xl m-auto",children:[Object(a.jsx)("h1",{className:"text-lg",children:"Proucts"}),c.length>0&&c.map((function(e){var t,c,s=e.title,n=e.descriptionHtml,r=e.images,i=e.variants;return Object(a.jsxs)("div",{className:"border border-gray-300 p-3 m-3",children:[Object(a.jsx)("h3",{children:s}),Object(a.jsx)("div",{children:n}),Object(a.jsx)("div",{children:(c=r,c.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:"w-14 p-1",src:e.src,alt:"product item"})})})))}),Object(a.jsx)("div",{children:(t=i,t.map((function(e){var t=e.available,c=e.sku,s=e.title,n=e.price;return t&&Object(a.jsxs)("div",{className:"flex p-2 bg-gray-100 m-1",children:[Object(a.jsx)("p",{children:s}),Object(a.jsxs)("p",{children:["Price: ",n]}),Object(a.jsxs)("p",{children:["SKU: ",c]})]})})))})]})}))]})};var j=function(){return Object(a.jsxs)("div",{children:["shopify shop",Object(a.jsx)(d,{})]})};r.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.bf7cb0c0.chunk.js.map