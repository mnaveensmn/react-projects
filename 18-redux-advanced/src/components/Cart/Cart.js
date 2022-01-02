import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from "react-redux";

const Cart = (props) => {

  const CartItems = useSelector(state=> state.cart.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {CartItems.map((product) => (
          <CartItem
            key={product.id}
            item={{
              id: product.id,
              price: product.price,
              quantity: product.quantity,
              total: product.totalPrice,
              title: product.name,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
