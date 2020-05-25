import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <li className={`menu-item ${size}`}>
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className="background-image"></div>
        <div className='content'>
            <h3 className='title'>{ title.toUpperCase() }</h3>
            <p className='subtitle'>SHOP NOW</p>
        </div>
    </li>
);

export default MenuItem;
