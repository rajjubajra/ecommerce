(this["webpackJsonpshopify-tw2-01"]=this["webpackJsonpshopify-tw2-01"]||[]).push([[0],{28:function(t,e,c){},3:function(t,e,c){"use strict";c.r(e),c.d(e,"actionType",(function(){return r}));var r={PRODUCT_START_FETCHING:"PRODUCT_START_FETCHING",PRODUCT_FETCHED:"PRODUCT_FETCHED",PRODUCT_FETCH_ERROR:"PRODUCT_FETCH_ERROR",A_PRODUCT_START_FETCHING:"A_PRODUCT_START_FETCHING",A_PRODUCT_FETCHED:"A_PRODUCT_FETCHED",A_PRODUCT_FETCH_ERROR:"A_PRODUCT_FETCH_ERROR",ADDING_TO_CART:"ADDING_TO_CART",ADDED_TO_CART:"ADDED_TO_CART",ADD_TO_CART_ERROR:"ADD_TO_CART_ERROR",CART_UPDATING:"CART_UPDATING",CART_UPDATED:"CART_UPDATED",CART_UPDATE_ERROR:"CART_UPDATE_ERROR",CHECKOUT_CREATING:"CHECKOUT_CREATING",CHECKOUT_CREATED:"CHECKOUT_CREATED",CHECKOUT_CREATE_ERROR:"CHECKOUT_CREATE_ERROR",CHECKOUT_FETCHING:"CHECKOUT_FETCHING",CHECKOUT_FETCHED:"CHECKOUT_FETCHED",CHECKOUT_FETCH_ERROR:"CHECKOUT_FETCH_ERROR"}},38:function(t,e,c){"use strict";c.r(e);var r=c(0),n=c.n(r),a=c(11),o=c.n(a),i=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(e){var c=e.getCLS,r=e.getFID,n=e.getFCP,a=e.getLCP,o=e.getTTFB;c(t),r(t),n(t),a(t),o(t)}))},d=(c(28),c(12)),u=c(8),_=c(2),s=c(1);var T=function(){return Object(s.jsx)("div",{children:"Loading..."})},h=c(4),C=c(3),O=c(20),l=c.n(O).a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"}),R=function(t){return function(e){e({type:C.actionType.A_PRODUCT_START_FETCHING}),l.product.fetch(t).then((function(t){e({type:C.actionType.A_PRODUCT_FETCHED,data:t})})).catch((function(t){e({type:C.actionType.A_PRODUCT_FETCH_ERROR,fetched:!1,error:t})}))}};var E=function(){Object(h.b)();var t=Object(h.c)((function(t){return t.reducerFetchAllProducts.product_data})),e=Object(h.c)((function(t){return t.reducerFetchAllProducts.product_fetched}));console.log("productts ",t);var c=function(t){return Object(s.jsx)("div",{children:t[0].price})};return e?Object(s.jsx)("div",{className:"grid lg:grid-cols-3 xl:grid-cols-4 md:m-0 m-2",children:t.map((function(t){var e,r=t.id,n=t.title,a=t.images,o=t.variants;return Object(s.jsx)(u.b,{to:"/item/".concat(r),children:Object(s.jsxs)("div",{className:"w-full p-3 md:m-2 cursor-pointer",children:[Object(s.jsx)("div",{children:(e=a,Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"w-full",src:e[0].src,alt:"product item"})}))}),Object(s.jsxs)("div",{className:"font-light mt-2",children:[Object(s.jsx)("h3",{children:n}),Object(s.jsx)("div",{children:c(o)})]})]})})}))}):Object(s.jsx)(T,{})};var j=function(){var t,e,c=Object(_.f)().id,n=Object(h.b)(),a=Object(h.c)((function(t){return t.reducerFetchProduct.a_product_data})),o=Object(h.c)((function(t){return t.reducerFetchProduct.a_product_fetched})),i=Object(r.useState)(""),O=Object(d.a)(i,2),E=O[0],j=O[1];return Object(r.useEffect)((function(){j(localStorage.getItem("checkout"))}),[]),Object(r.useEffect)((function(){n(R(c))}),[n,c]),console.log(a),o?Object(s.jsxs)("div",{className:"max-w-screen-xl",children:[Object(s.jsx)("div",{className:"p-2 m-2 w-20 cursor-pointer",children:Object(s.jsxs)("div",{children:[Object(s.jsx)(u.b,{to:"/",children:"Close"})," "]})}),a&&Object(s.jsxs)("div",{className:"grid md:grid-cols-12 gap-2 py-4 my-2",children:[Object(s.jsx)("div",{className:"col-span-8",children:Object(s.jsx)("div",{className:"grid md:grid-cols-2 grid-flow-row gap-2",children:(e=a.images,e.map((function(t){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"w-full p-2",src:t.src,alt:"product item"})})})))})}),Object(s.jsxs)("div",{className:"col-span-4",children:[Object(s.jsx)("h1",{className:"text-2xl my-2",children:a.title}),Object(s.jsx)("div",{children:(t=a.variants,t.map((function(t){var e=t.available,c=t.sku,r=t.title,n=t.price;return e&&Object(s.jsxs)("div",{className:"flex flex-col p-2 bg-gray-100 m-1",children:[Object(s.jsx)("div",{children:r}),Object(s.jsxs)("div",{children:[" Price: ",n]}),Object(s.jsxs)("div",{children:[" SKU: ",c]})]})})))}),Object(s.jsx)("div",{children:Object(s.jsx)("div",{onClick:function(){return n(function(t,e,c){var r=[{variantId:e,quantity:parseInt(c,10)}];return function(e){e({type:C.actionType.ADDING_TO_CART}),l.checkout.addLineItems(t,r).then((function(t){console.log(t.lineItems),e({type:C.actionType.ADDED_TO_CART,data:t.lineItems})})).catch((function(t){e({type:C.actionType.ADD_TO_CART_ERROR,fetched:!1,error:t})}))}}(E,a.variants[0].id,1))},className:"cursor-pointer p-2 m-2",children:"Add to Cart"})})]})]})]}):Object(s.jsx)(T,{})};var f=function(){var t=Object(h.c)((function(t){return t.reducerFetchCheckout.checkout_data}));return console.log("CART",t),console.log("cart items",t.lineItems),void 0===t.lineItems&&t.length,t.lineItems.map((function(t){var e=t.variant,c=e.image,r=c.src,n=c.altText,a=e.title,o=e.id,i=e.priceV2,d=i.currencyCode,u=i.amount,_=e.price,T=t.id,h=t.title,C=t.quantity,O=t.variableValues.id;return Object(s.jsx)("cartItems",{image:r,alt:n,checkoutId:O,itemId:T,title:h,description:a,qty:C,pid:o,currency:d,rate:_,amount:u})}))};var p=function(){var t=Object(h.b)();return Object(r.useEffect)((function(){t((function(t){t({type:C.actionType.CHECKOUT_CREATING}),l.checkout.create().then((function(e){console.log("CHECKOUT ACTION:",e.id),t({type:C.actionType.CHECKOUT_CREATED,checkoutId:e.id,data:e}),localStorage.checkout||localStorage.setItem("checkout",e.id)})).catch((function(e){t({type:C.actionType.CHECKOUT_CREATE_ERROR,fetched:!1,error:e})}))})),t((function(t){t({type:C.actionType.PRODUCT_START_FETCHING}),l.product.fetchAll().then((function(e){console.log(e),t({type:C.actionType.PRODUCT_FETCHED,data:e})})).catch((function(e){t({type:C.actionType.PRODUCT_FETCH_ERROR,fetched:!1,err:e})}))}))}),[t]),Object(s.jsx)("div",{children:Object(s.jsx)(E,{})})};var b=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(j,{})})};var A=function(){var t=Object(h.b)(),e=Object(r.useState)(""),c=Object(d.a)(e,2),n=c[0],a=c[1];console.log(n),Object(r.useEffect)((function(){a(localStorage.getItem("checkout"))}),[]);var o=Object(h.c)((function(t){return t.reducerCreateCheckout.data}));return Object(r.useEffect)((function(){n&&t(function(t){return function(e){e({type:C.actionType.CHECKOUT_FETCHING}),l.checkout.fetch(t).then((function(t){console.log(t),e({type:C.actionType.CHECKOUT_FETCHED,data:t})})).catch((function(t){e({type:C.actionType.CHECKOUT_FETCH_ERROR,error:t})}))}}(n))}),[t,n]),Object(s.jsxs)("div",{children:[Object(s.jsx)(f,{}),Object(s.jsxs)(u.a,{children:["Shopify shop",Object(s.jsx)("div",{children:Object(s.jsx)(u.b,{to:"/",children:"Products List"})}),Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"cursor-pointer py-2 px-4 my-5 border-gray-500",onClick:function(){return window.open(o.webUrl,"_blank")},children:"Checkout"})})}),Object(s.jsxs)(_.c,{children:[Object(s.jsx)(_.a,{exact:!0,path:"/",children:Object(s.jsx)(p,{})}),Object(s.jsx)(_.a,{path:"/item/:id",children:Object(s.jsx)(b,{})})]})]})]})},D=c(13),v=c(22),g=c(23),m=c(3).actionType,x={product_fetching:!1,product_fetched:!1,product_fetch_error:"",product_data:[],product_dataLength:0},H={a_product_fetching:!1,a_product_fetched:!1,a_product_fetch_error:"",a_product_data:[],a_product_dataLength:0},U={checkout_creating:!1,checkout_created:!1,checkout_error:"",checkout_id:"",data:""},y={adding_to_cart:!1,added_to_cart:!1,add_to_cart_error:"",cart_items:[]},F={cart_updating:!1,cart_updated:!1,cart_update_error:"",cart_items:[]},k={checkout_fetching:!1,checkout_fetched:!1,checkout_fetch_error:"",checkout_data:""},P=Object(D.b)({reducerFetchAllProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m.PRODUCT_START_FETCHING:return{product_fetching:!0,product_data:[]};case m.PRODUCT_FETCHED:return{product_data:e.data,product_fetched:!0};case m.PRODUCT_FETCH_ERROR:return{product_fetched:!1,product_fetching:!1,product_fetch_error:e.error};default:return t}},reducerFetchProduct:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m.A_PRODUCT_START_FETCHING:return{a_product_fetching:!0,a_product_data:[]};case m.A_PRODUCT_FETCHED:return{a_product_data:e.data,a_product_fetched:!0};case m.A_PRODUCT_FETCH_ERROR:return{a_product_fetched:!1,a_product_fetching:!1,a_product_fetch_error:e.error};default:return t}},reducerCreateCheckout:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m.CHECKOUT_CREATING:return{checkout_fetching:!0,checkout_id:""};case m.CHECKOUT_CREATED:return{checkout_id:e.checkoutId,data:e.data,checkout_created:!0};case m.CHECKOUT_CREATE_ERROR:return{checkout_created:!1,checkout_error:e.error};default:return t}},reducerAddToCart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m.ADDING_TO_CART:return{adding_to_cart:!0,cart_items:[]};case m.ADDED_TO_CART:return{cart_items:e.data,added_to_cart:!0};case m.ADD_TO_CART_ERROR:return{added_to_cart:!1,add_to_cart_error:e.error};default:return t}},reducerFetchCheckout:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m.CHECKOUT_FETCHING:return{checkout_fetching:!0,checkout_data:[]};case m.CHECKOUT_FETCHED:return{checkout_data:e.data,checkout_fetched:!0};case m.CHECKOUT_FETCH_ERROR:return{checkout_fetched:!1,checkout_fetch_error:e.error};default:return t}},reducerUpdateCart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m.CART_UPDATING:return{cart_updating:!0,cart_items:[]};case m.CART_UPDATED:return{cart_items:e.data,cart_updated:!0};case m.CART_UPDATE_ERROR:return{cart_updated:!1,cart_update_error:e.error};default:return t}}}),I=Object(D.a)(g.a,Object(v.createLogger)()),N=Object(D.c)(P,I);o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(h.a,{store:N,children:Object(s.jsx)(A,{})})}),document.getElementById("root")),i()}},[[38,1,2]]]);
//# sourceMappingURL=main.bde04b1c.chunk.js.map