import React from 'react';
import {wrapperData} from '../../data/WrapperData';
import './Wrapper.css';



export default function Wrapepr() {

    return (
        <div className="wrapper">
            <div className="wrapper-content">
                {wrapperData.map((item)=>(
                    <div className="wrapper-box" key={item.id}>
                        <img src={item.image} alt={item.title} className="wrapper-box__img"/>
                        <div className="wrapper-box__content">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
