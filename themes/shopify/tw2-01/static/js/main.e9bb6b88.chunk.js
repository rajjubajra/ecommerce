(this["webpackJsonpshopify-tw2-01"]=this["webpackJsonpshopify-tw2-01"]||[]).push([[0],{19:function(t,e,c){"use strict";c.r(e),c.d(e,"actionType",(function(){return r}));var r={PRODUCT_START_FETCHING:"PRODUCT_START_FETCHING",PRODUCT_FETCHED:"PRODUCT_FETCHED",PRODUCT_FETCH_ERROR:"PRODUCT_FETCH_ERROR"}},39:function(t,e,c){},50:function(t,e,c){"use strict";c.r(e);var r=c(1),n=c.n(r),o=c(14),a=c.n(o),d=(c(39),c(33)),s=c(3),u=c(8),i=c(11),h=c(7),f=c.n(h),T=c(9),p=c(24),_=c(25),O=c(34),b=c(32),j=c(15),C=c.n(j),R=c(2),l=n.a.createContext(),E=C.a.buildClient({storefrontAccessToken:"cc92551596409162e6f510c8efd7f0b0",domain:"yw-t-shirt.myshopify.com"});r.Component,l.Consumer;c(26),c(27),c(20);var y=c(19),D=C.a.buildClient({domain:"your-shop-name.myshopify.com",storefrontAccessToken:"your-storefront-access-token"}),g=c(13);var v=function(){var t=Object(g.b)(),e=Object(g.c)((function(t){return t.reducerFetchAllProducts}));console.log(e);var c=Object(r.useState)(""),n=Object(u.a)(c,2);return n[0],n[1],Object(r.useEffect)((function(){t((function(t){t({type:y.actionType.PRODUCT_START_FETCHING}),D.product.fetchAll().then((function(t){console.log(t)}))}))}),[t]),Object(R.jsx)("div",{children:Object(R.jsx)("h1",{children:"Shopify : REDUX "})})};var m=function(){return Object(R.jsxs)("div",{children:["shopify shop",Object(R.jsx)(d.a,{children:Object(R.jsx)(s.b,{children:Object(R.jsx)(v,{})})})]})},F=c(16),P=c(30),U=c(31),H=c(19).actionType,x={product_fetching:!1,product_fetched:!1,product_fetch_error:"",product_data:[],product_dataLength:0},A=Object(F.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case H.PRODUCT_START_FETCHING:return{fetching:!0,product_data:[]};case H.PRODUCT_FETCHED:return{product_data:e.data,product_fetched:!0,product_dataLength:e.data.data.length};case H.PRODUCT_FETCH_ERROR:return{product_fetched:!1,product_fetching:!1,product_fetch_error:e.error};default:return t}})),w=Object(F.a)(U.a,Object(P.createLogger)()),S=Object(F.c)(A,w);a.a.render(Object(R.jsx)(g.a,{store:S,children:Object(R.jsx)(m,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.e9bb6b88.chunk.js.map