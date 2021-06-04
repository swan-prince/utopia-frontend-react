import React, { Component } from 'react';

import Breadcrumb from "../common/breadcrumb";
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faFacebookSquare, faGooglePlus, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProductRegister extends Component {

    constructor(props) {
        super(props)

    }

    render() {


        return (
            <div>
                <Breadcrumb title={'supplier details'} />


                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="theme-card">
                                    <div className="well">

                                        <br />

                                        <br />
                                    </div>
                                    <form className="theme-form">
                                        <h3>Supplier Details</h3>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Company Name</label>
                                                <input type="text" className="form-control" id="cname"
                                                    placeholder="Company Name" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Contact First Name</label>
                                                <input type="text" className="form-control" id="fname"
                                                    placeholder="Contact First Name" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Contact Last Name</label>
                                                <input type="text" className="form-control" id="lname"
                                                    placeholder="Contact Last Name" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="mobile">Contact Title</label>
                                                <input type="text" className="form-control" id="title"
                                                    placeholder="Contact Title" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">Address 1</label>
                                                <input type="text" className="form-control" id="address1"
                                                    placeholder="Address 1" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Address 2</label>
                                                <input type="text" className="form-control" id="address2"
                                                    placeholder="Address 2" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">City</label>
                                                <input type="text" className="form-control" id="city"
                                                    placeholder="City" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">State</label>
                                                <input type="text" className="form-control" id="state"
                                                    placeholder="State" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">Postal Code</label>
                                                <input type="text" className="form-control" id="code"
                                                    placeholder="Postal Code" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Country</label>
                                                <input type="text" className="form-control" id="country"
                                                    placeholder="Country" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">Phone</label>
                                                <input type="text" className="form-control" id="phone"
                                                    placeholder="Phone" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Fax</label>
                                                <input type="text" className="form-control" id="fax"
                                                    placeholder="Fax" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">Email</label>
                                                <input type="text" className="form-control" id="email"
                                                    placeholder="Email" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">URL</label>
                                                <input type="text" className="form-control" id="url"
                                                    placeholder="URL" required="" />
                                            </div><div className="col-md-6">
                                                <label htmlFor="fpassword">Payment Methods</label>
                                                <input type="text" className="form-control" id="pmethod"
                                                    placeholder="Payment Methods" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Discount Type</label>
                                                <input type="text" className="form-control" id="discount"
                                                    placeholder="Discount Type" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">Type Goods</label>
                                                <input type="text" className="form-control" id="tgoods"
                                                    placeholder="Type Goods" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Notes</label>
                                                <input type="text" className="form-control" id="notes"
                                                    placeholder="Notes" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">Discount Available</label>
                                                <input type="text" className="form-control" id="davailable"
                                                    placeholder="Discount Available" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Current Order</label>
                                                <input type="text" className="form-control" id="order"
                                                    placeholder="Current Order" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Logo</label>
                                                <input type="text" className="form-control" id="logo"
                                                    placeholder="Logo" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Customer List</label>
                                                <input type="text" className="form-control" id="clist"
                                                    placeholder="Customer List" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">SizeURL</label>
                                                <input type="text" className="form-control" id="sizeurl"
                                                    placeholder="SizeURL" required="" />
                                            </div>

                                        </div>
                                        <a href="#" className="btn btn-solid">create supplier</a>
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>

            </div >
        )
    }
}

export default ProductRegister