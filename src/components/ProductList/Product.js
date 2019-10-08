import React, { Component } from 'react'

import './Product.css';

import { Link } from 'react-router-dom';
import { ProductConsumer } from './context';
import PropTypes from "prop-types";

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <div class="product_wrapper">
                <div class="product">
                    <ProductConsumer>
                        {value => (
                            <div
                                class="img-contatainer"
                                onClick={() =>
                                    value.handleDetail(id)
                                }
                            >
                                <Link to="/details">
                                    <img class="product-img" src={img} alt="product" />
                                </Link>
                                <button
                                    class="example_b cart_btn"
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                >
                                    {inCart ? (
                                        <p class="text-capitalize mb-0" disabled>
                                            {" "}
                                            in Cart
                                 </p>
                                    ) : (
                                            <i class="fas fa-shopping-cart" />
                                        )}
                                </button>
                            </div>
                        )}
                    </ProductConsumer>
                    {/* card footer*/}
                    <div class="prod_footer ">
                        <p class="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 class="">
                            <span class="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}


