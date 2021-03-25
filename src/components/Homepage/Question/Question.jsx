import React from 'react';
import './Question.css';
import {questions} from '../../data/Questions';

const Question = () => (
    <div className="section-questions">
        <div className="question">
            <div className="question__title">
            Dougs, votre expert comptable en ligne
            </div>
            <div className="question__content">
                {questions.map(item =>(
                    <div className="question__content--element" key={item.id}>
                        <div className="q-content-ele__title">{item.title}</div>
                        <div className="q-content-ele__content">{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default Question;
