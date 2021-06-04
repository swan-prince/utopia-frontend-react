import React, { Component } from 'react';

import Breadcrumb from "../common/breadcrumb";
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faFacebookSquare, faGooglePlus, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SimpleReactValidator from 'simple-react-validator'

class ProductRegister extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category: 'stripe',

        }
        this.validator = new SimpleReactValidator();

    }

    render() {


        return (
            <div>
                <Breadcrumb title={'create product'} />


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
                                        <h3>Product Details</h3>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Product Name</label>
                                                <input type="text" className="form-control" id="pname"
                                                    placeholder="Product Name" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Product Description</label>
                                                <input type="text" className="form-control" id="pdesc"
                                                    placeholder="Product Description" required="" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Unit Price</label>
                                                <input type="text" className="form-control" id="unitpirce"
                                                    placeholder="Unit Price" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="mobile">Qunatity Per Unit</label>
                                                <input type="text" className="form-control" id="qunatityperunit"
                                                    placeholder="Qunatity Per Unit" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">Available Size</label>
                                                <input type="text" className="form-control" id="availableSize"
                                                    placeholder="Available Size" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">SKU</label>
                                                <input type="text" className="form-control" id="sku"
                                                    placeholder="SKU" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">IDSKU</label>
                                                <input type="text" className="form-control" id="idsku"
                                                    placeholder="IDSKU" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Vendor Product ID</label>
                                                <input type="text" className="form-control" id="vendorproductid"
                                                    placeholder="Vendor Product ID" required="" />
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Category</label>
                                                <select name="country" className="form-control" value={this.state.category} onChange={this.setStateFromInput}>
                                                    <option>Electronics</option>
                                                    <option>Clothing</option>
                                                </select>
                                                {this.validator.message('Category', this.state.category, 'required')}
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">MSRP</label>
                                                <input type="text" className="form-control" id="msrp"
                                                    placeholder="MSRP" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Size</label>
                                                <input type="text" className="form-control" id="size"
                                                    placeholder="Size" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">Color</label>
                                                <input type="text" className="form-control" id="color"
                                                    placeholder="Color" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Discount</label>
                                                <input type="text" className="form-control" id="discount"
                                                    placeholder="Discount" required="" />
                                            </div><div className="col-md-6">
                                                <label htmlFor="fpassword">Unit Weight</label>
                                                <input type="text" className="form-control" id="unitweight"
                                                    placeholder="Unit Weight" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Units in Stock</label>
                                                <input type="text" className="form-control" id="unitsinstock"
                                                    placeholder="Units in Stock" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">Units on Order</label>
                                                <input type="text" className="form-control" id="unitsonorder"
                                                    placeholder="Units on Order" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="fpassword">Reorder Level</label>
                                                <input type="text" className="form-control" id="reorder"
                                                    placeholder="Reorder Level" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Product Available</label>
                                                <input type="text" className="form-control" id="productavailable"
                                                    placeholder="Product Available" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Discount Available</label>
                                                <input type="text" className="form-control" id="discountavailable"
                                                    placeholder="Discount Available" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Picture</label>
                                                <input type="text" className="form-control" id="picture"
                                                    placeholder="Picture" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Ranking</label>
                                                <input type="text" className="form-control" id="ranking"
                                                    placeholder="Ranking" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Note</label>
                                                <input type="text" className="form-control" id="note"
                                                    placeholder="Note" required="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="spassword">Note</label>
                                                <input type="text" className="form-control" id="note"
                                                    placeholder="Note" required="" />
                                            </div>
                                            <a href="#" className="btn btn-solid">create Product</a>
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

export default ProductRegister