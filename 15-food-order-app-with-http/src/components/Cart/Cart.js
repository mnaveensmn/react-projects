import { Fragment, useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import useHttp from '../../hooks/use-http';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [didSumit,setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckOut(true) 
  }

  const submitOrderHandler = (userData) => {
    setIsSubmitting(true);
    sendTaskRequest({
      url: "https://react-http-5c577-default-rtdb.firebaseio.com//orders.json",
      method: "POST",
      body: { user: userData, orderedItems: cartCtx.items },
      headers: {
        'Content-Type': 'application/json',
      }
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.resetCart();
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );


  const modelAction = <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>;

  const cartModelContent = <Fragment>
    {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckOut && modelAction}
  </Fragment>;

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = <p>Successfully sent the order!</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSumit && cartModelContent}
      {isSubmitting && isSubmittingModalContent}
      {didSumit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
