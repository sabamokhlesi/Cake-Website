import React from 'react'
import './footer.scss'
import footerPhoto1 from '../../../photos/footer1.png'
import footerPhoto2 from '../../../photos/footer2.png'

const footer = (props) => (
    <div class="footer" >
        <img src={footerPhoto2} alt="footer"/>
        <div className='footer-legal'>
            <ul>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Story</a></li>
                <li><a href="/">Steps</a></li>
                <li><a href="/">Register</a></li>
                <li><a href="/">About</a></li>
            </ul>
            <p>All Rights Reserved For <span>Saba Mokhlesi</span> 2020</p>
        </div>
        <img src={footerPhoto1} alt="footer"/>
    </div>
);

export default footer;