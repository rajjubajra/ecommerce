(this["webpackJsonpshopify-tw2-01"]=this["webpackJsonpshopify-tw2-01"]||[]).push([[0],{32:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(13),i=c.n(a),o=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),r(e),n(e),a(e),i(e)}))},d=(c(32),c(10)),s=c(9),u=c(3),_=c(2);var l=function(){return Object(_.jsx)("div",{children:"Loading..."})},h=c(4),O=c(5),T=c(22),j=c.n(T).a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"}),C=function(e){return function(t){t({type:O.actionType.A_PRODUCT_START_FETCHING}),j.product.fetch(e).then((function(e){t({type:O.actionType.A_PRODUCT_FETCHED,data:e})})).catch((function(e){t({type:O.actionType.A_PRODUCT_FETCH_ERROR,fetched:!1,error:e})}))}},R=function(e,t,c){var r=[{id:t,quantity:parseInt(c,10)}];return console.log("line item to update",r),console.log("checkoutid action",e),function(t){t({type:O.actionType.CART_UPDATING}),j.checkout.updateLineItems(e,r).then((function(e){console.log(e.lineItems),t({type:O.actionType.CART_UPDATED,data:e.lineItems})})).catch((function(e){t({type:O.actionType.CART_UPDATE_ERROR,error:e})}))}};var f=function(){Object(h.b)();var e=Object(h.c)((function(e){return e.reducerFetchAllProducts.product_data})),t=Object(h.c)((function(e){return e.reducerFetchAllProducts.product_fetched}));console.log("productts ",e);var c=function(e){return Object(_.jsx)("div",{children:e[0].price})};return t?Object(_.jsx)("div",{className:"grid md:grid-cols-3 xl:grid-cols-4 md:m-0 m-2",children:e.map((function(e){var t,r=e.id,n=e.title,a=e.images,i=e.variants;return Object(_.jsx)(s.b,{to:"/item/".concat(r),children:Object(_.jsxs)("div",{className:"w-full p-3 md:m-2 cursor-pointer",children:[Object(_.jsx)("div",{children:(t=a,Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:"w-full",src:t[0].src,alt:"product item"})}))}),Object(_.jsxs)("div",{className:"font-light mt-2",children:[Object(_.jsx)("h3",{children:n}),Object(_.jsx)("div",{children:c(i)})]})]})})}))}):Object(_.jsx)(l,{})};var E=function(){var e=Object(u.f)().id,t=Object(h.b)(),c=Object(h.c)((function(e){return e.reducerFetchProduct.a_product_data})),n=Object(h.c)((function(e){return e.reducerFetchProduct.a_product_fetched})),a=Object(r.useState)(""),i=Object(d.a)(a,2),o=i[0],T=i[1],R=Object(r.useState)(""),f=Object(d.a)(R,2),E=f[0],p=f[1];Object(r.useEffect)((function(){T(localStorage.getItem("checkout"))}),[]);var b,v,x=Object(h.c)((function(e){return e.reducerCreateCheckout}));return Object(r.useEffect)((function(){x&&p(x.data)}),[x]),console.log("ITEM",x),console.log("ITEM",E),Object(r.useEffect)((function(){t(C(e))}),[t,e]),console.log(c),n?Object(_.jsxs)("div",{className:"max-w-screen-xl",children:[Object(_.jsx)("div",{className:"p-2 m-2 w-20 cursor-pointer",children:Object(_.jsxs)("div",{children:[Object(_.jsx)(s.b,{to:"/",children:"Close"})," "]})}),c&&Object(_.jsxs)("div",{className:"grid md:grid-cols-12 gap-2 py-4 my-2",children:[Object(_.jsx)("div",{className:"col-span-8",children:Object(_.jsx)("div",{className:"grid md:grid-cols-2 grid-flow-row gap-2",children:(v=c.images,v.map((function(e){return Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:"w-full p-2",src:e.src,alt:"product item"})})})))})}),Object(_.jsxs)("div",{className:"col-span-4",children:[Object(_.jsx)("h1",{className:"text-2xl my-2",children:c.title}),Object(_.jsx)("div",{children:(b=c.variants,b.map((function(e){var t=e.available,c=e.sku,r=e.title,n=e.price;return t&&Object(_.jsxs)("div",{className:"flex flex-col p-2 bg-gray-100 m-1",children:[Object(_.jsx)("div",{children:r}),Object(_.jsxs)("div",{children:[" Price: ",n]}),Object(_.jsxs)("div",{children:[" SKU: ",c]})]})})))}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{onClick:function(){return t(function(e,t,c){var r=[{variantId:t,quantity:parseInt(c,10)}];return function(t){t({type:O.actionType.ADDING_TO_CART}),j.checkout.addLineItems(e,r).then((function(e){console.log(e.lineItems),t({type:O.actionType.ADDED_TO_CART,data:e.lineItems})})).catch((function(e){t({type:O.actionType.ADD_TO_CART_ERROR,fetched:!1,error:e})}))}}(o,c.variants[0].id,1))},className:"cursor-pointer p-2 m-2",children:"Add to Cart"})})]})]})]}):Object(_.jsx)(l,{})},p=c(24),b=c(25),v=c(19);var x=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.reducerFetchCheckout.checkout_data}));return console.log("CART",t),console.log("cart items",t.lineItems),void 0===t.lineItems&&t.length,Object(_.jsx)("div",{children:void 0!==t.lineItems&&t.lineItems.map((function(c){var r=c.variant,n=r.image,a=n.src,i=n.altText,o=r.title,d=r.id,s=r.priceV2,u=s.currencyCode,l=(s.amount,r.price),h=(c.id,c.title),O=c.quantity,T=c.variableValues.id;return Object(_.jsxs)("div",{className:"grid grid-cols-12 my-2",children:[Object(_.jsx)("div",{className:"col-span-3",children:Object(_.jsx)("img",{className:"w-56 mt-1",src:a,alt:i})}),Object(_.jsx)("div",{className:"col-span-9",children:Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"cursor-pointer relative w-full text-right",children:Object(_.jsx)("div",{className:"w-4",title:"Remove",onClick:function(){return"test"},children:Object(_.jsx)(p.a,{})})}),Object(_.jsx)("h3",{className:"text-xl mb-1",children:h}),Object(_.jsxs)("div",{className:"grid grid-flow-row w-full text-sm",children:[Object(_.jsxs)("div",{children:["Description: ",o]}),Object(_.jsxs)("div",{className:"grid grid-cols-2",children:[Object(_.jsxs)("div",{children:["Quantity: ",O," "]}),Object(_.jsxs)("div",{className:"flex flex-row",children:[Object(_.jsx)("div",{className:"cursor-pointer px-2",onClick:function(){return e(R(T,d,1))},children:Object(_.jsx)(b.a,{})}),Object(_.jsx)("div",{className:"cursor-pointer px-2",onClick:function(){return e(R(T,d,-1))},children:Object(_.jsx)(v.a,{})})]})]}),Object(_.jsxs)("div",{children:["Rate: ",u,": ",l]}),Object(_.jsxs)("div",{children:["Amount: ",u," : ",t.totalPriceV2.amount.toFixed(2)]})]})]})})]})}))})};var m=function(){var e=Object(h.b)();return Object(r.useEffect)((function(){e((function(e){e({type:O.actionType.CHECKOUT_CREATING}),j.checkout.create().then((function(t){console.log("CHECKOUT ACTION:",t.id),e({type:O.actionType.CHECKOUT_CREATED,checkoutId:t.id,data:t}),localStorage.checkout||localStorage.setItem("checkout",t.id)})).catch((function(t){e({type:O.actionType.CHECKOUT_CREATE_ERROR,fetched:!1,error:t})}))})),e((function(e){e({type:O.actionType.PRODUCT_START_FETCHING}),j.product.fetchAll().then((function(t){console.log(t),e({type:O.actionType.PRODUCT_FETCHED,data:t})})).catch((function(t){e({type:O.actionType.PRODUCT_FETCH_ERROR,fetched:!1,err:t})}))}))}),[e]),Object(_.jsx)("div",{children:Object(_.jsx)(f,{})})};var A=function(){return Object(_.jsx)("div",{children:Object(_.jsx)(E,{})})};var g=function(){var e=Object(r.useState)(0),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(h.c)((function(e){return e.reducerFetchCheckout.checkout_data}));return console.log("Quantity : ",a),Object(r.useEffect)((function(){a&&0!==a.length&&n(a.lineItems.length)}),[a]),Object(_.jsx)("div",{children:Object(_.jsxs)(s.b,{to:"/cart",className:"cursor-pointer",children:["Bag Items: ",c]})})};var D=function(){var e=Object(h.b)(),t=Object(r.useState)(""),c=Object(d.a)(t,2),n=c[0],a=c[1];console.log(n),Object(r.useEffect)((function(){a(localStorage.getItem("checkout"))}),[]);var i=Object(h.c)((function(e){return e.reducerCreateCheckout.data}));return Object(r.useEffect)((function(){n&&e(function(e){return function(t){t({type:O.actionType.CHECKOUT_FETCHING}),j.checkout.fetch(e).then((function(e){console.log(e),t({type:O.actionType.CHECKOUT_FETCHED,data:e})})).catch((function(e){t({type:O.actionType.CHECKOUT_FETCH_ERROR,error:e})}))}}(n))}),[e,n]),Object(_.jsx)("div",{children:Object(_.jsxs)(s.a,{children:["Shopify shop",Object(_.jsx)("div",{children:Object(_.jsx)(s.b,{to:"/",children:"Products List"})}),Object(_.jsxs)("div",{children:["Cart : ",Object(_.jsx)(g,{})]}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{children:Object(_.jsx)("div",{className:"cursor-pointer py-2 px-4 my-5 border-gray-500",onClick:function(){return window.open(i.webUrl,"_blank")},children:"Checkout"})})}),Object(_.jsxs)(u.c,{children:[Object(_.jsx)(u.a,{exact:!0,path:"/",children:Object(_.jsx)(m,{})}),Object(_.jsx)(u.a,{path:"/item/:id",children:Object(_.jsx)(A,{})}),Object(_.jsx)(u.a,{path:"/cart",children:Object(_.jsx)(x,{})})]})]})})},y=c(14),U=c(26),H=c(27),N=c(5).actionType,k={product_fetching:!1,product_fetched:!1,product_fetch_error:"",product_data:[],product_dataLength:0},F={a_product_fetching:!1,a_product_fetched:!1,a_product_fetch_error:"",a_product_data:[],a_product_dataLength:0},I={checkout_creating:!1,checkout_created:!1,checkout_error:"",checkout_id:"",data:""},P={adding_to_cart:!1,added_to_cart:!1,add_to_cart_error:"",cart_items:[]},w={cart_updating:!1,cart_updated:!1,cart_update_error:"",cart_items:[]},K={checkout_fetching:!1,checkout_fetched:!1,checkout_fetch_error:"",checkout_data:""},G=Object(y.b)({reducerFetchAllProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.PRODUCT_START_FETCHING:return{product_fetching:!0,product_data:[]};case N.PRODUCT_FETCHED:return{product_data:t.data,product_fetched:!0};case N.PRODUCT_FETCH_ERROR:return{product_fetched:!1,product_fetching:!1,product_fetch_error:t.error};default:return e}},reducerFetchProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.A_PRODUCT_START_FETCHING:return{a_product_fetching:!0,a_product_data:[]};case N.A_PRODUCT_FETCHED:return{a_product_data:t.data,a_product_fetched:!0};case N.A_PRODUCT_FETCH_ERROR:return{a_product_fetched:!1,a_product_fetching:!1,a_product_fetch_error:t.error};default:return e}},reducerCreateCheckout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.CHECKOUT_CREATING:return{checkout_fetching:!0,checkout_id:""};case N.CHECKOUT_CREATED:return{checkout_id:t.checkoutId,data:t.data,checkout_created:!0};case N.CHECKOUT_CREATE_ERROR:return{checkout_created:!1,checkout_error:t.error};default:return e}},reducerAddToCart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.ADDING_TO_CART:return{adding_to_cart:!0,cart_items:[]};case N.ADDED_TO_CART:return{cart_items:t.data,added_to_cart:!0};case N.ADD_TO_CART_ERROR:return{added_to_cart:!1,add_to_cart_error:t.error};default:return e}},reducerFetchCheckout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.CHECKOUT_FETCHING:return{checkout_fetching:!0,checkout_data:[]};case N.CHECKOUT_FETCHED:return{checkout_data:t.data,checkout_fetched:!0};case N.CHECKOUT_FETCH_ERROR:return{checkout_fetched:!1,checkout_fetch_error:t.error};default:return e}},reducerUpdateCart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.CART_UPDATING:return{cart_updating:!0,cart_items:[]};case N.CART_UPDATED:return{cart_items:t.data,cart_updated:!0};case N.CART_UPDATE_ERROR:return{cart_updated:!1,cart_update_error:t.error};default:return e}}}),S=Object(y.a)(H.a,Object(U.createLogger)()),L=Object(y.c)(G,S);i.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(h.a,{store:L,children:Object(_.jsx)(D,{})})}),document.getElementById("root")),o()},5:function(e,t,c){"use strict";c.r(t),c.d(t,"actionType",(function(){return r}));var r={PRODUCT_START_FETCHING:"PRODUCT_START_FETCHING",PRODUCT_FETCHED:"PRODUCT_FETCHED",PRODUCT_FETCH_ERROR:"PRODUCT_FETCH_ERROR",A_PRODUCT_START_FETCHING:"A_PRODUCT_START_FETCHING",A_PRODUCT_FETCHED:"A_PRODUCT_FETCHED",A_PRODUCT_FETCH_ERROR:"A_PRODUCT_FETCH_ERROR",ADDING_TO_CART:"ADDING_TO_CART",ADDED_TO_CART:"ADDED_TO_CART",ADD_TO_CART_ERROR:"ADD_TO_CART_ERROR",CART_UPDATING:"CART_UPDATING",CART_UPDATED:"CART_UPDATED",CART_UPDATE_ERROR:"CART_UPDATE_ERROR",CHECKOUT_CREATING:"CHECKOUT_CREATING",CHECKOUT_CREATED:"CHECKOUT_CREATED",CHECKOUT_CREATE_ERROR:"CHECKOUT_CREATE_ERROR",CHECKOUT_FETCHING:"CHECKOUT_FETCHING",CHECKOUT_FETCHED:"CHECKOUT_FETCHED",CHECKOUT_FETCH_ERROR:"CHECKOUT_FETCH_ERROR"}}},[[42,1,2]]]);
//# sourceMappingURL=main.9f99f3fd.chunk.js.map