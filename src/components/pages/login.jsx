import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import Breadcrumb from "../common/breadcrumb";
import axios from 'axios';
import { faFacebookF, faFacebookSquare, faGooglePlus, faInstagramSquare} from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Login extends Component {

    state = {
        email: '',
        password: '',
        redirect: false
    }

    constructor (props) {
        super (props)

    }

    submitLogin(e){
        e.preventDefault();
        const userObj = {
            email: this.state.email,
            password: this.state.password
        };
        const jsonObj = JSON.stringify(userObj);

        this.setState({email: '',password: ''});
        
        //send to the back end
        //the api prefix is at the bottom of package.json in the proxy field
        axios.post('/api/v1/auth/login',jsonObj,{headers: {'Content-Type':'application/json'}})
            .then(res => {
                //only the user's id and a json web token are currently returned
                console.log('login res: ',res);
                sessionStorage.setItem('userId',res.data.id);
                sessionStorage.setItem('token',res.data.token);

                //redirect to /home using react router dom
                this.setState({redirect: true});
            })
            .catch(err => console.log(err));
    }

    changeData(e){
        console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value});
    }

    render (){
        if (this.state.redirect !== false) {
            return <Redirect to={'/home'} />
        }

        if (this.state.alreadyLoggedIn !== false) {
            return <Redirect to={'/home'} />
        }

        return (
            <div>
                <Breadcrumb title={'Login'}/>
                
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Login</h3>
                                <div className="theme-card" onSubmit={this.submitLogin.bind(this)}>
                                    <form className="theme-form">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" name="email" placeholder="Email"
                                                   value={this.state.email} required="" onChange={this.changeData.bind(this)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">Password</label>
                                            <input type="password" className="form-control" id="review" name="password"
                                                   value={this.state.password} placeholder="Enter your password" required="" onChange={this.changeData.bind(this)}/>
                                        </div>
                                        <input type="submit" className="btn btn-solid" value="Login"/>

                                        <a href={sessionStorage.getItem('googleAuthUrl')} className="btn btn-lg btn-danger"><FontAwesomeIcon icon={faGooglePlus} /> Register with Google+</a>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>New Customer</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Create A Account</h6>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It
                                        allows you to be able to order from our shop. To start shopping click
                                        register.</p>
                                    <a href="#" className="btn btn-solid">Create an Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Login