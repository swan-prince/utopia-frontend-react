import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

// Import custom components
import {Slider3} from "../../../services/script"
import Trading from "./tranding"
import Special from "../common/special"
import {
    svgFreeShipping,
    svgservice,
    svgoffer
} from "../../../services/script"
import HeaderTwo from "../../common/headers/header-two"
import FooterOne from "../../common/footers/footer-one"
import ThemeSettings from "../../common/theme-settings"
import StoreLogin from '../../pages/storelogin';
import FooterUpdated from "../../aarontest/footerUpdated"
class Login extends Component {

    
    componentDidMount() {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }
    render(){
        return (
            <div>
                <Helmet>
                    <title>Utopia | Login</title>
                </Helmet>
                <StoreLogin/>
                {/* <ThemeSettings/> */}
                {/* <FooterOne logoName={'logo.png'} /> */}
                <FooterUpdated />
            </div>
            
        )
    }
}


export default Login