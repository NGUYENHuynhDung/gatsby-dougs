import React,{useState,useEffect} from "react";
import { Link } from "gatsby";
import './Header.css';
import {menuData} from '../data/MenuData';
import { AiOutlineMenu } from "react-icons/ai";
import {FaPhoneAlt} from "react-icons/fa";


const Header = () => {
  const [navbarClass,setNavbarClass] = useState("nav-bar");

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setNavbarClass("nav-bar scroll");   
    }else{
      setNavbarClass("nav-bar");
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  },[])

  return(
    <nav className={navbarClass}>
      <div className="nav-bar-main">
        <div className="nav-bar__tele">
          <Link to="/">
            <FaPhoneAlt/>
          </Link>
        </div>
        <div className="nav-bar__logo">
            <Link to="/">
              <img src="https://www.dougs.fr/images/header/logo-dougs-expert-comptable-en-ligne.svg" alt="logo_dougs"/>
            </Link>
            <div className="nav-bar__logo--point"></div>
            <div className="nav-bar__logo--tele">
              <Link to="/">
                <FaPhoneAlt/>&nbsp;&nbsp;04 28 29 62 62
              </Link>
              
            </div>
        </div>
        <div className="nav-bar__menu">
          {menuData.map(item=>(
            <div className="nav-bar__menu--element" key={item.id}>
              <Link to={item.link}>{item.title}</Link>
            </div>
          ))}

          <div className="nav-bar__auth">
            <button className="button-auth"><Link to="/">Se Connecter</Link></button>
            <button className="button-auth"><Link className="inscrire" to="/">S'inscrire</Link></button>
          </div>
        </div>
        
        <div className="nav-bar__hamberger">
            <AiOutlineMenu/>
        </div>
      </div>
    </nav>
  )
}

export default Header;
