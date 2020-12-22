import React from "react";
import "./index.css";

function Footer() {
    return (
        <footer className='contacts' style={{textAlign: "center"}}>
            <div className='row'>
                <div
                    className='col-sm-12 col-md-12'
                    style={{clear: "both", display: "inline-block"}}>
                    <p>
                        <span className='fa fa-phone'></span> (612) 963-1703
                    </p>
                    <p>
                        <span className='fa fa-envelope'></span>
                        jlcalderonfuentes@gmail.com
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
