import React from 'react'
import ProductSummary from './ProductSummary'

function Products() {
    return (
        <div className="container center-align">
            <h2>release</h2>
            <div className="divider"></div>
            <div className="row">
                <ProductSummary product="/shirts/clapping hand design/design black f.png" productName="Gestures"/>
                <ProductSummary product="/shirts/clapping hand design/design white f.png" productName="Gestures"/>
                <ProductSummary product="/shirts/plain/plain black f.png" productName="Minimal"/>
                <ProductSummary product="/shirts/plain/plain white f.png" productName="Minimal"/>
            </div>
        </div>
    )
}

export default Products
