
import './tools_navigator.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown91, faArrowUpWideShort, faArrowTurnDown, faCaretDown, faCaretUp, faBiking, faTriangleCircleSquare, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState,createContext,useContext,useCallback,useEffect,useDebugValue,useDeferredValue } from 'react';
const ThemeContext=createContext('light');

var a=2;
const ToolsNavigator = () => {

    
    const [themeValue,setThemeValue]=useState('light')
   const func=()=>{
    console.log(a)
    
   }
    useEffect(() => {
    
       func()
       
        a=a+1
      
    }, [themeValue]);
const theme = useContext(ThemeContext);

function useThemeStatus(){
    useDebugValue(themeValue==='light'?'light':'dark')
    }
    
    const imgGrid = useRef(null)
    const classnam =`${themeValue} tools-navigator`
    const [productImage, setProductImage] = useState('https://sydneytools.com.au/assets/images/brands/4/8/6/486/42ED4EADE7C409CB7E63192D64FB997E1C8A90D735CF3DFB1496642F5E97F47F.png')
    return (
        <ThemeContext.Provider
        value={themeValue}
        >
        <div className={classnam}>
<button
className={themeValue}
onClick={
    ()=>{
       setThemeValue(themeValue==='dark'?'light':'dark')
    }
}
>{theme=='light'?'Dark mode':'Light mode'}</button>

            <div className="image-header center-top">

                <div className="ih-image center-center">
                    <img src="https://sydneytools.com.au/assets/images/brands/4/8/6/486/42ED4EADE7C409CB7E63192D64FB997E1C8A90D735CF3DFB1496642F5E97F47F.png" alt="Sydney Tools" />
                </div>
                <div className="ih-title poppins-bold">
                    <h1>HiKOKI KC36D10PS(HRZ) 18V/36V 5.0Ah/2.5Ah Li-ion Cordless 10pce Combo Kit Including Brushless</h1>
                </div>


            </div>

            <div className="tools-grid-2">

                <div className="image-viewer-grid">
                    <div className='img-wrapper'>
                        <div className="arrow-icon center-center">
                            <FontAwesomeIcon
                                className=''
                                onClick={() => {
                                    imgGrid.current.scrollBy(0, -40);
                                }}
                                icon={faCaretUp} />
                        </div>
                        <div className="images-media-grid" ref={imgGrid}>

                            {
                                toolsProductImg.map((data, index) => (
                                    <div
                                        onClick={() => {
                                            setProductImage(data.img)
                                        }}
                                        className="image-item">
                                        <img src={data.img} alt="" />
                                    </div>
                                ))

                            }

                        </div>
                        <div className="arrow-icon center-center">
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                onClick={() => {
                                    imgGrid.current.scrollBy(0, 40);
                                }}
                            />
                        </div>
                    </div>
                    <div className="image-viewer">
                        <img src={productImage} alt="" />

                    </div>

                </div>
                <div className="cart-grid">
                   <div className="model-number poppins-bold">
                    <span>Item ID: W212782</span>
                    <span>Model: KC36D10PS(HRZ)</span>
                   </div>


                   <div className="cart-price ">
                    <h1 className='poppins-bold'>$2199.
                     <sup>00</sup>   
                    </h1>
                   </div>

                   <div className="cart-desc poppins-regular">
                    <span>or 4 interest-free payments of $549.75 with </span> <button>afterpay <FontAwesomeIcon icon={faBiking}/></button>
                  <FontAwesomeIcon icon={faExclamationCircle}/>
                  <RoundButton/>
                   </div>

                   <div className="coupon">

                    <h1>This product does not incur bonus points</h1>
                   <div className="checkout-btn-container">
                    <button className=' poppins-bold'>Checkout</button>
                   </div>
                   </div>
                </div>

            </div>
        </div>
        </ThemeContext.Provider>
    );
}

export default ToolsNavigator;

const toolsProductImg = [
    {
        img: 'https://sydneytools.com.au/assets/images/products/4/5/6/4/45648/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1/512x512/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1.jpeg'
    },
    {
        img: 'https://sydneytools.com.au/assets/images/redemptions/1/7/0/5/1705/2DBCCDDBF15259D2D0729A2E5ADADD1A5633FC0F6BC3A7C3A134F5C4A2E3A7F8.png'
    },
    {
        img: 'https://sydneytools.com.au/assets/images/products/4/5/6/4/45648/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1/512x512/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1.jpeg'
    },
    {
        img: 'https://sydneytools.com.au/assets/images/products/4/5/6/4/45648/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1/512x512/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1.jpeg'
    },
    {
        img: 'https://sydneytools.com.au/assets/images/products/4/5/6/4/45648/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1/512x512/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1.jpeg'
    },
    {
        img: 'https://sydneytools.com.au/assets/images/products/4/5/6/4/45648/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1/512x512/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1.jpeg'
    },
    {
        img: 'https://sydneytools.com.au/assets/images/products/4/5/6/4/45648/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1/512x512/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1.jpeg'
    },
    {
        img: 'https://sydneytools.com.au/assets/images/products/4/5/6/4/45648/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1/512x512/2FE847C4D7CE8BF4F687BE85C99E2837CE3FAAA87A81258D817AF57158793AD1.jpeg'
    },
]

const RoundButton= ()=>{
    const theme = useContext(ThemeContext);
    return(
        <div className={theme}>
            button
        </div>
    )
}