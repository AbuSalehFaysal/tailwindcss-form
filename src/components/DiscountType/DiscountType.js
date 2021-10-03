import React from 'react';
import Toggle from '../Toggle/Toggle';

const DiscountType = () => {
    return (
        <div>
            <h1 className="font-bold text-base">Discount Type</h1>
            <p>Off</p>
            <h1 className="font-bold text-base">Collection Time</h1>
            <p>20 Minutes</p>

            <div className="flex w-full">
                <label htmlFor="toggleD" className="flex items-center cursor-pointer">
                    <Toggle toggleId="toggleD"></Toggle>
                    <h1 className="ml-3 mt-2 font-bold text-base">
                        Rider Services
                    </h1>
                </label>
            </div>
        </div>
    );
};

export default DiscountType;