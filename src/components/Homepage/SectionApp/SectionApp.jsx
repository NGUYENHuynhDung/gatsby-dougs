import React from 'react';
import { Link } from "gatsby";
import './SectionApp.css';

export default function SectionApp() {
    return (
        <div className="sec-app">
            <div className="sec-app-content">
                <div className="sec-app__img">
                    <img src="https://www.dougs.fr/static/8eb00add88829e4e87bf8f2157e7fc79/f4094/expert-comptable-mobile.png" alt="sec-app__img1" className="sec-app__img--1"/>
                    <img src="https://www.dougs.fr/static/f8177502916b2218c6e366602c07ddf7/f4094/application-mobile-expertise-comptable-en-ligne.png" alt="sec-app__img2" className="sec-app__img--2"/>
                </div>
                <div className="sec-app__text">
                    <span>Soyez mobile</span>
                    <h2>Votre compta à jour, en quelques minutes, où que vous soyez</h2>
                    <p>Entre deux rendez-vous avec vos clients, ou juste avant de rentrer chez vous, vous gardez un oeil sur votre trésorerie.</p>
                    <p>En quelques minutes seulement, votre compta est à jour et vous pouvez penser à autre chose.</p>
                    <div className="sec-app--dowload">
                        <Link to="/" className="sa-dowload__link">
                            <img src="https://www.dougs.fr/images/home/application-comptable-apple.svg" alt="appStore" className="sa-dowload__img"/>
                            <div className="sa-dowload__text">
                                <span>Télécharger sur</span>
                                <p>App Store</p>
                            </div>
                        </Link>
                        <Link to="/" className="sa-dowload__link">
                            <img src="https://www.dougs.fr/images/home/application-comptable-android.svg" alt="appStore" className="sa-dowload__img"/>
                            <div className="sa-dowload__text">
                                <span>Télécharger sur</span>
                                <p>Google Play</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
