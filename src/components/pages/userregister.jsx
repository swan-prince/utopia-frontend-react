import React, {Component} from 'react';

import Breadcrumb from "../common/breadcrumb";
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faFacebookSquare, faGooglePlus, faInstagramSquare} from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class UserRegister extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        redirect: false
    }

    constructor (props) {
        super (props)

    }

    submitRegister(e){
        e.preventDefault();
        if(this.state.password === this.state.confirmPassword){
            const userObj = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                phoneNumber: this.state.phoneNumber
            };
            const jsonObj = JSON.stringify(userObj);
    
            this.setState({firstName: '',lastName: '',email: '',password: '',confirmPassword: '',phoneNumber: ''});
            
            //send to the back end
            //the api prefix is at the bottom of package.json in the proxy field
            axios.post('/api/v1/auth/register',jsonObj,{headers: {'Content-Type':'application/json'}})
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
    }

    changeData(e){
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
                <Breadcrumb title={'create account'}/>
                
                
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="theme-card">
                                    <div className="well">
                                        <div className="row justify-content-around">      
                                            <div className="col-md-3 offset-1">
                                                <button className="btn btn-lg btn-primary"><FontAwesomeIcon icon={faFacebookSquare} /> Register with Facebook</button></div>  
                                            <div className="col-md-3 offset-1">
                                                <a href={sessionStorage.getItem('googleAuthUrl')} className="btn btn-lg btn-danger"><FontAwesomeIcon icon={faGooglePlus} /> Register with Google+</a></div>  
                                            <div className="col-md-3 offset-1">
                                                <button className="btn btn-lg btn-info"><FontAwesomeIcon icon={faInstagramSquare} /> Register with Instagram</button></div>  
                                        </div>
                                        <br/>
                                        <div className="row justify-content-around">
                                            <div class="mt-2">
                                                <h4 class="title-inner4"><strong>OR</strong></h4>
                                            </div>
                                        </div>
                                        <br/>
                                    </div>
                                    <form className="theme-form" onSubmit={this.submitRegister.bind(this)}>
                                        <h3>Personal Details</h3>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">First Name</label>
                                                <input type="text" className="form-control" name="firstName" 
                                                id="fname" placeholder="First Name" required="" 
                                                onChange={this.changeData.bind(this)}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Last Name</label>
                                                <input type="text" className="form-control" id="lname"
                                                 name="lastName" placeholder="Last Name" required="" 
                                                 onChange={this.changeData.bind(this)}/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">email</label>
                                                <input type="text" className="form-control" id="email"
                                                  name="email" placeholder="Email" required="" 
                                                  onChange={this.changeData.bind(this)}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="mobile">Mobile Number</label>
                                                <input type="number" className="form-control" id="mobile"
                                                 name="phoneNumber" placeholder="Mobile Number" required="" 
                                                 onChange={this.changeData.bind(this)}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">Password</label>
                                                <input type="password" className="form-control" id="fpassword"
                                                 name="password" placeholder="Enter your password" required="" 
                                                 onChange={this.changeData.bind(this)}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Confirm Password</label>
                                                <input type="password" className="form-control" id="spassword"
                                                 name="confirmPassword" placeholder="Confirm password" required="" 
                                                 onChange={this.changeData.bind(this)}/>
                                            </div>
                                            <a href="#" className="btn btn-solid">create Account</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default UserRegister