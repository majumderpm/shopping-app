import React from 'react';
import car from '../../assets/images/car.jpg';
import cycle from '../../assets/images/cycle.jpg';
import bus from '../../assets/images/bus.jpg';

const SamilarProduct = () => {
    return (
        <>
            <div className='samiler_area'>

                <div class="container-fluid mt-40">
                    <h2>Samiler Product List</h2>
                    <div class="row mt-30">
                        <div class="col-md-4 col-sm-6">
                            <div class="box7">
                                <img class="pic-1" src={car} alt='' />
                                <div class="box-content">
                                    <h3 class="title">What is Lorem Ipsum</h3>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="box7">
                                <img class="pic-1" src={cycle} alt='' />
                                <div class="box-content">
                                    <h3 class="title">What is Lorem Ipsum</h3>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="box7">
                                <img class="pic-1" src={bus} alt='' />
                                <div class="box-content">
                                    <h3 class="title">What is Lorem Ipsum</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default SamilarProduct;