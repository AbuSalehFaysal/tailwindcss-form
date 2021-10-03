import React from 'react';
import Toggle from '../Toggle/Toggle';

const Discount = () => {
    return (
        <div>
            <h1 className="font-bold text-base">Discount</h1>
            <p>10%</p>
            <h1 className="font-bold text-base">Delivery Time</h1>
            <p>45 Minutes</p>

            <div className="flex w-full">
                <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                    <Toggle toggleId="toggleB"></Toggle>
                    <h1 className="ml-3 mt-2 font-bold text-base">
                        Free Delivery
                    </h1>
                </label>
            </div>

            <div className="flex w-full">
                <label htmlFor="toggleC" className="flex items-center cursor-pointer">
                    <Toggle toggleId="toggleC"></Toggle>
                    <h1 className="ml-3 mt-2 font-bold text-base">
                        Dine-In
                    </h1>
                </label>
            </div>
        </div>
    );
};

export default Discount;