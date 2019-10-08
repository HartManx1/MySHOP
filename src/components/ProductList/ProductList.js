import React, { Component } from "react";
import { Link } from "react-router-dom";

import './ProductList.css';
import Product from './Product';
import { ProductConsumer } from './context';
import Pagination from "react-js-pagination";
import Axios from "axios";

export default class ProductList extends Component {

 

    render() {

        //if (window.location.pathname === '/home') return null;

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
                {/*<div>
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
                {/*<nav className="">
                    <h6>All right reserved</h6>
                    <Link to="/home">HOME</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/regulations">REGULATIONS</Link>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><span className="fab fa-facebook-f"></span></a>
                </nav>*/}
            </div>

        );
    }
}
