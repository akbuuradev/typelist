import React from 'react';
import BasketTable from "./BasketTable";
import {useAppSelector} from "../hooks/useAppSelector";

const Basket = (el: any) => {
     const {basket} = useAppSelector(state => state.BasketSlice)
    return (
        <div>
            <div className="relative container pt-10 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-blue-950 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            IMG
                        </th>
                        <th scope="col" className="px-6 py-3">
                            PRODUCT NAME
                        </th>
                        <th scope="col" className="px-6 py-3">
                            COUNT
                        </th>
                        <th scope="col" className="px-6 py-3">
                            PRICE
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ACTION
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        basket.map(el=> (
                            <BasketTable el={el} />
                        ))
                    }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Basket;