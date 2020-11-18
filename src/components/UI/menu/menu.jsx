import React from 'react'
import './menu.scss'
// import menuPhoto from '../../../photos/menu.png'

const menu = (props) => (
    <div class="menu">
        <div class="menu-text">
            <h2 class="heading-2">Take a Look At Our Pre-designed Cakes</h2>
            <h4 class="heading-4">If you don't want to design your cake or if you need inspriration take a look at over our galary of over 2000 pre-designed cakes and choose from them. you can customize these cakes later in the check out process.</h4>
        </div>
        <div class="menu-cards">
            <div class="card">
                <div class="card_side card_side--front">
                    <div class="card_picture card_picture-1">
                        &nbsp;
                    </div>
                    <div class="card-text">
                        <div class="card-text-heading">
                            <div>
                                <div class="card-text-heading-main">Kids Favorites</div>
                                <div class="card-text-heading-secondary">Including cartoon Charactors and so on</div>
                            </div>
                            <div class="card-text-heading-price">$99+</div>
                        </div>
                        <div class="card-text-details">
                            <p>The price of these cakes start from $99 based on the cake you choose, you will be able to customize each cake and you are welcome to ask us to make it gluten free, peanut free or vegan.</p>
                        </div>
                        <div class="card-text-bottom">
                            {/* <div class="card-text-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <i class="far fa-star"></i>
                            </div> */}
                            <div class="card-text-bottom-add">+</div>
                        </div>
                    </div>
                </div>
                <div class="card_side card_side--back card_side--back-1">
                    <div class="card_cta">
                        <div class="card_price-box card_price-box-1">
                            <p class="card_price-only">See</p>
                            <p class="card_price-value">More</p>
                        </div>
                        {/* <a href="#popup" class="btn btn-primary">+</a> */}
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card_side card_side--front">
                    <div class="card_picture card_picture-2">
                        &nbsp;
                    </div>
                    <div class="card-text">
                        <div class="card-text-heading">
                            <div>
                                <div class="card-text-heading-main">Classic Cakes</div>
                                <div class="card-text-heading-secondary">100% customizable</div>
                            </div>
                            <div class="card-text-heading-price">$79+</div>
                        </div>
                        <div class="card-text-details">
                            <p>You can choose from a veriety of classic cakes designs and you will be able to customize the toppings, flavors, etc. Also you are welcome to ask us to make it gluten free, peanut free or vegan for you.</p>
                        </div>
                        <div class="card-text-bottom">
                            {/* <div class="card-text-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div> */}
                            <div class="card-text-bottom-add">+</div>
                        </div>
                    </div>
                    
                </div>
                <div class="card_side card_side--back card_side--back-2">
                    <div class="card_cta">
                        <div class="card_price-box card_price-box-2">
                            <p class="card_price-only">See</p>
                            <p class="card_price-value">More</p>
                        </div>
                        {/* <a href="#popup" class="btn btn-primary">+</a> */}
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card_side card_side--front">
                    <div class="card_picture card_picture-3">
                        &nbsp;
                    </div>
                    <div class="card-text">
                        <div class="card-text-heading">
                            <div>
                                <div class="card-text-heading-main">Special Desserts</div>
                                <div class="card-text-heading-secondary">A Variety of Home-Made Style Desserts</div>
                            </div>
                            <div class="card-text-heading-price">$59+</div>
                        </div>
                        <div class="card-text-details">
                            <p>Choose from a veriety of cheese cakes, tarts, etc. Just like our other products you can customize your order. You are welcome to ask us to make it gluten free, peanut free or vegan for you. </p>
                        </div>
                        <div class="card-text-bottom">
                            {/* <div class="card-text-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div> */}
                            <div class="card-text-bottom-add">+</div>
                        </div>
                    </div>
                    
                </div>
                <div class="card_side card_side--back card_side--back-1">
                    <div class="card_cta">
                        <div class="card_price-box card_price-box-1">
                            <p class="card_price-only">See</p>
                            <p class="card_price-value">More</p>
                        </div>
                        {/* <a href="#popup" class="btn btn-primary">+</a> */}
                    </div>
                </div>
            </div>
        </div>
        <a href="#popup" class="btn btn-secondary menu-btn">See All ...</a>
    </div>
);

export default menu;