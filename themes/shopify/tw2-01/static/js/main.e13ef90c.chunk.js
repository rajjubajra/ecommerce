(this["webpackJsonpshopify-tw2-01"]=this["webpackJsonpshopify-tw2-01"]||[]).push([[0],{39:function(t,e,c){},4:function(t,e,c){"use strict";c.r(e),c.d(e,"actionType",(function(){return r}));var r={PRODUCT_START_FETCHING:"PRODUCT_START_FETCHING",PRODUCT_FETCHED:"PRODUCT_FETCHED",PRODUCT_FETCH_ERROR:"PRODUCT_FETCH_ERROR",A_PRODUCT_START_FETCHING:"A_PRODUCT_START_FETCHING",A_PRODUCT_FETCHED:"A_PRODUCT_FETCHED",A_PRODUCT_FETCH_ERROR:"A_PRODUCT_FETCH_ERROR",ADDING_TO_CART:"ADDING_TO_CART",ADDED_TO_CART:"ADDED_TO_CART",ADD_TO_CART_ERROR:"ADD_TO_CART_ERROR",CHECKOUT_CREATING:"CHECKOUT_CREATING",CHECKOUT_CREATED:"CHECKOUT_CREATED",CHECKOUT_CREATE_ERROR:"CHECKOUT_CREATE_ERROR",CHECKOUT_FETCHING:"CHECKOUT_FETCHING",CHECKOUT_FETCHED:"CHECKOUT_FETCHED",CHECKOUT_FETCH_ERROR:"CHECKOUT_FETCH_ERROR"}},50:function(t,e,c){"use strict";c.r(e);var r=c(1),n=c.n(r),o=c(16),a=c.n(o),d=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(e){var c=e.getCLS,r=e.getFID,n=e.getFCP,o=e.getLCP,a=e.getTTFB;c(t),r(t),n(t),o(t),a(t)}))},i=(c(39),c(10)),u=c(11),_=c(3),s=c(2);var h=function(){return Object(s.jsx)("div",{children:"Loading..."})},T=c(5),O=c(4),C=c(17),l=c.n(C),j=l.a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"}),E=function(t){return function(e){e({type:O.actionType.A_PRODUCT_START_FETCHING}),j.product.fetch(t).then((function(t){e({type:O.actionType.A_PRODUCT_FETCHED,data:t})})).catch((function(t){e({type:O.actionType.A_PRODUCT_FETCH_ERROR,fetched:!1,error:t})}))}};var f=function(){Object(T.b)();var t=Object(T.c)((function(t){return t.reducerFetchAllProducts.product_data})),e=Object(T.c)((function(t){return t.reducerFetchAllProducts.product_fetched}));console.log("productts ",t);var c=function(t){return Object(s.jsx)("div",{children:t[0].price})};return e?Object(s.jsx)("div",{className:"grid lg:grid-cols-3 xl:grid-cols-4 md:m-0 m-2",children:t.map((function(t){var e,r=t.id,n=t.title,o=t.images,a=t.variants;return Object(s.jsx)(u.b,{to:"/item/".concat(r),children:Object(s.jsxs)("div",{className:"w-full p-3 md:m-2 cursor-pointer",children:[Object(s.jsx)("div",{children:(e=o,Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"w-full",src:e[0].src,alt:"product item"})}))}),Object(s.jsxs)("div",{className:"font-light mt-2",children:[Object(s.jsx)("h3",{children:n}),Object(s.jsx)("div",{children:c(a)})]})]})})}))}):Object(s.jsx)(h,{})};var R=function(){var t,e,c=Object(_.f)().id,n=Object(T.b)(),o=Object(T.c)((function(t){return t.reducerFetchProduct.a_product_data})),a=Object(T.c)((function(t){return t.reducerFetchProduct.a_product_fetched})),d=Object(r.useState)(""),C=Object(i.a)(d,2),l=C[0],f=C[1];return Object(r.useEffect)((function(){f(localStorage.getItem("checkout"))}),[]),Object(r.useEffect)((function(){n(E(c))}),[n,c]),console.log(o),a?Object(s.jsxs)("div",{className:"max-w-screen-xl",children:[Object(s.jsx)("div",{className:"p-2 m-2 w-20 cursor-pointer",children:Object(s.jsxs)("div",{children:[Object(s.jsx)(u.b,{to:"/",children:"Close"})," "]})}),o&&Object(s.jsxs)("div",{className:"grid md:grid-cols-12 gap-2 py-4 my-2",children:[Object(s.jsx)("div",{className:"col-span-8",children:Object(s.jsx)("div",{className:"grid md:grid-cols-2 grid-flow-row gap-2",children:(e=o.images,e.map((function(t){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"w-full p-2",src:t.src,alt:"product item"})})})))})}),Object(s.jsxs)("div",{className:"col-span-4",children:[Object(s.jsx)("h1",{className:"text-2xl my-2",children:o.title}),Object(s.jsx)("div",{children:(t=o.variants,t.map((function(t){var e=t.available,c=t.sku,r=t.title,n=t.price;return e&&Object(s.jsxs)("div",{className:"flex flex-col p-2 bg-gray-100 m-1",children:[Object(s.jsx)("div",{children:r}),Object(s.jsxs)("div",{children:[" Price: ",n]}),Object(s.jsxs)("div",{children:[" SKU: ",c]})]})})))}),Object(s.jsx)("div",{children:Object(s.jsx)("div",{onClick:function(){return n(function(t,e,c){var r=[{variantId:e,quantity:parseInt(c,10),customAttributes:[{key:"MyKey",value:"MyValue"}]}];return function(e){e({type:O.actionType.ADDING_TO_CART}),j.checkout.addLineItems(t,r).then((function(t){console.log(t.lineItems),e({type:O.actionType.ADDED_TO_CART,data:t.lineItems})})).catch((function(t){e({type:O.actionType.ADD_TO_CART_ERROR,fetched:!1,error:t})}))}}(l,o.variants[0].id,1))},className:"cursor-pointer p-2 m-2",children:"Add to Cart"})})]})]})]}):Object(s.jsx)(h,{})},p=c(14),b=c(9),v=c.n(b),D=c(12),A=c(27),g=c(28),m=c(34),x=c(33),H=n.a.createContext(),y=l.a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"});r.Component,H.Consumer,c(29),c(30),c(23);var U=function(){var t=Object(T.b)();return Object(r.useEffect)((function(){t((function(t){t({type:O.actionType.CHECKOUT_CREATING}),j.checkout.create().then((function(e){t({type:O.actionType.CHECKOUT_CREATED,checkoutId:e.id,data:e}),localStorage.checkout||localStorage.setItem("checkout",e.id)})).catch((function(e){t({type:O.actionType.CHECKOUT_CREATE_ERROR,fetched:!1,error:e})}))})),t((function(t){t({type:O.actionType.PRODUCT_START_FETCHING}),j.product.fetchAll().then((function(e){console.log(e),t({type:O.actionType.PRODUCT_FETCHED,data:e})})).catch((function(e){t({type:O.actionType.PRODUCT_FETCH_ERROR,fetched:!1,err:e})}))}))}),[t]),Object(s.jsx)("div",{children:Object(s.jsx)(f,{})})};var F=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(R,{})})};var k=function(){var t=Object(T.b)(),e=Object(r.useState)(""),c=Object(i.a)(e,2),n=c[0],o=c[1];console.log(n),Object(r.useEffect)((function(){o(localStorage.getItem("checkout"))}),[]);var a=Object(T.c)((function(t){return t.reducerCreateCheckout.data}));return Object(r.useEffect)((function(){n&&t(function(t){return function(e){e({type:O.actionType.CHECKOUT_FETCHING}),j.checkout.fetch(t).then((function(t){console.log(t),e({type:O.actionType.CHECKOUT_FETCHED,data:t})})).catch((function(t){e({type:O.actionType.CHECKOUT_FETCH_ERROR,error:t})}))}}(n))}),[t,n]),Object(s.jsx)("div",{children:Object(s.jsxs)(u.a,{children:["Shopify shop",Object(s.jsx)("div",{children:Object(s.jsx)(u.b,{to:"/",children:"Products List"})}),Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"cursor-pointer py-2 px-4 my-5 border-gray-500",onClick:function(){return window.open(a.webUrl,"_blank")},children:"Checkout"})})}),Object(s.jsxs)(_.c,{children:[Object(s.jsx)(_.a,{exact:!0,path:"/",children:Object(s.jsx)(U,{})}),Object(s.jsx)(_.a,{path:"/item/:id",children:Object(s.jsx)(F,{})})]})]})})},N=c(18),P=c(31),I=c(32),K=c(4).actionType,w={product_fetching:!1,product_fetched:!1,product_fetch_error:"",product_data:[],product_dataLength:0},G={a_product_fetching:!1,a_product_fetched:!1,a_product_fetch_error:"",a_product_data:[],a_product_dataLength:0},S={checkout_creating:!1,checkout_created:!1,checkout_error:"",checkout_id:"",data:""},L={adding_to_cart:!1,added_to_cart:!1,add_to_cart_error:"",cart_items:[]},M={checkout_fetching:!1,checkout_fetched:!1,checkout_fetch_error:"",checkout_data:""},B=Object(N.b)({reducerFetchAllProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case K.PRODUCT_START_FETCHING:return{product_fetching:!0,product_data:[]};case K.PRODUCT_FETCHED:return{product_data:e.data,product_fetched:!0};case K.PRODUCT_FETCH_ERROR:return{product_fetched:!1,product_fetching:!1,product_fetch_error:e.error};default:return t}},reducerFetchProduct:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case K.A_PRODUCT_START_FETCHING:return{a_product_fetching:!0,a_product_data:[]};case K.A_PRODUCT_FETCHED:return{a_product_data:e.data,a_product_fetched:!0};case K.A_PRODUCT_FETCH_ERROR:return{a_product_fetched:!1,a_product_fetching:!1,a_product_fetch_error:e.error};default:return t}},reducerCreateCheckout:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case K.CHECKOUT_CREATING:return{checkout_fetching:!0,checkout_id:""};case K.CHECKOUT_CREATED:return{checkout_id:e.checkoutId,data:e.data,checkout_created:!0};case K.CHECKOUT_CREATE_ERROR:return{checkout_created:!1,checkout_error:e.error};default:return t}},reducerAddToCart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case K.ADDING_TO_CART:return{adding_to_cart:!0,cart_items:[]};case K.ADDED_TO_CART:return{cart_items:e.data,added_to_cart:!0};case K.ADD_TO_CART_ERROR:return{added_to_cart:!1,add_to_cart_error:e.error};default:return t}},reducerFetchCheckout:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case K.CHECKOUT_FETCHING:return{checkout_fetching:!0,checkout_data:[]};case K.CHECKOUT_FETCHED:return{checkout_data:e.data,checkout_fetched:!0};case K.CHECKOUT_FETCH_ERROR:return{checkout_fetched:!1,checkout_fetch_error:e.error};default:return t}}}),J=Object(N.a)(I.a,Object(P.createLogger)()),q=Object(N.c)(B,J);a.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(T.a,{store:q,children:Object(s.jsx)(k,{})})}),document.getElementById("root")),d()}},[[50,1,2]]]);
//# sourceMappingURL=main.e13ef90c.chunk.js.map