import React, { useState } from 'react';
import Toggle from '../Toggle/Toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


const Order = () => {
    const [openDrop, setOpenDrop] = useState(false);
    return (
        <div>
            <h1 className="font-bold text-base">Min Order</h1>
            <input type="text" className="border border-red-400 rounded focus:outline-none focus:border-red-600" />
            <h1 className="font-bold text-base">Delivery Charges</h1>
            <input type="text" className="border border-red-400 rounded focus:outline-none focus:border-red-600" />
            <h1 className="font-bold text-base">Delivery Area Limit</h1>
            <select name="area_limit" id="" className="border border-red-400 rounded focus:outline-none focus:border-red-600">
                <option value="1">1 Mile</option>
                <option value="2">2 Mile</option>
                <option value="3">3 Mile</option>
                <option value="4">4 Mile</option>
                <option value="5">5 Mile</option>
                <option value="6">6 Mile</option>
                <option value="7">7 Mile</option>
                <option value="8">8 Mile</option>
                <option value="9">9 Mile</option>
                <option value="10">10 Mile</option>
            </select>

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