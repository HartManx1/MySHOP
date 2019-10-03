import React, { Component } from 'react'

import './Product.css';

import { Link } from 'react-router-dom';
import { ProductConsumer } from './context';

export default class Product extends Component {
    render() {
        const { id, title, img, proce, inCart } = this.props.product;
        return (
            <div class="product_wrapper">
                <div class="card">
                    <div class="img_contatainer" onClick={console.log('you clicked me')}>
                        <Link to="/details">
                            <img src={img} alt="product" class="card-img-top" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
