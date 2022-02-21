import React from 'react'
import './Error404.css';
import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div className="body404">
            <div className="container404">
                <h2>Oops! Page not found.</h2>
                <h1>404</h1>
                <p>We can't find the page you're looking for.</p>
                <Link to="/">
                <p className="backHome">Go back home</p>
                </Link>
            </div>
        </div>
    )
}