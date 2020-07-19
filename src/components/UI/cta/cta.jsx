import React from 'react'
import './cta.scss'

const cta = (props) => (
    <div className='cta' >
        <div class="cta-text">
            <h2 class="heading-2">Are You Excited To Build Your Cake?</h2>
            <h4 class="heading-4">We Are Excited Too! You Are Just A Few Clicks Away...</h4>
            <button class="cta-btn">
                <span class="cta-btn-visible">Start making Your Cake</span> 
                <span class="cta-btn-invisible">It's Gonna Be Fun!</span>
            </button>
        </div>
    </div>
);

export default cta;