(this["webpackJsonpshopify-tw2-01"]=this["webpackJsonpshopify-tw2-01"]||[]).push([[0],{27:function(t,e,c){},38:function(t,e,c){"use strict";c.r(e);var r=c(1),n=c.n(r),s=c(14),a=c.n(s),i=(c(27),c(21)),o=c(2),l=c(6),u=c(13),d=c(5),j=c.n(d),h=c(7),f=c(15),b=c(16),p=c(22),x=c(20),O=c(17),v=c.n(O),m=c(0),k=n.a.createContext(),C=v.a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"}),g=function(t){Object(p.a)(c,t);var e=Object(x.a)(c);function c(){var t;Object(f.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={products:[],product:{},checkout:{},isCartOpen:!1},t.createCheckout=Object(h.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.checkout.create();case 2:return c=e.sent,localStorage.setItem("yw_store_checkout",c.id),e.next=6,t.setState({checkout:c});case 6:case"end":return e.stop()}}),e)}))),t.fetchCheckout=function(){var e=Object(h.a)(j.a.mark((function e(c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.checkout.fetch(c).then((function(e){t.setState({checkout:e})})).catch((function(t){return console.log(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.addItemToCheckout=function(){var e=Object(h.a)(j.a.mark((function e(c,r){var n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[{variantId:c,quantity:parseInt(r,10)}],e.next=3,C.checkout.addLineItems(t.state.checkout.id,n);case 3:s=e.sent,t.setState({checkout:s}),console.log(s),t.openCart();case 7:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),t.fetchAllProducts=Object(h.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.product.fetchAll();case 2:c=e.sent,t.setState({products:c});case 4:case"end":return e.stop()}}),e)}))),t.fetchProductWithId=function(){var e=Object(h.a)(j.a.mark((function e(c){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.product.fetch(c);case 2:return r=e.sent,t.setState({product:r}),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.closeCart=function(){t.setState({isCartOpen:!1})},t.openCart=function(){t.setState({isCartOpen:!0})},t}return Object(b.a)(c,[{key:"componentDidMount",value:function(){localStorage.yw_store_checkout?this.fetchCheckout(localStorage.yw_store_checkout):this.createCheckout()}},{key:"render",value:function(){return Object(m.jsx)(k.Provider,{value:Object(u.a)(Object(u.a)({},this.state),{},{fetchAllProducts:this.fetchAllProducts,fetchProductWithId:this.fetchProductWithId,closeCart:this.closeCart,openCart:this.openCart,addItemToCheckout:this.addItemToCheckout}),children:this.props.children})}}]),c}(r.Component),w=(k.Consumer,g);var y=function(){return Object(m.jsx)("div",{children:"Loading..."})};var I=function(t){var e=t.setProductId,c=Object(r.useContext)(k),n=c.fetchAllProducts,s=c.products;return Object(r.useEffect)((function(){return n(),function(){}}),[n]),s?Object(m.jsx)("div",{children:s.map((function(t){var c,r,n=t.id,s=t.title,a=t.descriptionHtml,i=t.images,o=t.variants;return Object(m.jsxs)("div",{onClick:function(){return e(n)},className:"border border-gray-300 p-3 m-3",children:[Object(m.jsx)("h3",{children:s}),Object(m.jsx)("div",{children:a}),Object(m.jsx)("div",{children:(r=i,r.map((function(t){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"w-48 p-1",src:t.src,alt:"product item"})})})))}),Object(m.jsx)("div",{children:(c=o,c.map((function(t){var e=t.available,c=t.sku,r=t.title,n=t.price;return e&&Object(m.jsxs)("div",{className:"flex p-2 bg-gray-100 m-1",children:[Object(m.jsx)("p",{children:r}),Object(m.jsxs)("p",{children:[" Price: ",n]}),Object(m.jsxs)("p",{children:[" SKU: ",c]})]})})))})]})}))}):Object(m.jsx)(y,{})};var N=function(t){var e,c,n=t.productId,s=t.setProductId,a=Object(r.useContext)(k),i=a.fetchProductWithId,o=a.addItemToCheckout,l=a.product;return Object(r.useEffect)((function(){i(n)}),[i,n]),l.title?Object(m.jsxs)("div",{className:"w-1/2 m-auto flex flex-col justify-center",children:[Object(m.jsx)("div",{className:"p-2 m-2 w-20 cursor-pointer",children:Object(m.jsx)("div",{onClick:function(){return s("")},children:" Close "})}),l&&Object(m.jsxs)("div",{className:"flex flex-col py-4 my-2 border border-gray-200",children:[Object(m.jsx)("h1",{className:"text-2xl",children:l.title}),Object(m.jsx)("div",{children:(c=l.images,c.map((function(t){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"md:w-1/2 w-full p-1",src:t.src,alt:"product item"})})})))}),Object(m.jsx)("div",{children:(e=l.variants,e.map((function(t){var e=t.available,c=t.sku,r=t.title,n=t.price;return e&&Object(m.jsxs)("div",{className:"flex flex-col p-2 bg-gray-100 m-1",children:[Object(m.jsx)("div",{children:r}),Object(m.jsxs)("div",{children:[" Price: ",n]}),Object(m.jsxs)("div",{children:[" SKU: ",c]})]})})))}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"cursor-pointer p-2 m-2",onClick:function(){return o(l.variants[0].id,1)},children:"Add to Cart"})})]})]}):Object(m.jsx)(y,{})};var S=function(){var t=Object(r.useContext)(k),e=(t.isCartOpen,t.closeCart,t.checkout);console.log(e),console.log(e&&!0===e&&e.lineItems);var c=Object(r.useState)([]),n=Object(l.a)(c,2),s=n[0],a=n[1],i=Object(r.useState)(0),o=Object(l.a)(i,2),u=o[0];return o[1],Object(r.useEffect)((function(){e&&void 0!==e&&a(e.lineItems)}),[e]),console.log("Line items",void 0!==s&&s.length),void 0!==s&&s.length,Object(m.jsxs)("div",{className:"w-full flex flex-col p-2 my-3",children:[Object(m.jsx)("h2",{className:"text-xl",children:"Cart"}),void 0!==s&&s.length>0?s.map((function(t){var e=t.variant.price,c=t.quantity,r=t.title,n=e*c;return function(t){console.log(++t),++t}(n),Object(m.jsxs)("div",{className:"flex flex-col",children:[Object(m.jsx)("h3",{className:"text-xl py-1 mb-1",children:r}),Object(m.jsxs)("div",{className:"flex flex-row flex-wrap",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"md:w-1/2 w-full mt-1",src:t.variant.image.src,alt:t.variant.image.altText})}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 w-full",children:[Object(m.jsxs)("p",{children:["Description: ",t.variant.title]}),Object(m.jsxs)("p",{children:["Quantity: ",c]}),Object(m.jsxs)("p",{children:["Rate: ",e]}),Object(m.jsxs)("p",{children:["Amount: ",n.toFixed(2)]})]})]})]})})):Object(m.jsx)("div",{className:"text-xl p-2",children:"Cart is empty"}),Object(m.jsxs)("div",{children:["Total Amount: ",u]})]})};var P=function(){var t=Object(r.useState)(""),e=Object(l.a)(t,2),c=e[0],n=e[1],s=Object(r.useState)(""),a=Object(l.a)(s,2);return a[0],a[1],console.log(c),Object(m.jsx)("div",{children:Object(m.jsxs)(w,{children:[Object(m.jsx)(I,{setProductId:n}),Object(m.jsx)(N,{productId:c,setProductId:n}),Object(m.jsx)(S,{})]})})};var A=function(){return Object(m.jsxs)("div",{children:["shopify shop",Object(m.jsx)(i.a,{children:Object(m.jsx)(o.b,{children:Object(m.jsx)(P,{})})})]})};a.a.render(Object(m.jsx)(A,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.798fdc37.chunk.js.map