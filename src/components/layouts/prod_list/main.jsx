import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

// Import custom components
import {
    svgFreeShipping,
    svgservice,
    svgoffer
} from "../../../services/script"
import HeaderOne from "../../common/headers/header-one"
import StoreHeader from "../../common/headers/storeheader"
import FooterOne from "../../common/footers/footer-one"
import ExplorePage from "../../collection/explore-page"

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
                    <title>Utopia | Explore</title>
                    <meta name="description" content="Utopia – eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                {/*Home Slider*/}
                <StoreHeader logoName={'logo.png'} />
                <ExplorePage/>
                <FooterOne />
			</div>
			)


	}
}

export default HomePage;