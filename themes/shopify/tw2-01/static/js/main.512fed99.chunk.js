(this["webpackJsonpshopify-tw2-01"]=this["webpackJsonpshopify-tw2-01"]||[]).push([[0],{39:function(t,e,c){},5:function(t,e,c){"use strict";c.r(e),c.d(e,"actionType",(function(){return r}));var r={PRODUCT_START_FETCHING:"PRODUCT_START_FETCHING",PRODUCT_FETCHED:"PRODUCT_FETCHED",PRODUCT_FETCH_ERROR:"PRODUCT_FETCH_ERROR",A_PRODUCT_START_FETCHING:"A_PRODUCT_START_FETCHING",A_PRODUCT_FETCHED:"A_PRODUCT_FETCHED",A_PRODUCT_FETCH_ERROR:"A_PRODUCT_FETCH_ERROR",ADDING_TO_CART:"ADDING_TO_CART",ADDED_TO_CART:"ADDED_TO_CART",ADD_TO_CART_ERROR:"ADD_TO_CART_ERROR",CHECKOUT_ID_CREATING:"CHECKOUT_ID_CREATING",CHECKOUT_ID_CREATED:"CHECKOUT_ID_CREATED",CHECKOUT_ID_CREATE_ERROR:"CHECKOUT_ID_CREATE_ERROR"}},50:function(t,e,c){"use strict";c.r(e);var r=c(1),n=c.n(r),d=c(16),o=c.n(d),i=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(e){var c=e.getCLS,r=e.getFID,n=e.getFCP,d=e.getLCP,o=e.getTTFB;c(t),r(t),n(t),d(t),o(t)}))},a=(c(39),c(10)),_=c(3),u=c(2);var s=function(){return Object(u.jsx)("div",{children:"Loading..."})},T=c(7),h=c(5),O=c(17),l=c.n(O),C=l.a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"}),j=function(t){return function(e){e({type:h.actionType.A_PRODUCT_START_FETCHING}),C.product.fetch(t).then((function(t){e({type:h.actionType.A_PRODUCT_FETCHED,data:t})})).catch((function(t){e({type:h.actionType.A_PRODUCT_FETCH_ERROR,fetched:!1,error:t})}))}};var R=function(){Object(T.b)();var t=Object(T.c)((function(t){return t.reducerFetchAllProducts.product_data})),e=Object(T.c)((function(t){return t.reducerFetchAllProducts.product_fetched}));console.log("productts ",t);var c=function(t){return Object(u.jsx)("div",{children:t[0].price})};return e?Object(u.jsx)("div",{className:"grid lg:grid-cols-3 xl:grid-cols-4 md:m-0 m-2",children:t.map((function(t){var e,r=t.id,n=t.title,d=t.images,o=t.variants;return Object(u.jsx)(a.b,{to:"/item/".concat(r),children:Object(u.jsxs)("div",{className:"w-full p-3 md:m-2 cursor-pointer",children:[Object(u.jsx)("div",{children:(e=d,Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"w-full",src:e[0].src,alt:"product item"})}))}),Object(u.jsxs)("div",{className:"font-light mt-2",children:[Object(u.jsx)("h3",{children:n}),Object(u.jsx)("div",{children:c(o)})]})]})})}))}):Object(u.jsx)(s,{})};var f=function(){var t,e,c=Object(_.f)().id,n=Object(T.b)(),d=Object(T.c)((function(t){return t.reducerFetchProduct.a_product_data})),o=Object(T.c)((function(t){return t.reducerFetchProduct.a_product_fetched})),i=Object(T.c)((function(t){return t.reducerCreateCheckoutId.checkout_id}));return Object(r.useEffect)((function(){n(j(c))}),[n,c]),console.log(d),o?Object(u.jsxs)("div",{className:"max-w-screen-xl",children:[Object(u.jsx)("div",{className:"p-2 m-2 w-20 cursor-pointer",children:Object(u.jsxs)("div",{children:[Object(u.jsx)(a.b,{to:"/",children:"Close"})," "]})}),d&&Object(u.jsxs)("div",{className:"grid md:grid-cols-2 py-4 my-2",children:[Object(u.jsx)("div",{className:"grid md:grid-cols-2 grid-flow-row gap-2",children:(e=d.images,e.map((function(t){return Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"w-full p-2",src:t.src,alt:"product item"})})})))}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"text-2xl my-2",children:d.title}),Object(u.jsx)("div",{children:(t=d.variants,t.map((function(t){var e=t.available,c=t.sku,r=t.title,n=t.price;return e&&Object(u.jsxs)("div",{className:"flex flex-col p-2 bg-gray-100 m-1",children:[Object(u.jsx)("div",{children:r}),Object(u.jsxs)("div",{children:[" Price: ",n]}),Object(u.jsxs)("div",{children:[" SKU: ",c]})]})})))}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{onClick:function(){return n(function(t,e,c){var r=[{variantId:e,quantity:c,customAttributes:[{key:"MyKey",value:"MyValue"}]}];return function(e){e({type:h.actionType.ADDING_TO_CART}),C.checkout.addLineItems(t,r).then((function(t){console.log(t.lineItems),e({type:h.actionType.ADDED_TO_CART,data:t.lineItems})})).catch((function(t){e({type:h.actionType.ADD_TO_CART_ERROR,fetched:!1,error:t})}))}}(i,d.variants[0].id,1))},className:"cursor-pointer p-2 m-2",children:"Add to Cart"})})]})]})]}):Object(u.jsx)(s,{})},p=(c(15),c(13)),E=c(9),b=c.n(E),D=c(11),A=c(27),v=c(28),m=c(34),x=c(33),g=n.a.createContext(),y=l.a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"});r.Component,g.Consumer,c(29),c(30),c(23);var I=function(){var t=Object(T.b)();return Object(r.useEffect)((function(){t((function(t){t({type:h.actionType.CHECKOUT_ID_CREATING}),C.checkout.create().then((function(e){t({type:h.actionType.CHECKOUT_ID_CREATED,data:e.id}),localStorage.checkout||localStorage.setItem("checkout",e.id)})).catch((function(e){t({type:h.actionType.CHECKOUT_ID_CREATE_ERROR,fetched:!1,error:e})}))})),t((function(t){t({type:h.actionType.PRODUCT_START_FETCHING}),C.product.fetchAll().then((function(e){console.log(e),t({type:h.actionType.PRODUCT_FETCHED,data:e})})).catch((function(e){t({type:h.actionType.PRODUCT_FETCH_ERROR,fetched:!1,err:e})}))}))}),[t]),Object(u.jsx)("div",{children:Object(u.jsx)(R,{})})};var U=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(f,{})})};var H=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(a.a,{children:["Shopify shop ",Object(u.jsx)(a.b,{to:"/",children:"Products List"}),Object(u.jsxs)(_.c,{children:[Object(u.jsx)(_.a,{exact:!0,path:"/",children:Object(u.jsx)(I,{})}),Object(u.jsx)(_.a,{path:"/item/:id",children:Object(u.jsx)(U,{})})]})]})})},F=c(18),P=c(31),N=c(32),k=c(5).actionType,w={product_fetching:!1,product_fetched:!1,product_fetch_error:"",product_data:[],product_dataLength:0},G={a_product_fetching:!1,a_product_fetched:!1,a_product_fetch_error:"",a_product_data:[],a_product_dataLength:0},K={checkout_creating:!1,checkout_created:!1,checkout_error:"",checkout_id:""},S={adding_to_cart:!1,added_to_cart:!1,add_to_cart_error:"",cart_items:[]},L=Object(F.b)({reducerFetchAllProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k.PRODUCT_START_FETCHING:return{product_fetching:!0,product_data:[]};case k.PRODUCT_FETCHED:return{product_data:e.data,product_fetched:!0};case k.PRODUCT_FETCH_ERROR:return{product_fetched:!1,product_fetching:!1,product_fetch_error:e.error};default:return t}},reducerFetchProduct:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k.A_PRODUCT_START_FETCHING:return{a_product_fetching:!0,a_product_data:[]};case k.A_PRODUCT_FETCHED:return{a_product_data:e.data,a_product_fetched:!0};case k.A_PRODUCT_FETCH_ERROR:return{a_product_fetched:!1,a_product_fetching:!1,a_product_fetch_error:e.error};default:return t}},reducerCreateCheckoutId:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k.CHECKOUT_ID_CREATING:return{checkout_fetching:!0,checkout_id:""};case k.CHECKOUT_ID_CREATED:return{checkout_id:e.data,checkout_created:!0};case k.CHECKOUT_ID_CREATE_ERROR:return{checkout_created:!1,checkout_error:e.error};default:return t}},reducerAddToCart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k.ADDING_TO_CART:return{adding_to_cart:!0,cart_items:[]};case k.ADDED_TO_CART:return{cart_items:e.data,added_to_cart:!0};case k.ADD_TO_CART_ERROR:return{added_to_cart:!1,add_to_cart_error:e.error};default:return t}}}),M=Object(F.a)(N.a,Object(P.createLogger)()),B=Object(F.c)(L,M);o.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(T.a,{store:B,children:Object(u.jsx)(H,{})})}),document.getElementById("root")),i()}},[[50,1,2]]]);
//# sourceMappingURL=main.512fed99.chunk.js.map