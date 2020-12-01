import { render } from '@testing-library/react';
import React from 'react'

const FootStyle = {    

}

const Footer = () => {
    return(
        
        <div className="page-footer black" style={FootStyle}>
            <div className="container">
                <div className="row">
                    <div className="col s8 m4">
                        <h9>Contact</h9>
                        <p>+65 9827 1830</p>
                    </div>
                    <div className="col s4 m2 offset-m6 right-align">
                        <h9>Social media</h9>
                        <br></br>
                        <img src="/icons/ig_icon.png" alt="" height="12" width="12"/>
                        <span>  lpida.Official</span>
                        
                    </div>
                </div>
            </div>
            <div className="footer-copyright black">
                <div className="container center-align">&copy; 2020 Lpida</div>
            </div>
        </div>
    )
}

export default Footer;