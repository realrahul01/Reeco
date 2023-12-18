import styles from './MainPage.module.css'
import { LuPrinter } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, approveStatus, missingUrgent } from '../../features/cartSlice';
import { AiOutlineClose } from "react-icons/ai";
import { changeStatus } from '../../features/cartSlice';
import { closeStatus } from '../../features/cartSlice';
import { GiCheckMark } from "react-icons/gi";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from '../Modals/Modals';
import { useState } from 'react';
import EditModals from '../Modals/EditModals';
import { BiBowlHot } from "react-icons/bi";
import { TbVaccineBottle } from "react-icons/tb";
import { SiLinktree } from "react-icons/si";
import { GiElephantHead } from "react-icons/gi";
import { PiFlowerTulip } from "react-icons/pi";
import { GiMeat } from "react-icons/gi";
import { GiElephant } from "react-icons/gi";
import { GiBurningTree } from "react-icons/gi";



const MainPage=()=>{
const [close,setClose] = useState(false)
const [isEdit, setIsEdit] = useState(false)
const [selectItem,setSelectItem] = useState(null)
const [product,setProduct] = useState({})


const item = useSelector((state)=>state.cart.mock)
const dispatch  = useDispatch()   


const checkHandler=(index)=>{    
    dispatch(changeStatus(index))
    dispatch(approveStatus(index))
}
const closeHandler=(index)=>{
    if(item[index].isApproved){
        alert("Already approved")
    }
    else{
        setClose(true)
        setSelectItem(index) 
    }
}

const HandleClose=()=>{
    setClose(false)
    setIsEdit(false)
}

const yesHandler=()=>{
    dispatch(missingUrgent(selectItem))
    setClose(false)
}
const noHandler=()=>{
    dispatch(closeStatus(selectItem))
    setClose(false)
}

const editHandler=(ele,index)=>{
    if(item[index].isApproved){
        alert('Already approved')
    }else{
        setIsEdit(true)
        setProduct(ele)
    }
}

 
useEffect(()=>{
    axios.get('../../../services/mock.json')
    .then((res)=>dispatch(addCart(res.data)))
},[dispatch])  






    return (
        <>
        {close && (<Modals HandleClose={HandleClose} yesHandler={yesHandler} noHandler={noHandler}/>)}
        {isEdit && (<EditModals HandleClose={HandleClose} product={product}/>)}
            <div className={styles.above_main}>
                <div className={styles.supplyDetails}>
                    <p className={styles.supplyDetailsHead}>supplier</p>
                    <p className={styles.supplyDetailsMain}>East coast fruits & vegitable</p>
                </div>
                <hr className={styles.hrMain} />
                <div className={styles.supplyDetails}>
                    <p className={styles.supplyDetailsHead}>Shipping date</p>
                    <p className={styles.supplyDetailsMain}>Thus,Feb 10</p>
                </div>
                <hr className={styles.hrMain} />
                <div className={styles.supplyDetails}>
                    <p className={styles.supplyDetailsHead}>Total</p>
                    <p className={styles.supplyDetailsMain}>$15,082</p>
                </div>
                <hr className={styles.hrMain} />
                <div className={styles.supplyDetails}>
                    <p className={styles.supplyDetailsHead}>Category</p>
                        <div className={styles.val}>
                            <BiBowlHot />
                            <TbVaccineBottle />
                            <SiLinktree />
                            <GiElephantHead />
                            <PiFlowerTulip />
                            <GiMeat />
                            <GiElephant />
                            <GiBurningTree />
                        </div>
                </div>
                <hr className={styles.hrMain} />
                <div className={styles.supplyDetails}>
                    <p className={styles.supplyDetailsHead}>Department</p>
                    <p className={styles.supplyDetailsMain}>300-444-678</p>
                </div>
                <hr className={styles.hrMain} />
                <div className={styles.supplyDetails}>
                    <p className={styles.supplyDetailsHead}>Status</p>
                    <p className={styles.supplyDetailsMain}>Awaiting your approval</p>
                </div>               
            </div>           
            <div className={styles.below_main}>
                <div className={styles.main_nav}>
                    <div className={styles.leftMain_nav}>
                        <input type='text' placeholder='search...'/>
                        <CiSearch className={styles.searchBar}/>
                    </div>
                    <div className={styles.rightMain_nav}>
                        <button className={styles.backBtn}>Add Item</button>
                        <LuPrinter className={styles.printer} />
                    </div>
                </div>
                <div className={styles.main_content}>

<Table striped bordered hover responsive={true}>
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      
        {item.map((ele,index)=> {
            const individualTotal = ele.Price * ele.Quantity;

            return(

            <>
            <tr>
                <td><img className={styles.walImg} src = {ele.Images} alt="error" /></td>
                <td>{ele.Product}</td>
                <td>{ele.Brand}</td>
                <td>${ele.Price}</td>
                <td>{ele.Quantity}</td>
                <td>${individualTotal}</td>
                <td className={styles.statusWd}>
                        {ele.Status ? <span  className={styles.approved}>Approved</span> : ""} 
                        {ele.Missing ? <span className={styles.missing}>Missing</span> : ""}
                        {ele.UrgentMissing ? <span className={styles.UrgentMissing}> Missing - Urgent </span> : ''}
                        {ele.QuantityUpdated ? <span className={styles.approved}>Quantity Updated</span> : ''}
                        {ele.PriceUpdated ? <span className={styles.approved}>Price Updated</span> : ''}
                    <div className={styles.btnOpt}>
                        <GiCheckMark className={ele.Status? styles.arrow: ''} onClick={()=>checkHandler(index)}/>
                        <AiOutlineClose className={ele.UrgentMissing? styles.UM : styles.cross} onClick={()=>closeHandler(index)}/>
                        <span onClick={()=>editHandler(ele,index)}>Edit</span>
                    </div>

                </td>
                </tr>

                </>
            )
          
        })}
        
      </tbody>
    </Table>



                
                </div>
                
            </div>
        
        
        </>
    )
}
export default MainPage;