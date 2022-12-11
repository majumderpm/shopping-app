import React from 'react';
import iconone from '../../assets/icon/icon-1.png';
import icontwo from '../../assets/icon/icon-2.png';
import iconthree from '../../assets/icon/icon-3.png';
import iconfour from '../../assets/icon/icon-4.png';

const Trusted = () => {
    return (
        <>
            <div className='trusted_card'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card mb-3 card_box">
                                <div class="row g-0">
                                    <div class="col-md-4 card_img">
                                        <img src={iconone} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">SUPPORT 24/7</h5>
                                            <p>Delicated 24/7 Support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card mb-3 card_box">
                                <div class="row g-0">
                                    <div class="col-md-4 card_img">
                                        <img src={icontwo} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">EASY RETURNS</h5>
                                            <p>Shop With Confidence</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card mb-3 card_box">
                                <div class="row g-0">
                                    <div class="col-md-4 card_img">
                                        <img src={iconthree} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">CARD PAYMENT</h5>
                                            <p>12 Months Installments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card mb-3 card_box">
                                <div class="row g-0">
                                    <div class="col-md-4 card_img">
                                        <img src={iconfour} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">FREE SHIPPING</h5>
                                            <p>Capped at $50 per order</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Trusted;