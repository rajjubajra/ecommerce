(this["webpackJsonpshopify-tw2-01"]=this["webpackJsonpshopify-tw2-01"]||[]).push([[0],{27:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(14),a=c.n(s),i=(c(27),c(21)),o=c(2),u=c(8),l=c(13),d=c(5),j=c.n(d),h=c(6),f=c(15),b=c(16),p=c(22),x=c(20),O=c(17),v=c.n(O),m=c(0),k=n.a.createContext(),C=v.a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"}),g=function(e){Object(p.a)(c,e);var t=Object(x.a)(c);function c(){var e;Object(f.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={products:[],product:{},checkout:{},isCartOpen:!1},e.createCheckout=Object(h.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.checkout.create();case 2:return c=t.sent,localStorage.setItem("yw_store_checkout",c.id),t.next=6,e.setState({checkout:c});case 6:case"end":return t.stop()}}),t)}))),e.fetchCheckout=function(){var t=Object(h.a)(j.a.mark((function t(c){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:C.checkout.fetch(c).then((function(t){e.setState({checkout:t})})).catch((function(e){return console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addItemToCheckout=function(){var t=Object(h.a)(j.a.mark((function t(c,r){var n,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[{variantId:c,quantity:parseInt(r,10)}],t.next=3,C.checkout.addLineItems(e.state.checkout.id,n);case 3:s=t.sent,e.setState({checkout:s}),console.log(s),e.openCart();case 7:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}(),e.fetchAllProducts=Object(h.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.product.fetchAll();case 2:c=t.sent,e.setState({products:c});case 4:case"end":return t.stop()}}),t)}))),e.fetchProductWithId=function(){var t=Object(h.a)(j.a.mark((function t(c){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.product.fetch(c);case 2:return r=t.sent,e.setState({product:r}),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.closeCart=function(){e.setState({isCartOpen:!1})},e.openCart=function(){e.setState({isCartOpen:!0})},e}return Object(b.a)(c,[{key:"componentDidMount",value:function(){localStorage.yw_store_checkout?this.fetchCheckout(localStorage.yw_store_checkout):this.createCheckout()}},{key:"render",value:function(){return Object(m.jsx)(k.Provider,{value:Object(l.a)(Object(l.a)({},this.state),{},{fetchAllProducts:this.fetchAllProducts,fetchProductWithId:this.fetchProductWithId,closeCart:this.closeCart,openCart:this.openCart,addItemToCheckout:this.addItemToCheckout}),children:this.props.children})}}]),c}(r.Component),w=(k.Consumer,g);var y=function(){return Object(m.jsx)("div",{children:"Loading..."})};var I=function(e){var t=e.setProductId,c=Object(r.useContext)(k),n=c.fetchAllProducts,s=c.products;return Object(r.useEffect)((function(){return n(),function(){}}),[n]),s?Object(m.jsx)("div",{children:s.map((function(e){var c,r,n=e.id,s=e.title,a=e.descriptionHtml,i=e.images,o=e.variants;return Object(m.jsxs)("div",{onClick:function(){return t(n)},className:"border border-gray-300 p-3 m-3",children:[Object(m.jsx)("h3",{children:s}),Object(m.jsx)("div",{children:a}),Object(m.jsx)("div",{children:(r=i,r.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"w-48 p-1",src:e.src,alt:"product item"})})})))}),Object(m.jsx)("div",{children:(c=o,c.map((function(e){var t=e.available,c=e.sku,r=e.title,n=e.price;return t&&Object(m.jsxs)("div",{className:"flex p-2 bg-gray-100 m-1",children:[Object(m.jsx)("p",{children:r}),Object(m.jsxs)("p",{children:[" Price: ",n]}),Object(m.jsxs)("p",{children:[" SKU: ",c]})]})})))})]})}))}):Object(m.jsx)(y,{})};var N=function(e){var t,c,n=e.productId,s=e.setProductId,a=Object(r.useContext)(k),i=a.fetchProductWithId,o=a.addItemToCheckout,u=a.product;return Object(r.useEffect)((function(){i(n)}),[i,n]),u.title?Object(m.jsxs)("div",{className:"w-1/2 m-auto flex flex-col justify-center",children:[Object(m.jsx)("div",{className:"p-2 m-2 w-20 cursor-pointer",children:Object(m.jsx)("div",{onClick:function(){return s("")},children:" Close "})}),u&&Object(m.jsxs)("div",{className:"flex flex-col py-4 my-2 border border-gray-200",children:[Object(m.jsx)("h1",{className:"text-2xl",children:u.title}),Object(m.jsx)("div",{children:(c=u.images,c.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"md:w-1/2 w-full p-1",src:e.src,alt:"product item"})})})))}),Object(m.jsx)("div",{children:(t=u.variants,t.map((function(e){var t=e.available,c=e.sku,r=e.title,n=e.price;return t&&Object(m.jsxs)("div",{className:"flex flex-col p-2 bg-gray-100 m-1",children:[Object(m.jsx)("div",{children:r}),Object(m.jsxs)("div",{children:[" Price: ",n]}),Object(m.jsxs)("div",{children:[" SKU: ",c]})]})})))}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"cursor-pointer p-2 m-2",onClick:function(){return o(u.variants[0].id,1)},children:"Add to Cart"})})]})]}):Object(m.jsx)(y,{})};var P=function(){var e=Object(r.useContext)(k),t=(e.isCartOpen,e.closeCart,e.checkout);console.log(t),console.log(t&&!0===t&&t.lineItems);var c=Object(r.useState)([]),n=Object(u.a)(c,2),s=n[0],a=n[1];return Object(r.useEffect)((function(){t&&void 0!==t&&a(t.lineItems)}),[t]),console.log("Line items",void 0!==s&&s.length),void 0!==s&&s.length,Object(m.jsxs)("div",{className:"w-full flex flex-col p-2 my-3",children:[Object(m.jsx)("h2",{className:"text-xl",children:"Cart"}),void 0!==s&&s.length>0?s.map((function(e){var t=e.variant.price,c=e.quantity,r=e.title;return Object(m.jsxs)("div",{className:"flex flex-col",children:[Object(m.jsx)("h3",{children:r}),Object(m.jsxs)("div",{className:"flex flex-row",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"w-40",src:e.variant.image.src,alt:e.variant.image.altText})}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 w-full",children:[Object(m.jsxs)("p",{children:["Description: ",e.variant.title]}),Object(m.jsxs)("p",{children:["Quantity: ",c]}),Object(m.jsxs)("p",{children:["Rate: ",t]}),Object(m.jsxs)("p",{children:["Amount: ",(t*c).toFixed(2)]})]})]})]})})):Object(m.jsx)("div",{className:"text-xl p-2",children:"Cart is empty"})]})};var S=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(""),a=Object(u.a)(s,2);return a[0],a[1],console.log(c),Object(m.jsx)("div",{children:Object(m.jsxs)(w,{children:[Object(m.jsx)(I,{setProductId:n}),Object(m.jsx)(N,{productId:c,setProductId:n}),Object(m.jsx)(P,{})]})})};var A=function(){return Object(m.jsxs)("div",{children:["shopify shop",Object(m.jsx)(i.a,{children:Object(m.jsx)(o.b,{children:Object(m.jsx)(S,{})})})]})};a.a.render(Object(m.jsx)(A,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.0350466b.chunk.js.map