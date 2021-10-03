import React from 'react';
import Toggle from '../Toggle/Toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const Heading = () => {
    return (
        <div className="flex justify-between">
            <h1 className="font-bold text-2xl mb-2 border-b-2 border-fuchsia-600 inline">Delivery</h1>

            <div>
                <label htmlFor="toggle" className="flex items-center cursor-pointer">
                    <Toggle toggleId="toggle"></Toggle>
                    <h1 className="ml-3 mt-2 font-bold text-base text-gray-500">
                        <FontAwesomeIcon icon={faPen} />
                    </h1>
                </label>
            </div>
        </div>
    );
};

export default Heading;