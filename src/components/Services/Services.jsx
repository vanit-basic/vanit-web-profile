import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import SectionTitle from '../SectionTitle';

import data from './data';

import './Services.scss';

class Services extends Component {
    render () {
        return (
            <div className='services' id = 'services'>
                <SectionTitle 
                    title = "Services"
                    text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vero quae at consequatur labore ullam minus magni omnis dolorem ut sed corrupti doloribus dolorum et quidem repudiandae soluta, deserunt facilis.'
                    color = '#476569'
                />
                <Grid container className = 'services--container'>
                    {data.map(item => {
                        return <Grid item xl={3} lg={3} md={4} sm={4} xs={6} key = {item.src}>
                            <div className='services--content'>
                                <div className='services--logo'>
                                    <img src = {item.src} alt = {item.alt}/>
                                </div>
                                <div className='services--category'>
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        </Grid>;      
                    })}
                </Grid>
            </div>    
        );
    }
}

export default Services;