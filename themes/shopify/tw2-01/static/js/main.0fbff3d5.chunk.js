(this["webpackJsonpshopify-tw2-01"]=this["webpackJsonpshopify-tw2-01"]||[]).push([[0],{39:function(t,e,c){},4:function(t,e,c){"use strict";c.r(e),c.d(e,"actionType",(function(){return r}));var r={PRODUCT_START_FETCHING:"PRODUCT_START_FETCHING",PRODUCT_FETCHED:"PRODUCT_FETCHED",PRODUCT_FETCH_ERROR:"PRODUCT_FETCH_ERROR",A_PRODUCT_START_FETCHING:"A_PRODUCT_START_FETCHING",A_PRODUCT_FETCHED:"A_PRODUCT_FETCHED",A_PRODUCT_FETCH_ERROR:"A_PRODUCT_FETCH_ERROR",ADDING_TO_CART:"ADDING_TO_CART",ADDED_TO_CART:"ADDED_TO_CART",ADD_TO_CART_ERROR:"ADD_TO_CART_ERROR",CHECKOUT_CREATING:"CHECKOUT_CREATING",CHECKOUT_CREATED:"CHECKOUT_CREATED",CHECKOUT_CREATE_ERROR:"CHECKOUT_CREATE_ERROR",CHECKOUT_FETCHING:"CHECKOUT_FETCHING",CHECKOUT_FETCHED:"CHECKOUT_FETCHED",CHECKOUT_FETCH_ERROR:"CHECKOUT_FETCH_ERROR"}},50:function(t,e,c){"use strict";c.r(e);var r=c(1),n=c.n(r),o=c(16),a=c.n(o),d=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(e){var c=e.getCLS,r=e.getFID,n=e.getFCP,o=e.getLCP,a=e.getTTFB;c(t),r(t),n(t),o(t),a(t)}))},i=(c(39),c(10)),u=c(3),_=c(2);var s=function(){return Object(_.jsx)("div",{children:"Loading..."})},T=c(5),h=c(4),C=c(17),O=c.n(C),l=O.a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"}),E=function(t){return function(e){e({type:h.actionType.A_PRODUCT_START_FETCHING}),l.product.fetch(t).then((function(t){e({type:h.actionType.A_PRODUCT_FETCHED,data:t})})).catch((function(t){e({type:h.actionType.A_PRODUCT_FETCH_ERROR,fetched:!1,error:t})}))}};var R=function(){Object(T.b)();var t=Object(T.c)((function(t){return t.reducerFetchAllProducts.product_data})),e=Object(T.c)((function(t){return t.reducerFetchAllProducts.product_fetched}));console.log("productts ",t);var c=function(t){return Object(_.jsx)("div",{children:t[0].price})};return e?Object(_.jsx)("div",{className:"grid lg:grid-cols-3 xl:grid-cols-4 md:m-0 m-2",children:t.map((function(t){var e,r=t.id,n=t.title,o=t.images,a=t.variants;return Object(_.jsx)(i.b,{to:"/item/".concat(r),children:Object(_.jsxs)("div",{className:"w-full p-3 md:m-2 cursor-pointer",children:[Object(_.jsx)("div",{children:(e=o,Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:"w-full",src:e[0].src,alt:"product item"})}))}),Object(_.jsxs)("div",{className:"font-light mt-2",children:[Object(_.jsx)("h3",{children:n}),Object(_.jsx)("div",{children:c(a)})]})]})})}))}):Object(_.jsx)(s,{})};var f=function(){var t,e,c=Object(u.f)().id,n=Object(T.b)(),o=Object(T.c)((function(t){return t.reducerFetchProduct.a_product_data})),a=Object(T.c)((function(t){return t.reducerFetchProduct.a_product_fetched})),d=Object(T.c)((function(t){return t.reducerCreateCheckout.checkout_id}));return Object(r.useEffect)((function(){n(E(c))}),[n,c]),console.log(o),a?Object(_.jsxs)("div",{className:"max-w-screen-xl",children:[Object(_.jsx)("div",{className:"p-2 m-2 w-20 cursor-pointer",children:Object(_.jsxs)("div",{children:[Object(_.jsx)(i.b,{to:"/",children:"Close"})," "]})}),o&&Object(_.jsxs)("div",{className:"grid md:grid-cols-12 gap-2 py-4 my-2",children:[Object(_.jsx)("div",{className:"col-span-8",children:Object(_.jsx)("div",{className:"grid md:grid-cols-2 grid-flow-row gap-2",children:(e=o.images,e.map((function(t){return Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:"w-full p-2",src:t.src,alt:"product item"})})})))})}),Object(_.jsxs)("div",{className:"col-span-4",children:[Object(_.jsx)("h1",{className:"text-2xl my-2",children:o.title}),Object(_.jsx)("div",{children:(t=o.variants,t.map((function(t){var e=t.available,c=t.sku,r=t.title,n=t.price;return e&&Object(_.jsxs)("div",{className:"flex flex-col p-2 bg-gray-100 m-1",children:[Object(_.jsx)("div",{children:r}),Object(_.jsxs)("div",{children:[" Price: ",n]}),Object(_.jsxs)("div",{children:[" SKU: ",c]})]})})))}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{onClick:function(){return n(function(t,e,c){var r=[{variantId:e,quantity:c,customAttributes:[{key:"MyKey",value:"MyValue"}]}];return function(e){e({type:h.actionType.ADDING_TO_CART}),l.checkout.addLineItems(t,r).then((function(t){console.log(t.lineItems),e({type:h.actionType.ADDED_TO_CART,data:t.lineItems})})).catch((function(t){e({type:h.actionType.ADD_TO_CART_ERROR,fetched:!1,error:t})}))}}(d,o.variants[0].id,1))},className:"cursor-pointer p-2 m-2",children:"Add to Cart"})})]})]})]}):Object(_.jsx)(s,{})},j=(c(15),c(13)),p=c(9),b=c.n(p),D=c(11),v=c(27),A=c(28),H=c(34),g=c(33),m=n.a.createContext(),y=O.a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"});r.Component,m.Consumer,c(29),c(30),c(23);var x=function(){var t=Object(T.b)();return Object(r.useEffect)((function(){t((function(t){t({type:h.actionType.CHECKOUT_CREATING}),l.checkout.create().then((function(e){t({type:h.actionType.CHECKOUT_CREATED,checkoutId:e.id,data:e}),localStorage.checkout||localStorage.setItem("checkout",e.id)})).catch((function(e){t({type:h.actionType.CHECKOUT_CREATE_ERROR,fetched:!1,error:e})}))})),t((function(t){t({type:h.actionType.PRODUCT_START_FETCHING}),l.product.fetchAll().then((function(e){console.log(e),t({type:h.actionType.PRODUCT_FETCHED,data:e})})).catch((function(e){t({type:h.actionType.PRODUCT_FETCH_ERROR,fetched:!1,err:e})}))}))}),[t]),Object(_.jsx)("div",{children:Object(_.jsx)(R,{})})};var U=function(){return Object(_.jsx)("div",{children:Object(_.jsx)(f,{})})};var F=function(){var t=Object(T.b)(),e=Object(T.c)((function(t){return t.reducerCreateCheckout.checkout_id}));return Object(r.useEffect)((function(){var c;e&&t((c=e,function(t){t({type:h.actionType.CHECKOUT_FETCHING}),l.checkout.fetch(c).then((function(e){console.log(e),t({type:h.actionType.CHECKOUT_FETCHED,data:e})})).catch((function(e){t({type:h.actionType.CHECKOUT_FETCH_ERROR,error:e})}))}))}),[t,e]),Object(_.jsx)("div",{children:Object(_.jsxs)(i.a,{children:["Shopify shop ",Object(_.jsx)(i.b,{to:"/",children:"Products List"}),Object(_.jsxs)(u.c,{children:[Object(_.jsx)(u.a,{exact:!0,path:"/",children:Object(_.jsx)(x,{})}),Object(_.jsx)(u.a,{path:"/item/:id",children:Object(_.jsx)(U,{})})]})]})})},k=c(18),N=c(31),P=c(32),I=c(4).actionType,K={product_fetching:!1,product_fetched:!1,product_fetch_error:"",product_data:[],product_dataLength:0},G={a_product_fetching:!1,a_product_fetched:!1,a_product_fetch_error:"",a_product_data:[],a_product_dataLength:0},w={checkout_creating:!1,checkout_created:!1,checkout_error:"",checkout_id:"",data:""},S={adding_to_cart:!1,added_to_cart:!1,add_to_cart_error:"",cart_items:[]},L={checkout_fetching:!1,checkout_fetched:!1,checkout_fetch_error:"",checkout_data:""},M=Object(k.b)({reducerFetchAllProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I.PRODUCT_START_FETCHING:return{product_fetching:!0,product_data:[]};case I.PRODUCT_FETCHED:return{product_data:e.data,product_fetched:!0};case I.PRODUCT_FETCH_ERROR:return{product_fetched:!1,product_fetching:!1,product_fetch_error:e.error};default:return t}},reducerFetchProduct:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I.A_PRODUCT_START_FETCHING:return{a_product_fetching:!0,a_product_data:[]};case I.A_PRODUCT_FETCHED:return{a_product_data:e.data,a_product_fetched:!0};case I.A_PRODUCT_FETCH_ERROR:return{a_product_fetched:!1,a_product_fetching:!1,a_product_fetch_error:e.error};default:return t}},reducerCreateCheckout:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I.CHECKOUT_CREATING:return{checkout_fetching:!0,checkout_id:""};case I.CHECKOUT_CREATED:return{checkout_id:e.checkoutId,data:e.data,checkout_created:!0};case I.CHECKOUT_CREATE_ERROR:return{checkout_created:!1,checkout_error:e.error};default:return t}},reducerAddToCart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I.ADDING_TO_CART:return{adding_to_cart:!0,cart_items:[]};case I.ADDED_TO_CART:return{cart_items:e.data,added_to_cart:!0};case I.ADD_TO_CART_ERROR:return{added_to_cart:!1,add_to_cart_error:e.error};default:return t}},reducerFetchCheckout:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I.CHECKOUT_FETCHING:return{checkout_fetching:!0,checkout_data:[]};case I.CHECKOUT_FETCHED:return{checkout_data:e.data,checkout_fetched:!0};case I.CHECKOUT_FETCH_ERROR:return{checkout_fetched:!1,checkout_fetch_error:e.error};default:return t}}}),B=Object(k.a)(P.a,Object(N.createLogger)()),J=Object(k.c)(M,B);a.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(T.a,{store:J,children:Object(_.jsx)(F,{})})}),document.getElementById("root")),d()}},[[50,1,2]]]);
//# sourceMappingURL=main.0fbff3d5.chunk.js.map