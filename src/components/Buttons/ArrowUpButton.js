import React from 'react';
import './Buttons.css';

import { ARROW_UP_ICON } from '../../data/constants';

export default function ArrowUp() {
    return (
        <div>
            <a href="#up" class="arrow_button">
                <i class={ARROW_UP_ICON}></i>
            </a>
        </div>
    )
}
