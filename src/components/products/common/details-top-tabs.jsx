import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import {Link} from 'react-router-dom'

class DetailsTopTabs extends Component {
    render() {
        var itemDescription = this.props.item.description.map((desc) => (
            <tr>
                <th>{desc.property}:</th>
                <td>{desc.value}</td>
            </tr>
        ));
        var details = this.props.item.details;

        var itemSeller = this.props.item.seller;
        return (
            <section className="tab-product m-0">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <Tabs className="tab-content nav-material">
                            <TabList className="nav nav-tabs nav-material">
                                <Tab className="nav-item">
                                    <span className="nav-link active">
                                        <i className="icofont icofont-ui-home" />
                    Description
                  </span>
                                    <div className="material-border" />
                                </Tab>
                                <Tab className="nav-item">
                                    <span className="nav-link">
                                        <i className="icofont icofont-man-in-glasses" />
                    Details
                  </span>
                                    <div className="material-border" />
                                </Tab>

                                <Tab className="nav-item">
                                    <span className="nav-link">
                                        <i className="icofont icofont-contacts" />
                    Seller Details
                  </span>
                                    <div className="material-border" />
                                </Tab>
                            </TabList>
                            <TabPanel className="tab-pane fade mt-4 show active">
                                <table className="table table-striped mb-0">
                                    <tbody>{itemDescription}</tbody>
                                </table>
                            </TabPanel>
                            <TabPanel>
                                <p className="mt-4 p-0">{details}</p>
                            </TabPanel>

                            <TabPanel className="tab-pane fade mt-4 show active">
                                <table className="table table-striped mb-0">
                                    <tbody>
                                        <tr>
                                            <th>Name:</th>
                                            <td>{itemSeller.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Ratings:</th>
                                            <td>{itemSeller.ratings}</td>
                                        </tr>
                                        <tr>
                                            <th>Email:</th>
                                            <td>{itemSeller.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailsTopTabs;
