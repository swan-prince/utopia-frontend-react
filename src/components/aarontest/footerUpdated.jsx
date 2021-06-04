import React, { useState, useEffect } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { blue } from '@material-ui/core/colors';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
//import { Link } from 'react-router';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import HomePage from "../layouts/home/main";

const footerUpdated = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');

  const onEntered = () => setStatus('Opened');

  const onExiting = () => setStatus('Closing...');

  const onExited = () => setStatus('Closed');

  const toggle = () => setCollapse(!collapse);

  
  const testt = () => window.scrollTo(0, 0);

  
const [buttonText, setButtonText] = useState("EXPAND"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

//const changeText = (text) => setButtonText(text) > console.log(text);


  function changeText(text){
      if (text=="EXPAND"){
        setButtonText("COLLAPSE")
      }
      else {
        setButtonText("EXPAND")
      }
      setCollapse(!collapse)
  }
 
  return (
    <div>
          <table style={{backgroundColor: "#F7F7F7", color : 'White', width : '100%',minHeight:"60px",borderTopLeftRadius:"100px",borderTopRightRadius:"100px" }}>

             <tbody>
                 <tr>
                
                 <td style={{width : '30%', textAlign:"center"}}><div>
                 <Button  onClick={testt} style={{borderRadius: "20px", width:"200px",border:"none", backgroundColor:"#4D648D"}}   >Back To Top</Button>{''}
<Button onClick={toggle,() => changeText(buttonText)} style={{marginLeft:"50px", width:"200px", border:"none",  borderRadius: "20px", backgroundColor:"#4D648D", value:"testt" }} >{buttonText}</Button>{''}
</div>
                     </td>
                 </tr>
             </tbody>
         </table>


         <Collapse isOpen={collapse}>
<table style={{backgroundColor: "#4D648D", color : 'White', width : '100%',minHeight:"60px" }}>
             <tbody>
                

          <tr style={{fontWeight: "bold", fontSize: "17px",height:"60px"}} >
              <td style={{ width : '25%'}} ></td>
              <td style={{ width : '20%'}} >Get To Know Us</td>
              <td style={{ width : '20%'}}>Make Money with Us</td>
              <td style={{ width : '20%'}}>Let Us Help You</td>
              <td style={{ width : '15%'}}></td>
          </tr>
          <tr style={{alignContent:"top"}}>
              <td></td>
              <td>
              
              
              <div> <Link  style={{color : 'White'}}to="/About_Us">About Us</Link></div>
              <div><Link style={{color : 'White'}} to="/Careers">Careers</Link></div>
              <div><Link style={{color : 'White'}} to="/Corporate_Information">Corporate Information</Link></div>
              <div><Link style={{color : 'White'}} to="/Press_Releases">Press Releases</Link></div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
                  </td>
                  <td>
                  
                  <div><Link  style={{color : 'White'}} to="/Sell_on_Our_Platform">Sell on Our Platform</Link></div>
                  <div><Link  style={{color : 'White'}}to="/Advertise_your_Products">Advertise your Products</Link></div>
                  <div><Link  style={{color : 'White'}}to="/Advertise_on_Our_Platform">Advertise on Our Platform</Link></div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>

                  </td>
                  <td>
                  
                  <div><Link style={{color : 'White'}} to="/Your_Account">Your Account</Link></div>
                  <div><Link style={{color : 'White'}} to="/Your_Orders">Your Orders</Link></div>
                  <div><Link style={{color : 'White'}} to="/Delivery_Rates_&_Polices">Delivery Rates & Polices</Link></div>
                  <div><Link style={{color : 'White'}} to="/Returns_&_Replacements">Returns & Replacements</Link></div>
                  <div><Link style={{color : 'White'}} to="/Help">Help</Link></div>
                  <div>&nbsp;</div>
                  </td>
                  <td></td>
          </tr>

          </tbody>

          </table>
          </Collapse>
         <table style={{backgroundColor: "#283655", color : 'White', width : '100%',minHeight:"60px" }}>
             <tbody>
                 <tr>
                
                 <td style={{width : '30%', textAlign:"center"}}>
                      <Link  style={{color : 'White' }}to="/Privacy_Notice">Privacy Notice
</Link>
                     <Link  style={{marginLeft:"50px",marginRight:"50px",color : 'White'}}to="/Terms_and_Conditions">Terms & Conditions</Link>
                     © 2020 Utopia Tech PTY LTD
                     </td>
                    
                 </tr>
             </tbody>
         </table>

    </div>
    
  );
}

export default footerUpdated;