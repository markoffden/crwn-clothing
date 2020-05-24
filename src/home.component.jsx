import React from 'react';

import './home.styles.scss';

const Home = () => (
    <div className='page home'>
        <ul className='directory-menu'>
            <li className='menu-item'>
                <div className='content'>
                    <h3 className='title'>HATS</h3>
                    <p className='subtitle'>SHOP NOW</p>
                </div>
            </li>
            <li className='menu-item'>
                <div className='content'>
                    <h3 className='title'>T-SHIRTS</h3>
                    <p className='subtitle'>SHOP NOW</p>
                </div>
            </li>
            <li className='menu-item'>
                <div className='content'>
                    <h3 className='title'>SNICKERS</h3>
                    <p className='subtitle'>SHOP NOW</p>
                </div>
            </li>
            <li className='menu-item'>
                <div className='content'>
                    <h3 className='title'>MEN</h3>
                    <p className='subtitle'>SHOP NOW</p>
                </div>
            </li>
            <li className='menu-item'>
                <div className='content'>
                    <h3 className='title'>WOMEN</h3>
                    <p className='subtitle'>SHOP NOW</p>
                </div>
            </li>
        </ul>
    </div>
);

export default Home;
