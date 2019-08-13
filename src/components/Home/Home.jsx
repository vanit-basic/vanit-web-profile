import React, { Component } from 'react';

import PrimarySearchAppBar from './../Navbar/Navbar';

import './Home.scss';

class Home extends Component {
    render () {     
        return (
            <>
            <PrimarySearchAppBar />
            <div className="home" ref = {this.myRef} id = 'home'>
                <div>
                    <h1>We make IT happen</h1>
                    <div className = 'line'></div>
                    <div className = 'pulse'>
                        <a href = '#services'><i className="pulse--icon fa fa-angle-double-down"></i></a>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default Home;