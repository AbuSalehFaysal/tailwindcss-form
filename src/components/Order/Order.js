import React from 'react';
import Toggle from '../Toggle/Toggle';

const Order = () => {
    return (
        <div>
            <h1 className="font-bold text-base">Min Order</h1>
            <p>10</p>
            <h1 className="font-bold text-base">Delivery Charges</h1>
            <p>2.00</p>
            <h1 className="font-bold text-base">Delivery Area Limit</h1>
            <p>1 Mile</p>

            <div className="flex w-full">
                <label htmlFor="toggleA" className="flex items-center cursor-pointer">
                    <Toggle toggleId="toggleA"></Toggle>
                    <h1 className="ml-3 mt-2 font-bold text-base">
                        Collection
                    </h1>
                </label>
            </div>
        </div>
    );
};

export default Order;