define(["exports","./my-app.js"],function(_exports,_myApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.defaultMemoize=defaultMemoize;_exports.createSelectorCreator=createSelectorCreator;_exports.createStructuredSelector=createStructuredSelector;_exports.cartQuantitySelector=_exports.cartTotalSelector=_exports.cartItemsSelector=_exports.$shopDefault=_exports.addToCartUnsafe=_exports.removeFromCart=_exports.addToCart=_exports.checkout=_exports.getAllProducts=_exports.CHECKOUT_FAILURE=_exports.CHECKOUT_SUCCESS=_exports.REMOVE_FROM_CART=_exports.ADD_TO_CART=_exports.GET_PRODUCTS=_exports.createSelector=_exports.$shop$1=_exports.$shop=_exports.$index=void 0;function _templateObject9_279c9ab06f8c11e9b885c7695e0cd46d(){var data=babelHelpers.taggedTemplateLiteral(["\n        button {\n          border: 2px solid var(--app-dark-text-color);\n          border-radius: 3px;\n          padding: 8px 16px;\n        }\n\n        button:hover {\n          border-color: var(--app-primary-color);\n          color: var(--app-primary-color);\n        }\n\n        .cart,\n        .cart svg {\n          fill: var(--app-primary-color);\n          width: 64px;\n          height: 64px;\n        }\n\n        .circle.small {\n          margin-top: -72px;\n          width: 28px;\n          height: 28px;\n          font-size: 16px;\n          font-weight: bold;\n          line-height: 30px;\n        }\n      "]);_templateObject9_279c9ab06f8c11e9b885c7695e0cd46d=function _templateObject9_279c9ab06f8c11e9b885c7695e0cd46d(){return data};return data}function _templateObject8_279c9ab06f8c11e9b885c7695e0cd46d(){var data=babelHelpers.taggedTemplateLiteral(["\n      <section>\n        <h2>Redux example: shopping cart</h2>\n        <div class=\"cart\">","<div class=\"circle small\">","</div></div>\n        <p>This is a slightly more advanced Redux example, that simulates a\n          shopping cart: getting the products, adding/removing items to the\n          cart, and a checkout action, that can sometimes randomly fail (to\n          simulate where you would add failure handling). </p>\n        <p>This view, as well as its 2 child elements, <code>&lt;shop-products&gt;</code> and\n        <code>&lt;shop-cart&gt;</code> are connected to the Redux store.</p>\n      </section>\n      <section>\n        <h3>Products</h3>\n        <shop-products></shop-products>\n\n        <br>\n        <h3>Your Cart</h3>\n        <shop-cart></shop-cart>\n\n        <div>","</div>\n        <br>\n        <p>\n          <button ?hidden=\"","\" @click=\"","\">\n            Checkout\n          </button>\n        </p>\n      </section>\n    "]);_templateObject8_279c9ab06f8c11e9b885c7695e0cd46d=function _templateObject8_279c9ab06f8c11e9b885c7695e0cd46d(){return data};return data}function _templateObject7_279c9ab06f8c11e9b885c7695e0cd46d(){var data=babelHelpers.taggedTemplateLiteral(["\n        :host {\n          display: block;\n        }\n      "]);_templateObject7_279c9ab06f8c11e9b885c7695e0cd46d=function _templateObject7_279c9ab06f8c11e9b885c7695e0cd46d(){return data};return data}function _templateObject6_279c9ab06f8c11e9b885c7695e0cd46d(){var data=babelHelpers.taggedTemplateLiteral(["\n          <div>\n            <shop-item .name=\"","\" .amount=\"","\" .price=\"","\"></shop-item>\n            <button\n                @click=\"","\"\n                data-index=\"","\"\n                title=\"Remove from cart\">\n              ","\n            </button>\n          </div>\n        "]);_templateObject6_279c9ab06f8c11e9b885c7695e0cd46d=function _templateObject6_279c9ab06f8c11e9b885c7695e0cd46d(){return data};return data}function _templateObject5_279c9ab06f8c11e9b885c7695e0cd46d(){var data=babelHelpers.taggedTemplateLiteral(["\n      <p ?hidden=\"","\">Please add some products to cart.</p>\n      ","\n      <p ?hidden=\"","\"><b>Total:</b> ","</p>\n    "]);_templateObject5_279c9ab06f8c11e9b885c7695e0cd46d=function _templateObject5_279c9ab06f8c11e9b885c7695e0cd46d(){return data};return data}function _templateObject4_279c9ab06f8c11e9b885c7695e0cd46d(){var data=babelHelpers.taggedTemplateLiteral(["\n        :host {\n          display: block;\n        }\n      "]);_templateObject4_279c9ab06f8c11e9b885c7695e0cd46d=function _templateObject4_279c9ab06f8c11e9b885c7695e0cd46d(){return data};return data}function _templateObject3_279c9ab06f8c11e9b885c7695e0cd46d(){var data=babelHelpers.taggedTemplateLiteral(["\n          <div>\n            <shop-item name=\"","\" amount=\"","\" price=\"","\"></shop-item>\n            <button\n                .disabled=\"","\"\n                @click=\"","\"\n                data-index=\"","\"\n                title=\"","\">\n              ","\n            </button>\n          </div>\n        "]);_templateObject3_279c9ab06f8c11e9b885c7695e0cd46d=function _templateObject3_279c9ab06f8c11e9b885c7695e0cd46d(){return data};return data}function _templateObject2_279c9ab06f8c11e9b885c7695e0cd46d(){var data=babelHelpers.taggedTemplateLiteral(["\n      ","\n    "]);_templateObject2_279c9ab06f8c11e9b885c7695e0cd46d=function _templateObject2_279c9ab06f8c11e9b885c7695e0cd46d(){return data};return data}function _templateObject_279c9ab06f8c11e9b885c7695e0cd46d(){var data=babelHelpers.taggedTemplateLiteral(["\n      ",":\n      <span ?hidden=\"","\">"," * </span>\n      $","\n      </span>\n    "]);_templateObject_279c9ab06f8c11e9b885c7695e0cd46d=function _templateObject_279c9ab06f8c11e9b885c7695e0cd46d(){return data};return data}function defaultEqualityCheck(a,b){return a===b}function areArgumentsShallowlyEqual(equalityCheck,prev,next){if(null===prev||null===next||prev.length!==next.length){return!1}for(var length=prev.length,i=0;i<length;i++){if(!equalityCheck(prev[i],next[i])){return!1}}return!0}function defaultMemoize(func){var equalityCheck=1<arguments.length&&arguments[1]!==void 0?arguments[1]:defaultEqualityCheck,lastArgs=null,lastResult=null;return function(){if(!areArgumentsShallowlyEqual(equalityCheck,lastArgs,arguments)){lastResult=func.apply(null,arguments)}lastArgs=arguments;return lastResult}}function getDependencies(funcs){var dependencies=Array.isArray(funcs[0])?funcs[0]:funcs;if(!dependencies.every(function(dep){return"function"===typeof dep})){var dependencyTypes=dependencies.map(function(dep){return babelHelpers.typeof(dep)}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+dependencyTypes+"]"))}return dependencies}function createSelectorCreator(memoize){for(var _len=arguments.length,memoizeOptions=Array(1<_len?_len-1:0),_key=1;_key<_len;_key++){memoizeOptions[_key-1]=arguments[_key]}return function(){for(var _len2=arguments.length,funcs=Array(_len2),_key2=0;_key2<_len2;_key2++){funcs[_key2]=arguments[_key2]}var recomputations=0,resultFunc=funcs.pop(),dependencies=getDependencies(funcs),memoizedResultFunc=memoize.apply(void 0,[function(){recomputations++;return resultFunc.apply(null,arguments)}].concat(memoizeOptions)),selector=memoize(function(){for(var params=[],length=dependencies.length,i=0;i<length;i++){params.push(dependencies[i].apply(null,arguments))}return memoizedResultFunc.apply(null,params)});selector.resultFunc=resultFunc;selector.dependencies=dependencies;selector.recomputations=function(){return recomputations};selector.resetRecomputations=function(){return recomputations=0};return selector}}var createSelector=createSelectorCreator(defaultMemoize);_exports.createSelector=createSelector;function createStructuredSelector(selectors){var selectorCreator=1<arguments.length&&arguments[1]!==void 0?arguments[1]:createSelector;if("object"!==babelHelpers.typeof(selectors)){throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+babelHelpers.typeof(selectors)))}var objectKeys=Object.keys(selectors);return selectorCreator(objectKeys.map(function(key){return selectors[key]}),function(){for(var _len3=arguments.length,values=Array(_len3),_key3=0;_key3<_len3;_key3++){values[_key3]=arguments[_key3]}return values.reduce(function(composition,value,index){composition[objectKeys[index]]=value;return composition},{})})}var index={defaultMemoize:defaultMemoize,createSelectorCreator:createSelectorCreator,createSelector:createSelector,createStructuredSelector:createStructuredSelector};_exports.$index=index;var GET_PRODUCTS="GET_PRODUCTS";_exports.GET_PRODUCTS=GET_PRODUCTS;var ADD_TO_CART="ADD_TO_CART";_exports.ADD_TO_CART=ADD_TO_CART;var REMOVE_FROM_CART="REMOVE_FROM_CART";_exports.REMOVE_FROM_CART=REMOVE_FROM_CART;var CHECKOUT_SUCCESS="CHECKOUT_SUCCESS";_exports.CHECKOUT_SUCCESS=CHECKOUT_SUCCESS;var CHECKOUT_FAILURE="CHECKOUT_FAILURE";_exports.CHECKOUT_FAILURE=CHECKOUT_FAILURE;var PRODUCT_LIST=[{id:1,title:"Cabot Creamery Extra Sharp Cheddar Cheese",price:10.99,inventory:2},{id:2,title:"Cowgirl Creamery Mt. Tam Cheese",price:29.99,inventory:10},{id:3,title:"Tillamook Medium Cheddar Cheese",price:8.99,inventory:5},{id:4,title:"Point Reyes Bay Blue Cheese",price:24.99,inventory:7},{id:5,title:"Shepherd's Halloumi Cheese",price:11.99,inventory:3}],getAllProducts=function getAllProducts(){return function(dispatch){var products=PRODUCT_LIST.reduce(function(obj,product){obj[product.id]=product;return obj},{});dispatch({type:GET_PRODUCTS,products:products})}};_exports.getAllProducts=getAllProducts;var checkout=function checkout(){return function(dispatch){var flip=Math.floor(2*Math.random());if(0===flip){dispatch({type:CHECKOUT_FAILURE})}else{dispatch({type:CHECKOUT_SUCCESS})}}};_exports.checkout=checkout;var addToCart=function addToCart(productId){return function(dispatch,getState){var state=getState();if(0<state.shop.products[productId].inventory){dispatch(addToCartUnsafe(productId))}}};_exports.addToCart=addToCart;var removeFromCart=function removeFromCart(productId){return{type:REMOVE_FROM_CART,productId:productId}};_exports.removeFromCart=removeFromCart;var addToCartUnsafe=function addToCartUnsafe(productId){return{type:ADD_TO_CART,productId:productId}};_exports.addToCartUnsafe=addToCartUnsafe;var shop={GET_PRODUCTS:GET_PRODUCTS,ADD_TO_CART:ADD_TO_CART,REMOVE_FROM_CART:REMOVE_FROM_CART,CHECKOUT_SUCCESS:CHECKOUT_SUCCESS,CHECKOUT_FAILURE:CHECKOUT_FAILURE,getAllProducts:getAllProducts,checkout:checkout,addToCart:addToCart,removeFromCart:removeFromCart,addToCartUnsafe:addToCartUnsafe};_exports.$shop=shop;var INITIAL_STATE={products:{},cart:{},error:""},shop$1=function shop$1(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:INITIAL_STATE,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case GET_PRODUCTS:return babelHelpers.objectSpread({},state,{products:action.products});case ADD_TO_CART:case REMOVE_FROM_CART:case CHECKOUT_SUCCESS:return babelHelpers.objectSpread({},state,{products:products(state.products,action),cart:cart(state.cart,action),error:""});case CHECKOUT_FAILURE:return babelHelpers.objectSpread({},state,{error:"Checkout failed. Please try again"});default:return state;}};_exports.$shopDefault=shop$1;var products=function products(state,action){switch(action.type){case ADD_TO_CART:case REMOVE_FROM_CART:var productId=action.productId;return babelHelpers.objectSpread({},state,babelHelpers.defineProperty({},productId,product(state[productId],action)));default:return state;}},product=function product(state,action){switch(action.type){case ADD_TO_CART:return babelHelpers.objectSpread({},state,{inventory:state.inventory-1});case REMOVE_FROM_CART:return babelHelpers.objectSpread({},state,{inventory:state.inventory+1});default:return state;}},cart=function cart(state,action){switch(action.type){case ADD_TO_CART:var addId=action.productId;return babelHelpers.objectSpread({},state,babelHelpers.defineProperty({},addId,(state[addId]||0)+1));case REMOVE_FROM_CART:var removeId=action.productId,quantity=(state[removeId]||0)-1;if(0>=quantity){var newState=babelHelpers.objectSpread({},state);delete newState[removeId];return newState}else{return babelHelpers.objectSpread({},state,babelHelpers.defineProperty({},removeId,quantity))}case CHECKOUT_SUCCESS:return{};default:return state;}},cartSelector=function cartSelector(state){return state.shop.cart},productsSelector=function productsSelector(state){return state.shop.products},cartItemsSelector=createSelector(cartSelector,productsSelector,function(cart,products){return Object.keys(cart).map(function(id){var item=products[id];return{id:item.id,title:item.title,amount:cart[id],price:item.price}})});_exports.cartItemsSelector=cartItemsSelector;var cartTotalSelector=createSelector(cartSelector,productsSelector,function(cart,products){var total=0;Object.keys(cart).forEach(function(id){var item=products[id];total+=item.price*cart[id]});return Math.round(100*total)/100});_exports.cartTotalSelector=cartTotalSelector;var cartQuantitySelector=createSelector(cartSelector,function(cart){var num=0;Object.keys(cart).forEach(function(id){num+=cart[id]});return num});_exports.cartQuantitySelector=cartQuantitySelector;var shop$2={default:shop$1,cartItemsSelector:cartItemsSelector,cartTotalSelector:cartTotalSelector,cartQuantitySelector:cartQuantitySelector};_exports.$shop$1=shop$2;var ShopItem=function(_LitElement){babelHelpers.inherits(ShopItem,_LitElement);function ShopItem(){babelHelpers.classCallCheck(this,ShopItem);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopItem).apply(this,arguments))}babelHelpers.createClass(ShopItem,[{key:"render",value:function render(){return(0,_myApp.html)(_templateObject_279c9ab06f8c11e9b885c7695e0cd46d(),this.name,0===this.amount,this.amount,this.price)}}],[{key:"properties",get:function get(){return{name:{type:String},amount:{type:String},price:{type:String}}}}]);return ShopItem}(_myApp.LitElement);window.customElements.define("shop-item",ShopItem);var ShopProducts=function(_connect){babelHelpers.inherits(ShopProducts,_connect);function ShopProducts(){babelHelpers.classCallCheck(this,ShopProducts);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopProducts).apply(this,arguments))}babelHelpers.createClass(ShopProducts,[{key:"render",value:function render(){var _this=this;return(0,_myApp.html)(_templateObject2_279c9ab06f8c11e9b885c7695e0cd46d(),Object.keys(this._products).map(function(key){var item=_this._products[key];return(0,_myApp.html)(_templateObject3_279c9ab06f8c11e9b885c7695e0cd46d(),item.title,item.inventory,item.price,0===item.inventory,_this._addButtonClicked,item.id,0===item.inventory?"Sold out":"Add to cart",0===item.inventory?"Sold out":_myApp.addToCartIcon)}))}},{key:"firstUpdated",value:function firstUpdated(){_myApp.store.dispatch(getAllProducts())}},{key:"_addButtonClicked",value:function _addButtonClicked(e){_myApp.store.dispatch(addToCart(e.currentTarget.dataset.index))}},{key:"stateChanged",value:function stateChanged(state){this._products=state.shop.products}}],[{key:"properties",get:function get(){return{_products:{type:Object}}}},{key:"styles",get:function get(){return[_myApp.ButtonSharedStyles,(0,_myApp.css)(_templateObject4_279c9ab06f8c11e9b885c7695e0cd46d())]}}]);return ShopProducts}((0,_myApp.connect)(_myApp.store)(_myApp.LitElement));window.customElements.define("shop-products",ShopProducts);var ShopCart=function(_connect2){babelHelpers.inherits(ShopCart,_connect2);function ShopCart(){babelHelpers.classCallCheck(this,ShopCart);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopCart).apply(this,arguments))}babelHelpers.createClass(ShopCart,[{key:"render",value:function render(){var _this2=this;return(0,_myApp.html)(_templateObject5_279c9ab06f8c11e9b885c7695e0cd46d(),0!==this._items.length,this._items.map(function(item){return(0,_myApp.html)(_templateObject6_279c9ab06f8c11e9b885c7695e0cd46d(),item.title,item.amount,item.price,_this2._removeButtonClicked,item.id,_myApp.removeFromCartIcon)}),!this._items.length,this._total)}},{key:"_removeButtonClicked",value:function _removeButtonClicked(e){_myApp.store.dispatch(removeFromCart(e.currentTarget.dataset.index))}},{key:"stateChanged",value:function stateChanged(state){this._items=cartItemsSelector(state);this._total=cartTotalSelector(state)}}],[{key:"properties",get:function get(){return{_items:{type:Array},_total:{type:Number}}}},{key:"styles",get:function get(){return[_myApp.ButtonSharedStyles,(0,_myApp.css)(_templateObject7_279c9ab06f8c11e9b885c7695e0cd46d())]}}]);return ShopCart}((0,_myApp.connect)(_myApp.store)(_myApp.LitElement));window.customElements.define("shop-cart",ShopCart);_myApp.store.addReducers({shop:shop$1});var MyView3=function(_connect3){babelHelpers.inherits(MyView3,_connect3);function MyView3(){babelHelpers.classCallCheck(this,MyView3);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MyView3).apply(this,arguments))}babelHelpers.createClass(MyView3,[{key:"render",value:function render(){return(0,_myApp.html)(_templateObject8_279c9ab06f8c11e9b885c7695e0cd46d(),_myApp.addToCartIcon,this._quantity,this._error,0==this._quantity,this._checkoutButtonClicked)}},{key:"_checkoutButtonClicked",value:function _checkoutButtonClicked(){_myApp.store.dispatch(checkout())}},{key:"stateChanged",value:function stateChanged(state){this._quantity=cartQuantitySelector(state);this._error=state.shop.error}}],[{key:"properties",get:function get(){return{_quantity:{type:Number},_error:{type:String}}}},{key:"styles",get:function get(){return[_myApp.SharedStyles,_myApp.ButtonSharedStyles,(0,_myApp.css)(_templateObject9_279c9ab06f8c11e9b885c7695e0cd46d())]}}]);return MyView3}((0,_myApp.connect)(_myApp.store)(_myApp.PageViewElement));window.customElements.define("my-view3",MyView3)});