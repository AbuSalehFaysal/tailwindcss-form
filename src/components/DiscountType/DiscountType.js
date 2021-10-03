import React from 'react';
import Toggle from '../Toggle/Toggle';

const DiscountType = () => {
    return (
        <div>
            <h1 className="font-bold text-base">Discount Type</h1>
            <select name="area_limit" id="" className="border border-red-400 rounded focus:outline-none focus:border-red-600">
                <option value="on">On</option>
                <option value="off">Off</option>
            </select>
            <h1 className="font-bold text-base">Collection Time</h1>
            <select name="area_limit" id="" className="border border-red-400 rounded focus:outline-none focus:border-red-600">
                <option value="15">15 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="60">60 Minutes</option>
            </select>

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