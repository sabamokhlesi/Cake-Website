import React from 'react'
import styles from './story.module.scss'
import storyPhoto from '../../../photos/story.png'

const story = (props) => (
    <div className={styles.story} >
        <div className={styles.infos}>
            <div className={styles.box}>
                <i className="far fa-clock"></i>
                <h3 className="heading-3">every day 10am/11pm</h3>
                <h5>Customer Support</h5>
            </div>
            <div className={styles.box}>
                <i className="fas fa-map-marker-alt"></i>
                <h3 className="heading-3">Available in 10 cities</h3>
                <h5>and growing</h5>
            </div>
            <div className={styles.box}>
                <i class="fas fa-birthday-cake"></i>
                <h3 className="heading-3">Build the cake you love</h3>
                <h5>100% customizable</h5>
            </div>
        </div>
        <div className={styles.storyBox}>
            <img src={storyPhoto} alt="our story"/>
            <div className={styles.storyText}>
                <h2 className='heading-2'>Who We Are</h2>
                <p>We are an online cake ordering service that work with the top bakeries of the city to offer you premium cakes. You can use our 3D modeling sofware to make and design the 3D model of the cake you love and our bakers will prepare it for you. we will deliver your cake in your desired time and location. Also you can choose from over 2000 pre-designed cakes that we offer in our website's galary.</p>
            </div>
        </div>
    </div>
);

export default story;