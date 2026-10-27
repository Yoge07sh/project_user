import { Container, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from './feactures/cart/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart () {
  const { products, totalCost } = useSelector(state => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function deleteBookFromCart (id) {
    dispatch(deleteProduct(id))
  }
  function goToCheckoutPage() {
    navigate('/checkout')
  }
  return (
    <Container>
      <Row>
        <Col>
          <h3 className='mt-3 text-center text-danger'>Shopping Cart</h3>
          <table className='table mt-5'>
            <thead>
              <tr>
                <th>Book Image</th>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Price</th>
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr>
                  <td>
                    <img
                      src={product.bookImage}
                      heigth='30px'
                      width='30px'
                    ></img>
                  </td>
                  <td>{product.bookTittle}</td>
                  <td>{product.authorName}</td>
                  <td>₹ {product.originalPrice}</td>
                  <td>
                    <i
                      className='bi bi-trash text-danger'
                      onClick={() => deleteBookFromCart(product._id)}
                    ></i>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td>Total Cost</td>
                <td colSpan={2}>₹ {totalCost}</td>
              </tr>
            </tbody>
          </table>
              <Button
                style={{ width: '250px', float: 'right' }}
                size='lg'
                variant='warning'
                className='mt-2' onClick={goToCheckoutPage}>
                Procced For Checkout
              </Button>
        </Col>
      </Row>
    </Container>
  )
}
export default Cart
