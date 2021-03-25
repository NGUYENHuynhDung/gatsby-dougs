import React from 'react';
import './Footer.css'
import {FooterData} from '../data/FooterData';
import { Link } from "gatsby";

const Footer = () => (
    <footer className="footer">
        <div className="footer-main">
            <div className="footer__logo">
                <img src="https://www.dougs.fr/images/footer/logo-dougs-expert-comptable-en-ligne.svg" alt="logo_footer"/>
                <div>L'Expert Comptable en ligne qui vous simplifie vraiment la vie.</div>
            </div>
            <div className="footer__content">
                {FooterData.map(box=>(
                    <div className="f-content__box" key={box.id}>
                        <div className="f-content__box--title">
                            {box.title}
                        </div>
                        <div className="f-content__box--elements">
                            {box.content.map(item=>(
                                <div className="fb__element" key={item.id}>
                                    <Link to={item.link}>{item.text}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="footer-rights">
        © 2018 Dougs Compta. Cabinet d'expertise-comptable en ligne enregistré à l’Ordre. Tous droits réservés.
        </div>
    </footer>
)


export default Footer;