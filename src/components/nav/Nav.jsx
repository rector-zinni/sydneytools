import './nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './logo_flat.svg'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Nav = () => {
    return (


        <div className="nav center-center">
<div className="nav-img">
    <img src={logo} alt="" />
    
</div>

<div className="nav-cart end-end poppins-bold">
    
   <FontAwesomeIcon icon={faCartShopping}/>
   <span>$0.00</span>
</div>
        </div>
      );
}
 
export default Nav;