import { findByLabelText } from '@testing-library/react'
import React from 'react'
const fixed_style = {
    marginTop: '24px'
}

function Picture() {
    return (
        <div className="container section">
            <div className="row">
                <div className="col s12 m4 l4">
                    <img className="responsive-img" src="/images/demo_picture_one.jpg" alt=""/>
                    <div className="section" style={fixed_style}>
                        <img className="responsive-img" src="/images/demo_picture_four.jpg" alt=""/>    

                    </div>

                </div>
                <div className="col s12 m8 l8">
                    <div className="row">
                        <div className="col s12">
                            <div className="center-align">
                                <img className="responsive-img" src="/images/demo_picture_two.jpg" alt=""/>
                                <div className="hide-on-small-only">
                                    <img className="responsive-img" src="/icons/low_qualitiy_logo_invert.jpg" alt=""/>
                                </div>
                                <img className="responsive-img" src="/images/demo_picture_three.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Picture
