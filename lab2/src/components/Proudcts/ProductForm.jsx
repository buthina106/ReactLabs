import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './ProductForm.css';

export function ProductForm({ products, setProducts }) {
    let [formData, setFormData] = useState({
        name: '',
        price: ''
    });

    const [validated, setValidated] = useState(false);

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() && formData.name.length >= 2 && formData.price > 10) {
            setProducts([...products, formData]);
            setFormData({
                name: '',
                price: ''
            });
            setValidated(false);
        } else {
            setValidated(true);
        }
    };

    return (
        <Form noValidate validated={validated} onSubmit={submitHandler} className="ProductForm">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                    type="text"
                    value={formData.name}
                    onChange={changeHandler}
                    placeholder="Enter Product Name"
                    name="name"
                    required
                    minLength={2}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a valid name (at least 2 characters).
                </Form.Control.Feedback>
            </Form.Group>
                
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="number"
                    name="price"
                    onChange={changeHandler}
                    value={formData.price}
                    placeholder="Enter Product Price"
                    required
                    min={11} 
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a valid price (greater than 10).
                </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Product
            </Button>
        </Form>
    );
}
