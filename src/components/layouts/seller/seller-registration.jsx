import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import '../../common/index.scss';
import StoreHeader from "../../common/headers/storeheader"
import FooterOne from "../../common/footers/footer-one"

import SellerRegistrations from "../../pages/sellerRegistration"
class SellerRegistration extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `#`);
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Utopia | Seller Registration</title>
                    <meta name="description" content="Utopia – eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                <StoreHeader logoName={'logo.png'} />
                <SellerRegistrations />
                <FooterOne />
            </div>
        )


    }
}

export default SellerRegistration;