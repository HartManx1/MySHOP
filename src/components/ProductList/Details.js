import React, { Component } from 'react'
import { ProductConsumer } from './context'
import { Link } from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, info, price, title, inCart } =
                        value.detailProduct;
                    return (
                        <div class="container py-5">
                            {/* title */}
                            <div class="title-details">
                                <h1>{title}</h1>
                            </div>
                            {/*product info */}
                            <div class="img-details">
                                <img src={img} class="img-fluid" alt="product" />
                            </div>
                            {/*product info */}
                            <div class="name-product">
                                <h3>Model: {title}</h3>
                                <h4 class="name-company">
                                    made by: <span class="company">
                                        {company}
                                    </span>
                                </h4>
                                <h4 class="price">
                                    <strong>
                                        price: <span>$</span>
                                        {price}
                                    </strong>
                                </h4>
                                <p class="info-product">{info}</p>
                                {/*buttons*/}
                                <div>
                                    <Link to='/home'>
                                        <button>Back to products</button>
                                    </Link>
                                    <button
                                        cart
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                    >
                                        {inCart ? "inCart" : "Add to cart"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
