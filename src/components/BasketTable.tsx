import React from 'react';
import {useDispatch} from "react-redux";
import {addBasket, decBasket, delBasket} from "../store/reducer/BasketSlice";

const BasketTable = ({el}: any) => {
    const dispatch = useDispatch()
    return (
                <tr className="bg-blue-950 border-b text-white dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                        <img src={el.image} className="w-[150px] h-[200px]" alt=""/>
                    </th>
                    <td className="px-6 py-4">
                        {el.name}
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex">
                            <button onClick={() => dispatch(decBasket(el))}>-</button>
                            <p className="m-2">{el.count}</p>
                            <button onClick={() => dispatch(addBasket(el))}>+</button>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        {el.price * el.count}
                    </td>
                    <td className="px-6 py-4">
                        <button onClick={() => dispatch(delBasket(el))}
                                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Delete
                        </button>
                    </td>
                </tr>
    );
};

export default BasketTable;