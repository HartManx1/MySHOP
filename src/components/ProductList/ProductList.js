import React, { Component } from "react";
import { Link } from "react-router-dom";

import './ProductList.css';
import Product from './Product';
import { ProductConsumer } from './context';

export default class ProductList extends Component {
    
    render() {
        return (
            <div class="products">
                <h2>Our Products</h2>
                <ProductConsumer>
                    {value => {
                        return value.products.map(product => {
                            return <Product key={product.id} product={product} handleDetail={value.handleDetail} />;
                        })
                    }}
                </ProductConsumer>
            </div>
        );
    }
}
