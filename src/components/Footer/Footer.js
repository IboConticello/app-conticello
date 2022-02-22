import React from "react";

import "./Footer.css";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
    <footer className="mt-5 bg-dark text-center text-white">
        <div className="container p-1 pb-1">
            <p className="text-center p-3">Copyright {year} &copy; - WareTech</p>
        </div>
    </footer>
    );
};

export default Footer;