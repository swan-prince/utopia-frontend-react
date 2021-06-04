import React, {Component} from 'react';
import axios from 'axios';
import Breadcrumb from "../common/breadcrumb";
import StoreBreadcrumb from "../common/storebreadcrumb";
import {Redirect} from 'react-router-dom';
import { faFacebookF, faFacebookSquare, faGooglePlus, faInstagramSquare} from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Login extends Component {

    state = {
        email: '',
        password: '',
        redirect: false,
        alreadyLoggedIn: false,
        googleAuthUrl: ''
    }

    constructor (props) {
        super (props)

    }

    componentDidMount(){
        console.log(sessionStorage)
        if(sessionStorage.getItem('userId')?.length <= 4 || sessionStorage.getItem('userId')?.length === undefined){
            this.setState({alreadyLoggedIn: true});
        }

        //this means the user signed up with google auth, but the return url sent them here
        if(sessionStorage.getItem('googleAuthUrl')?.length > 4 || sessionStorage.getItem('googleAuthUrl')?.length !== undefined){
            //grabs the code query param from the request back from the user logging in with google
            console.log(this.props);
            const { match: { params } } = this.props;

            axios.get(`/api/v1/auth/googlecred/${params.code}`)
                .then(userInfo => {
                    sessionStorage.setItem('userId',userInfo.data.id);
                    sessionStorage.setItem('token',userInfo.data.token);
                    this.setState({redirect: true});
                })
                .catch(err => console.log(err));
        }else if(sessionStorage.getItem('facebookAuthUrl')?.length > 4 || sessionStorage.getItem('facebookAuthUrl')?.length !== undefined){
            const { match: { params } } = this.props;
            const facebookCode = params.code;

            //this means the user signed in to facebook from the register page and the redirect url sent them here
            //this sends the code response from facebook authentication to the node.js backend
            axios.get('/api/v1/auth/facebook/code',{params: {
                facebookCode
            }})
                .then(codeRes => {
                    const facebookToken = codeRes.data.facebookToken;
                    sessionStorage.setItem('facebookToken',facebookToken);

                    //this sends the request to retrieve the user information while logging in or signing up the user on the backend
                    axios.get('/api/v1/auth/facebook/userinfo/',{params: {
                        accessToken: facebookToken
                    }})
                    .then(userInfo => {
                        sessionStorage.setItem('userId',userInfo.data.id);
                        sessionStorage.setItem('token',userInfo.data.token);
                        this.setState({redirect: true});
                    })
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
        }else{
            /*retrieves the google login url for google oauth and sets it
            to sessionStorage since this is the entry point page of the site*/
            axios.get('/api/v1/auth/google')
                .then(res => {
                    console.log('google oauth url register: ',res.data.url);
                    sessionStorage.setItem('googleAuthUrl',res.data.url);
                    this.setState({googleAuthUrl: res.data.url});
                })
                .catch(err => console.log(err));
        }
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
                <StoreBreadcrumb title={'Login'}/>
                
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Already Registered</h3>
                                <div className="theme-card">
                                    <form className="theme-form" onSubmit={this.submitLogin.bind(this)}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" name="email" id="email" placeholder="Email"
                                                   value={this.state.email} required="" onChange={this.changeData.bind(this)}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">Password</label>
                                            <input type="password" className="form-control" name="password" id="review"
                                                   value={this.state.password} placeholder="Enter your password" required="" onChange={this.changeData.bind(this)}/>
                                        </div>
                                        <input type="submit" className="btn btn-solid" value="Login"/>

                                        <a href={this.state.googleAuthUrl} className="btn btn-lg btn-danger"><FontAwesomeIcon icon={faGooglePlus} /> Login with Google+</a>
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
                                    <a href="/register" className="btn btn-solid">Create an Account</a>
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