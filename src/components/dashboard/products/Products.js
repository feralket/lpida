import React from 'react'
import ProductSummary from './ProductSummary'

function Products() {
    return (
        <div className="container center-align">
            <h2>our styles</h2>
            <div className="divider"></div>
            <div className="row">
                <ProductSummary />
                <ProductSummary />
                <ProductSummary />
                <ProductSummary />          
            </div>
        </div>
    )
}

export default Products
