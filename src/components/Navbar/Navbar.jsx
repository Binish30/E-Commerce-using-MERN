// import React, { useContext, useRef, useState } from "react";
// import './Navbar.css';
// import logo from '../assets/logo.png';
// import cart_icon from '../assets/cart_icon.png';
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../context/ShopContext";
// import dropdown_icon from '../assets/dropdown_icon.png';

// const Navbar = () => {

//     const [menu, setmenu] = useState("shop");
//     const {getTotalCartItems} = useContext(ShopContext);
//     const menuRef=useRef();

//     const dropdown_toggle=(e)=>{
//         menuRef.current.classList.toggle('nav-menu-visible');
//         e.target.classList.toggle('open');
//     }
    
//     return (
//         <div className="navbar">
//             <div className="nav-logo">
//                 <img src={logo} alt="" />
//                 <p> Shopper</p>
//             </div>
//             <img className="nav-dropdown" onClick={dropdown_toggle} src={dropdown_icon} alt="" />
//             <ul ref={menuRef} className="nav-menu">
//                 <li onClick={()=>{setmenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//                 <li onClick={()=>{setmenu("mens")}}><Link style={{ textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
//                 <li onClick={()=>{setmenu("womens")}}><Link style={{ textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
//                 <li onClick={()=>{setmenu("kids")}}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
//             </ul>

//             <div className="nav-login-cart">
//                 {localStorage.getItem('auth-token')
//                 ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
//                 :<Link to='/login'><button>Login</button></Link>}
//                 <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
//                 <div className="nav-cart-count">{getTotalCartItems()}</div>
//             </div>
//         </div>
//     )
// }

// export default Navbar

import React, { useContext, useRef, useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

// Assets for Admin and Frontend
import adminLogo from "../../assets/nav-logo.svg";
import adminProfile from "../../assets/nav-profile.svg";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import dropdown_icon from "../assets/dropdown_icon.png";

// Context (Only for frontend)
import { ShopContext } from "../../context/ShopContext";

// Navbar Component
const Navbar = ({ isAdmin }) => {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const { getTotalCartItems } = useContext(ShopContext);

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className="navbar">
      {isAdmin ? (
        <>
          <img src={adminLogo} alt="Admin Logo" className="nav-logo" />
          <img src={adminProfile} alt="Admin Profile" className="nav-profile" />
        </>
      ) : (
        <>
          <div className="nav-logo">
            <img src={logo} alt="Shop Logo" />
            <p>Shopper</p>
          </div>
          <img className="nav-dropdown" onClick={dropdownToggle} src={dropdown_icon} alt="Dropdown" />
          <ul ref={menuRef} className="nav-menu">
            <li onClick={() => setMenu("shop")}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}</li>
            <li onClick={() => setMenu("mens")}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : null}</li>
            <li onClick={() => setMenu("womens")}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : null}</li>
            <li onClick={() => setMenu("kids")}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : null}</li>
          </ul>
          <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
              ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
              : <Link to='/login'><button>Login</button></Link>}
            <Link to='/Cart'><img src={cart_icon} alt="Cart Icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
