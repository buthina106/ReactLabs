import React from 'react';
import { ProductItem } from './productItem';

export default function Products() {
    const products = [
        { image: 'https://img.freepik.com/free-photo/abstract-gold-chain-jewellery-presentation_23-2149599059.jpg?t=st=1715687898~exp=1715691498~hmac=4e36637860ba4f951414c44d70d6c3485714ea8ee53dec9bc353a63c36f06850&w=740', name: 'Gold Chain Necklace', description: 'Adorn yourself with this breathtaking diamond necklace, radiating elegance and sophistication.', price: '$10' },
        { image: 'https://img.freepik.com/free-photo/abstract-gold-chain-jewellery-presentation_23-2149599104.jpg?t=st=1715689616~exp=1715693216~hmac=a6b4ac23cf79df629d323182b17899204d55c2c152073353853d642e3bb51bb6&w=740', name: 'Elegant Pearl Necklace', description: 'Elevate your look with this timeless pearl necklace, a symbol of purity and grace.', price: '$20' },
        { image: 'https://img.freepik.com/free-photo/abstract-gold-chain-jewellery-presentation_23-2149599058.jpg?t=st=1715689653~exp=1715693253~hmac=d83fd4bb782c017e7148461d94085cc2528344cbed221adca4029562e514cd73&w=740', name: 'Luxurious Emerald Necklace', description: 'Make a statement with this exquisite emerald necklace, exuding luxury and allure.', price: '$20' },
        { image: 'https://img.freepik.com/free-photo/abstract-gold-chain-jewellery-presentation_23-2149599069.jpg?t=st=1715689703~exp=1715693303~hmac=b23c87db2491673511757377f296c75aebdd6a618eb62282f5cb0911b07fbd87&w=740', name: 'Captivating Opal Necklace', description: 'Add a touch of mystery with this captivating opal necklace, showcasing its iridescent beauty.', price: '$20' },
        { image: 'https://img.freepik.com/free-photo/abstract-gold-chain-jewellery-presentation_23-2149599071.jpg?t=st=1715689772~exp=1715693372~hmac=934449542c9103b077aad958b34f2197f035d48de40ec0e7cce5c1c6e06fc978&w=740', name: 'Exquisite Sapphire Necklace', description: 'Embrace elegance with this stylish onyx necklace, perfect for any occasion.', price: '$20' },
        { image: 'https://img.freepik.com/premium-photo/indian-jewellery-set_1396-347.jpg?w=740', name: 'Enchanting Ruby Necklace', description: 'Shine bright with this stunning sapphire necklace, a symbol of wisdom and royalty.', price: '$20' },
        { image: 'https://img.freepik.com/premium-photo/abstract-gold-chain-jewellery-presentation_23-2149599096.jpg?w=740', name: 'Stylish Onyx Necklace', description: 'Turn heads with this enchanting ruby necklace, radiating passion and romance.', price: '$20' },
        { image: 'https://img.freepik.com/free-photo/abstract-gold-chain-jewellery-presentation_23-2149599074.jpg?t=st=1715689988~exp=1715693588~hmac=ef66ecb4bc0959661469f364c4f6612a6c294128691f3c02f06cc05062c24447&w=740', name: 'Add a pop of color with this gorgeous amethyst necklace, a symbol of tranquility and spirituality.', description: 'Description of product 2', price: '$20' },

    
    ];

    return (
        <div className='bg-light p-5 text-center'>
            <div className="container">
                <h1 className='mb-5'>Our Products</h1>
                <div className="row">
                    {products.map((product, index) => (
                        <ProductItem
                            key={index}
                            image={product.image}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
