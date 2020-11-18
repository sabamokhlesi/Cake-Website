import React from 'react'
import './features.scss'
import featurePhoto from '../../../photos/feature2.png'

const features = (props) => (
    <div className='features' >
        <h2 class="heading-2">Why Us?</h2>
        <div class="features-box">
            <div class="features-text">
                <i class="fas fa-truck"></i>
                <h4 class="heading-4">Premium Cakes</h4>
                <h5 class="heading-5">We work with the best bakeries in the city. our partner bakeries use the fresh and quality materials to bake the premium quality and delicious cakes that you deserve.</h5>
            </div>
            <div class="features-text">
                <i class="fas fa-undo"></i>
                <h4 class="heading-4">Hygiene Is Our Priority</h4>
                <h5 class="heading-5">Our bakers follow the most strict hygiene principals. Health inspectors visit the bakeries every now and then to check the situation where cake are prepared in.</h5>
            </div>
            <div class="features-text">
                <i class="fas fa-comments"></i>
                <h4 class="heading-4">Reliable Delivery</h4>
                <h5 class="heading-5">We know very well that you need the cakes to be deliverd on time for your special occasion. Our delivery time is guaranteed and cakes are delivered in special refrigereted vans to ensure the freshness of your cake.</h5>
            </div>
            <img src={featurePhoto} alt="why us"/>
        </div>
    </div>
);

export default features;