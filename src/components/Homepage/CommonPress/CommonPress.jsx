import React from 'react';
import './CommonPress.css';
import {commonPressLeftData,commonPressRightData} from '../../data/CommonPressData';

export default function CommonPress() {
    return (
        <div className="common-press">
            <div className="common-press-content">
                <div className="common-press__title">
                    <span>Dougs est unique</span>
                    <h2>
                    Votre Expert Comptable, mais différent
                    </h2>
                    <p>Voici ce qui rend nos clients heureux et que vous allez adorer :</p>
                </div>
                <div className="common-press__content">
                    <div className="cp__left">
                        {commonPressLeftData.map(item=>(
                            <div className="cp-left__box" key={item.id}>
                                <span>{item.title}</span>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                    <img src="https://www.dougs.fr/images/home/expert-comptable-disponible.svg" alt="cp-center" className="cp__center"/>
                    <div className="cp-right">
                        {commonPressRightData.map(item=>(
                            <div className="cp-right__box" key={item.id}>
                                <span>{item.title}</span>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
