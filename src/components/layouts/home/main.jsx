import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

// Import custom components
import TopCollection from './top-collection';
import SpecialProducts from "../common/products";
import BlogSection from "../common/blogsection";
import Instagram from "../common/instagram";
import LogoBlock from "../common/logo-block";
import {
    svgFreeShipping,
    svgservice,
    svgoffer
} from "../../../services/script"
import HeaderOne from "../../common/headers/header-one"
import StoreHeader from "../../common/headers/storeheader"
import FooterOne from "../../common/footers/footer-one"

import HomeBannerElement from "../../features/theme/home-banners"


class HomePage extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `#` );
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }

	render() {
		return (
			<div>
                <Helmet>
                    <title>Utopia | Home</title>
                    <meta name="description" content="Utopia – eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                {/*Home Slider*/}
                <StoreHeader logoName={'logo.png'} />
                <section className="p-0">
                    <Slider  className="slide-1 home-slider">
                        <div>
                            <div className="home home1 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to fashion</h4>
                                                    <h1>men fashion</h1>
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} className="btn btn-solid">shop now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home2 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to fashion</h4>
                                                    <h1>women fashion</h1>
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} className="btn btn-solid">shop now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>
                {/*Home Section End*/}

                
                {/* Banner of Products starts */}
                <HomeBannerElement/>
                {/* Banner of Products Ends */}

                {/* Full Width Banner starts */}
                <section className="pb-0">
                    <div class="home home12 text-right">
                        <div class="container bg-info">
                            <div class="row">
                                <div class="col">
                                    <div class="contain">
                                        <div>
                                            <h4>furniture sofa</h4>
                                            <h1>harmony sofa</h1>
                                            <a href="#" class="btn btn-solid">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Full Width Banner ends */}

                {/*collection banner*/}
                <section className="pb-0">
                    <div className="container">
                        <div className="row partition2">
                            <div className="col-md-6">
                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}>
                                    <div className="collection-banner p-right text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner1.jpg`} className="img-fluid" alt=""/>
                                            <div className="contain-banner">
                                                <div>
                                                    <h4>save 30%</h4>
                                                    <h2>men</h2>
                                                </div>
                                            </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}>
                                    <div className="collection-banner p-right text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner2.jpg`} className="img-fluid" alt=""/>
                                            <div className="contain-banner">
                                                <div>
                                                    <h4>save 60%</h4>
                                                    <h2>women</h2>
                                                </div>
                                            </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*collection banner end*/}


                {/* Full Width Banner starts */}
                <section className="pb-0">
                    <div class="home home12 text-right">
                        <div class="container bg-secondary">
                            <div class="row">
                                <div class="col">
                                    <div class="contain">
                                        <div>
                                            <h4>furniture sofa</h4>
                                            <h1>harmony sofa</h1>
                                            <a href="#" class="btn btn-solid">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Full Width Banner ends */}

                <TopCollection type={'women'} />

                {/*Parallax banner*/}
                {/* <section className="p-0">
                    <div className="full-banner parallax-banner1 parallax text-center p-left">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="banner-contain">
                                        <h2>2018</h2>
                                        <h3>fashion trends</h3>
                                        <h4>special offer</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/*Parallax banner End*/}

                {/* <SpecialProducts /> */}

                {/*service layout*/}
                <div className="container">
                    <section className="service border-section small-section ">
                        <div className="row">
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                    <div className="media-body">
                                        <h4>free shipping</h4>
                                        <p>free shipping world wide</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                    <div className="media-body">
                                        <h4>24 X 7 service</h4>
                                        <p>online service for new customer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                    <div className="media-body">
                                        <h4>festival offer</h4>
                                        <p>new online special festival offer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/*Blog Section end*/}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="title1 section-t-space">
                                <h4>Recent Story</h4>
                                <h2 className="title-inner1">from the blog</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="blog p-t-0">
                    <BlogSection />
                </section>
                {/*Blog Section End*/}

                {/* <Instagram /> */}

                {/*logo section*/}
                {/* <LogoBlock /> */}
                {/*logo section end*/}

                <FooterOne />


			</div>
			)


	}
}

export default HomePage;