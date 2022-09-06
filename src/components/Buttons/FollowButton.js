import React from 'react';
import { Link } from 'react-router-dom';

export default function FollowButton() {
    return (
        <div id='follow-me-button'>
            <Link to='' className="follow_icon">
                Follow me...
                <i className="fas fa-walking"></i>
            </Link>
        </div>
    )
}