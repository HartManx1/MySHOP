import React, { Component } from 'react'
import './Modal.css';
import styled from 'styled-components';
import { ProductConsumer } from './context'
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Modal extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value) => {
                        const { modalOpen, closeModal } = value;
                        const { img, title, price } = value.modalProduct;

                        if (!modalOpen) {
                            return null;
                        }
                        else {
                            return (
                                <ModalContainer>
                                    <div className="container">
                                        <div className="row">
                                            <div
                                                className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                                                id="modal"
                                            >
                                                <h5>Item added to the cart</h5>
                                                <img src={img} className="img-fluid" alt="product" />
                                                <h5>{title}</h5>
                                                <h5 className="text-muted">price: $ {price}
                                                </h5>
                                                <Link to='/home'>
                                                    <ButtonContainer onClick={()=>closeModal()}>
                                                        Continiue shopping
                                                    </ButtonContainer>
                                                </Link>
                                                <Link to='/cart'>
                                                    <ButtonContainer cart onClick={()=>closeModal()}>
                                                        Go to Cart
                                                    </ButtonContainer>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ModalContainer>
                            );
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}



const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;