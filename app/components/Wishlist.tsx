import React, { useState } from 'react';

// Functional component
const Wishlist = () => {
const [wishlist, setWishlist] = useState<string[]>([]);

const addToWishlist = (item: string) => {
	setWishlist([...wishlist, item]);
};

    return (
        <div>
            <h2 className='font-semibold'>Wishlist</h2>
            {wishlist.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            <button onClick={() => addToWishlist('New Item')}>Add New Item</button>
        </div>
    );
};

export default Wishlist;