/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal';
import styles from './EditModals.module.css'
import walnut from '../../images/product-img.png'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, priceUpdated, quantityStatus } from '../../features/cartSlice';
import {useState} from 'react'


function EditModals({HandleClose,product}) {   
const [quantity, setQuantity] = useState(product.Quantity) 
const ind = product.Id 
console.log(ind)
const dispatch = useDispatch()
const pro = useSelector((state)=>state.cart.mock)
console.log(pro)


const incrementHandler=(index)=>{
  setQuantity(quantity + 1)
  // dispatch(increment(index))
  dispatch(quantityStatus(index))
}

const decrementHandler=(index)=>{
  if(quantity > 1){
    setQuantity(quantity - 1)
    // dispatch(decrement(index))
    dispatch(priceUpdated(index))
  }
}

const saveHandler=(index)=>{
  dispatch(increment({index,quantity}))
  dispatch(decrement({index,quantity}))
  HandleClose()
}


  return (
    <div>
      <Modal centered show={true} onHide={HandleClose}>
        <Modal.Header closeButton className={styles.modal_content}>
          <h6>Chicken Breast Fillests,Boneless Marinated 6 Ounce Raw, Invivid...</h6>
        </Modal.Header>

        <Modal.Body className={styles.modal_body}>
          <p>American Roland</p>

        <div className={styles.container}> 
        <div>
            <img src={walnut} alt="error" className={styles.walnut}/>
        </div>
        <div className={styles.edit_rightContainer}>
            <div>
                <p>Price($)</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <div className={styles.editMain}>
                <p className={styles.priceVal}><span>{product.Price}</span></p>
                <p>
                    <button onClick={()=>decrementHandler(ind)} className={styles.btnPlus}>-</button>
                    <span>{quantity}</span>
                    <button onClick={()=>incrementHandler(ind)} className={styles.btnminus}>+</button>
                </p>
                <p>$ {product.Price * quantity} </p>
            </div>
        </div>
        </div>

        <div>
          <h6>Choose reason</h6>
          <div className={styles.category}>
            <span>Missing product</span>
            <span>Quantity is not the same</span>
            <span>Price is not the same</span>
            <span>Other</span>
          </div>
        </div>


        </Modal.Body>

        <Modal.Footer className={styles.modal_footer}>
          <button onClick={()=>HandleClose()} className={styles.cancel}>Cancel</button>
          <button onClick={()=>saveHandler(ind)} className={styles.send}>Send</button>
        </Modal.Footer>
       
      </Modal>
    </div>
  );
}

export default EditModals;