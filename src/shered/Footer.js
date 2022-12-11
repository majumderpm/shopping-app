import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
           <footer class="footer-area">
            <div class="container-fulid">
             
                {/* <div class="newsletter-content-wrap">
                    <div class="row justify-content-between">
                        <div class="col-lg-6">
                            <div class="newsletter-content mb-6 mb-lg-0">
                                <img class="icon-img" src="assets/images/icons/5.png" alt="Icon" />
                                <div class="info">
                                    <h3 class="newsletter-content-title">Newsletter &amp; Get Updates</h3>
                                    <p class="newsletter-content-desc">Sign up for our newsletter to get up-to-date from us</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <form class="newsletter-form ms-lg-6">
                                <input type="email" class="form-control" placeholder="Enter Your Mail" />
                                <button class="btn-submit" type="submit">Send Mail</button>
                            </form>
                        </div>
                    </div>
                </div>
               */}
                <div class="footer-main">
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='content'>
                                <h3>QUICK LINKS</h3>
                                <ul className='f_list'>
                                    <li><Link to="">about</Link></li>
                                    <li><Link to="">blog</Link></li>
                                    <li><Link to="">faq</Link></li>
                                    <li><Link to="">contact</Link></li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='content'>
                                <h3>CATEGORIES</h3>
                                <ul className='f_list'>
                                    <li><Link to="">Electronics</Link></li>
                                    <li><Link to="">shoes</Link></li>
                                    <li><Link to="">watches</Link></li>
                                    <li><Link to="">clothes</Link></li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='content'>
                                <h3>STORE</h3>
                                <ul className='f_list'>
                                    <li><Link to="">Affiliate</Link></li>
                                    <li><Link to="">Sale</Link></li>
                                    <li><Link to="">Discount</Link></li>
                                    <li><Link to="">All Collection</Link></li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='content'>
                                <h3>QUICK LINKS</h3>
                                <ul className='f_list'>
                                    <li>If you have any question. please contact us<Link to="mailto:demo@example.com" className='f_mail'> demo@example.com</Link></li>
                                    <li><Link to=""><i class="fa-solid fa-location-dot"></i></Link>Your address goes here. 123, Address.</li>
                                    <li><Link to=""><i class="fa-solid fa-phone"></i></Link>+ 0 123 456 789</li>                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
             
                <div class="footer-bottom">
                    <p class="copyright">© 2022 create by <i class="fa fa-heart"></i> by <Link to="/"> TIXLY</Link></p>
                    
                </div>
              
            </div>
        </footer>
        </>
    );
};

export default Footer;