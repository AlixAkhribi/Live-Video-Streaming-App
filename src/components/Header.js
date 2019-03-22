import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="ui secondary pointing menu">
            <div className="item">
                React Live Stream App
            </div>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
            </div>
        </div>
    )
}
