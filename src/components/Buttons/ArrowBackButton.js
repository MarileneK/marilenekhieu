import React from 'react';
import './Buttons.css';
import { useNavigate } from 'react-router-dom';

import { ARROW_BACK_ICON } from '../../data/constants';


export default function ArrowBackButton() {
    const navigate = useNavigate();
    return (
        <div>
            <button
                className="arrow_button"
                onClick={() => navigate(-1)}
            >
                <i className={ARROW_BACK_ICON} />
            </button>
        </div>
    )
}