import React from 'react'

function ProductSummary(props) {
    return (
        <div className="col s12 m4 l3">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="container center-align">
                        <span className="card-title">{props.productName}</span>
                        <img className="responsive-img" src={props.product} alt=""/>
                        <p>$25</p>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductSummary
