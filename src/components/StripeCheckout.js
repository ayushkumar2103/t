import { placeOrder } from "actions/order.action";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

const Stripecheckout = ({ amount }) => {
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(placeOrder(token, amount));
  };
  return (
    <div>
      <StripeCheckout
        shippingAddress
        currency="NPR"
        amount={amount * 100}
        token={tokenHandler}
        stripeKey={
          "pk_test_51KCPGAFopxN4HmvabucaMfmPLxvoauE1r05TrnU0dsjyTBpwcylM5oNULJHyMoXoml2wu9W5rUOa58Pqy1zipDFW00oxlnf1IR"
        }
      >
        <button className="btn btn-danger">Check Out</button>
      </StripeCheckout>
    </div>
  );
};

export default Stripecheckout;
