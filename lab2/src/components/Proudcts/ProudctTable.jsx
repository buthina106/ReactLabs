// ProudctTable.jsx
import React from 'react';
import Table from 'react-bootstrap/Table';
import './ProductTable.css';

export function ProudctTable({ products, removeProduct }) { 
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => removeProduct(index)} 
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
