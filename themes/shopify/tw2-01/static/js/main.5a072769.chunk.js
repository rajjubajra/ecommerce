(this["webpackJsonpshopify-tw2-01"]=this["webpackJsonpshopify-tw2-01"]||[]).push([[0],{32:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),i=c(13),o=c.n(i),a=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),r(e),n(e),i(e),o(e)}))},d=(c(32),c(9)),s=c(10),u=c(3),l=c(2);var _=function(){return Object(l.jsx)("div",{children:"Loading..."})},O=c(4),h=c(5),j=c(22),T=c.n(j).a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"}),C=function(e){return function(t){t({type:h.actionType.A_PRODUCT_START_FETCHING}),T.product.fetch(e).then((function(e){t({type:h.actionType.A_PRODUCT_FETCHED,data:e})})).catch((function(e){t({type:h.actionType.A_PRODUCT_FETCH_ERROR,fetched:!1,error:e})}))}};var f=function(){Object(O.b)();var e=Object(O.c)((function(e){return e.reducerFetchAllProducts.product_data})),t=Object(O.c)((function(e){return e.reducerFetchAllProducts.product_fetched}));console.log("productts ",e);var c=function(e){return Object(l.jsx)("div",{children:e[0].price})};return t?Object(l.jsx)("div",{className:"grid lg:grid-cols-3 xl:grid-cols-4 md:m-0 m-2",children:e.map((function(e){var t,r=e.id,n=e.title,i=e.images,o=e.variants;return Object(l.jsx)(s.b,{to:"/item/".concat(r),children:Object(l.jsxs)("div",{className:"w-full p-3 md:m-2 cursor-pointer",children:[Object(l.jsx)("div",{children:(t=i,Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"w-full",src:t[0].src,alt:"product item"})}))}),Object(l.jsxs)("div",{className:"font-light mt-2",children:[Object(l.jsx)("h3",{children:n}),Object(l.jsx)("div",{children:c(o)})]})]})})}))}):Object(l.jsx)(_,{})};var b=function(){var e,t,c=Object(u.f)().id,n=Object(O.b)(),i=Object(O.c)((function(e){return e.reducerFetchProduct.a_product_data})),o=Object(O.c)((function(e){return e.reducerFetchProduct.a_product_fetched})),a=Object(r.useState)(""),j=Object(d.a)(a,2),f=j[0],b=j[1];return Object(r.useEffect)((function(){b(localStorage.getItem("checkout"))}),[]),Object(r.useEffect)((function(){n(C(c))}),[n,c]),console.log(i),o?Object(l.jsxs)("div",{className:"max-w-screen-xl",children:[Object(l.jsx)("div",{className:"p-2 m-2 w-20 cursor-pointer",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(s.b,{to:"/",children:"Close"})," "]})}),i&&Object(l.jsxs)("div",{className:"grid md:grid-cols-12 gap-2 py-4 my-2",children:[Object(l.jsx)("div",{className:"col-span-8",children:Object(l.jsx)("div",{className:"grid md:grid-cols-2 grid-flow-row gap-2",children:(t=i.images,t.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"w-full p-2",src:e.src,alt:"product item"})})})))})}),Object(l.jsxs)("div",{className:"col-span-4",children:[Object(l.jsx)("h1",{className:"text-2xl my-2",children:i.title}),Object(l.jsx)("div",{children:(e=i.variants,e.map((function(e){var t=e.available,c=e.sku,r=e.title,n=e.price;return t&&Object(l.jsxs)("div",{className:"flex flex-col p-2 bg-gray-100 m-1",children:[Object(l.jsx)("div",{children:r}),Object(l.jsxs)("div",{children:[" Price: ",n]}),Object(l.jsxs)("div",{children:[" SKU: ",c]})]})})))}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{onClick:function(){return n(function(e,t,c){var r=[{variantId:t,quantity:parseInt(c,10)}];return function(t){t({type:h.actionType.ADDING_TO_CART}),T.checkout.addLineItems(e,r).then((function(e){console.log(e.lineItems),t({type:h.actionType.ADDED_TO_CART,data:e.lineItems})})).catch((function(e){t({type:h.actionType.ADD_TO_CART_ERROR,fetched:!1,error:e})}))}}(f,i.variants[0].id,1))},className:"cursor-pointer p-2 m-2",children:"Add to Cart"})})]})]})]}):Object(l.jsx)(_,{})},p=c(24),E=c(25),R=c(19);var v=function(){Object(O.b)();var e=Object(O.c)((function(e){return e.reducerFetchCheckout.checkout_data}));console.log(e),console.log(e&&!0===e&&e.lineItems);var t=Object(r.useState)([]),c=Object(d.a)(t,2),n=c[0],i=c[1],o=Object(r.useState)(0),a=Object(d.a)(o,2),s=a[0],u=a[1],_=Object(r.useState)(""),h=Object(d.a)(_,2),j=h[0],T=h[1],C=Object(r.useState)(0),f=Object(d.a)(C,2),b=f[0],v=f[1];return Object(r.useEffect)((function(){e&&void 0!==e&&i(e.lineItems),e&&void 0!==e&&u(e.totalPriceV2)}),[e]),Object(r.useEffect)((function(){void 0!==s&&T(s.currencyCode)}),[s]),Object(r.useEffect)((function(){void 0!==n&&n.length<1&&v(n.length)}),[n]),console.log("LENGTH",b),void 0!==n&&n.length,Object(l.jsxs)("div",{className:"w-full flex flex-col p-4 my-3 border-2 border-gray-300",children:[Object(l.jsxs)("h2",{className:"text-xl",children:["Cart Items:",b]}),void 0!==n&&n.length>0?n.map((function(t){var c=t.variant,r=c.price,n=c.id,i=t.quantity,o=t.title,a=r*i;return console.log("product id",n,"checkoutid",e.id),Object(l.jsx)("div",{className:"flex flex-row flex-wrap",children:Object(l.jsx)("div",{className:"m-10",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"text-xl py-1 mb-1",children:o}),Object(l.jsx)("div",{className:"cursor-pointer relative",children:Object(l.jsx)("div",{title:"Remove",onClick:function(){return e.id,t.id,"test remove"},children:Object(l.jsx)(p.a,{})})}),Object(l.jsx)("img",{className:"w-56 mt-1 p-2",src:t.variant.image.src,alt:t.variant.image.altText}),Object(l.jsxs)("div",{className:"grid grid-flow-row gap-2 w-full",children:[Object(l.jsxs)("div",{children:["Description: ",t.variant.title]}),Object(l.jsxs)("div",{className:"grid grid-col-3 gap-2 my-2",children:[Object(l.jsxs)("p",{children:["Quantity: ",i," "]}),Object(l.jsx)("p",{className:"cursor-pointer p-2 m-2",onClick:function(){return"test about"},children:Object(l.jsx)(E.a,{})}),Object(l.jsx)("p",{className:"cursor-pointer p-2 m-2",onClick:function(){return"test about"},children:Object(l.jsx)(R.a,{})})]}),Object(l.jsxs)("div",{children:["Rate: ",j," ",r]}),Object(l.jsxs)("div",{children:["Amount: ",j," ",a.toFixed(2)]})]})]})})})})):Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"text-xl p-2",children:"Cart is empty"})}),Object(l.jsxs)("div",{class:"font-bold mt-2",children:["Total Amount : ",j," ",void 0!==s&&s.amount]}),Object(l.jsx)("div",{children:void 0!==e&&void 0!==n&&n.length>0&&Object(l.jsx)("div",{className:"cursor-pointer py-2 px-4 my-5 border-gray-500",onClick:function(){return window.open(e.webUrl,"_blank")},children:"Checkout"})})]})};var x=function(){var e=Object(O.b)();return Object(r.useEffect)((function(){e((function(e){e({type:h.actionType.CHECKOUT_CREATING}),T.checkout.create().then((function(t){e({type:h.actionType.CHECKOUT_CREATED,checkoutId:t.id,data:t}),localStorage.checkout||localStorage.setItem("checkout",t.id)})).catch((function(t){e({type:h.actionType.CHECKOUT_CREATE_ERROR,fetched:!1,error:t})}))})),e((function(e){e({type:h.actionType.PRODUCT_START_FETCHING}),T.product.fetchAll().then((function(t){console.log(t),e({type:h.actionType.PRODUCT_FETCHED,data:t})})).catch((function(t){e({type:h.actionType.PRODUCT_FETCH_ERROR,fetched:!1,err:t})}))}))}),[e]),Object(l.jsx)("div",{children:Object(l.jsx)(f,{})})};var m=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(b,{})})};var g=function(){var e=Object(O.b)(),t=Object(r.useState)(""),c=Object(d.a)(t,2),n=c[0],i=c[1];console.log(n),Object(r.useEffect)((function(){i(localStorage.getItem("checkout"))}),[]);var o=Object(O.c)((function(e){return e.reducerCreateCheckout.data}));return Object(r.useEffect)((function(){n&&e(function(e){return function(t){t({type:h.actionType.CHECKOUT_FETCHING}),T.checkout.fetch(e).then((function(e){console.log(e),t({type:h.actionType.CHECKOUT_FETCHED,data:e})})).catch((function(e){t({type:h.actionType.CHECKOUT_FETCH_ERROR,error:e})}))}}(n))}),[e,n]),Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{}),Object(l.jsxs)(s.a,{children:["Shopify shop",Object(l.jsx)("div",{children:Object(l.jsx)(s.b,{to:"/",children:"Products List"})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"cursor-pointer py-2 px-4 my-5 border-gray-500",onClick:function(){return window.open(o.webUrl,"_blank")},children:"Checkout"})})}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(x,{})}),Object(l.jsx)(u.a,{path:"/item/:id",children:Object(l.jsx)(m,{})})]})]})]})},D=c(14),A=c(26),y=c(27),H=c(5).actionType,U={product_fetching:!1,product_fetched:!1,product_fetch_error:"",product_data:[],product_dataLength:0},k={a_product_fetching:!1,a_product_fetched:!1,a_product_fetch_error:"",a_product_data:[],a_product_dataLength:0},F={checkout_creating:!1,checkout_created:!1,checkout_error:"",checkout_id:"",data:""},N={adding_to_cart:!1,added_to_cart:!1,add_to_cart_error:"",cart_items:[]},I={checkout_fetching:!1,checkout_fetched:!1,checkout_fetch_error:"",checkout_data:""},P=Object(D.b)({reducerFetchAllProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.PRODUCT_START_FETCHING:return{product_fetching:!0,product_data:[]};case H.PRODUCT_FETCHED:return{product_data:t.data,product_fetched:!0};case H.PRODUCT_FETCH_ERROR:return{product_fetched:!1,product_fetching:!1,product_fetch_error:t.error};default:return e}},reducerFetchProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.A_PRODUCT_START_FETCHING:return{a_product_fetching:!0,a_product_data:[]};case H.A_PRODUCT_FETCHED:return{a_product_data:t.data,a_product_fetched:!0};case H.A_PRODUCT_FETCH_ERROR:return{a_product_fetched:!1,a_product_fetching:!1,a_product_fetch_error:t.error};default:return e}},reducerCreateCheckout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.CHECKOUT_CREATING:return{checkout_fetching:!0,checkout_id:""};case H.CHECKOUT_CREATED:return{checkout_id:t.checkoutId,data:t.data,checkout_created:!0};case H.CHECKOUT_CREATE_ERROR:return{checkout_created:!1,checkout_error:t.error};default:return e}},reducerAddToCart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.ADDING_TO_CART:return{adding_to_cart:!0,cart_items:[]};case H.ADDED_TO_CART:return{cart_items:t.data,added_to_cart:!0};case H.ADD_TO_CART_ERROR:return{added_to_cart:!1,add_to_cart_error:t.error};default:return e}},reducerFetchCheckout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.CHECKOUT_FETCHING:return{checkout_fetching:!0,checkout_data:[]};case H.CHECKOUT_FETCHED:return{checkout_data:t.data,checkout_fetched:!0};case H.CHECKOUT_FETCH_ERROR:return{checkout_fetched:!1,checkout_fetch_error:t.error};default:return e}}}),w=Object(D.a)(y.a,Object(A.createLogger)()),K=Object(D.c)(P,w);o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(O.a,{store:K,children:Object(l.jsx)(g,{})})}),document.getElementById("root")),a()},5:function(e,t,c){"use strict";c.r(t),c.d(t,"actionType",(function(){return r}));var r={PRODUCT_START_FETCHING:"PRODUCT_START_FETCHING",PRODUCT_FETCHED:"PRODUCT_FETCHED",PRODUCT_FETCH_ERROR:"PRODUCT_FETCH_ERROR",A_PRODUCT_START_FETCHING:"A_PRODUCT_START_FETCHING",A_PRODUCT_FETCHED:"A_PRODUCT_FETCHED",A_PRODUCT_FETCH_ERROR:"A_PRODUCT_FETCH_ERROR",ADDING_TO_CART:"ADDING_TO_CART",ADDED_TO_CART:"ADDED_TO_CART",ADD_TO_CART_ERROR:"ADD_TO_CART_ERROR",CHECKOUT_CREATING:"CHECKOUT_CREATING",CHECKOUT_CREATED:"CHECKOUT_CREATED",CHECKOUT_CREATE_ERROR:"CHECKOUT_CREATE_ERROR",CHECKOUT_FETCHING:"CHECKOUT_FETCHING",CHECKOUT_FETCHED:"CHECKOUT_FETCHED",CHECKOUT_FETCH_ERROR:"CHECKOUT_FETCH_ERROR"}}},[[42,1,2]]]);
//# sourceMappingURL=main.5a072769.chunk.js.map