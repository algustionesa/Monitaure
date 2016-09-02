import React, { PropTypes } from 'react';

import LoginForm from '../User/Login/Component';
import SignupForm from '../User/Signup/Container';

const HomepageComponent = ({ popin, open }) => (
    <div className="page front" id="page-container">
        {popin}
        <header className="header">
            <h1 className="logo">
                <img src="/images/logo.svg" width="264" height="39" alt="Monitaure - Monitoring for the masses" />
            </h1>
            <nav className="top-nav">
                <ul>
                    <li>
                        <a href="#_">About us</a>
                    </li>
                    <li>
                        <a href="#_">Contact</a>
                    </li>
                    <li>
                        <a
                            href="#_"
                            className="button button-empty button-round"
                            onClick={(e) => { e.preventDefault(); open('login'); }}
                        >Log in</a>
                    </li>
                </ul>
            </nav>
        </header>
        <main className="main">
            <section className="hp-section desk-section">
                <div className="wrapper">
                    <h2>Monitoring for the masses</h2>
                    <h3>A simple and hassle-free server monitoring dashboard</h3>
                    <a
                        className="button button-round button-huge"
                        href="#_"
                        onClick={(e) => { e.preventDefault(); open('signup'); }}
                    >Sign up</a>
                </div>
            </section>
        </main>
    </div>
);

HomepageComponent.propTypes = {
    popin: PropTypes.element,
    open: PropTypes.func.isRequired,
};

const HomepageController = ({ openPopover = {}, open, close }) => {
    console.log(openPopover);
    let popin = null;
    if (openPopover.isOpen === 'login') {
        popin = <LoginForm close={close} />;
    } else if (openPopover.isOpen === 'signup') {
        popin = <SignupForm close={close} />;
    }

    return <HomepageComponent popin={popin} open={open} />;
};

HomepageController.propTypes = {
    isOpen: PropTypes.object,
    popin: PropTypes.element,
    open: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
};

export default HomepageController;
