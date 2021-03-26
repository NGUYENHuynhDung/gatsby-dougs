import React from 'react';
import './Hero.css';
import { Link } from "gatsby";
import {BsFillCaretRightFill} from 'react-icons/bs';

export default function Hero() {
    return (
        <div className="hero-sections">
            <div className="hero-content">
                <div className="hero-left">
                    <div className="hero-left__title">
                    L’expert-comptable en ligne qui vous simplifie vraiment la vie
                    </div>
                    <div className="hero-left__note">
                    Aucune saisie manuelle. Conseils fantastiques. Sans engagement.
                    </div>
                    <div className="hero-left__acces">
                        <Link className="hero-left__acces--button" to="/">Essai gratuit</Link>
                        <div className="hero-left__acces--text">
                        Dès&nbsp;&nbsp;<span>49</span> <sup>€ HT</sup>/mois
                        </div>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-right__image">
                        <img src="https://www.dougs.fr/static/c203fded5add7e96a284d9fd817ac86b/f731e/sarah-expert-comptable-dougs-en-ligne.png" alt="hero_image"/>
                    </div>
                    <div className="hero-right__keywords">
                        <div className="keywords-box box1">#ENTREPRENEUR</div>
                        <div className="keywords-box box2">#BILAN</div>
                        <div className="keywords-box box3">#CONSEILS</div>
                    </div>
                </div>
                <Link className="hero-button__button" to="/"><BsFillCaretRightFill/>&nbsp;Voir la vidéo</Link>
            </div>
        </div>
    )
}
