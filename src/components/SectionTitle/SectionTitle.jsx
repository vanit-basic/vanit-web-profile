import React, { Component } from 'react';
import propTypes from 'prop-types';

import './SectionTitle.scss';

class SectionTitle extends Component {
    render () {
        const { title, text, color } = this.props;
        return (
            <div className = 'sectionTitle' style = { { color: color || 'black' } }>
                <h1>{title}</h1>
                <div></div>
                <p>{text}</p>
            </div>
        );
    }
}

SectionTitle.propTypes = {
    title: propTypes.string.isRequired,
    text: propTypes.string,
    color: propTypes.string
};

export default SectionTitle;