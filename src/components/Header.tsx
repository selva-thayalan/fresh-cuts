import { Link } from "react-router-dom";
import "../styles/components/Header.scss";
import { useCart } from "../context/CartContext";
import CountIndicator from "./common/CountIndicator";

const Header = () => {
    const { items } = useCart();

    return(
        <div className="header-cont">
            <div className="company-name-cont">
                <a className="no-default-style" href="/">
                    <p className="company-name">Fresh Cuts</p>
                </a>
            </div>
            {/* <div className="search-box-cont">
                <div className="search-box-wrap">
                    <input type="text" placeholder="Search" className="search-input" />
                    <button className="close-search-btn"></button>
                    <button className="search-enter-btn"></button>
                </div>
            </div> */}
            <div className="links-cont">
                <Link className="no-default-style" to={`account`}>
                    <div className="header-link"><i className="fa-solid fa-user"></i></div></Link>
                <Link className="no-default-style" to={`cart`}>
                    <div className="header-link">
                        <i className="fa-solid fa-cart-shopping">
                            {items.length > 0 && <CountIndicator count={items.length} size="medium" /> }
                        </i>
                    </div></Link>
            </div>
        </div>
    )
}

export default Header;