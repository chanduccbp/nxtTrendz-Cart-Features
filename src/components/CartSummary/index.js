// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0

      cartList.forEach(eachItem => {
        totalPrice += eachItem.quantity * eachItem.price
      })

      return (
        <div className="cart-summary">
          <h1 className="total-pice-head">
            Order Total:{' '}
            <span className="total-price-text">Rs {totalPrice}/-</span>
          </h1>
          <p className="items-in-cart-para">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-butt">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
