import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
 
  const onlineStatus  = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext)

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg fixed w-[100vw] bg-white z-10">
      <div className="logo-container">
        <img className="w-20 xl:ml-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">online Status : {onlineStatus ? "🟢" : "🔴" }</li>
          <li className="px-4 hover:text-yellow-300"><Link to="/">Home</Link></li>
          <li className="px-4  hover:text-yellow-300"><Link to="/about">About Us</Link></li>
          <li className="px-4  hover:text-yellow-300"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4  hover:text-yellow-300"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4  hover:text-slate-300"><Link to="/Cart">Cart {cartItems.length}</Link></li>
          <li className="px-4 font-semibold">{loggedInUser}</li>
          <button
            className="login  hover:text-yellow-300"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;