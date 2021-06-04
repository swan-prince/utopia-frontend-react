import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { blue } from '@material-ui/core/colors';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
//import { Link } from 'react-router';
import { Link } from 'react-router-dom';

import HomePage from "../layouts/home/main";

const footerUpdated = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');

  const onEntered = () => setStatus('Opened');

  const onExiting = () => setStatus('Closing...');

  const onExited = () => setStatus('Closed');

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
          <table style={{backgroundColor: "#D0E1F9", color : 'White', width : '100%',minHeight:"60px" }}>
             <tbody>
                 <tr>
                
                 <td style={{width : '30%', textAlign:"center"}}>
                      
                     </td>
                    
                 </tr>
             </tbody>
         </table>
<table style={{backgroundColor: "#4D648D", color : 'White', width : '100%',minHeight:"60px" }}>
             <tbody>
                

          <tr style={{fontWeight: "bold",cursor:"pointer", fontSize: "17px",height:"60px"}} onClick={toggle}>
              <td style={{ width : '25%'}} ></td>
              <td style={{ width : '20%'}} >Get To Know Us</td>
              <td style={{ width : '20%'}}>Make Money with Us</td>
              <td style={{ width : '20%'}}>Let Us Help You</td>
              <td style={{ width : '15%'}}></td>
          </tr>
          <tr style={{alignContent:"top"}}>
              <td></td>
              <td>
              <Collapse isOpen={collapse}>
              <div>&nbsp;</div>
              <div> <Link  style={{color : 'White'}}to="/About_Us">About Us</Link></div>
              <div><Link style={{color : 'White'}} to="/Careers">Careers</Link></div>
              <div><Link style={{color : 'White'}} to="/Corporate_Information">Corporate Information</Link></div>
              <div><Link style={{color : 'White'}} to="/Press_Releases">Press Releases</Link></div>
              <div>&nbsp;</div>
              </Collapse>
                  
                  </td>
                  <td>
                  <Collapse isOpen={collapse}>
                  <div>&nbsp;</div>
                  <div><Link  style={{color : 'White'}} to="/home">Sell on Our Platform</Link></div>
                  <div><Link  style={{color : 'White'}}to="/home">Advertise your Products</Link></div>
                  <div><Link  style={{color : 'White'}}to="/home">Advertise on Our Platform</Link></div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  
              </Collapse>

                  </td>
                  <td>
                  <Collapse isOpen={collapse}>
                  <div>&nbsp;</div>
                  <div><Link style={{color : 'White'}} to="/home">Your Account</Link></div>
                  <div><Link style={{color : 'White'}} to="/home">Your Orders</Link></div>
                  <div><Link style={{color : 'White'}} to="/home">Delivery Rates & Polices</Link></div>
                  <div><Link style={{color : 'White'}} to="/home">Returns & Replacements</Link></div>
                  <div><Link style={{color : 'White'}} to="/home">Help</Link></div>
              </Collapse>

                  </td>
                  <td></td>
          </tr>

          </tbody>

          </table>
      
         <table style={{backgroundColor: "#283655", color : 'White', width : '100%',minHeight:"60px" }}>
             <tbody>
                 <tr>
                
                 <td style={{width : '30%', textAlign:"center"}}>
                      <Link  style={{color : 'White'}}to="/Privacy_Notice">Privacy Notice</Link>
                     <Link  style={{color : 'White'}}to="/Terms_and_Conditions">Terms & Conditions</Link>
                     © 2020 Utopia Tech PTY LTD
                     </td>
                    
                 </tr>
             </tbody>
         </table>

    </div>
    
  );
}

export default footerUpdated;