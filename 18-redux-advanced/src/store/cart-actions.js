import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-5c577-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
      uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Fetched cart data!",
      });
    } catch (error) {}
  };
};

export const sendCartData = (cartData) => {
    return async (dispatch)=> {
        dispatch(
          uiActions.showNotification({
            status: "Pending",
            title: "Sending...",
            message: "Sending cart data!",
          })
        );
        const sendRequest = async () => {
          const response = await fetch(
            "https://react-http-5c577-default-rtdb.firebaseio.com/cart.json",
            {
              method: "PUT",
              body: JSON.stringify({
                items: cartData.items,
                totalQuantity: cartData.totalQuantity,
              }),
            }
          );

          if (!response.ok) {
            throw new Error();
          }
        };
        try {
          await sendRequest();
          dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: "Sent cart data successfull!",
            })
          );
        } catch (error) {
          dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Error!",
              message: "Sent cart data failed!",
            })
          );
        }
        
    };
};