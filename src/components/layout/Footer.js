import React from 'react'

const Footer = () => {
    return(
        <div className="page-footer black" >
            <div className="container">
                <div className="row">
                    <div className="col s8 m3">
                        <h9>Contact us</h9>
                        <div className="divider"></div>
                        <div className="section">
                            <span>+65 9827 1830</span>
                            <div><a href = "mailto: lpidaofficial2020@gmail.com">lpidaofficial2020@gmail.com</a></div>
                        </div>
                    </div>
                    <div className="col s4 m2 offset-m7 right-align">
                        <h9>Follow us</h9>
                        <div className="divider"></div>
                        <div className="section">
                            <img src="/icons/ig_icon.png" alt="" height="12" width="12"/>
                            <a href="https://www.instagram.com/lpidaofficial/"><span>  lpidaofficial</span></a>
                        </div>
                        
                    </div>
                </div>
            </div>
             <div className="container center-align">
                <div>&copy;2020 Lpida</div>         
            </div>
        </div>
    )
}

export default Footer;