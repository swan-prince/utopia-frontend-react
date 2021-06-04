import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import { Link } from "react-router-dom";

class ProductReviews extends Component {
  render() {
    var reviews = this.props.reviews.map((review) => (
      <tr>
        <th>Name</th>
        <td>{review.name}</td>
        <th>Date</th>
        <td>{review.date}</td>
        <th>Ratings</th>
        <td>{review.rating}</td>
        <th>Note</th>
        <td>{review.note}</td>
      </tr>
    ));
    return (
      <section className="tab-product m-0">
        <div className="row">
          <div className="col-sm-12 col-lg-12">
            <Tabs className="tab-content nav-material">
              <TabList className="nav nav-tabs nav-material">
                <Tab className="nav-item">
                  <span className="nav-link active">
                    <i className="icofont icofont-ui-home" />
                    Product Reviews
                  </span>
                  <div className="material-border" />
                </Tab>

                <Tab className="nav-item">
                  <span className="nav-link">
                    <i className="icofont icofont-contacts" />
                    Write Review
                  </span>
                  <div className="material-border" />
                </Tab>
              </TabList>
              <TabPanel className="tab-pane fade mt-4 show active">
                <table className="table table-striped mb-0">
                  <tbody>
                    {/* <th>Name :</th>
                      <th>Date</th>
                      <div className="media m-0">
                        <label>Rating</label>
                        <div className="media-body ml-3">
                          <div className="rating three-star">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                      <td>Review</td> */}
                    {reviews}
                  </tbody>
                </table>
              </TabPanel>

              <TabPanel>
                <form className="theme-form mt-4">
                  <div className="form-row">
                    <div className="col-md-12 ">
                      <div className="media m-0">
                        <label>Rating</label>
                        <div className="media-body ml-3">
                          <div className="rating three-star">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Your name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="review">Review Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="review"
                        placeholder="Enter your Review Subjects"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="review">Review Title</label>
                      <textarea
                        className="form-control"
                        placeholder="Wrire Your Testimonial Here"
                        id="exampleFormControlTextarea1"
                        rows="6"
                      />
                    </div>
                    <div className="col-md-12">
                      <button className="btn btn-solid" type="submit">
                        Submit YOur Review
                      </button>
                    </div>
                  </div>
                </form>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductReviews;
