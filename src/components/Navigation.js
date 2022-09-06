import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div id='nav'>
            <div id='item_nav_1'>
                <Link to='/projects' className='link_style'>PROJECTS</Link>
            </div>

            <div id='item_nav_2'>
                <Link to='/about' className='link_style'>ABOUT</Link>
            </div>

            <div id='item_nav_3'>
                <Link to='/contact' className='link_style'>CONTACT</Link>
            </div>
        </div>
    )
}
