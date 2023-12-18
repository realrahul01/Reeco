import { TiShoppingCart } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
// import { IoIosMenu } from "react-icons/io";
import styles from './Header.module.css'
import { GrMenu } from "react-icons/gr";
import { useState } from "react";



const Header=()=>{
const [isHello,setIsHello] = useState(false)

const toggleHandler = ()=>{
    setIsHello((prev)=> !prev)
}



    return(
        <>
        <div className={styles.nav}>
            <div className={styles.left_nav}>
                <ul>
                    <li className={styles.Reeco}><a href="#">Reeco</a></li>
                    <div className={isHello ? styles.hello : styles.left_navDiv}>
                        <li><a href="#">Store</a></li>
                        <li><a href="#">Orders</a></li>
                        <li><a href="#">Analytics</a></li>
                    </div>
                  
                </ul>
            </div>
            <div className={styles.right_nav}>
                <div className={styles.cartOpt}>
                    <TiShoppingCart />
                    <span>Hello,James</span>
                    <IoIosArrowDown />
                </div>
                <div className={styles.toggleItm}>
                    <label htmlFor="checkbox_toggle"><GrMenu  onClick={toggleHandler} className={styles.menu}/></label>
                    <input type="checkbox" id='checkbox_toggle'/>
                </div>
            </div>
        </div>
        <div className={styles.Below_main}>
            <div className={styles.container}>
                <div className={styles.order}>
                    <p>Orders <MdArrowForwardIos /> Order 32457ABC</p>
                    <p className={styles.orderDt}> Orders 32457ABC</p>
                </div>
            <div className={styles.Below_mainBtn}>
                <button className={styles.btn1}>Back</button>
                <button className={styles.btn2}>Approve order</button> 
            </div>
            </div>
        </div>










        </>
    )
    
}
export default Header;