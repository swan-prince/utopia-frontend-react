import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import Breadcrumb from "../common/breadcrumb";
import axios from 'axios';
import { faFacebookF, faFacebookSquare, faGooglePlus, faInstagramSquare} from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        redirect: false
    }

    constructor (props) {
        super (props)

    }

    submitRegister(e){
        e.preventDefault();
        const userObj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        };
        const jsonObj = JSON.stringify(userObj);

        this.setState({firstName: '',lastName: '',email: '',password: ''});
        
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
                                <h3>create account</h3>
                                <div className="theme-card">
                                    <form className="theme-form" onSubmit={this.submitRegister.bind(this)}>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">First Name</label>
                                                <input type="text" className="form-control" name="firstName" id="fname"
                                                       placeholder="First Name" required="" value={this.state.firstName} onChange={this.changeData.bind(this)}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Last Name</label>
                                                <input type="text" className="form-control" name="lastName" id="lname"
                                                       placeholder="Last Name" required="" value={this.state.lastName} onChange={this.changeData.bind(this)}/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">email</label>
                                                <input type="text" className="form-control" name="email" id="email"
                                                       placeholder="Email" required="" value={this.state.email} onChange={this.changeData.bind(this)}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Password</label>
                                                <input type="password" className="form-control" name="password" id="review"
                                                       placeholder="Enter your password" required="" value={this.state.password} onChange={this.changeData.bind(this)}/>
                                            </div>
                                            <input type="submit" className="btn btn-solid" value="Create an Account"/>

                                            <a href={sessionStorage.getItem('googleAuthUrl')} className="btn btn-lg btn-danger"><FontAwesomeIcon icon={faGooglePlus} /> Register with Google+</a>
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

export default Register