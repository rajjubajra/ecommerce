import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();


const client = Client.buildClient({
  storefrontAccessToken: 'cc92551596409162e6f510c8efd7f0b0',
  domain: 'yw-t-shirt.myshopify.com',
});



class ShopProvider extends Component {

  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    removedItem: {}
  };

  componentDidMount() {
    // this.createCheckout();

    //Check if localStorage has a checkout_id saved
    if (localStorage.yw_store_checkout) {
      this.fetchCheckout(localStorage.yw_store_checkout);
    } else {
      this.createCheckout();
    }
    //if there is no checkout_id in localStorage then we will create a new checkout

    //else fetch the checkout from shopify
  }

  /**
   * Store checkout id into localstorage
   */
  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("yw_store_checkout", checkout.id);
    await this.setState({ checkout: checkout });
  };

  /**
   * 
   * Fetch Checkout 
   */
  fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout: checkout });
      })
      .catch((err) => console.log(err));
  };

  /**
   * 
   * Add Item to checkout
   */
  addItemToCheckout = async (variantId, quantity) => {

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10)}];
    
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    
    this.setState({ checkout: checkout });
    console.log(checkout);

    this.openCart();
  };

  /**
   * Remove Item from checkout
   */
  removeItemFromCheckout = async (checkoutId, lineItemIdsRemove) => {
    
      const lineItemIdsToRemove = [lineItemIdsRemove];

      // Remove an item from the checkout
      client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove).then((checkout) => {
        // Do something with the updated checkout
        console.log(checkout.lineItems); // Checkout with line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' removed
      });

      
  }



  /**
   * Fetch All Products
   */
  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  /**
   * 
   * Fetch single product
   */
  fetchProductWithId = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({ product: product });
    //console.log(JSON.stringify(product));

    return product;
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };
  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  
  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithId: this.fetchProductWithId,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemToCheckout: this.addItemToCheckout,
          removeItem: this.removeItem,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;