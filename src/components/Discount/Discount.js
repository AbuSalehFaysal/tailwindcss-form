import React from 'react';
import Toggle from '../Toggle/Toggle';

const Discount = () => {
    return (
        <div>
            <h1 className="font-bold text-base">Discount</h1>
            <input type="text" className="border border-red-400 rounded focus:outline-none focus:border-red-600" />
            <h1 className="font-bold text-base">Delivery Time</h1>
            <select name="area_limit" id="" className="border border-red-400 rounded focus:outline-none focus:border-red-600">
                <option value="15">15 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="60">60 Minutes</option>
            </select>

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