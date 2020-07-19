import React from 'react'
import styles from './steps.module.scss'

const steps = (props) => (
    <div className={styles.steps} >
        <div className={styles.text}>
            <h2 class="heading-2">how it works</h2>
            <h4 class="heading-4">The process is a piece of cake! just follow these 3 steps.</h4>
        </div>
        <div className={styles.cards}>
            <div className={styles.box}>
                <i className="fas fa-hand-point-up"></i>
                <h3 class="heading-3">Design/choose your cake</h3>
                <h5 class="heading-5">Use our 3D modeling software to design your cake (it is very easy and fun to use!) or choose one from our galary.</h5>
            </div>
            <div className={styles.box}>
                <i class="fas fa-cart-arrow-down"></i>
                <h3 class="heading-3">Place your order</h3>
                <h5 class="heading-5">Make the specifications you want (like asking for a nut free cake) and choose the time and location of delivery.</h5>
            </div>
            <div className={styles.box}>
                <i class="fas fa-drumstick-bite"></i>
                <h3 class="heading-3">Enjoy your cake</h3>
                <h5 class="heading-5">Receive your cake on the time you choose and enjoy your party and cake. Don't forget to come back and rate the order.</h5>
            </div>
        </div>
    </div>
);

export default steps;