(this["webpackJsonpshopify-tw2-01"]=this["webpackJsonpshopify-tw2-01"]||[]).push([[0],{27:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(15),a=c.n(s),i=(c(27),c(11)),o=c(2),l=c(6),u=c(14),d=c(5),j=c.n(d),h=c(7),b=c(16),f=c(17),p=c(22),x=c(21),O=c(18),v=c.n(O),m=c(0),k=n.a.createContext(),C=v.a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"}),g=function(e){Object(p.a)(c,e);var t=Object(x.a)(c);function c(){var e;Object(b.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={products:[],product:{},checkout:{},isCartOpen:!1},e.createCheckout=Object(h.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.checkout.create();case 2:return c=t.sent,localStorage.setItem("yw_store_checkout",c.id),t.next=6,e.setState({checkout:c});case 6:case"end":return t.stop()}}),t)}))),e.fetchCheckout=function(){var t=Object(h.a)(j.a.mark((function t(c){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:C.checkout.fetch(c).then((function(t){e.setState({checkout:t})})).catch((function(e){return console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addItemToCheckout=function(){var t=Object(h.a)(j.a.mark((function t(c,r){var n,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[{variantId:c,quantity:parseInt(r,10)}],t.next=3,C.checkout.addLineItems(e.state.checkout.id,n);case 3:s=t.sent,e.setState({checkout:s}),console.log(s),e.openCart();case 7:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}(),e.fetchAllProducts=Object(h.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.product.fetchAll();case 2:c=t.sent,e.setState({products:c});case 4:case"end":return t.stop()}}),t)}))),e.fetchProductWithId=function(){var t=Object(h.a)(j.a.mark((function t(c){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.product.fetch(c);case 2:return r=t.sent,e.setState({product:r}),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.closeCart=function(){e.setState({isCartOpen:!1})},e.openCart=function(){e.setState({isCartOpen:!0})},e}return Object(f.a)(c,[{key:"componentDidMount",value:function(){localStorage.yw_store_checkout?this.fetchCheckout(localStorage.yw_store_checkout):this.createCheckout()}},{key:"render",value:function(){return Object(m.jsx)(k.Provider,{value:Object(u.a)(Object(u.a)({},this.state),{},{fetchAllProducts:this.fetchAllProducts,fetchProductWithId:this.fetchProductWithId,closeCart:this.closeCart,openCart:this.openCart,addItemToCheckout:this.addItemToCheckout}),children:this.props.children})}}]),c}(r.Component),w=(k.Consumer,g);var y=function(){return Object(m.jsx)("div",{children:"Loading..."})};var I=function(e){var t=e.setProductId,c=Object(r.useContext)(k),n=c.fetchAllProducts,s=c.products;return Object(r.useEffect)((function(){return n(),function(){}}),[n]),s?Object(m.jsx)("div",{children:s.map((function(e){var c,r,n=e.id,s=e.title,a=e.descriptionHtml,i=e.images,o=e.variants;return Object(m.jsxs)("div",{onClick:function(){return t(n)},className:"border border-gray-300 p-3 m-3",children:[Object(m.jsx)("h3",{children:s}),Object(m.jsx)("div",{children:a}),Object(m.jsx)("div",{children:(r=i,r.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"w-48 p-1",src:e.src,alt:"product item"})})})))}),Object(m.jsx)("div",{children:(c=o,c.map((function(e){var t=e.available,c=e.sku,r=e.title,n=e.price;return t&&Object(m.jsxs)("div",{className:"flex p-2 bg-gray-100 m-1",children:[Object(m.jsx)("p",{children:r}),Object(m.jsxs)("p",{children:[" Price: ",n]}),Object(m.jsxs)("p",{children:[" SKU: ",c]})]})})))})]})}))}):Object(m.jsx)(y,{})};var N=function(e){var t,c,n=e.productId,s=e.setProductId,a=Object(r.useContext)(k),i=a.fetchProductWithId,o=a.addItemToCheckout,l=a.product;return Object(r.useEffect)((function(){i(n)}),[i,n]),l.title?Object(m.jsxs)("div",{className:"w-1/2 m-auto flex flex-col justify-center",children:[Object(m.jsx)("div",{className:"p-2 m-2 w-20 cursor-pointer",children:Object(m.jsx)("div",{onClick:function(){return s("")},children:" Close "})}),l&&Object(m.jsxs)("div",{className:"flex flex-col py-4 my-2 border border-gray-200",children:[Object(m.jsx)("h1",{className:"text-2xl",children:l.title}),Object(m.jsx)("div",{children:(c=l.images,c.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"md:w-1/2 w-full p-1",src:e.src,alt:"product item"})})})))}),Object(m.jsx)("div",{children:(t=l.variants,t.map((function(e){var t=e.available,c=e.sku,r=e.title,n=e.price;return t&&Object(m.jsxs)("div",{className:"flex flex-col p-2 bg-gray-100 m-1",children:[Object(m.jsx)("div",{children:r}),Object(m.jsxs)("div",{children:[" Price: ",n]}),Object(m.jsxs)("div",{children:[" SKU: ",c]})]})})))}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"cursor-pointer p-2 m-2",onClick:function(){return o(l.variants[0].id,1)},children:"Add to Cart"})})]})]}):Object(m.jsx)(y,{})};var S=function(){var e=Object(r.useContext)(k),t=(e.isCartOpen,e.closeCart,e.checkout);console.log(t),console.log(t&&!0===t&&t.lineItems);var c=Object(r.useState)([]),n=Object(l.a)(c,2),s=n[0],a=n[1],i=Object(r.useState)(""),o=Object(l.a)(i,2),u=o[0],d=o[1],j=Object(r.useState)(0),h=Object(l.a)(j,2),b=h[0],f=h[1],p=Object(r.useState)(""),x=Object(l.a)(p,2),O=x[0],v=x[1];return Object(r.useEffect)((function(){t&&void 0!==t&&a(t.lineItems),t&&void 0!==t&&d(t),t&&void 0!==t&&f(t.totalPriceV2)}),[t]),Object(r.useEffect)((function(){void 0!==b&&v(b.currencyCode)}),[b]),console.log("Line items",void 0!==s&&s.length),console.log("checkoutData",void 0!==t&&u),console.log("checkoutData",void 0!==t&&b),console.log("checkoutData",void 0!==t&&O),void 0!==s&&s.length,Object(m.jsxs)("div",{className:"w-full flex flex-col p-2 my-3",children:[Object(m.jsx)("h2",{className:"text-xl",children:"Cart"}),void 0!==s&&s.length>0?s.map((function(e){var t=e.variant.price,c=e.quantity,r=e.title,n=t*c;return Object(m.jsxs)("div",{className:"flex flex-col",children:[Object(m.jsx)("h3",{className:"text-xl py-1 mb-1",children:r}),Object(m.jsxs)("div",{className:"flex flex-row flex-wrap",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"w-56 mt-1 p-2",src:e.variant.image.src,alt:e.variant.image.altText})}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 w-full",children:[Object(m.jsxs)("p",{children:["Description: ",e.variant.title]}),Object(m.jsxs)("p",{children:["Quantity: ",c]}),Object(m.jsxs)("p",{children:["Rate: ",O," ",t]}),Object(m.jsxs)("p",{children:["Amount: ",O," ",n.toFixed(2)]})]})]})]})})):Object(m.jsx)("div",{className:"text-xl p-2",children:"Cart is empty"}),Object(m.jsxs)("div",{class:"font-bold mt-2",children:["Total Amount : ",O," ",void 0!==b&&b.amount]}),Object(m.jsx)("div",{children:void 0!==t&&Object(m.jsx)("div",{onClick:window.location.replace(t.webUrl),children:"Checkout"})})]})};var P=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(""),a=Object(l.a)(s,2);return a[0],a[1],console.log(c),Object(m.jsx)("div",{children:Object(m.jsxs)(w,{children:[Object(m.jsx)(I,{setProductId:n}),Object(m.jsx)(N,{productId:c,setProductId:n}),Object(m.jsx)(S,{})]})})};var A=function(){return Object(m.jsxs)("div",{children:["shopify shop",Object(m.jsx)(i.a,{children:Object(m.jsx)(o.b,{children:Object(m.jsx)(P,{})})})]})};a.a.render(Object(m.jsx)(A,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.973f510e.chunk.js.map