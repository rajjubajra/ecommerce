(this["webpackJsonpshopify-tw2-01"]=this["webpackJsonpshopify-tw2-01"]||[]).push([[0],{27:function(t,e,c){},38:function(t,e,c){"use strict";c.r(e);var r=c(0),n=c.n(r),s=c(15),a=c.n(s),i=(c(27),c(21)),o=c(2),u=c(9),d=c(14),h=c(5),l=c.n(h),j=c(6),f=c(16),p=c(17),b=c(22),O=c(20),v=c(8),x=c.n(v),m=c(1),k=n.a.createContext(),C=x.a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"}),y=function(t){Object(b.a)(c,t);var e=Object(O.a)(c);function c(){var t;Object(f.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={products:[],product:{},checkout:{},isCartOpen:!1},t.createCheckout=Object(j.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.checkout.create();case 2:return c=e.sent,localStorage.setItem("yw_store_checkout",c.id),e.next=6,t.setState({checkout:c});case 6:case"end":return e.stop()}}),e)}))),t.fetchCheckout=function(){var e=Object(j.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.checkout.fetch(c).then((function(e){t.setState({checkout:e})})).catch((function(t){return console.log(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.addItemToCheckout=function(){var e=Object(j.a)(l.a.mark((function e(c,r){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[{variantId:c,quantity:parseInt(r,10)}],e.next=3,C.checkout.addLineItems(t.state.checkout.id,n);case 3:s=e.sent,t.setState({checkout:s}),console.log(s),t.openCart();case 7:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),t.fetchAllProducts=Object(j.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.product.fetchAll();case 2:c=e.sent,t.setState({products:c});case 4:case"end":return e.stop()}}),e)}))),t.fetchProductWithId=function(){var e=Object(j.a)(l.a.mark((function e(c){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.product.fetch(c);case 2:return r=e.sent,t.setState({product:r}),console.log(JSON.stringify(r)),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.closeCart=function(){t.setState({isCartOpen:!1})},t.openCart=function(){t.setState({isCartOpen:!0})},t}return Object(p.a)(c,[{key:"componentDidMount",value:function(){localStorage.yw_store_checkout?this.fetchCheckout(localStorage.yw_store_checkout):this.createCheckout()}},{key:"render",value:function(){return Object(m.jsx)(k.Provider,{value:Object(d.a)(Object(d.a)({},this.state),{},{fetchAllProducts:this.fetchAllProducts,fetchProductWithId:this.fetchProductWithId,closeCart:this.closeCart,openCart:this.openCart,addItemToCheckout:this.addItemToCheckout}),children:this.props.children})}}]),c}(r.Component),w=(k.Consumer,y);var g=function(){return Object(m.jsx)("div",{children:"Loading..."})};var I=function(t){var e=t.setProductId,c=Object(r.useContext)(k),n=c.fetchAllProducts,s=c.products;return Object(r.useEffect)((function(){return n(),function(){}}),[n]),s?Object(m.jsx)("div",{children:s.map((function(t){var c,r,n=t.id,s=t.title,a=t.descriptionHtml,i=t.images,o=t.variants;return Object(m.jsxs)("div",{onClick:function(){return e(n)},className:"border border-gray-300 p-3 m-3",children:[Object(m.jsx)("h3",{children:s}),Object(m.jsx)("div",{children:a}),Object(m.jsx)("div",{children:(r=i,r.map((function(t){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"w-48 p-1",src:t.src,alt:"product item"})})})))}),Object(m.jsx)("div",{children:(c=o,c.map((function(t){var e=t.available,c=t.sku,r=t.title,n=t.price;return e&&Object(m.jsxs)("div",{className:"flex p-2 bg-gray-100 m-1",children:[Object(m.jsx)("p",{children:r}),Object(m.jsxs)("p",{children:[" Price: ",n]}),Object(m.jsxs)("p",{children:[" SKU: ",c]})]})})))})]})}))}):Object(m.jsx)(g,{})};var S=function(t){var e,c,n=t.productId,s=t.setProductId,a=Object(r.useState)(""),i=Object(u.a)(a,2),o=i[0],d=i[1];return Object(r.useEffect)((function(){x.a.buildClient({domain:"yw-t-shirt.myshopify.com",storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0"}).product.fetch(n).then((function(t){console.log("SINGLE PRODUCT",t),d(t)}))}),[n]),Object(m.jsx)("div",{className:"w-1/2 m-auto flex justify-center",children:o&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{onClick:function(){return s("")},children:"Close"}),Object(m.jsx)("h1",{children:o.title}),Object(m.jsx)("div",{children:(c=o.images,c.map((function(t){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"w-48 p-1",src:t.src,alt:"product item"})})})))}),Object(m.jsx)("div",{children:(e=o.variants,e.map((function(t){var e=t.available,c=t.sku,r=t.title,n=t.price;return e&&Object(m.jsxs)("div",{className:"flex p-2 bg-gray-100 m-1",children:[Object(m.jsx)("p",{children:r}),Object(m.jsxs)("p",{children:[" Price: ",n]}),Object(m.jsxs)("p",{children:[" SKU: ",c]})]})})))}),Object(m.jsx)("div",{children:"Add to Cart"})]})})};var P=function(){var t=Object(r.useState)(""),e=Object(u.a)(t,2),c=e[0],n=e[1];return Object(m.jsx)("div",{children:Object(m.jsxs)(w,{children:[Object(m.jsx)(I,{setProductId:n}),Object(m.jsx)(S,{productId:c})]})})};var A=function(){return Object(m.jsxs)("div",{children:["shopify shop",Object(m.jsx)(i.a,{children:Object(m.jsx)(o.b,{children:Object(m.jsx)(P,{})})})]})};a.a.render(Object(m.jsx)(A,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.7a6aefe3.chunk.js.map