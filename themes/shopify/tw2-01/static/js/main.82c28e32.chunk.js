(this["webpackJsonpshopify-tw2-01"]=this["webpackJsonpshopify-tw2-01"]||[]).push([[0],{39:function(e,t,c){},5:function(e,t,c){"use strict";c.r(t),c.d(t,"actionType",(function(){return r}));var r={PRODUCT_START_FETCHING:"PRODUCT_START_FETCHING",PRODUCT_FETCHED:"PRODUCT_FETCHED",PRODUCT_FETCH_ERROR:"PRODUCT_FETCH_ERROR",A_PRODUCT_START_FETCHING:"A_PRODUCT_START_FETCHING",A_PRODUCT_FETCHED:"A_PRODUCT_FETCHED",A_PRODUCT_FETCH_ERROR:"A_PRODUCT_FETCH_ERROR",ADDING_TO_CART:"ADDING_TO_CART",ADDED_TO_CART:"ADDED_TO_CART",ADD_TO_CART_ERROR:"ADD_TO_CART_ERROR",CHECKOUT_ID_CREATING:"CHECKOUT_ID_CREATING",CHECKOUT_ID_CREATED:"CHECKOUT_ID_CREATED",CHECKOUT_ID_CREATE_ERROR:"CHECKOUT_ID_CREATE_ERROR"}},50:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),o=c(15),i=c.n(o),d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),r(e),n(e),o(e),i(e)}))},a=(c(39),c(33)),u=c(3),_=c(2);var s=function(){return Object(_.jsx)("div",{children:"Loading..."})},T=c(7),h=c(5),O=c(16),l=c.n(O),C=l.a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"});var j=function(){var e=Object(T.b)(),t=Object(T.c)((function(e){return e.reducerFetchAllProducts.product_data})),c=Object(T.c)((function(e){return e.reducerFetchAllProducts.product_fetched}));return console.log("productts ",t),c?Object(_.jsx)("div",{children:t.map((function(t){var c,r,n=t.id,o=t.title,i=t.descriptionHtml,d=t.images,a=t.variants;return Object(_.jsxs)("div",{onClick:function(){return e((t=n,function(e){e({type:h.actionType.A_PRODUCT_START_FETCHING}),C.product.fetch(t).then((function(t){e({type:h.actionType.A_PRODUCT_FETCHED,data:t})})).catch((function(t){e({type:h.actionType.A_PRODUCT_FETCH_ERROR,fetched:!1,error:t})}))}));var t},className:"border border-gray-300 p-3 m-3",children:[Object(_.jsx)("h3",{children:o}),Object(_.jsx)("div",{children:i}),Object(_.jsx)("div",{children:(r=d,r.map((function(e){return Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:"w-48 p-1",src:e.src,alt:"product item"})})})))}),Object(_.jsx)("div",{children:(c=a,c.map((function(e){var t=e.available,c=e.sku,r=e.title,n=e.price;return t&&Object(_.jsxs)("div",{className:"flex p-2 bg-gray-100 m-1",children:[Object(_.jsx)("p",{children:r}),Object(_.jsxs)("p",{children:[" Price: ",n]}),Object(_.jsxs)("p",{children:[" SKU: ",c]})]})})))})]})}))}):Object(_.jsx)(s,{})};var R=function(){var e,t,c=Object(T.b)(),r=Object(T.c)((function(e){return e.reducerFetchProduct.a_product_data})),n=Object(T.c)((function(e){return e.reducerFetchProduct.a_product_fetched})),o=Object(T.c)((function(e){return e.reducerCreateCheckoutId.checkout_id}));return console.log(r),n?Object(_.jsxs)("div",{className:"w-1/2 m-auto flex flex-col justify-center",children:[Object(_.jsx)("div",{className:"p-2 m-2 w-20 cursor-pointer",children:Object(_.jsx)("div",{children:" Close "})}),r&&Object(_.jsxs)("div",{className:"flex flex-col py-4 my-2 border border-gray-200",children:[Object(_.jsx)("h1",{className:"text-2xl",children:r.title}),Object(_.jsx)("div",{children:(t=r.images,t.map((function(e){return Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:"md:w-1/2 w-full p-1",src:e.src,alt:"product item"})})})))}),Object(_.jsx)("div",{children:(e=r.variants,e.map((function(e){var t=e.available,c=e.sku,r=e.title,n=e.price;return t&&Object(_.jsxs)("div",{className:"flex flex-col p-2 bg-gray-100 m-1",children:[Object(_.jsx)("div",{children:r}),Object(_.jsxs)("div",{children:[" Price: ",n]}),Object(_.jsxs)("div",{children:[" SKU: ",c]})]})})))}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{onClick:function(){return c(function(e,t,c){var r=[{variantId:t,quantity:c,customAttributes:[{key:"MyKey",value:"MyValue"}]}];return function(t){t({type:h.actionType.ADDING_TO_CART}),C.checkout.addLineItems(e,r).then((function(e){console.log(e.lineItems),t({type:h.actionType.ADDED_TO_CART,data:e.lineItems})})).catch((function(e){t({type:h.actionType.ADD_TO_CART_ERROR,fetched:!1,error:e})}))}}(o,r.variants.id,1))},className:"cursor-pointer p-2 m-2",children:"Add to Cart"})})]})]}):Object(_.jsx)(s,{})},p=(c(14),c(12)),f=c(9),E=c.n(f),b=c(10),D=c(25),A=c(26),v=c(34),x=c(32),y=n.a.createContext(),m=l.a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"});r.Component,y.Consumer,c(27),c(28),c(20);var g=function(){var e=Object(T.b)();return Object(r.useEffect)((function(){e((function(e){e({type:h.actionType.CHECKOUT_ID_CREATING}),C.checkout.create().then((function(t){console.log(t),e({type:h.actionType.CHECKOUT_ID_CREATING,data:t.id}),localStorage.checkout||localStorage.setItem("checkout",t.id)})).catch((function(t){e({type:h.actionType.CHECKOUT_ID_CREATE_ERROR,fetched:!1,error:t})}))})),e((function(e){e({type:h.actionType.PRODUCT_START_FETCHING}),C.product.fetchAll().then((function(t){console.log(t),e({type:h.actionType.PRODUCT_FETCHED,data:t})})).catch((function(t){e({type:h.actionType.PRODUCT_FETCH_ERROR,fetched:!1,err:t})}))}))}),[e]),Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Shopify : REDUX "}),Object(_.jsx)("div",{children:Object(_.jsx)(j,{})}),Object(_.jsx)("div",{children:Object(_.jsx)(R,{})})]})};var U=function(){return Object(_.jsxs)("div",{children:["shopify shop",Object(_.jsx)(a.a,{children:Object(_.jsx)(u.b,{children:Object(_.jsx)(g,{})})})]})},H=c(17),I=c(30),F=c(31),P=c(5).actionType,k={product_fetching:!1,product_fetched:!1,product_fetch_error:"",product_data:[],product_dataLength:0},N={a_product_fetching:!1,a_product_fetched:!1,a_product_fetch_error:"",a_product_data:[],a_product_dataLength:0},G={checkout_creating:!1,checkout_created:!1,checkout_error:"",checkout_id:""},K=Object(H.b)({reducerFetchAllProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.PRODUCT_START_FETCHING:return{product_fetching:!0,product_data:[]};case P.PRODUCT_FETCHED:return{product_data:t.data,product_fetched:!0};case P.PRODUCT_FETCH_ERROR:return{product_fetched:!1,product_fetching:!1,product_fetch_error:t.error};default:return e}},reducerFetchProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.A_PRODUCT_START_FETCHING:return{a_product_fetching:!0,a_product_data:[]};case P.A_PRODUCT_FETCHED:return{a_product_data:t.data,a_product_fetched:!0};case P.A_PRODUCT_FETCH_ERROR:return{a_product_fetched:!1,a_product_fetching:!1,a_product_fetch_error:t.error};default:return e}},reducerCreateCheckoutId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.CHECKOUT_ID_CREATING:return{checkout_fetching:!0,checkout_id:""};case P.CHECKOUT_ID_CREATED:return{checkout_id:t.data,checkout_created:!0};case P.CHECKOUT_ID_CREATE_ERROR:return{checkout_created:!1,checkout_error:t.error};default:return e}}}),S=Object(H.a)(F.a,Object(I.createLogger)()),w=Object(H.c)(K,S);i.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(T.a,{store:w,children:Object(_.jsx)(U,{})})}),document.getElementById("root")),d()}},[[50,1,2]]]);
//# sourceMappingURL=main.82c28e32.chunk.js.map