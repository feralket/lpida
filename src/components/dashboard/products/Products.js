import React from 'react'
import ProductSummary from './ProductSummary'

function Products() {
    return (
        <div className="container center-align">
            <h2>our styles</h2>
            <div className="divider"></div>
            <div className="row">
                <ProductSummary product="/images/design_white_front.png" productName="Prometheus"/>
                <ProductSummary product="/images/design_black_front.png" productName="Prometheus"/>
                <ProductSummary product="/images/simple_design_white_front.png" productName="Minimal"/>
                <ProductSummary product="/images/simple_design_black_front.png" productName="Minimal"/>
            </div>
        </div>
    )
}

export default Products
