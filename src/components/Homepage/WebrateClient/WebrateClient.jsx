import React from 'react';
import './WebrateClient.css';
import { Link } from "gatsby";

export default function WebrateClient() {
    return (
        <div className="webrate">
            <div className="webrate-content">
                <div className="webrate__left">
                    <h2>Depuis 2015, nous aidons les entrepreneurs à vivre de leur passion. Aujourd’hui, une communauté de plus de 4500 clients nous fait confiance.</h2>
                    <Link to="/">Tester maintenant !</Link>
                    <p>30 jours d'essai sans engagement</p>
                </div>
                <div className="webrate__right">
                    <div className="webrate__right-box">
                        <img src="https://www.dougs.fr/images/temoignage/4a1-temoignage/icn-google.svg" alt="wr-box__logo" className="wr-box__logo"/>
                        <span className="wr-box__note">4.5/5</span>
                        <div className="wr-box__rate">
                            <svg  width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FBBC05" d="M24.289 8.57l-8.058-.747-3.2-7.432a.645.645 0 00-1.187 0l-3.2 7.432-8.058.748a.646.646 0 00-.367 1.128l6.08 5.34-1.78 7.895a.646.646 0 00.96.697l6.958-4.131 6.959 4.13a.646.646 0 00.96-.696l-1.78-7.894 6.08-5.341a.646.646 0 00-.367-1.128V8.57z"></path></svg>
                            <svg  width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FBBC05" d="M24.289 8.57l-8.058-.747-3.2-7.432a.645.645 0 00-1.187 0l-3.2 7.432-8.058.748a.646.646 0 00-.367 1.128l6.08 5.34-1.78 7.895a.646.646 0 00.96.697l6.958-4.131 6.959 4.13a.646.646 0 00.96-.696l-1.78-7.894 6.08-5.341a.646.646 0 00-.367-1.128V8.57z"></path></svg>
                            <svg  width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FBBC05" d="M24.289 8.57l-8.058-.747-3.2-7.432a.645.645 0 00-1.187 0l-3.2 7.432-8.058.748a.646.646 0 00-.367 1.128l6.08 5.34-1.78 7.895a.646.646 0 00.96.697l6.958-4.131 6.959 4.13a.646.646 0 00.96-.696l-1.78-7.894 6.08-5.341a.646.646 0 00-.367-1.128V8.57z"></path></svg>
                            <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FBBC05" d="M24.289 8.57l-8.058-.747-3.2-7.432a.645.645 0 00-1.187 0l-3.2 7.432-8.058.748a.646.646 0 00-.367 1.128l6.08 5.34-1.78 7.895a.646.646 0 00.96.697l6.958-4.131 6.959 4.13a.646.646 0 00.96-.696l-1.78-7.894 6.08-5.341a.646.646 0 00-.367-1.128V8.57z"></path></svg>
                            <svg  width="26" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FBBC05" opacity=".3" d="M25.115 9.36l-8.058-.747-3.201-7.432a.646.646 0 00-1.186 0l-3.2 7.432-8.059.748a.646.646 0 00-.366 1.128l6.08 5.34-1.78 7.895a.646.646 0 00.96.697l6.958-4.131 6.958 4.131a.646.646 0 00.96-.697L19.4 15.83l6.08-5.341a.646.646 0 00-.366-1.128l.001-.001z"></path><path fill="#FBBC05" d="M13.263.79s-.369-.13-.593.39l-3.2 7.433-8.059.748a.646.646 0 00-.366 1.128l6.08 5.34-1.78 7.895a.646.646 0 00.96.697l6.958-4.131 6.958 4.131-3.698-2.196-3.26-1.935V.79z"></path></svg>
                        </div>
                        <p>Basé sur + de 350 avis</p>
                        <Link to="/" className="wr-box__plus">Voir tous les avis</Link>
                    </div>
                    <div className="webrate__right-box">
                        <img src="https://www.dougs.fr/images/temoignage/4a1-temoignage/icn-trustpilot.svg" alt="wr-box__logo" className="wr-box__logo"/>
                        <span className="wr-box__note">4.5/5</span>
                        <div className="wr-box__rate">
                            <svg  width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#2DA976" d="M24.289 8.57l-8.058-.747-3.2-7.432a.645.645 0 00-1.187 0l-3.2 7.432-8.058.748a.646.646 0 00-.367 1.128l6.08 5.34-1.78 7.895a.646.646 0 00.96.697l6.958-4.131 6.959 4.13a.646.646 0 00.96-.696l-1.78-7.894 6.08-5.341a.646.646 0 00-.367-1.128V8.57z"></path></svg>
                            <svg  width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#2DA976" d="M24.289 8.57l-8.058-.747-3.2-7.432a.645.645 0 00-1.187 0l-3.2 7.432-8.058.748a.646.646 0 00-.367 1.128l6.08 5.34-1.78 7.895a.646.646 0 00.96.697l6.958-4.131 6.959 4.13a.646.646 0 00.96-.696l-1.78-7.894 6.08-5.341a.646.646 0 00-.367-1.128V8.57z"></path></svg>
                            <svg  width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#2DA976" d="M24.289 8.57l-8.058-.747-3.2-7.432a.645.645 0 00-1.187 0l-3.2 7.432-8.058.748a.646.646 0 00-.367 1.128l6.08 5.34-1.78 7.895a.646.646 0 00.96.697l6.958-4.131 6.959 4.13a.646.646 0 00.96-.696l-1.78-7.894 6.08-5.341a.646.646 0 00-.367-1.128V8.57z"></path></svg>
                            <svg  width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#2DA976" d="M24.289 8.57l-8.058-.747-3.2-7.432a.645.645 0 00-1.187 0l-3.2 7.432-8.058.748a.646.646 0 00-.367 1.128l6.08 5.34-1.78 7.895a.646.646 0 00.96.697l6.958-4.131 6.959 4.13a.646.646 0 00.96-.696l-1.78-7.894 6.08-5.341a.646.646 0 00-.367-1.128V8.57z"></path></svg>
                            <svg  width="26" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#2DA976" opacity=".3" d="M25.115 9.36l-8.058-.747-3.201-7.432a.646.646 0 00-1.186 0l-3.2 7.432-8.059.748a.646.646 0 00-.366 1.128l6.08 5.34-1.78 7.895a.646.646 0 00.96.697l6.958-4.131 6.958 4.131a.646.646 0 00.96-.697L19.4 15.83l6.08-5.341a.646.646 0 00-.366-1.128l.001-.001z"></path><path fill="#2DA976" d="M13.263.79s-.369-.13-.593.39l-3.2 7.433-8.059.748a.646.646 0 00-.366 1.128l6.08 5.34-1.78 7.895a.646.646 0 00.96.697l6.958-4.131 6.958 4.131-3.698-2.196-3.26-1.935V.79z"></path></svg>
                        </div>
                        <p>Basé sur + de 150 avis</p>
                        <Link to="/" className="wr-box__plus">Voir tous les avis</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
