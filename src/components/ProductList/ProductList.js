import React, { Component } from "react";
import { Link } from "react-router-dom";

import './ProductList.css';
import Product from './Product';
import { ProductConsumer } from './context';
import Pagination from "react-js-pagination";
import Axios from "axios";

export default class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: [],
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1
        };
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }

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
                <div>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                        itemClass='page-item'
                        linkClass='page-link'
                    />
                </div>
            </div>
        );
    }
}
