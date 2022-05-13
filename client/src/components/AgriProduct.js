import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions';

function AgriProduct({ agriProduct }) {
    const [quantity, setquantity] = useState(1)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const dispatch = useDispatch();

    function addtocart() {
        dispatch(addToCart(agriProduct, quantity))
    }

    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
                <h1>{agriProduct.name}</h1>
                <img src={agriProduct.image} className="img-fluid" style={{ height: '200px', width: '200px' }} alt="" />
            </div>

            <div className='flex-container'>

                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>

            </div>

            <div className="flex-container" >
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Price : Rs {agriProduct.prices * quantity}/-</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className='btn' onClick={addtocart}>ADD TO CART</button>
                </div>

            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{agriProduct.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={agriProduct.image} alt="" className='img-fluid' style={{ height: '400px' }} />
                    <p>{agriProduct.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default AgriProduct;