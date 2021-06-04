import React, { Component } from 'react';
import Breadcrumb from "../common/breadcrumb";

class SellerRegistrations extends Component {

    constructor(props) {
        super(props)

    }

    render() {


        return (
            <div>
                <Breadcrumb title={'Seller Registration'} />

                
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
                                        <h3>Seller Details</h3>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Seller Name</label>
                                                <input type="text" className="form-control" id="pname"
                                                    placeholder="Seller Name" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Product Description</label>
                                                <input type="text" className="form-control" id="pdesc"
                                                    placeholder="Product Description" required="" />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Address 1</label>
                                                <input type="text" className="form-control" id="pname"
                                                    placeholder="Address 1" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Address 2</label>
                                                <input type="text" className="form-control" id="pdesc"
                                                    placeholder="Address 2" />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">City</label>
                                                <input type="text" className="form-control" id="pname"
                                                    placeholder="City" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">State</label>
                                                <input type="text" className="form-control" id="pdesc"
                                                    placeholder="State" required="" />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Country</label>
                                                <input type="text" className="form-control" id="pname"
                                                    placeholder="Country" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Email</label>
                                                <input type="text" className="form-control" id="pdesc"
                                                    placeholder="Email" required="" />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Contact 1</label>
                                                <input type="text" className="form-control" id="pname"
                                                    placeholder="Contact 1" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Contact 2</label>
                                                <input type="text" className="form-control" id="pdesc"
                                                    placeholder="Contact 2" />
                                            </div>

                                            <a href="#" className="btn btn-solid">create Seller</a>
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

export default SellerRegistrations