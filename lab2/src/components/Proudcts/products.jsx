// Products.jsx
import React, { useState } from 'react';
import { ProductForm } from './ProductForm';
import { ProudctTable } from './ProudctTable';

export function Products() {
    const [products, setProducts] = useState([]);

    const removeProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };

    return (
        <>
            <ProductForm products={products} setProducts={setProducts} />
            <ProudctTable products={products} removeProduct={removeProduct} />
        </>
    );
}
