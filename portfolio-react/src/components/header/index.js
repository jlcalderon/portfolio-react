import React from "react";
import "./index.css";
function Header() {
    //Set state

    //Handler functions

    //Render
    return (
        <div>
            <div className='row'>
                <div className='col-sm-12 col-md-12'>
                    <header className='main-heading'>
                        <h4>Hey Friends I'm</h4>
                        <h1 className='title'>Jorge Calderon</h1>
                    </header>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-md-12'>
                    <nav
                        className='navbar navbar-expand-lg navbar-dark navigation'
                        style={{backgroundColor:"#808080", position: "sticky" }}>
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-toggle='collapse'
                            data-target='#navbarNav'
                            aria-controls='navbarNav'
                            aria-expanded='false'
                            aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className='navbar-nav'>
                                <li className='nav-item active'>
                                    <h4>
                                        <a className='nav-link' href='#about'>
                                            About me
                                            <span className='sr-only'>
                                                (current)
                                            </span>
                                        </a>
                                    </h4>
                                </li>
                                <li className='nav-item'>
                                    <h4>
                                        <a className='nav-link' href='#portfolio'>
                                            Portfolio
                                        </a>
                                    </h4>
                                </li>
                                <li className='nav-item'>
                                    <h4>
                                        <a className='nav-link' href='#contacts'>
                                            Contacts
                                        </a>
                                    </h4>
                                </li>
                                <li className='nav-item'>
                                    <h4>
                                        <a
                                            className='nav-link'
                                            target='_blank'
                                            href='./assets/file/JORGE_CALDERON_RESUME.pdf'>
                                            My Resume
                                        </a>
                                    </h4>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
