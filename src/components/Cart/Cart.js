import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation += country.population;
    // }

    const totalPopulation = cart.reduce ( (sum,country) => sum + country.population, 0)
    return (
        <div>
            <h1>this is cart : {cart.length} </h1>
            <h4> population : {totalPopulation}</h4>
        </div>
    );
};

export default Cart;